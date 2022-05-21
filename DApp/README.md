Building a Tanda Club DApp using Reach
========================================

In this tutorial we will build a simplified version of the [Tanda Club](https://en.wikipedia.org/wiki/Tanda_(informal_loan_club)) DApp using the [Reach](https://reach.sh/) framework. This will help us learn some of the basics or nessisary features of a Tanda Club DApp. Using Reach`s high level features  it will be easy to implement a Tanda Club DApp. Reach`s linear state allows us to track all users during each phase of the Dapp.

Table of Contents
=================
- [Building a Tanda Club DApp using Reach](#building-a-tanda-club-dapp-using-reach)
- [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Agenda for this tutorial](#agenda-for-this-tutorial)
  - [Discussion of the setup of the Reach program](#discussion-of-the-setup-of-the-reach-program)
- [Getting Started with Create React App](#getting-started-with-create-react-app)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
  - [Learn More](#learn-more)
    - [Code Splitting](#code-splitting)
    - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
    - [Making a Progressive Web App](#making-a-progressive-web-app)
    - [Advanced Configuration](#advanced-configuration)
    - [Deployment](#deployment)
    - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)

Requirements
------------

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

```javascript
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

Intimidatingly, the above code is a lot of code. Lets go through the steps one by one.

1. 


***DISCLAIMER: Please note that is only a tutorial and not meant to be used in the real-world. The code has not been tested or audited for vulnerabilities.***



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
