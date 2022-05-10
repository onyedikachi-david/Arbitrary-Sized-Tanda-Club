// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    Contribution: ctc0,
    Finished: ctc0,
    Payment: ctc0
    });
  return {
    PoolPhase: {
      phase: [ctc1]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc2
    });
  const map0_ctc = ctc3;
  
  const map1_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      4: [ctc0],
      6: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      8: [ctc0, ctc1, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _Any_contribute10(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_contribute10 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_contribute10 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Any_contribute0_97: ctc4,
    Contributor_register0_97: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v309, v314, v316, v337, v355, v358, v365] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v384 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:109:15:application call to [unknown function] (defined at: ./index.rsh:109:15:function exp)', 'at ./index.rsh:99:23:application call to "runAny_contribute0_97" (defined at: ./index.rsh:109:15:function exp)', 'at ./index.rsh:99:23:application call to [unknown function] (defined at: ./index.rsh:99:23:function exp)'],
    msg: 'in',
    who: 'Any_contribute'
    });
  const v388 = ['Any_contribute0_97', v384];
  
  const txn1 = await (ctc.sendrecv({
    args: [v309, v314, v316, v337, v355, v358, v365, v388],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v314, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v393], secs: v395, time: v394, didSend: v176, from: v392 } = txn1;
      
      switch (v393[0]) {
        case 'Any_contribute0_97': {
          const v396 = v393[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_contribute"
            });
          const v403 = stdlib.add(v365, v314);
          sim_r.txns.push({
            amt: v314,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 1, v392, null);
          const v406 = null;
          const v407 = await txn1.getOutput('Any_contribute', 'v406', ctc0, v406);
          
          const v794 = v394;
          const v796 = v403;
          const v797 = stdlib.gt(v355, v358);
          if (v797) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Contributor_register0_97': {
          const v421 = v393[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v393], secs: v395, time: v394, didSend: v176, from: v392 } = txn1;
  switch (v393[0]) {
    case 'Any_contribute0_97': {
      const v396 = v393[1];
      undefined /* setApiDetails */;
      const v403 = stdlib.add(v365, v314);
      ;
      await stdlib.mapSet(map1, v392, null);
      const v406 = null;
      const v407 = await txn1.getOutput('Any_contribute', 'v406', ctc0, v406);
      if (v176) {
        stdlib.protect(ctc0, await interact.out(v396, v407), {
          at: './index.rsh:110:15:application',
          fs: ['at ./index.rsh:110:15:application call to [unknown function] (defined at: ./index.rsh:110:15:function exp)', 'at ./index.rsh:114:27:application call to "returnFunc" (defined at: ./index.rsh:112:15:function exp)', 'at ./index.rsh:112:15:application call to [unknown function] (defined at: ./index.rsh:112:15:function exp)'],
          msg: 'out',
          who: 'Any_contribute'
          });
        }
      else {
        }
      
      const v794 = v394;
      const v796 = v403;
      const v797 = stdlib.gt(v355, v358);
      if (v797) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Contributor_register0_97': {
      const v421 = v393[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Any_requestPayment9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_requestPayment9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_requestPayment9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v309, v314, v316, v337, v365] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc2, ctc3, ctc3, ctc3, ctc3]);
  const v457 = ctc.selfAddress();
  const v459 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:135:9:application',
    fs: ['at ./index.rsh:135:9:application call to [unknown function] (defined at: ./index.rsh:135:9:function exp)'],
    msg: 'in',
    who: 'Any_requestPayment'
    });
  const v461 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v457), null);
  let v462;
  switch (v461[0]) {
    case 'None': {
      const v463 = v461[1];
      v462 = false;
      
      break;
      }
    case 'Some': {
      const v464 = v461[1];
      v462 = true;
      
      break;
      }
    }
  const v465 = v462 ? false : true;
  stdlib.assert(v465, {
    at: './index.rsh:139:22:application',
    fs: ['at ./index.rsh:135:9:application call to [unknown function] (defined at: ./index.rsh:138:24:function exp)', 'at ./index.rsh:135:9:application call to [unknown function] (defined at: ./index.rsh:135:9:function exp)'],
    msg: null,
    who: 'Any_requestPayment'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v309, v314, v316, v337, v365, v459],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:137:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v467], secs: v469, time: v468, didSend: v245, from: v466 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_requestPayment"
        });
      ;
      const v474 = stdlib.sub(v365, v365);
      sim_r.txns.push({
        amt: v365,
        kind: 'from',
        to: v466,
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v466, null);
      const v476 = null;
      const v477 = await txn1.getOutput('Any_requestPayment', 'v476', ctc0, v476);
      
      const v830 = v468;
      const v831 = v474;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v467], secs: v469, time: v468, didSend: v245, from: v466 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v474 = stdlib.sub(v365, v365);
  ;
  await stdlib.mapSet(map0, v466, null);
  const v476 = null;
  const v477 = await txn1.getOutput('Any_requestPayment', 'v476', ctc0, v476);
  stdlib.protect(ctc0, await interact.out(v467, v477), {
    at: './index.rsh:135:9:application',
    fs: ['at ./index.rsh:135:9:application call to [unknown function] (defined at: ./index.rsh:135:9:function exp)', 'at ./index.rsh:144:26:application call to "returnPayFunc" (defined at: ./index.rsh:135:9:function exp)'],
    msg: 'out',
    who: 'Any_requestPayment'
    });
  
  const v830 = v468;
  const v831 = v474;
  return;
  
  
  
  };
