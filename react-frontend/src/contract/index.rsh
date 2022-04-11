'reach 0.1';
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

const GetPoolDetails =  Struct([
  ["name", Bytes(100)],
  ["contributionAmt", UInt],
  ["duration", UInt],
  ["frequency", UInt],
  ["minUsers", UInt],
  ["maxUsers", UInt],
  ["numUsers", UInt],
]);


const ContributeUpdate = Struct([
  ["newUserContributed", UInt],
  ["newEveryoneContributed", UInt],
]);

const PaymentUpdate = Struct([
  ["newUserPaid", UInt],
  ["newEveryonePaid", UInt],
])

export const main = Reach.App(() => {
  const PC = Participant('PoolCreator', {
    // Pool Creator's interact interface
    getPoolDetails: GetPoolDetails,
    readyForContribution: Fun([], Null),
  });
  const C = API('Contributors', {
    // Contributors interact interface
    contribute: Fun([UInt], Null),
    withdraw: Fun([UInt], Null),

  });

  const A = API('Admin', {
    // Bla interact interface
    stop: Fun([], Null),
  })
  const V = View({
    // View interface
    getPoolDetails: GetPoolDetails,
    totalContributed: UInt,
    end: UInt,
    contributed: Fun([Address], UInt),
    paymentAvailableAt: Fun([Address, UInt /* round */], UInt),
  })
  init();

  PC.only(() => {
    const getDetails = declassify(interact.getDetails);
    const { duration, frequency } = getDetails;
    // const end = duration * frequency;
  })

  PC.publish(getDetails, duration, frequency);
  V.getDetails.set(getDetails);
  const { contributionAmt } = getDetails;
  commit();

  PC.pay(contributionAmt);

  const start = lastConsensusTime() + 2;
  const end = start + duration;
  V.end.set(end);

  const Contributions =  new Map(UInt);
  const Payments = new Map(UInt);

  const lookupContributions = (addr) => fromSome(Contributions[addr], 0);
  const lookupPayments = (addr) => fromSome(Payments[addr], 0);
  V.contributed.set(lookupContributions);

  PC.interact.readyForContribution();

  const [totalContributionAmt, ended, payout, numUsers] = 
  parallelReduce([0, false, 0, 0])
     .define(() => {
         const lct = lastConsensusTime();

     })
     .invariant( balance() == totalContributionAmt * numUsers
         )
     .while(totalContributionAmt != 0 || lct <= end)
     .api(C.contribute, 
         () => {

         },
         () => contributionAmt,
         (k) => {
             
         }
         )

  
  exit();
});
