'reach 0.1';
'use strict';
/* eslint-disable */

// ====================> An abitrary sized tanda club DApp <===============================

/*
    * Problem analysis
    - Who is involved in this application
    1. 1 pool creator and N contributors

    - What info do hey know at start?
    Creator has the pool and know the contribution amount for each cycle duration
    Contributor knows the contribution amount and the dycle duration.

    - What info will they know in the application?
    1. Contributors will learn the pool contribution amount.
    2. The
*/

const PoolDetails = Object({
    poolName: Bytes(16), // Name of the pool (e.g. "Pool 1").
    poolDescription: Bytes(200), // Description of the pool (e.g. "Pool 1").
    contributionAmt: UInt, // amount to be paid
    penaltyAmt: UInt, // Amount to be deducted from the user, if he fails to contribute.
    duration: UInt, // weeks, months, years.
    maxUsers: UInt, // max amount of contribution
});

export const main = Reach.App(() => {
    const PC = Participant('PoolCreator', {
        getPoolDetails: PoolDetails,
        readyForContribution: Fun([], Null),
    });
    const C = API('Contributor', {
        // ...common,
        register: Fun([], Null),
    });
    const A = API('Any', {
        requestPayment: Fun([], Null),
        contribute: Fun([], Null),
        // poolTimeout: Fun([], Null),
    });

    const Phase = Data({ Registration: Null, Contribution: Null, Payment: Null, Finished: Null});
    const PP = Events('PoolPhase', { phase: [Phase] });

    init();

    const checkPoolStructure = (cps) => {
        const penalty = cps.contributionAmt/2;
        check(cps.penaltyAmt == penalty, "Penalty amount is not half of the contribution amount.");
        check(cps.contributionAmt > 0, "Contribution amount cannot be zero.");
    };

    PC.only(() => {
        const poolDetails = declassify(interact.getPoolDetails);
        checkPoolStructure(poolDetails);
    });

    PC.publish(poolDetails);
    checkPoolStructure(poolDetails);
    const {
        contributionAmt,
        penaltyAmt,
        duration,
        maxUsers,
    } = poolDetails;

    const startingContribution = contributionAmt + penaltyAmt;
    commit();
    PC.pay(startingContribution);
    PC.interact.readyForContribution();
    commit();
    PC.publish()

    //-------- How can i achieve this? --------
    // This is a DApp where any number of persons can contribute to a pool. And request
    // for payment at the end of a period. but the contract should be running till
    // all contributors has been paid.
    // while every user is yet to get paid
    // continue the loop till all has been paid
    PP.phase(Phase.Registration())
    const RegisteredUsers = new Set();
    const [numOfUsers] = 
        parallelReduce([ 0 ])
          .invariant(numOfUsers >= 0)
          .while(numOfUsers <= maxUsers)
          .api(C.register,
            (() => {check(!RegisteredUsers.member(this))}),
            () => penaltyAmt,
            ((callBack) => {
                RegisteredUsers.insert(this)
                callBack(null)
                return [numOfUsers + 1]
            }))
    // awaitRegistionApi(C.register);

    // const RegisteredUsers = new Set();
    // commit();
    // const [[], k] = call(C.register)
    //         .assume(() => check(!RegisteredUsers.member(this)))
    //         .pay(() => penaltyAmt)
    //     RegisteredUsers.insert(this);
    //     k(null);
    
    // const start = lastConsensusTime() + 2;
    // const deadline = start + duration;

    const usersPaidSet = new Set();
    const contributorsSet = new Set();

    var [usersPaid, numUsers] = [0, 0];
    invariant(usersPaid <= numUsers);
    while(true) {
        commit();
        // -------------> Contribute Section <------------------
        // -- A user calls the contribute api
        // -- increment the number of users who has contributed.
        // -- add the user to the set of users who has contributed.
        PC.publish()
        PP.phase(Phase.Contribution())
        // const [ timeRemaining, keepGoing ] = makeDeadline(deadline);
        const [timedOut, IusersPaid, InumUsers] = 
        parallelReduce([false, usersPaid, numUsers ])
          .invariant(usersPaid <= numUsers)
          .while(!timedOut)
          .api(
              A.contribute,
              (() => contributionAmt),
              ((returnFunc) => {
                contributorsSet.insert(this);
                returnFunc(null)
                // InumUsers = InumUsers +  1;
                return [false, IusersPaid, InumUsers]
              })
          )
          .timeout(duration, () => {
            //   commit();
            PC.publish()
            // commit();
            //   const [[], k] =
            //   call(A.poolTimeout)
            //     .pay(() => 0)
            //     k(null);
              return [true, IusersPaid, InumUsers]
          });
        commit();
        wait(absoluteTime(lastConsensusTime() + duration));
        PC.publish()
       

        // payment time is reached
 
        commit()
        PC.publish()
        PP.phase(Phase.Payment());
        commit();
        // -----------> Payment api <-----------
        // -- a user calls the api for payment
        // -- a check to make sure the user hasnt been paid before.
        // -- a check to make sure the user is a contributor
        // -- send balance to the user address.
        // -- add the user to the set of users paid.
        // -- increment the number of users paid.
        const [[], returnPayFunc] =
        call(A.requestPayment)
            .pay(() => 0)
            .assume(() => {
                check(!usersPaidSet.member(this));
            })
            transfer(balance()).to(this)
            usersPaidSet.insert(this);
            // usersPaid + 1;
            returnPayFunc(null);
        

        [usersPaid, numUsers] = [usersPaid + 1, numUsers + 1];
        continue;
    }
    commit();
    PC.publish()
    PP.phase(Phase.Finished());
    commit();
    exit();
})