export async function _Contributor_register10(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributor_register10 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributor_register10 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Any_contribute0_97: ctc4,
    Contributor_register0_97: ctc4
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v309, v314, v316, v337, v355, v358, v365] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v376 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:102:15:application call to [unknown function] (defined at: ./index.rsh:102:15:function exp)', 'at ./index.rsh:99:23:application call to "runContributor_register0_97" (defined at: ./index.rsh:102:15:function exp)', 'at ./index.rsh:99:23:application call to [unknown function] (defined at: ./index.rsh:99:23:function exp)'],
    msg: 'in',
    who: 'Contributor_register'
    });
  const v380 = ['Contributor_register0_97', v376];
  
  const txn1 = await (ctc.sendrecv({
    args: [v309, v314, v316, v337, v355, v358, v365, v380],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v316, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v393], secs: v395, time: v394, didSend: v176, from: v392 } = txn1;
      
      switch (v393[0]) {
        case 'Any_contribute0_97': {
          const v396 = v393[1];
          
          break;
          }
        case 'Contributor_register0_97': {
          const v421 = v393[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributor_register"
            });
          const v428 = stdlib.add(v365, v316);
          sim_r.txns.push({
            amt: v316,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v439 = null;
          const v440 = await txn1.getOutput('Contributor_register', 'v439', ctc0, v439);
          
          const v856 = v394;
          const v858 = v428;
          const v859 = stdlib.gt(v355, v358);
          if (v859) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v393], secs: v395, time: v394, didSend: v176, from: v392 } = txn1;
  switch (v393[0]) {
    case 'Any_contribute0_97': {
      const v396 = v393[1];
      return;
      break;
      }
    case 'Contributor_register0_97': {
      const v421 = v393[1];
      undefined /* setApiDetails */;
      const v428 = stdlib.add(v365, v316);
      ;
      const v439 = null;
      const v440 = await txn1.getOutput('Contributor_register', 'v439', ctc0, v439);
      if (v176) {
        stdlib.protect(ctc0, await interact.out(v421, v440), {
          at: './index.rsh:102:16:application',
          fs: ['at ./index.rsh:102:16:application call to [unknown function] (defined at: ./index.rsh:102:16:function exp)', 'at ./index.rsh:105:25:application call to "callBack" (defined at: ./index.rsh:104:13:function exp)', 'at ./index.rsh:104:13:application call to [unknown function] (defined at: ./index.rsh:104:13:function exp)'],
          msg: 'out',
          who: 'Contributor_register'
          });
        }
      else {
        }
      
      const v856 = v394;
      const v858 = v428;
      const v859 = stdlib.gt(v355, v358);
      if (v859) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function PoolCreator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PoolCreator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PoolCreator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc5 = stdlib.T_Object({
    contributionAmt: ctc2,
    duration: ctc2,
    penaltyAmt: ctc2,
    poolDescription: ctc3,
    poolName: ctc4
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Any_contribute0_97: ctc6,
    Contributor_register0_97: ctc6
    });
  const ctc8 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc1;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v294 = stdlib.protect(ctc5, interact.getPoolDetails, 'for PoolCreator\'s interact field getPoolDetails');
  const v295 = v294.contributionAmt;
  const v297 = v294.penaltyAmt;
  
  const v304 = stdlib.div(v295, stdlib.checkedBigNumberify('./index.rsh:49:45:decimal', stdlib.UInt_max, '2'));
  const v306 = stdlib.eq(v297, v304);
  stdlib.assert(v306, {
    at: './index.rsh:50:14:application',
    fs: ['at ./index.rsh:56:27:application call to "checkPoolStructure" (defined at: ./index.rsh:48:38:function exp)', 'at ./index.rsh:54:12:application call to [unknown function] (defined at: ./index.rsh:54:16:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v308 = stdlib.gt(v295, stdlib.checkedBigNumberify('./index.rsh:51:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v308, {
    at: './index.rsh:51:14:application',
    fs: ['at ./index.rsh:56:27:application call to "checkPoolStructure" (defined at: ./index.rsh:48:38:function exp)', 'at ./index.rsh:54:12:application call to [unknown function] (defined at: ./index.rsh:54:16:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v294],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:59:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v310], secs: v312, time: v311, didSend: v39, from: v309 } = txn1;
      
      ;
      const v314 = v310.contributionAmt;
      const v316 = v310.penaltyAmt;
      const v322 = v310.duration;
      const v323 = stdlib.add(v314, v316);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v310], secs: v312, time: v311, didSend: v39, from: v309 } = txn1;
  ;
  const v314 = v310.contributionAmt;
  const v315 = stdlib.div(v314, stdlib.checkedBigNumberify('./index.rsh:49:45:decimal', stdlib.UInt_max, '2'));
  const v316 = v310.penaltyAmt;
  const v317 = stdlib.eq(v316, v315);
  stdlib.assert(v317, {
    at: './index.rsh:50:14:application',
    fs: ['at ./index.rsh:60:23:application call to "checkPoolStructure" (defined at: ./index.rsh:48:38:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v319 = stdlib.gt(v314, stdlib.checkedBigNumberify('./index.rsh:51:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v319, {
    at: './index.rsh:51:14:application',
    fs: ['at ./index.rsh:60:23:application call to "checkPoolStructure" (defined at: ./index.rsh:48:38:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  const v322 = v310.duration;
  const v323 = stdlib.add(v314, v316);
  const txn2 = await (ctc.sendrecv({
    args: [v309, v314, v316, v322, v323],
    evt_cnt: 0,
    funcNum: 1,
    lct: v311,
    onlyIf: true,
    out_tys: [],
    pay: [v323, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v326, time: v325, didSend: v57, from: v324 } = txn2;
      
      sim_r.txns.push({
        amt: v323,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v326, time: v325, didSend: v57, from: v324 } = txn2;
  ;
  const v329 = stdlib.addressEq(v309, v324);
  stdlib.assert(v329, {
    at: './index.rsh:69:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  stdlib.protect(ctc0, await interact.readyForContribution(), {
    at: './index.rsh:70:37:application',
    fs: ['at ./index.rsh:70:37:application call to [unknown function] (defined at: ./index.rsh:70:37:function exp)', 'at ./index.rsh:70:37:application call to "liftedInteract" (defined at: ./index.rsh:70:37:application)'],
    msg: 'readyForContribution',
    who: 'PoolCreator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v309, v314, v316, v322, v323, v325],
    evt_cnt: 0,
    funcNum: 2,
    lct: v325,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v333, time: v332, didSend: v66, from: v331 } = txn3;
      
      ;
      const v336 = stdlib.add(v325, stdlib.checkedBigNumberify('./index.rsh:81:41:decimal', stdlib.UInt_max, '2'));
      const v337 = stdlib.add(v336, v322);
      const v340 = v332;
      const v347 = v323;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc2, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v333, time: v332, didSend: v66, from: v331 } = txn3;
  ;
  const v334 = stdlib.addressEq(v309, v331);
  stdlib.assert(v334, {
    at: './index.rsh:72:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v336 = stdlib.add(v325, stdlib.checkedBigNumberify('./index.rsh:81:41:decimal', stdlib.UInt_max, '2'));
  const v337 = stdlib.add(v336, v322);
  let v340 = v332;
  let v347 = v323;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v309, v314, v316, v337, v340, v347],
      evt_cnt: 0,
      funcNum: 5,
      lct: v340,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:95:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v351, time: v350, didSend: v81, from: v349 } = txn4;
        
        ;
        const v353 = ['Contribution', null];
        null;
        const v355 = stdlib.add(v340, v337);
        const v358 = v350;
        const v359 = v340;
        const v365 = v347;
        
        if (await (async () => {
          const v368 = stdlib.gt(v355, v359);
          
          return v368;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc8, ctc2, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v351, time: v350, didSend: v81, from: v349 } = txn4;
    ;
    const v352 = stdlib.addressEq(v309, v349);
    stdlib.assert(v352, {
      at: './index.rsh:95:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v353 = ['Contribution', null];
    null;
    const v355 = stdlib.add(v340, v337);
    let v358 = v350;
    let v359 = v340;
    let v365 = v347;
    
    while (await (async () => {
      const v368 = stdlib.gt(v355, v359);
      
      return v368;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 9,
        out_tys: [ctc7],
        timeoutAt: ['time', v355],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v309, v314, v316, v337, v355, v358, v365],
          evt_cnt: 0,
          funcNum: 10,
          lct: v358,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:99:23:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            
            const {data: [], secs: v448, time: v447, didSend: v215, from: v446 } = txn6;
            
            ;
            const cv358 = v447;
            const cv359 = v358;
            const cv365 = v365;
            
            await (async () => {
              const v358 = cv358;
              const v359 = cv359;
              const v365 = cv365;
              
              if (await (async () => {
                const v368 = stdlib.gt(v355, v359);
                
                return v368;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc8, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v448, time: v447, didSend: v215, from: v446 } = txn6;
        ;
        const v449 = stdlib.addressEq(v309, v446);
        stdlib.assert(v449, {
          at: './index.rsh:99:23:dot',
          fs: ['at ./index.rsh:119:25:application call to [unknown function] (defined at: ./index.rsh:119:25:function exp)'],
          msg: 'sender correct',
          who: 'PoolCreator'
          });
        const cv358 = v447;
        const cv359 = v358;
        const cv365 = v365;
        
        v358 = cv358;
        v359 = cv359;
        v365 = cv365;
        
        continue;
        }
      else {
        const {data: [v393], secs: v395, time: v394, didSend: v176, from: v392 } = txn5;
        switch (v393[0]) {
          case 'Any_contribute0_97': {
            const v396 = v393[1];
            undefined /* setApiDetails */;
            const v403 = stdlib.add(v365, v314);
            ;
            await stdlib.mapSet(map1, v392, null);
            const v406 = null;
            await txn5.getOutput('Any_contribute', 'v406', ctc0, v406);
            const cv358 = v394;
            const cv359 = v358;
            const cv365 = v403;
            
            v358 = cv358;
            v359 = cv359;
            v365 = cv365;
            
            continue;
            break;
            }
          case 'Contributor_register0_97': {
            const v421 = v393[1];
            undefined /* setApiDetails */;
            const v428 = stdlib.add(v365, v316);
            ;
            const v439 = null;
            await txn5.getOutput('Contributor_register', 'v439', ctc0, v439);
            const cv358 = v394;
            const cv359 = v358;
            const cv365 = v428;
            
            v358 = cv358;
            v359 = cv359;
            v365 = cv365;
            
            continue;
            break;
            }
          }}
      
      }
    const txn5 = await (ctc.sendrecv({
      args: [v309, v314, v316, v337, v365],
      evt_cnt: 0,
      funcNum: 7,
      lct: v358,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:125:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v454, time: v453, didSend: v221, from: v452 } = txn5;
        
        ;
        const v456 = ['Payment', null];
        null;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc8, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v454, time: v453, didSend: v221, from: v452 } = txn5;
    ;
    const v455 = stdlib.addressEq(v309, v452);
    stdlib.assert(v455, {
      at: './index.rsh:125:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v456 = ['Payment', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v467], secs: v469, time: v468, didSend: v245, from: v466 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v474 = stdlib.sub(v365, v365);
    ;
    await stdlib.mapSet(map0, v466, null);
    const v476 = null;
    await txn6.getOutput('Any_requestPayment', 'v476', ctc0, v476);
    const cv340 = v468;
    const cv347 = v474;
    
    v340 = cv340;
    v347 = cv347;
    
    continue;
    
    
    
    
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v309],
    evt_cnt: 0,
    funcNum: 4,
    lct: v340,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:150:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v485, time: v484, didSend: v264, from: v483 } = txn4;
      
      ;
      const v487 = ['Finished', null];
      null;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v485, time: v484, didSend: v264, from: v483 } = txn4;
  ;
  const v486 = stdlib.addressEq(v309, v483);
  stdlib.assert(v486, {
    at: './index.rsh:150:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v487 = ['Finished', null];
  null;
  return;
  
  
  
  
  
  
  
  
  };
export async function Any_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 10, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [10]');
  if (step == 10) {return _Any_contribute10(ctcTop, interact);}
  };
export async function Any_requestPayment(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_requestPayment expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_requestPayment expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 9, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [9]');
  if (step == 9) {return _Any_requestPayment9(ctcTop, interact);}
  };
export async function Contributor_register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributor_register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributor_register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 10, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [10]');
  if (step == 10) {return _Contributor_register10(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Any_contribute()byte[0]`, `Any_requestPayment()byte[0]`, `Contributor_register()byte[0]`],
    pure: [],
    sigs: [`Any_contribute()byte[0]`, `Any_requestPayment()byte[0]`, `Contributor_register()byte[0]`]
    },
  appApproval: `BiARAAE4ICgwAggKQAUJt5Px3AyX9uqPDUgGBCYDAQAAAgAAIjUAMRhBBTUpZEkiWzUBIQdbNQIxGSMSQQAIMQAoKmZCBQM2GgAXSUEAPiI1BCM1BkkhDAxAACVJIQ0MQAAOIQ0SRCk1/yg0/1BCAJ4hDBJEKTX/gAEBNP9QQgCOgYTLwvwDEkQpQgE5NhoCFzUENhoDNhoBF0khCgxAAmRJIQcMQAGOSSELDEABFkkhCAxAAFghCBJEIQg0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yRbNf6ABNNEcyOwMgY0/g9ENP8xABJENP80AyVbNAMhBFs0AyEFWzT+MgY0AyEJWzQDIQ5bQgOZSCEINAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8lWzX+IQRbNf0hBVs1/CRbNfshCVs1+iEOWzX5STUFNfiABIL2LDY0+FCwMgY0+wxENPgiVUAANjT+iAQMMQAoMQCIA/cjI0xWZoAIAAAAAAAAAZawKTUHNP80/jT9NPw0+zIGNPo0+TT+CEIDCzT9iAPWgAgAAAAAAAABt7ApNQc0/zT+NP00/DT7MgY0+jT5NP0IQgLiSCELNAESRDQESSISTDQCEhFEKGRJNQMkWzX/STUFNf6ABEfkryc0/lCwsSKyATT/sggjshAxALIHszEAKDEAiANjIyJMVmaACAAAAAAAAAHcsCk1BzQDVwAgNAMlWzQDIQRbNAMhBVsyBjT/SQlCAj1JgQcMQABrSCEHNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hBFs1/SEFWzX8JFs1+4AE4huzqbA0/zEAEkSABc8BjKwCsDT/NP4WUDT9FlA0/BZQNPsWUChLAVcAQGdIIQs1ATIGNQJCAoUhChJEIQ80ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/iRbNf2ABMyZklywNP8xABJEgAXPAYysALA0/zQDJVs0AyEEWzT+NP00/ggyBjT9NAMhCVtCAaJJIQYMQACDSSEQDEAALkghEDQBEkQ0BEkiEkw0AhIRRChkNQOABJEnNPOwNAMxABJEgAXPAYysAbBCAdAhBhJEIQY0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gARBsUBNsDT/MQASRDT/NAMlWzQDIQRbNAMhCVshBgg0AyEFWwgyBjQDJFtCAORJIwxAAGtIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQRbNf0hBVs1/CRbNfuABJqLkXSwNPuIAaY0/zEAEkQ0/zT+FlA0/RZQNPwWUDT7FlAyBhZQKEsBVwBIZ0ghBjUBMgY1AkIBLUgiNAESRDQESSISTDQCEhFESTUFNf+ABD2Ekos0/1CwgaCNBogBUDT/Ils1/jT/gRBbSTX9NP4hBgoSRDT+Ig1ENP8hB1s1/DT+NP0INfsxADT+FlA0/RZQNPwWUDT7FlAoSwFXAEBnSCM1ATIGNQJCALo1/zX+Nf01/DX7STX6NPsWUDT8FlA0/RZQNP4WUDT/FlAoSwFXAEhnSCEPNQEyBjUCQgCGNf81/jX9Nfw1+zX6Nfk1+DT8NP4NQQAtNPg0+RZQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAFBnSCEINQEyBjUCQgBBNPg0+RZQNPoWUDT7FlA0/xZQKEsBVwBAZ0ghBzUBMgY1AkIAHDEZIQoSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAAA0gqiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_contributionAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_duration",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_penaltyAmt",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "elem6",
                        "type": "bytes8"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_poolDescription",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes16",
                        "name": "elem0",
                        "type": "bytes16"
                      }
                    ],
                    "internalType": "struct T3",
                    "name": "_poolName",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T4",
                "name": "v310",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T14",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_Contribution",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Finished",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Payment",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "PoolPhase_phase",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_contributionAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_duration",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_penaltyAmt",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes8",
                        "name": "elem6",
                        "type": "bytes8"
                      }
                    ],
                    "internalType": "struct T2",
                    "name": "_poolDescription",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes16",
                        "name": "elem0",
                        "type": "bytes16"
                      }
                    ],
                    "internalType": "struct T3",
                    "name": "_poolName",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T4",
                "name": "v310",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v467",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_contribute0_97",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Contributor_register0_97",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T24",
                "name": "v393",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v406",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v439",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v476",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Any_contribute",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Any_requestPayment",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Contributor_register",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v467",
                "type": "bool"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T24",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_contribute0_97",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Contributor_register0_97",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T24",
                "name": "v393",
                "type": "tuple"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200296738038062002967833981016040819052620000269162000392565b60008080554360035560408051602081018252918252517f86ab9b5dfe08695de221ce76e0233830fa2ac7a69b9b5393f17c58dee18a8ba7906200006e90339085906200049e565b60405180910390a162000084341560076200018b565b60208201515151620000b1906200009e9060029062000558565b602084015151604001511460086200018b565b60208201515151620000c790151560096200018b565b60208201515160408101519051620000e091906200057b565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d88018051515188528051518d01518752515188015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c090910190935280519192620001819260029290910190620001b5565b50505050620005df565b81620001b15760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001c390620005a2565b90600052602060002090601f016020900481019282620001e7576000855562000232565b82601f106200020257805160ff191683800117855562000232565b8280016001018555821562000232579182015b828111156200023257825182559160200191906001019062000215565b506200024092915062000244565b5090565b5b8082111562000240576000815560010162000245565b604080519081016001600160401b03811182821017156200028c57634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156200028c57634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156200028c57634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156200028c57634e487b7160e01b600052604160045260246000fd5b6000602082840312156200033857600080fd5b604051602081016001600160401b03811182821017156200036957634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160801b0319811681146200038a57600080fd5b905292915050565b6000818303610180811215620003a757600080fd5b620003b16200025b565b8351815261016080601f1984011215620003ca57600080fd5b620003d462000292565b620003de620002c3565b60208701518152604087015160208201526060870151604082015260e0607f19860112156200040c57600080fd5b62000416620002f4565b94506080870151855260a0870151602086015260c0870151604086015260e08701516060860152610100870151608086015261012087015160a086015261014087015160018060c01b0319811681146200046f57600080fd5b60c086015260608101859052620004898888850162000325565b60808201528152602083015250949350505050565b60006101a08201905060018060a01b0384168252825160208301526020830151518051604084015260208101516060840152604081015160808401526060810151805160a0850152602081015160c0850152604081015160e08501526060810151610100850152608081015161012085015260a081015161014085015260018060c01b031960c082015116610160850152506080810151905062000550610180840182516001600160801b0319169052565b509392505050565b6000826200057657634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156200059d57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620005b757607f821691505b60208210811415620005d957634e487b7160e01b600052602260045260246000fd5b50919050565b61237880620005ef6000396000f3fe6080604052600436106100eb5760003560e01c80638323075711610084578063beaeb1d411610056578063beaeb1d414610204578063bf2c5b2414610217578063cadc2e7a1461022a578063e00acef11461024a57005b806383230757146101a65780638e314769146101bb578063a7661d54146101ce578063ab53f2c6146101e157005b80633bc5b7bf116100bd5780633bc5b7bf1461014b5780633ccb4082146101785780637eea518c1461018b5780637f33c0f51461019e57005b80631a15cef8146100f45780631e93b0f1146101115780632c10a159146101305780632d27d46c1461014357005b366100f257005b005b6100fc61025d565b60405190151581526020015b60405180910390f35b34801561011d57600080fd5b506003545b604051908152602001610108565b6100f261013e366004611c5c565b6102c6565b6100fc6102ff565b34801561015757600080fd5b5061016b610166366004611c94565b61034b565b6040516101089190611cd7565b6100f2610186366004611c5c565b610377565b6100f2610199366004611c5c565b6103ac565b6100fc6103e1565b3480156101b257600080fd5b50600154610122565b6100f26101c9366004611c5c565b610446565b6100f26101dc366004611c5c565b61047b565b3480156101ed57600080fd5b506101f66104b0565b604051610108929190611d09565b6100f2610212366004611d66565b61054d565b6100f2610225366004611c5c565b610582565b34801561023657600080fd5b5061016b610245366004611c94565b6105b7565b6100f2610258366004611c5c565b6105dd565b60408051606081018252600080825260208201819052918101829052610281611a15565b6040805160608101825260006020808301829052828401919091526001825282518082019093528183528301919091526102bb8284610612565b505060400151919050565b60408051606081018252600080825260208201819052918101919091526102fb6102f536849003840184611e21565b82610919565b5050565b60408051606081018252600080825260208201819052918101829052610323611a53565b60408051602080820190925260008152908201526103418183610b0a565b5060200151919050565b604080516060810182526000808252602082018190529181019190915261037182610d18565b92915050565b60408051606081018252600080825260208201819052918101919091526102fb6103a636849003840184611e57565b82610b0a565b60408051606081018252600080825260208201819052918101919091526102fb6103db36849003840184611e21565b82610df1565b60408051606081018252600080825260208201819052918101829052610405611a15565b604080516060810182526000808252602080830182905282840191909152825180820190935281835283019190915261043e8284610612565b505051919050565b60408051606081018252600080825260208201819052918101919091526102fb61047536849003840184611e21565b82610f93565b60408051606081018252600080825260208201819052918101919091526102fb6104aa36849003840184611e21565b826111b8565b6000606060005460028080546104c590611eaf565b80601f01602080910402602001604051908101604052809291908181526020018280546104f190611eaf565b801561053e5780601f106105135761010080835404028352916020019161053e565b820191906000526020600020905b81548152906001019060200180831161052157829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102fb61057c36849003840184611ee4565b82610612565b60408051606081018252600080825260208201819052918101919091526102fb6105b136849003840184611e21565b82611370565b604080516060810182526000808252602082018190529181019190915261037182611592565b60408051606081018252600080825260208201819052918101919091526102fb61060c36849003840184611e21565b8261161f565b610622600a6000541460236117cd565b815161063d90158061063657508251600154145b60246117cd565b60008080556002805461064f90611eaf565b80601f016020809104026020016040519081016040528092919081815260200182805461067b90611eaf565b80156106c85780601f1061069d576101008083540402835291602001916106c8565b820191906000526020600020905b8154815290600101906020018083116106ab57829003601f168201915b50505050508060200190518101906106e09190611f9a565b90506106f38160800151431060256117cd565b7f7acd45deac5af00e15049a262090ed20edd50699d0cd0f139ab781b5082790783384604051610724929190612035565b60405180910390a1600060208401515151600181111561074657610746611cb1565b14156108365761075d8160200151341460216117cd565b336000908152600560209081526040808320805462ff00ff19166001179055519182527fc8faafcf54f014ebfcdae9a661c5b1de8a1056ae579b99da5296c8feb484cefe910160405180910390a1600082526107b7611a7d565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152606080850151845190910152608080850151845190910152818301805143905260a08501519051909201919091525160c083015161081e919061209e565b602082015160400152610830816117f2565b50505050565b600160208401515151600181111561085057610850611cb1565b1415610914576108678160400151341460226117cd565b604051600081527fbb47adf46185fc2350b4a1ef78e05835203e9f993d914aaa08dfe2376dcd47f49060200160405180910390a1600060408301526108aa611a7d565b815181516001600160a01b039091169052602080830151825182015260408084018051845190920191909152606080850151845190910152608080850151845190910152818301805143905260a08501519051909201919091525160c083015161081e919061209e565b505050565b610929600160005414600c6117cd565b815161094490158061093d57508251600154145b600d6117cd565b60008080556002805461095690611eaf565b80601f016020809104026020016040519081016040528092919081815260200182805461098290611eaf565b80156109cf5780601f106109a4576101008083540402835291602001916109cf565b820191906000526020600020905b8154815290600101906020018083116109b257829003601f168201915b50505050508060200190518101906109e7919061213f565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610a1a92919061215b565b60405180910390a1610a3381608001513414600a6117cd565b8051610a4b906001600160a01b03163314600b6117cd565b610a8d6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03168152602080830151818301526040808401518184015260608085015190840152608080850151908401524360a08401819052600260005560015551610adf91839101612183565b60405160208183030381529060405260029080519060200190610b03929190611aec565b5050505050565b610b1a600960005414601f6117cd565b8151610b35901580610b2e57508251600154145b60206117cd565b600080805560028054610b4790611eaf565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7390611eaf565b8015610bc05780601f10610b9557610100808354040283529160200191610bc0565b820191906000526020600020905b815481529060010190602001808311610ba357829003601f168201915b5050505050806020019051810190610bd8919061213f565b6040805133815285516020808301919091528601515115158183015290519192507f849b84b294e785a61d632662c725690ca1d438a787e4a7d9b8444daff5ba5448919081900360600190a1610c303415601e6117cd565b6080810151604051339180156108fc02916000818181858888f19350505050158015610c60573d6000803e3d6000fd5b50336000908152600460209081526040808320805462ff00ff19166001179055519182527f4e853ffbe637becd0259883a817f234b34f280eabf1aa2082484a68c86ed59c5910160405180910390a160006020830152610cbe611b70565b815181516001600160a01b03909116905260208083015182518201526040808401518351909101526060808401518351909101528101514390526080820151610d0790806121cb565b602080830151015261083081611977565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610d6457610d64611cb1565b1415610de1576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610da557610da5611cb1565b6001811115610db657610db6611cb1565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610e0160026000541460106117cd565b8151610e1c901580610e1557508251600154145b60116117cd565b600080805560028054610e2e90611eaf565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5a90611eaf565b8015610ea75780601f10610e7c57610100808354040283529160200191610ea7565b820191906000526020600020905b815481529060010190602001808311610e8a57829003601f168201915b5050505050806020019051810190610ebf9190612275565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051610ef292919061215b565b60405180910390a1610f063415600e6117cd565b8051610f1e906001600160a01b03163314600f6117cd565b610f26611b70565b815181516001600160a01b039091169052602080830151825190910152604080830151825190910152606082015160a0830151610f659060029061209e565b610f6f919061209e565b81516060015260208082018051439052608084015190519091015261083081611977565b610fa360066000541460186117cd565b8151610fbe901580610fb757508251600154145b60196117cd565b600080805560028054610fd090611eaf565b80601f0160208091040260200160405190810160405280929190818152602001828054610ffc90611eaf565b80156110495780601f1061101e57610100808354040283529160200191611049565b820191906000526020600020905b81548152906001019060200180831161102c57829003601f168201915b50505050508060200190518101906110619190612275565b90506110916040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33856040516110c292919061215b565b60405180910390a16110d6341560166117cd565b81516110ee906001600160a01b0316331460176117cd565b805160009081905281516020015280516040517fe0abfc19d3402519a3c2e929b58716d59f12c2429c48f8803b221532b100ea3e9161112c91612291565b60405180910390a161113c611a7d565b825181516001600160a01b03909116905260208084015182519091015260408084015182519091015260608084018051835190920191909152516080840151611185919061209e565b8151608090810191909152602080830180514390529185015182519091015260a0840151905160400152610b03816117f2565b6111c860046000541460146117cd565b81516111e39015806111dc57508251600154145b60156117cd565b6000808055600280546111f590611eaf565b80601f016020809104026020016040519081016040528092919081815260200182805461122190611eaf565b801561126e5780601f106112435761010080835404028352916020019161126e565b820191906000526020600020905b81548152906001019060200180831161125157829003601f168201915b505050505080602001905181019061128691906122d6565b90506112b66040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233856040516112e792919061215b565b60405180910390a16112fb341560126117cd565b8151611313906001600160a01b0316331460136117cd565b80516001905280516000604091820152815190517fe0abfc19d3402519a3c2e929b58716d59f12c2429c48f8803b221532b100ea3e9161135291612291565b60405180910390a16000808055600181905561083090600290611bbd565b611380600860005414601c6117cd565b815161139b90158061139457508251600154145b601d6117cd565b6000808055600280546113ad90611eaf565b80601f01602080910402602001604051908101604052809291908181526020018280546113d990611eaf565b80156114265780601f106113fb57610100808354040283529160200191611426565b820191906000526020600020905b81548152906001019060200180831161140957829003601f168201915b505050505080602001905181019061143e919061213f565b905061146e6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb338560405161149f92919061215b565b60405180910390a16114b33415601a6117cd565b81516114cb906001600160a01b03163314601b6117cd565b8051600290528051600060609091015280516040517fe0abfc19d3402519a3c2e929b58716d59f12c2429c48f8803b221532b100ea3e9161150b91612291565b60405180910390a161151b611bf7565b82516001600160a01b03168152602080840151818301526040808501518184015260608086015190840152608080860151908401526009600055436001555161156691839101612304565b6040516020818303038152906040526002908051906020019061158a929190611aec565b505050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156115de576115de611cb1565b1415610de1576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610da557610da5611cb1565b61162f600a6000541460286117cd565b815161164a90158061164357508251600154145b60296117cd565b60008080556002805461165c90611eaf565b80601f016020809104026020016040519081016040528092919081815260200182805461168890611eaf565b80156116d55780601f106116aa576101008083540402835291602001916116d5565b820191906000526020600020905b8154815290600101906020018083116116b857829003601f168201915b50505050508060200190518101906116ed9190611f9a565b90506117018160800151431015602a6117cd565b7f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a338460405161173292919061215b565b60405180910390a1611746341560266117cd565b805161175e906001600160a01b0316331460276117cd565b611766611a7d565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152606080850151845190910152608080850151845190910152818301805143905260a085015181519093019290925260c084015191510152610830816117f2565b816102fb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b602080820151015181516080015111156119185761184f6040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b03168082528251602090810151818401908152845160409081015181860190815286516060908101518188019081528851608090810151818a01908152878b0180515160a0808d01918252915188015160c0808e01918252600a6000554360015589519b8c019c909c529851978a019790975294519388019390935290519086015251908401525192820192909252905160e0820152610100015b60405160208183030381529060405260029080519060200190610914929190611aec565b611920611bf7565b8151516001600160a01b03168152815160209081015181830152825160409081015181840152835160609081015190840152818401518101516080840152600860005543600155516118f491839101612304565b50565b6119b96040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015283516060908101519084015281840180515160808501525182015160a0840152600660005543600155516118f491839101612183565b604051806040016040528060008152602001611a4e60408051608081018252600060208201818152928201819052606082015290815290565b905290565b604051806040016040528060008152602001611a4e60405180602001604052806000151581525090565b6040518060400160405280611ac36040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8152602001611a4e60405180606001604052806000815260200160008152602001600081525090565b828054611af890611eaf565b90600052602060002090601f016020900481019282611b1a5760008555611b60565b82601f10611b3357805160ff1916838001178555611b60565b82800160010185558215611b60579182015b82811115611b60578251825591602001919060010190611b45565b50611b6c929150611c2f565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611a4e604051806040016040528060008152602001600081525090565b508054611bc990611eaf565b6000825580601f10611bd9575050565b601f0160209004906000526020600020908101906119749190611c2f565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b5b80821115611b6c5760008155600101611c30565b600060408284031215611c5657600080fd5b50919050565b600060408284031215611c6e57600080fd5b611c788383611c44565b9392505050565b6001600160a01b038116811461197457600080fd5b600060208284031215611ca657600080fd5b8135611c7881611c7f565b634e487b7160e01b600052602160045260246000fd5b6002811061197457611974611cb1565b81516060820190611ce781611cc7565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015611d3d57858101830151858201606001528201611d21565b81811115611d4f576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215611c5657600080fd5b6040805190810167ffffffffffffffff81118282101715611da957634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611da957634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611da957634e487b7160e01b600052604160045260246000fd5b80358015158114610dec57600080fd5b600060408284031215611e3357600080fd5b611e3b611d78565b82358152611e4b60208401611e11565b60208201529392505050565b60008183036040811215611e6a57600080fd5b611e72611d78565b833581526020601f1983011215611e8857600080fd5b611e90611daf565b9150611e9e60208501611e11565b825260208101919091529392505050565b600181811c90821680611ec357607f821691505b60208210811415611c5657634e487b7160e01b600052602260045260246000fd5b60008183036080811215611ef757600080fd5b6040516040810181811067ffffffffffffffff82111715611f2857634e487b7160e01b600052604160045260246000fd5b604052833581526060601f1983011215611f4157600080fd5b611f49611daf565b9150611f53611de0565b602085013560028110611f6557600080fd5b8152611f7360408601611e11565b6020820152611f8460608601611e11565b6040820152825260208101919091529392505050565b600060e08284031215611fac57600080fd5b60405160e0810181811067ffffffffffffffff82111715611fdd57634e487b7160e01b600052604160045260246000fd5b6040528251611feb81611c7f565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a08301919061206181611cc7565b80604085015250602081015115156060840152604081015115156080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156120b1576120b1612088565b500190565b600060a082840312156120c857600080fd5b60405160a0810181811067ffffffffffffffff821117156120f957634e487b7160e01b600052604160045260246000fd5b8060405250809150825161210c81611c7f565b80825250602083015160208201526040830151604082015260608301516060820152608083015160808201525092915050565b600060a0828403121561215157600080fd5b611c7883836120b6565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c08101610371565b6000828210156121dd576121dd612088565b500390565b600060c082840312156121f457600080fd5b60405160c0810181811067ffffffffffffffff8211171561222557634e487b7160e01b600052604160045260246000fd5b8060405250809150825161223881611c7f565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201525092915050565b600060c0828403121561228757600080fd5b611c7883836121e2565b81516080820190600381106122a8576122a8611cb1565b8083525060208301511515602083015260408301511515604083015260608301511515606083015292915050565b6000602082840312156122e857600080fd5b6122f0611daf565b82516122fb81611c7f565b81529392505050565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080918201519181019190915260a0019056fea264697066735822122049c28cefd85546cbe16889b808c63a31bf720a05b3fdc9c874af722a5198e30964736f6c634300080c0033`,
  BytecodeLen: 10599,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:68:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:71:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:149:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:152:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:90:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:124:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:127:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:99:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Any_contribute": Any_contribute,
  "Any_requestPayment": Any_requestPayment,
  "Contributor_register": Contributor_register,
  "PoolCreator": PoolCreator
  };
export const _APIs = {
  Any: {
    contribute: Any_contribute,
    requestPayment: Any_requestPayment
    },
  Contributor: {
    register: Contributor_register
    }
  };
