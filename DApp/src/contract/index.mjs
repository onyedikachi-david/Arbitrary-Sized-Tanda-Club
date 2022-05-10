import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(200);

const contributors = await stdlib.newTestAccounts(4, startingBalance);

const poolCreatorAcc = await stdlib.newTestAccounts(startingBalance)

const PoolDetails = {
    poolName: "Umunna Collectio",
    poolDescription: "An Arbitrary sized tanda club. Where anyone can join, make a payment as specified an request for a pay after each cycle. This description is going to be 200 bytes long so I'm going to keep typing till",
    contributionAmt: stdlib.parseCurrency(10),
    penaltyAmt: stdlib.parseCurrency(5),
    // maxPersons: 10,
    // minPersons: 2,
    duration: 30,
    // paymentFrequency: "weekly",
}

const ctcPC = poolCreatorAcc.contract(backend);

try {
    await ctcPC.p.PoolCreator({
        getPoolDetails: PoolDetails,
        readyForContribution: () => {
            console.log("The contract is ready For Contribution");
            throw 42;
        },
    })
} catch (e) {
    console.log(e)
    if (e !== 42) {
        throw e;
    }
}

const ctcWho = (whoi) =>
    contributors[whoi].contract(backend, ctcPC.getInfo());

const contribute = async (whoi) => {
    const who = contributors[whoi];
    ctc = await ctcWho(who);
    console.log(`${stdlib.formatAddress(who)} contributed ${stdlib.formatCurrency(PoolDetails.contributionAmt)}`);
    await who.apis.Contributor.contribute();
}

const requestPayment = async (whoi) => {
    const who = contributors[whoi];
    ctc = await ctcWho(who);
    console.log(`${stdlib.formatAddress(who)} requested payment`);
    await who.apis.Any.requestPayment();
}

await contribute(0);
await contribute(1);
await contribute(2);
await contribute(3);
stdlib.wait(PoolDetails.duration);

await requestPayment(0);
await requestPayment(1);
await requestPayment(2);
await requestPayment(3);

