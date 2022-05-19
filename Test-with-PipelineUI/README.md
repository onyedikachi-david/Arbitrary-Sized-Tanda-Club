# Experimental sandbox for Pipeline + Reach + Algorand integration

## Introduction

This is a frontend application for running a "Morra game" created by Russ Fustino. The original Reach program is included in src/ for reference. The compiled reach program and smart contract is located in build/. The frontend logic is now located in src/App.js.

# Gitpod Instructions

[![Edit with Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/headline-design/Reach-Morra-Game)


## Reach - All commands

```bash
$ mkdir -p ~/reach/tut && cd ~/reach/tut
$ curl https://docs.reach.sh/reach -o reach ; chmod +x reach
$ ./reach version
$ REACH_CONNECTOR_MODE=ALGO ./reach devnet
```
## Running the React App

```bash
cd pipeline-morra-reach
npm install
npm run start
```

## Final steps

- Before activating Morra, you must make the ports 8980 and 4180 public in Gitpod.
- You must edit the app.js environment variables to point to the exposed ports (full urls)
``` bash
  ALGO_SERVER:"Gitpod-public-port-1"
  ALGO_INDEXER_SERVER: "Gitpod-public-port-2"
```
----- End Gitpod instructions

## Starting Reach Algorand devnet:

After installing reach, run the following line in reach/tut in a Linux shell:

```bash
$ REACH_CONNECTOR_MODE=ALGO-devnet ./reach devnet
```

After starting the devnet, find the ip address that corresponds to your localhost (this will allow testing on different devices on the same local network).

Open src/App.js and replace the "localhost" on the following two lines with your local ip address:

```jsx
myEnv.ALGO_INDEXER_SERVER = "http://localhost";
myEnv.ALGO_SERVER = "http://localhost";
```

## Running the React App

```bash
cd pipeline-morra-reach
npm install
npm run start
```

