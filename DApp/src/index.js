import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import ContributorViews from './views/ContributorViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './contract/build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import pretty from './pretty';

let reach;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'SelectNetwork'};
  }


  async selectNetwork(REACH_CONNECTOR_MODE, providerEnv) {
    reach = reach || loadStdlib({
      REACH_CONNECTOR_MODE,
    });
    const {connector} = reach;
    this.setState({view: 'ConnectAccount', providerEnv, connector});
  }

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

  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
  selectContributor() { this.setState({view: 'Wrapper', ContentView: Contributor}); }
  render() { return renderView(this, AppViews); }
}

class Deployer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'SetOpts'}; // XXX create view
  }

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

  render() { return renderView(this, DeployerViews); }
}
class Contributor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach', dappEvents: '', phase: ''}; // XXX create view
    this.setUserUpdates = this.setUserUpdates.bind(this);
  }

  async _refreshInfo(acc, ctc) {
    const runView = async (vname, ...args) => {
      const res = await ctc.views[vname](...args);
      if (res[0] !== 'Some') { console.warn(vname, res); return; }
      return pretty(res);
    }
    const runViews = async (vs) => {
      const data = {};
      const promises = [];
      for (const [vname, ...args] of vs) {
        const p = (async () => {
          const res = await runView(vname, ...args);
          data[vname] = res;
        })();
        promises.push(p);
        await p;
      }
      await Promise.all(promises);
      return data;
    }
    const now = pretty(await reach.getNetworkTime());
    const data = {
      ...(await runViews([
        ['poolDetails'],
      ])),
      now,
    };

    this.setState({...data, view: 'ApplicationInfo'});
  }

  async attach(ctcInfoStr) {
    const ctcparse = (s) => {
      try { return JSON.parse(s); }
      catch (e) { return s;  }
    };
    const acc = this.props.acc;
    const ctc = acc.contract(backend, ctcparse(ctcInfoStr));
    this.setState({ctc, ctcInfoStr, view: 'Attaching'});
    await this._refreshInfo(acc, ctc);
  }

  async _api(which, name, ...args) {
    const {acc, ctc} = this.state;
    console.log(`calling api: ${which}.${name}`);
    const res = await ctc.apis[which][name](...args);
    console.log(pretty(res));
    await this._refreshInfo(acc, ctc);
  }

  async _eventU() {
    const {acc, ctc} = this.state;
    console.log(`calling event: `);
    const res = await ctc.events.Update.info.next();
    console.log(res.what[0]);
    this.setState({dappEvents: this.state.dappEvents + '\n' + res.what[0] +"----" + res.what[1]});
    await this._refreshInfo(acc, ctc)
  }
  async _event() {
    const {acc, ctc} = this.state;
    console.log(`calling event: `);
    const res = await ctc.events.PoolPhase.phase.next();
    console.log(res.what[0][0]);
    this.setState({phase: this.state.phase + '\n' + res.what[0][0]});
    await this._refreshInfo(acc, ctc)
  }

  async _view(which, name, ...args) {
    const {acc, ctc} = this.state;
    console.log(`calling view: ${which}.${name}`);
    const res = await ctc.views[which][name]();
    console.log(pretty(res));
    await this._refreshInfo(acc, ctc);
  }

  async register() {
    return this._api('Contributor', 'register');
  }

  async setUserUpdates({when, what}) {
    console.log(`response from setUserUpdate: ${when} ${pretty(what)}`);
  }

  async contribute() {
    return this._api('Any', 'contribute');
  }

  async request() {
    return this._api('Any', 'requestPayment');
  }

  async checkP() {
    return this._event();
  }

 async checkU() {
    return this._eventU();
  }
  render() {
    return renderView(this, ContributorViews);
  }
}

renderDOM(<App />);
