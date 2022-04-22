'reach 0.1';
'use strict';
/* eslint-disable */

// Procedure or steps in an arbitrary tanda sized club? 
// Steps:
// 1. Someone creates a contribution pool
//-----(a) Specifies the total number of persons, that will be involved, amount to be paid and duration of circle.
//-----(b) Lauches the smart contract.
// 2. An event notice (view) will be sent to the frontend, 
// 3. On the frontend their will be a list of pool/clubs available.
// 4. When one accepts to go for one, the specified amount is deducted from owners wallet, after accepting the pay amount.
// 5. 


// General conditions:
// The counter wont begin untill all the total number specified is completed.


const PoolDetails = Struct([
    ["poolName", Bytes(200)],
    ["contributionAmt", UInt],
    ["maxPersons", UInt],
    ["minPersons", UInt],
    ["duration", UInt],

]);

const ContributeUpdate = Struct([
    ["newUserContributed", UInt],
    ["newEveryoneContributed", UInt],
  ]);

const PaymentUpdate = Struct([
    ["newUserPaid", UInt],
    ["newEveryonePaid", UInt],
])

export const main =  Reach.App(() => {
    const PC = Participant('PoolCreator', {
        getPoolDetails: PoolDetails,
        readyForContribution: Fun([], Null),
    });

    const C = API('Contributor', {
        contribute: Fun([UInt], ContributeUpdate),
    });

    const A = API('Admin', {
        stop: Fun([], Null),
    });

    const V = View({
        // View interface
        getPoolDetails: PoolDetails,
        totalContributed: UInt,
        end: UInt,
        contributed: Fun([Address], UInt),
        paymentAvailableAt: Fun([Address, UInt /* round */], UInt),
      });

    init();

    PC.only(() => {
        const poolDetails = declassify(interact.getPoolDetails);
        const { duration, contributionAmt, minPersons, maxPersons } = poolDetails;
    });
    PC.publish(poolDetails, duration, contributionAmt, minPersons, maxPersons);
    commit();
    PC.pay(contributionAmt);

    const start = lastConsensusTime() + 2;
    const end = start + duration;
    V.end.set(end);

    PC.interact.readyForContribution();

    const Contributors = new Set();

    const lookUpContributor = (address) =>  fromSome(Contributors[address], 0);

    // ---> Check that the person is calling the right pool contract
    // ---> Check that the person has'nt contributed before within the contribution duration

    const [totalContributionAmt, ended, payout, numUsers] = 
     parallelReduce([0, false, 0, 0])
        .define(() => {
            const lct = lastConsensusTime();

        })
        .invariant( balance() == totalContributionAmt * numUsers
            // && payout == true 
            && Contributors.Map.size() == numUsers
            )
        .while(totalContributionAmt != 0 || lct <= end)
        // API syntax is as follows:
        // ---> The name of the API,
        // ---> A fuction that specifies wether or not theyre allowed to interact with the API,
        // ---> A function that goes from the arguments of the API to how much theyre supposed to contribute
        .api(C.contribute, 
            () => {
                // assumptions that must be true to call contribute
            },
            () => contributionAmt,
            (amt, k) => {
                newEveryOneContributed = totalContributionAmt + amt;
                newUserContributed = lookUpContributor(this) + amt;
                Contributors[this] = newUserContributed;
                k(contributionAmt);

               // return whatever the work is
               return [ totalContributionAmt, ended, payout, numUsers + 1 ];
                
            }
            )
        .timeout( absoluteTime(end), () => {
            const [ [], k ] = call(A.stop); // that someone is calling stop
            k(true) // and that if so, then we should stop
            return [totalContributionAmt, true, payout, numUsers];
        } )

    commit();
    exit();
});