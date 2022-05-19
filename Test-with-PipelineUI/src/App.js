import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs';
import { Button, Box, Modal, Card, Heading, PipelineShell, Loader, Text, Flex } from 'pipeline-ui';

var myLog = [];
var myLoading = false;

const reach = loadStdlib('ALGO')

//change Algo server IP to match your local reach devnet IP, or leave with "http://localhost" to test on local machine only.

const myEnv = reach.providerEnvByName('LocalHost');
console.log(myEnv)
Object.assign(myEnv, {
  ALGO_SERVER:"https://4180-headlinedes-reachmorrag-pjs8rl3usdn.ws-eu45.gitpod.io/",
  ALGO_PORT: "",
  ALGO_INDEXER_SERVER: "https://8980-headlinedes-reachmorrag-pjs8rl3usdn.ws-eu45.gitpod.io/",
  // https://8980-headlinedes-reachmorrag-pjs8rl3usdn.ws-eu45.gitpod.io/
  ALGO_INDEXER_PORT: "",
  REACH_ISOLATED_NETWORK: "yes",
  REACH_DEBUG: "false",
})

reach.setProviderByEnv(myEnv);


async function test () {
    myLog.push("Starting");
    myLog.push("Creating accounts")

    const bal = reach.parseCurrency(20000);
    const nContributors = 5;
    const accPoolCreator = await reach.newTestAccount(bal);
    const accContributors = await reach.newTestAccounts(nContributors, bal);

    const accbal = async (acc) => {
        try {
            return await reach.balanceOf(acc);
        } catch (e) {
            myLog.push(e);
            return 0;
        }
    }
    const balance = async () => {
        const t = [];
        let tot = 0;
        for (const acc of [accPoolCreator, ...accContributors]) {
            const maddr = (reach.formatAddress(acc)).slice(0, 12);
            const bal = (await accbal(acc)).toNumber();
            tot = tot + bal;
            myLog.push(`Address: ${maddr} --- bal: ${bal}`);
            // t.push({maddr, bal});
        }
        myLog.push(`total: ${tot}`);
        // myLog.push(t);
    }
    await balance();

    myLog.push(`Launching the pool`)

    const ctcPC = accPoolCreator.contract(backend);
    const ctcContributors = accContributors.map(acc => acc.contract(backend, ctcPC.getInfo()));
    // const ctc
    let resolveReadyForContributors = null;
    const pReadyForContributors = new Promise(r => resolveReadyForContributors = r)
    
    myLog.push(`Deploying .......`);
    const pPoolCreator = ctcPC.p.PoolCreator({
        getPoolDetails: {
            poolName: "Umunna Collectio",
            poolDescription: "An Arbitrary sized tanda club. Where anyone can join, make a payment as specified an request for a pay after each cycle. This description is going to be 200 bytes long so I'm going to keep typing till",
            contributionAmt: reach.parseCurrency(10),
            penaltyAmt: reach.parseCurrency(5),
            duration: 3,
            maxUsers: 4,
        },
        readyForContribution: () => resolveReadyForContributors(),
    });

    const ctcInfo = await ctcPC.getInfo();
    myLog.push(`Contract deployed ${ctcInfo}`);

    await pReadyForContributors;
    myLog.push("Pool ready for contribution");


    const tryFn = async (lab, f) => {
        const maxTries = 3;
        let tries = 1;
        const msg = () => `${lab} after trying ${tries} time(s)`
        let err = null;
        while (tries < maxTries) {
          try {
            const r = await f();
            myLog.push(msg());
            return r;
          } catch (e) {
            err = e;
            tries++;
          }
        }
        myLog.push(`Failed: ${msg()}`);
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
        myLog.push(pretty(ev.when))
        phase = ev.what[0][0]; // get the name of the phase from the event structure
        switch (phase) {

            case "Registration":
              myLog.push("Registration phase started");
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
                myLog.push("Contribution phase started");
                const tryCApi = async (fname, verbed, i) => {
                    await tryFn(`Someone #${i} ${verbed}`, ctcContributors[i].apis.Any[fname]);
                    // await tryFn(`Pool  Creator #${accPoolCreator} Contributed`, ctcPC.apis.Any[fname]);
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
                // await ctcPC.apis.Any.poolTimeout();
                myLog.push("Contribution timeout occurred");
                await balance();
                break;
            
            // Payment started
            case "Payment":
                myLog.push("Payment Phase started")
            // ------- Payment API ------------------
                const random = Math.floor(Math.random() * nContributors);
                const tryPApi = async (fname, verbed, i) => {
                    await tryFn(`Someone #${i} ${verbed}`, ctcContributors[i].apis.Any[fname]);
                    // await tryFn(`Pool Creator #${accPoolCreator} Requested`, ctcPC.apis.Any[fname]);
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
    } while (phase != 'Finished');
    await pPoolCreator;
    // myLog.push("Pool created");



};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cLog: [],
      loading: false
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ cLog: myLog, loading: myLoading }), 100);
  }

  render() {
    return (<div align="center">
      <PipelineShell width="600px">
        <Heading>Reach + PIPELINE-UI</Heading>
        <Button className="morra-btn" onClick={() => { myLoading = true; test() }}><div className="spinz">{this.state.loading ? <Loader bg="unset" color="white" size="22px" /> : null}</div>Deploy Tanda!</Button><br></br>
        <div className="feed-1"><label>Log feed:</label><div className="feed" bg="unset">{this.state.cLog.map(row => { return (<Text>{row}</Text>) })}</div></div>
      </PipelineShell>  </div>)
  }
}

export default App;
