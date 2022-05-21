/* eslint-disable default-case */
import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const reach = loadStdlib(process.env);


(async () => {
    console.log("Starting");
    console.log("Creating accounts")

    const bal = reach.parseCurrency(20000);
    const nContributors = 5;
    const accPoolCreator = await reach.newTestAccount(bal);
    const accContributors = await reach.newTestAccounts(nContributors, bal);

    const accbal = async (acc) => {
        try {
            return await reach.balanceOf(acc);
        } catch (e) {
            console.warn(e);
            return 0;
        }
    }
    const balance = async () => {
        const t = [];
        let tot = 0;
        for (const acc of [accPoolCreator, ...accContributors]) {
            const addr = (reach.formatAddress(acc)).slice(0, 12);
            const bal = (await accbal(acc)).toNumber();
            tot = tot + bal;
            t.push({addr, bal});
        }
        t.push({addr: "Total", bal: tot});
        console.table(t);
    }
    await balance();

    console.log(`Launching the pool`)

    const ctcPC = accPoolCreator.contract(backend);
    const ctcContributors = accContributors.map(acc => acc.contract(backend, ctcPC.getInfo()));
    // const ctc
    let resolveReadyForContributors = null;
    const pReadyForContributors = new Promise(r => resolveReadyForContributors = r)
    
    console.log(`Deploying .......`);
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
    console.log(`Contract deployed ${ctcInfo}`);

    await pReadyForContributors;
    console.log("Pool ready for contribution");


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
    } while (phase !== 'Finished');
    await pPoolCreator;
})();