Building a Tanda Club DApp using Reach
========================================

In this tutorial we will build a simplified version of the [Tanda Club](https://en.wikipedia.org/wiki/Tanda_(informal_loan_club)) DApp using the [Reach](https://reach.sh/) framework. This will help us learn some of the basics or nessisary features of a Tanda Club DApp. Using Reach`s high level features  it will be easy to implement a Tanda Club DApp. Reach`s linear state allows us to track all users during each phase of the Dapp.

Table of Contents
=================
- [Building a Tanda Club DApp using Reach](#building-a-tanda-club-dapp-using-reach)
- [Table of Contents](#table-of-contents)
  - [Agenda for this tutorial](#agenda-for-this-tutorial)
  - [Discussion of the setup of the Reach program](#discussion-of-the-setup-of-the-reach-program)
  - [Initial scaffolding, APIs and Participant interact interfaces.](#initial-scaffolding-apis-and-participant-interact-interfaces)
  - [Front-end setup in Javascript.](#front-end-setup-in-javascript)
  - [Implementing the particpant interface and APIs.](#implementing-the-particpant-interface-and-apis)
- [React frontend setup.](#react-frontend-setup)
  - [Prerequisites](#prerequisites)
  - [SelectNetwork Views and Components](#selectnetwork-views-and-components)
  - [Deployer Views and Conponents](#deployer-views-and-conponents)
  - [Contributor Views and Conponents](#contributor-views-and-conponents)
  - [Attach Function](#attach-function)
  - [API function](#api-function)
  - [Event Function](#event-function)

Requirements:
1. Install [Reach](https://reach.sh/)
2. Install `Docker` and `Docker Compose`.
3. Install `Make`.
4. Finally, you will `Node.js` to run the React frontend.

Agenda for this tutorial
-----------------------
The agenda for this tutorial is to:
1. Discuss the setup of the Reach program.
2. Initial scaffolding, APIs and Participant interact interfaces.
3. Front-end setup in Javascript.
4. Implementing the core transaction loop.
5. Implementing and testing the logic for all users.
6. React frontend setup.
7. React frontend implementation.
8. Yeah, we're done!
9. Let's go!

Discussion of the setup of the Reach program
--------------------------------------------
Here is a skeleton of the Reach program. Before that theres a few things to note whille writing your Reach program.
1. Who is involved in the application.
2. What info will they know as they start
3. What info will they know as they progress in the application.
4. What will lead to the termination of the program.

So lets answer these questions for our DApp.
1. Who is involved in the application.
   - `1` pool creator and N contributors.
2. What info will they know as they start.
   - Creator has the pool and know the contribution amount for each cycle duration.
   - Contributors knows the contribution amount and the dycle duration.
3. What info will they know as they progress in the application.
   - Contributors will learn the pool contribution amount.
4. What will lead to the termination of the program.
   - The pool will terminate itself when all Participants has recieved their contribution amount.

Now back to our DApp setup.

Initial scaffolding, APIs and Participant interact interfaces.
--------------------------------------------------------------

```javascript
'reach 0.1';
/* section1: datatype definitions */
const poolDetails = Object({ /* Datatypes and constructor */ });

// Other declarations

/* section2: Participant interfaces */
export const main = Reach.App(() => {
    const PC = Participant('PoolCreator', {
        /* fill in interface */
        })

/* section3: APIs */
    const C = API('Contributor', {
        /* fill in interface */
    });

/* section4: Other APIs interface */
    const A = API('Any', {
        /* fill in interface */
    });

/* section5: Views */
    const V = View(, {
        /* fill in view */
    });

/* section7: Events */
    const PP =  Events({
        /* fill in phase */
    });

    /* deploy app */
    init();

/* section8: first consensus publication and payment */
PC.publish();

/* section9: set a view */
V.poolDetails.set();

/* section10: set an event (Registration Phase)*/
PP.Phase(Phase.registration());

/* section11: A linear state that keeps track of registered users */
const RegisteredUsers = new Set();

/* section12: registration While loop with parallelReduce*/

const [] = 
    parallelReduce([])
        .invariant()
        .while(/* while loop condition */)
        .api(/* api call */)

/* section13: Contribution and request payment loop*/
// First the two linear states to keep track of paid users and contributors.
const usersPaidSet = new Set();
const contributorsSet = new Set();

// Then the loop.
var [] = []
invaraint();
while(/* while loop condition */){
    commit();

    /* perform transaction logic */
    // -------------> Contribute Section <------------------
    // -- A user calls the contribute api
    // -- increment the number of users who has contributed.
    // -- add the user to the set of users who has contributed.
    PC.publish()
    PP.phase(Phase.Contribution())
    const [] = 
        parallelReduce([])
            .invariant()
            .while(/* while loop condition */)
            .api(/* api call */)
            .timeout(/* timeout */)

    continue();
}
commit();
}
```

Intimidatingly, the above code is a lot of code. Lets go through the steps one by one briefly.

1. In `section one` we define the datatypes that will be used.
2. In `section two` we define the participant interfaces.
3. In `section three` we define the APIs. We would have two APIs, one for the contributors to call and register themselves and one for anyone to call and contribute to the pool. Is being done this way so as to enable the pool creator to contribute during the contribution phase.
4. In `section four` we define the other APIs.
5. In `section five` we define the views. These views will be used to display the pool details to the contributors.
6. In `section six` we define the events. These events will be used to keep track of the phase of the pool, and when one contributes to the pool.
7. In `section seven` we deploy the app, using the `init` function.
8. In `section eight` The pool creator performs the first publication.
9. In `section nine` we set the view.
10. In `section ten` we emit an event that brocasts that the registration phase just began.
11. In `section eleven` A linear state that will keep track of regisgered users is declared.
12. In `section twelve` The registration while loop.
13. In `section thirteen` The contribution and request payment loop.

Front-end setup in Javascript.
------------------------------
Next is our Javascript frontend code:
```javascript
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

(async () => {
    console.log("Starting");
    console.log("Creating accounts")

    const bal = reach.parseCurrency(20000);
    const nContributors = 5;
    const accPoolCreator = await reach.newTestAccount(bal);
    const accContributors = await reach.newTestAccounts(nContributors, bal);


    const ctcPC = accPoolCreator.contract(backend);
    const ctcContributors = accContributors.map(acc => acc.contract(backend, ctcPC.getInfo()));

    let resolveReadyForContributors = null;
    const pReadyForContributors = new Promise(r => resolveReadyForContributors = r)
    
    console.log(`Deploying .......`);
    const pPoolCreator = ctcPC.p.PoolCreator({
     // implement Alice's interact object here
    });

    do {
        // Registration, Contributions and request payment api calls here
    } while (phase !== 'Finished')

})();
```
What is happening here? 
1. Imports the reach standard library loader.
2. imports your backend, which ./reach compile will produce.
3. Then loads the standard library.
4. Next, an asynchronous arrow function that runs till the completion of the app.
5. Next is a starting balance being instatiated for the test accounts.
6. Pool creator account is being created.
7. `N` number of contributors is then created with the same starting balance.
8. The pool creator deploys the contract.
9. While the contributors attaches to it.
10. The ***pReadyForContributors***  `promise` will be explained later.
11. A backend for poolcreator is initialized
12. using a `do while` loop to go through all phases.

Implementing the particpant interface and APIs.
--------------------------------------

In the previous section we defined the participant interfaces and APIs. Now we are going to put these together to implement the actual functionality.
First we will implement the pool creator participant interface.
    
```javascript
const PoolDetails = Object({
    poolName: Bytes(16), // Name of the pool (e.g. "Pool 1").
    poolDescription: Bytes(200), // Description of the pool (e.g. "Pool 1").
    contributionAmt: UInt, // amount to be paid
    penaltyAmt: UInt, // Amount to be deducted from the user, if he fails to contribute.
    duration: UInt, // weeks, months, years. (in UNIX time)
    maxUsers: UInt, // max amount of contribution
});
export const main = Reach.App(() => {
    const PC = Participant('PoolCreator', {
        poolDetails: PoolDetails,
        readyForContributors: Fun([], Null),
        });

        const C = API('Contributor', {
            contribute: Fun([], Null),
        });

        const A = API('Any', {
        requestPayment: Fun([], Null),
        contribute: Fun([], Null),
    });

    init();

    PC.only(() => {
        const poolDetails = declassify(interact.getPoolDetails);
    });

    PC.publish(poolDetails);

    const startingContribution = contributionAmt + penaltyAmt;
    commit();
    PC.pay(startingContribution);
    PC.interact.readyForContribution();
    commit();
    PC.publish()

})

```
Lets stop here for now and go through the code one by one.

1. Using an `Object` we define the pool details.
2. Then we define the main export of the program, this is were the compiler will look at when compiling your code.
3. The participant are then defined. Here have just one participant (the pool creator).
4. Then we define the APIs, here we have two APIs, one for the contributors to call and register themselves and one for anyone to call and contribute to the pool.
5. The `init` function marks the deployment of the program, which allows the program to start.
6. `PC.only` defines what only the pool creator can do. Here we are just recieving the pool details from the frontend, `declassify`ing excplicitly makes the information recieves from the frontend public that is secret by default.
7. The pool details gotten from the frontend is then published to the consensus network using the `publish` function.
8. The pool creator then pays the starting contribution amount, which is the sum of the contribution amount and the penalty amount.
9. And then the pool creator calls the `readyForContributors` function that notifies that the pool is ready for contribution.

Go back to the frontend and implement the contributor participant interface and APIs.

```javascript
........................................
let resolveReadyForContributors = null;
const pReadyForContributors = new Promise(r => resolveReadyForContributors = r)
const pPoolCreator = ctcPC.p.PoolCreator({
        getPoolDetails: {
            poolName: "Umunna Collectio",
            poolDescription: "An Arbitrary sized tanda club. Where anyone can join, make a payment as specified an request for a pay after each cycle. This description is going to be 200 bytes long so I'm going to keep typing till",
            contributionAmt: reach.parseCurrency(10),
            penaltyAmt: reach.parseCurrency(5),
            duration: 3,
            maxUsers: 4,
        },
        readyForContributors: () => {
            resolveReadyForContributors();
        },
```

Now, to explain what is happening here.

1. The `pReadyForContributors` `promise` is created.
2. The `resolveReadyForContributors` is set to a function that will resolve the promise.
3. The `pPoolCreator` is initialized with the `getPoolDetails` object.
4. The `readyForContributors` function is called, that will resolve the `pReadyForContributors` promise.
5. Remember, the `ctcPC` is the pool creator contract deployed with `accPoolCreator.contract(backend)`, and the `pPoolCreator` is the pool creator's `participant` object.

I hope this is clear enough.
Let's go back to the `index.rsh` file and continue from were we stopped.

Next is to write the registration phase. A while loop.


```javascript
........................................ 
previous code
........................................
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
```
1. The `previous code` is the code that was written before the registration phase.
2. We define the `RegisteredUsers` set. This is used to store the users that have registered.
3. The `parallelReduce` function is used to create a parallel reduce function, and we keep track of the number of users with `numOfUsers`.
4. The invariant is used to check variables that will be mutated during the loop, as `reach-lang` does not support mutation. Those values must be true before and after the loop.
5. Then the `api` function is used to call the `register` API. The `check` function is used to check if the user has already registered. The caller then pays the penalty amount. Then a `callBack` function is called, that returns whatever to the frontend. In our case it returns `null`. 
6. The user is then added to the `RegisteredUsers` set.
7. We then increment the number of users by one.


So, now we have the registration phase settled.

Next stop is to write the contribution phase. Open your `index.rsh` file and follow along.

```javascript
........................................
previous code
........................................
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

    const period = absoluteTime(lastConsensusTime() + duration)

    
    const [timedOut, IusersPaid, InumUsers] = 
    parallelReduce([true, usersPaid, maxUsers ])
        .invariant(usersPaid <= numUsers)
        .while(timedOut)
        .api(
            A.contribute,
            (() => contributionAmt),
            ((returnFunc) => {
            contributorsSet.insert(this);
            U.info(this, contributionAmt);
            returnFunc(null)
            // InumUsers = InumUsers +  1;
            return [true, IusersPaid, InumUsers]
            })
        )
        .timeout(period, () => {

        PC.publish()
            return [false, IusersPaid, InumUsers]
        });
    commit();
    // -------------> End Contribute Section <----------
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
```

Let's breifly explain what is happening here.

1. The `previous code` is the code that was written before the contribution phase.
2. Two linear states is first created using set (`usersPaidSet` and `contributorsSet`) to keep track of users paid and contributed respectively.
3. We've explained the invariant and the while loop before.
4. This loop will run till all users that contributed to the pool has requested and recieved payments.
5. Then a parallelReduce for the contribution phase API call.
6. At the end of the specified duration the loop exits, and then the payment phase.
7. The payment phase is just an API call. It first verifies that the user isn't in the `usersPaidSet`. A transfer is made to the user. The user is then added to the `usersPaidSet` set.

Lets implement these two phases in our javascript frontend.

```javascript
........................................
previous code
........................................
 const tryFn = async (lab, f) => {
        const maxTries = 3;
        let tries = 1;
        const msg = () => `${lab} after trying ${tries} time(s)`
        let err = null;
        while (tries < maxTries) {
          try {
            const r = await f();
            console.log(msg());
            return r;
          } catch (e) {
            err = e;
            tries++;
          }
        }
        console.error(`Failed: ${msg()}`);
        throw err;
    }
    
  

function pretty(r) {
    if (!r) {
        return r;
    } else if (typeof r === 'string') {
        return r;
    } else if (r._isBigNumber) {
        return r.toString();
    } else if (r.networkAccount) {
        if (r.networkAccount.addr) {
        return r.networkAccount.addr.slice(0, 8);
        } else if (r.networkAccount.address) {
        return r.networkAccount.address.slice(0, 8);
        } else {
        return '<some acc>';
        }
    } else if (Array.isArray(r) && r[0] == 'Some') {
        return pretty(r[1]);
    } else if (Array.isArray(r)) {
        return r.map((x) => pretty(x));
    } else if (Object.keys(r).length > 0) {
        const o = {};
        for (const k in r) { o[k] = pretty(r[k]); }
        return o;
    } else if (r.toString) {
        return r.toString();
    } else {
        return r
    }
    }

let phase;
do {
    const ev = await ctcPC.events.PoolPhase.phase.next();
    console.log(pretty(ev))
    phase = ev.what[0][0]; // get the name of the phase from the event structure
    switch (phase) {

        case "Registration":
            console.log("Registration phase started");
            // ---------------- Registration API ------------

            const tryApi = async (fname, verbed, i) =>
                await tryFn(`Someone #${i} ${verbed}`, ctcContributors[i].apis.Contributor[fname]);
            const tryRegister = async (i) => {
                await tryApi('register', 'Registered', i)
            };

            const reg = [];
            for (let i = 0; i < nContributors; i++) {
                reg.push(tryRegister(i));
                await reg[i];
            }
            await Promise.all(reg)
            await balance()
            break;

        // Contribution started
        case "Contribution":
            
            // ------ Contribute API ----------------
            console.log("Contribution phase started");
            const tryCApi = async (fname, verbed, i) => {
                await tryFn(`Someone #${i} ${verbed}`, ctcContributors[i].apis.Any[fname]);
              
            }
            const trycontribute = async (i) => {
                await tryCApi('contribute', 'Contributed', i)
            };

            const contrib = [];
            for (let i = 0; i < nContributors; i++) {
                contrib.push(trycontribute(i));
                await contrib[i];
            }
            await Promise.all(contrib)
            await tryFn(`Pool  Creator #${accPoolCreator} Contributed`, ctcPC.apis.Any.contribute);
            await reach.wait(3);

            console.warn("Contribution timeout occurred");
            await balance();
            break;
        
        // Payment started
        case "Payment":
            console.info("Payment Phase started")
        // ------- Payment API ------------------
            const random = Math.floor(Math.random() * nContributors);
            const tryPApi = async (fname, verbed, i) => {
                await tryFn(`Someone #${i} ${verbed}`, ctcContributors[i].apis.Any[fname]);

            };

            const tryRequest = async (i) => {
                await tryPApi('requestPayment', 'Requested', i)
            };
            await tryRequest(random);
            await balance()
            break;
        
        // The contract is over
        case "Finished":


            break;
    }
} while (phase !== 'Finished');
await pPoolCreator;
```


Now thats a lot of code. Lets break it down.

1. The `previous code` is the code that was written before the registration phase.
2. We first define a utility function `tryFn` that will try to run a function `f` and catch any errors.
3. Then a pretty function `pretty` that will pretty print the result of the raw output from the consensus network.
4. The variable `phase` is used to keep track of the current phase.
5. A do while loop is used to keep the loop running until the contract is over.
6. The variable `ev` is used to get the current phase from the consensus network.
7. Having gotten the specific phase from the blockchain, we make use of switch statement to decide on which code block to run.

Congratulations you just completed DApp with a Javascript frontend test!! Yoh!!!

React frontend setup.
=====================

For the react frontend, we'll make use of class based component. 

Prerequisites
------------

It would be great if you have fair knowledge of React, and class based components.

The folder structure is below:

- [**src**](src)
    - [**contract**](src/contract)
        - [**build**](src/contract/build)
    - [**img**](src/img)
    - [**views**](src/views)
- [Getting Started with Create React App](react.md)

Our focus will be on the views folder.
But before then we need to install the dependencies.

```bash
clone the repo. Then run:
cd DApp
npm install
```

In the `src` directory, in the `index.js` file, We'll have three components:
1. The `App` component.
2. The `Deployer` component, and,
3. The `Contributor` component.

---
- The `App` Component renders the AppViews, we'll talk about the `AppViews` later.
- When this component mounts, The `SelectNetwork` View is rendered. This allows for network section Buttons.

SelectNetwork Views and Components
-------------

```Javascript
exports.SelectNetwork = class extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <>
        {/* <p className='MainContent'> */}
        <div className="big-title">
                <h1>Future is here,</h1>
                <h1>Start Exploring now.</h1>
              </div>
          <br />
            <h3>
          Select a network
          </h3>
          <br />

          {/* </div> */}
          <div className="cta">
    
        <button className="btn" onClick={() => parent.selectNetwork('ALGO', 'TestNet')}
        >Algorand TestNet</button>
        <br />
        <br />
        <button className="btn" onClick={() => parent.selectNetwork('ALGO', 'MainNet')}
        >Algorand MainNet</button>
        <br />
        </div>
      </>
    )
  }
}
```

- After  network selection `ConnectAccount` View is rendered.

```javascript
exports.ConnectAccount = class extends React.Component {
  render() {
    const { parent, connector } = this.props;
    const ctcInfoStr = false;
    return (
      <>
        <h4 >
          Please click the button to connect your account.
          {connector === 'ALGO' ? <><br />You may need to disable your popup blocker</> : ''}
          {connector === 'ETH' ? <><br />Select the desired network in MetaMask and refresh the page if necessary.</> : ''}
        </h4>
        {/* <br /> */}
        <br />
        { connector === 'ALGO' ? <>
          <button className="btn" onClick={
            () => parent.openWalletPopUp('MyAlgoConnect')
          }>MyAlgoConnect</button>
      
        </> : <>
          <button className='MyAlgoWalletButton' onClick={
            () => parent.openWalletPopUp('MetaMask')
          }>MetaMask</button>
        </> }
        <br />
        <br />
      </>
    )
  }
}
```

This `async` function `openWalletPopUp` connects the users wallet and sets thier balance and address in a state: `acc` and `bal`, as seen below:

```javascript
 async openWalletPopUp(which) {
    const {providerEnv} = this.state;
    if (which === 'MyAlgoConnect') {
      reach.setWalletFallback(reach.walletFallback({
        MyAlgoConnect,
        providerEnv,
      }));

    } else if (which === 'MetaMask') {
      // Anything to do here? Should just work.
    }

    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    console.log(bal);
    this.setState({acc, bal, view: 'RoleSelect'}); // XXX create view
  }
```
- On successfull wallet connection, The `RoleSelect` View will be rendered

```javascript
exports.RoleSelect = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <p className='MainContent'>
          Please select a role:
        </p>
        <br />
        <span className='LargeButtonContainer'>
          <button className="btn" 
            onClick={() => parent.selectDeployer()}
          >
            <h1>Creator</h1>

            <p>
              {/* Incentivise others to stake by creating and funding a staking pool with rewards. */}
              Create a pool and share your pool "ID" with your friends to join!
            </p>
          </button>
        <br />
        <br />
        <br />


          <button className="btn" 
            onClick={() => parent.selectContributor()}
          >
            
            <h1>Contributor</h1>

            <p>
            Join a tanda pool and get the pot at the end of a round
            </p>
          </button>
        </span>
      </div>
    );
  }
}
```

All will be rendered in the `Wrapper` View.

Deployer Views and Conponents
-----------------------------

We'll forcus on the `index.js` file. In the Deployer Component, we have an async function that deploys the contract with the specified `poolDetails`:

```javascript
 async deploy(getPoolDetails) {
    const thiz = this;
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    const deployerP = ctc.p.PoolCreator({
      getPoolDetails,
      readyForContribution: (async () => {
        const ctcInfoStr = await ctc.getInfo();
        thiz.setState({view: 'Deployed', ctcInfoStr});
      }),
    });
    this.setState({view: 'Deploying', ctc});

    await deployerP;
    this.setState({view: 'Done'});
  }
```
Contributor Views and Conponents
-----------------------------

Our focus will be on the `Api` Calls and `Events`...
Attach Function
--------------
```javascript
async attach(ctcInfoStr) {
const ctcparse = (s) => {
    try { return JSON.parse(s); }
    catch (e) { return s;  }
};
const acc = this.props.acc;
const ctc = acc.contract(backend, ctcparse(ctcInfoStr));
this.setState({ctc, ctcInfoStr, view: 'Attaching'});
await this._refreshInfo(acc, ctc);
```
This will attach to the contract and call.

API function
-----------
```javascript
async _api(which, name, ...args) {
    const {acc, ctc} = this.state;
    console.log(`calling api: ${which}.${name}`);
    const res = await ctc.apis[which][name](...args);
    console.log(pretty(res));
    await this._refreshInfo(acc, ctc);
  }
```
Event Function
--------------

```javascript
 async _event() {
    const {acc, ctc} = this.state;
    console.log(`calling event: `);
    const res = await ctc.events.PoolPhase.phase.next();
    console.log(res.what[0][0]);
    this.setState({phase: this.state.phase + '\n' + res.what[0][0]});
    await this._refreshInfo(acc, ctc)
  }
````


***DISCLAIMER: Please note that is only a tutorial and not meant to be used in the real-world. The code has not been tested or audited for vulnerabilities.***

