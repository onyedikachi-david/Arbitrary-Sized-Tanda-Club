'reach 0.1';
// 'use strict';
/* eslint-disable */

const PoolDetails = Struct([
    ["poolName", Bytes(200)], // Name of the pool (e.g. "Pool 1").
    ["poolDescription", Bytes(200)], // Description of the pool (e.g. "Pool 1").
    ["contributionAmt", UInt], // amount to be paid
    ["penaltyAmt", UInt], // Amount to be deducted from the user, if he fails to contribute.
    ["maxPersons", UInt], // Maximum number of persons that can be involved in the pool.
    ["minPersons", UInt], // Minimum number of persons that can be involved in the pool.
    ["duration", UInt], // weeks, months, years.
    ["paymentFrequency", UInt], // daily, weekly, monthly.
]);

export const main =  Reach.App(() => {
    setOptions({
        // Users deleting their own local state would only hurt themselves.
        // They would lose access to rewards and stake that should be rightfully theirs.
        untrustworthyMaps: false,
        // Would like to turn this on but it would take more time to satisfy the theorem prover.
        verifyArithmetic: false,
      });
      
    const P = Participant('Pool', {
        getPoolDetails: PoolDetails,
        readyForContribution: Fun([], Null),
    });
    const PC = Participant('PoolCreator', {});
    const C = API('Contributor', {
        contribute: Fun([], Null),

    });
    const PA = API('PoolAPI', {
        startPool: Fun([], Null),
        contributionTimeOut: Fun([], Null),
        makePayment: Fun([UInt], Null), // 
    });
    const Phase = Data({ Contribution: Null, FailContrib: Null, Finished: Null});
    const PP = Events('PoolPhase', { phase: [Phase] });
    init();

    const checkPoolStructure = (cps) => {
        const expectedPoolFund = cps.contributionAmt * cps.maxPersons;
        const penalty = cps.contributionAmt/2;
        check(cps.penaltyAmt == penalty, "Penalty amount is not half of the contribution amount.");
        check(cps.paymentFrequency <= cps.duration, "Payment frequency cannot be greater than the duration.");
        check(cps.minPersons > 0, "Minimum number of persons cannot be zero.");
        check(cps.minPersons <= cps.maxPersons, "Minimum number of persons cannot be greater than the maximum number of persons.");
        check(cps.maxPersons > 1, "Maximum number of persons cannot be less than two.");
        check(cps.contributionAmt > 0, "Contribution amount cannot be zero.");
    };

    P.only(() => {
        const poolDetails = declassify(interact.getPoolDetails);
        checkPoolStructure(poolDetails);
    });
    P.publish(poolDetails);
    checkPoolStructure(poolDetails);

    const { poolName, 
            poolDescription, 
            contributionAmt,
            penaltyAmt,
            maxPersons, 
            minPersons,
            duration,
            paymentFrequency,
    } = poolDetails;

    commit();

    // Pool creator will start the pool by paying 
    // the contribution amount plus the penalty amount.
    const startingContribution = contributionAmt + penaltyAmt;
    PC.pay(startingContribution);
    commit();

    P.interact.readyForContribution()

    const awaitPoolAPI = (apifunc) => {
        // commit()
        const [[], k] = call(apifunc).assume(() => check(this == P, "Must be called by the pool participant."));
        check(this == P, "Must be called by the pool participant.");
        k(null);
    };
    awaitPoolAPI(PA.startPool);
    PP.phase(Phase.Contribution());

    const poolTimeOut = lastConsensusTime() + duration;
    const paymentInterval = poolTimeOut / paymentFrequency;
    const contributors = new Set();

    const [timedOut, numContributors] = 
    parallelReduce([false, 0])
        .invariant(balance() == startingContribution + contributionAmt * numContributors
              && contributors.Map.size() == numContributors
              && numContributors <= maxPersons
          )
          .while(!timedOut
            && numContributors < maxPersons) 
        //   .case(PART_EXPR,
        //     (() => ({
        //             when: PUBLISH_WHEN_EXPR,
        //             msg: PUBLISH_MSG_EXPR
        //     })),
        //     ((msg) => PAY_EXPR),
        //     ((msg) => {
        //       CONSENSUS_EXPR
        //     }))
            .api(
                C.contribute,
                () => check(!contributors.member(this), "Already contributed."),
                () => startingContribution,
                (k) => {
                    check(!contributors.member(this), "Already contributed.");
                    contributors.insert(this);
                    k(null);
                    return [false, numContributors + 1];
                }
            )
           .timeout(poolTimeOut, () => {
             awaitPoolAPI(PA.contributionTimeOut);
             // A for loop to transfer to all participants.
             // Update Phase to FailContrib.
             return [true, numContributors];
           });

    // if (paymentInterval > 0) {

        // A for loop to transfer to all participants.
        // Update Phase to Finished.
        
        // const paymentTimeOut = lastConsensusTime() + paymentInterval;
        // const [timedOut, numPayments] =
        //     parallelReduce([ false, 0 ])
        //       .invariant(
        //           balance = startingContribution * numContributors
        //           && contributors.Map.size == numContributors
        //           && contributors.Map.size <= maxPersons
        //       )
        //       .while(!timedOut
        //         && numPayments < maxPersons)
        //       .api(
        //           C.contribute,
        //           () => check(!contributors.member(this), "Already contributed."),
        //           () => startingContribution,
        //           (k) => {
        //               check(!contributors.member(this), "Already contributed.");
        //               contributors.insert(this);
        //               k(null);
        //               return [false, numPayments + 1];
        //           }
        //       )
        //       .timeout(paymentTimeOut, () => {
        //         awaitPoolAPI(PA.makePayment);
        //         return [true, numPayments];
        //       });
    // }
    commit();
    exit();
});