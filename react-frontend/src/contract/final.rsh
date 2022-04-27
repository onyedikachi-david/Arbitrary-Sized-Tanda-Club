'reach 0.1';
'use strict';
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

export const main = Reach.App(() => {
    setOptions({
        untrustworthyMaps: false,
    });

    const P = Participant('Pool', {
        getPoolDetails: PoolDetails,
        readyForContribution: Fun([], Null),
    });

    const PC = Participant('PoolCreator', {});

    const C = API('Contributor', {
        contribut: Fun([], Null),
    });

    const PA = API('PoolAPI', {
        startPool: Fun([], Null),
        contributionTimeOut: Fun([], Null),
        makePayment: Fun([UInt], Null), // 
    }); 

    const Phase = Data({ Contribution: Null, Payment: Null, Finished: Null});
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

    const contributors = new Set();

    const [ended, numOfUsers, paidUsers, nextRound] = 
        parallelReduce([false, 0, 0, true])
            .invariant(balance() == startingContribution + numOfUsers * contributionAmt
                && contributors.Map.size() == numOfUsers
                && numOfUsers == maxPersons
            )
            .while(!ended
                && nextRound
                && paidUsers <= numOfUsers
                )


})