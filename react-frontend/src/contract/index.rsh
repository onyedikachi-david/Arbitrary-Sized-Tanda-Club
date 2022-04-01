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
export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
  });
  init();
  // The first one to publish deploys the contract
  A.publish();
  commit();
  // The second one to publish always attaches
  B.publish();
  commit();
  // write your program here
  exit();
});
