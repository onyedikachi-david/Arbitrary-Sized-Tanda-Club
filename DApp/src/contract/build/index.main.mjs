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
      6: [ctc0, ctc1, ctc1, ctc1, ctc1],
      8: [ctc0, ctc1, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      11: [ctc0, ctc1, ctc1, ctc1, ctc1]
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
    Any_contribute0_94: ctc4,
    Contributor_register0_94: ctc4
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
  
  
  const [v323, v328, v330, v351, v378, v386] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v398 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:110:15:application call to [unknown function] (defined at: ./index.rsh:110:15:function exp)', 'at ./index.rsh:100:23:application call to "runAny_contribute0_94" (defined at: ./index.rsh:110:15:function exp)', 'at ./index.rsh:100:23:application call to [unknown function] (defined at: ./index.rsh:100:23:function exp)'],
    msg: 'in',
    who: 'Any_contribute'
    });
  const v402 = ['Any_contribute0_94', v398];
  
  const txn1 = await (ctc.sendrecv({
    args: [v323, v328, v330, v351, v378, v386, v402],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v328, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v407], secs: v409, time: v408, didSend: v173, from: v406 } = txn1;
      
      switch (v407[0]) {
        case 'Any_contribute0_94': {
          const v410 = v407[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_contribute"
            });
          const v417 = stdlib.add(v378, v328);
          sim_r.txns.push({
            amt: v328,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          await stdlib.simMapSet(sim_r, 1, v406, null);
          const v420 = null;
          const v421 = await txn1.getOutput('Any_contribute', 'v420', ctc0, v420);
          
          const v870 = v417;
          const v875 = stdlib.add(v408, v351);
          sim_r.isHalt = false;
          
          break;
          }
        case 'Contributor_register0_94': {
          const v435 = v407[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v407], secs: v409, time: v408, didSend: v173, from: v406 } = txn1;
  switch (v407[0]) {
    case 'Any_contribute0_94': {
      const v410 = v407[1];
      undefined /* setApiDetails */;
      const v417 = stdlib.add(v378, v328);
      ;
      await stdlib.mapSet(map1, v406, null);
      const v420 = null;
      const v421 = await txn1.getOutput('Any_contribute', 'v420', ctc0, v420);
      if (v173) {
        stdlib.protect(ctc0, await interact.out(v410, v421), {
          at: './index.rsh:111:15:application',
          fs: ['at ./index.rsh:111:15:application call to [unknown function] (defined at: ./index.rsh:111:15:function exp)', 'at ./index.rsh:115:27:application call to "returnFunc" (defined at: ./index.rsh:113:15:function exp)', 'at ./index.rsh:113:15:application call to [unknown function] (defined at: ./index.rsh:113:15:function exp)'],
          msg: 'out',
          who: 'Any_contribute'
          });
        }
      else {
        }
      
      const v870 = v417;
      const v872 = stdlib.sub(stdlib.UInt_max, v408);
      const v873 = stdlib.sub(v872, v351);
      const v874 = stdlib.ge(v873, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v874, {
        at: 'reach standard library:567:15:application',
        fs: ['at reach standard library:575:29:application call to [unknown function] (defined at: reach standard library:564:55:function exp)', 'at ./index.rsh:120:19:application call to "relativeTime" (defined at: reach standard library:570:71:function exp)'],
        msg: null,
        who: 'Any_contribute'
        });
      const v875 = stdlib.add(v408, v351);
      return;
      
      break;
      }
    case 'Contributor_register0_94': {
      const v435 = v407[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Any_poolTimeout11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_poolTimeout11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_poolTimeout11 expects to receive an interact object as its second argument.`));}
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
  
  
  const [v323, v328, v330, v351, v378] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc2, ctc3, ctc3, ctc3, ctc3]);
  const v466 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:124:15:application',
    fs: ['at ./index.rsh:124:15:application call to [unknown function] (defined at: ./index.rsh:124:15:function exp)', 'at ./index.rsh:120:33:application call to [unknown function] (defined at: ./index.rsh:120:33:function exp)'],
    msg: 'in',
    who: 'Any_poolTimeout'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v323, v328, v330, v351, v378, v466],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:126:28:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v468], secs: v470, time: v469, didSend: v223, from: v467 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_poolTimeout"
        });
      ;
      const v471 = null;
      const v472 = await txn1.getOutput('Any_poolTimeout', 'v471', ctc0, v471);
      
      const v914 = v378;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v468], secs: v470, time: v469, didSend: v223, from: v467 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v471 = null;
  const v472 = await txn1.getOutput('Any_poolTimeout', 'v471', ctc0, v471);
  stdlib.protect(ctc0, await interact.out(v468, v472), {
    at: './index.rsh:124:15:application',
    fs: ['at ./index.rsh:124:15:application call to [unknown function] (defined at: ./index.rsh:124:15:function exp)', 'at ./index.rsh:127:18:application call to "k" (defined at: ./index.rsh:124:15:function exp)', 'at ./index.rsh:120:33:application call to [unknown function] (defined at: ./index.rsh:120:33:function exp)'],
    msg: 'out',
    who: 'Any_poolTimeout'
    });
  
  const v914 = v378;
  return;
  
  
  
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
  
  
  const [v323, v328, v330, v351, v378] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc2, ctc3, ctc3, ctc3, ctc3]);
  const v483 = ctc.selfAddress();
  const v485 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:145:9:application',
    fs: ['at ./index.rsh:145:9:application call to [unknown function] (defined at: ./index.rsh:145:9:function exp)'],
    msg: 'in',
    who: 'Any_requestPayment'
    });
  const v487 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v483), null);
  let v488;
  switch (v487[0]) {
    case 'None': {
      const v489 = v487[1];
      v488 = false;
      
      break;
      }
    case 'Some': {
      const v490 = v487[1];
      v488 = true;
      
      break;
      }
    }
  const v491 = v488 ? false : true;
  stdlib.assert(v491, {
    at: './index.rsh:149:22:application',
    fs: ['at ./index.rsh:145:9:application call to [unknown function] (defined at: ./index.rsh:148:24:function exp)', 'at ./index.rsh:145:9:application call to [unknown function] (defined at: ./index.rsh:145:9:function exp)'],
    msg: null,
    who: 'Any_requestPayment'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v323, v328, v330, v351, v378, v485],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:147:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v493], secs: v495, time: v494, didSend: v259, from: v492 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_requestPayment"
        });
      ;
      const v500 = stdlib.sub(v378, v378);
      sim_r.txns.push({
        amt: v378,
        kind: 'from',
        to: v492,
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v492, null);
      const v502 = null;
      const v503 = await txn1.getOutput('Any_requestPayment', 'v502', ctc0, v502);
      
      const v935 = v500;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v493], secs: v495, time: v494, didSend: v259, from: v492 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v500 = stdlib.sub(v378, v378);
  ;
  await stdlib.mapSet(map0, v492, null);
  const v502 = null;
  const v503 = await txn1.getOutput('Any_requestPayment', 'v502', ctc0, v502);
  stdlib.protect(ctc0, await interact.out(v493, v503), {
    at: './index.rsh:145:9:application',
    fs: ['at ./index.rsh:145:9:application call to [unknown function] (defined at: ./index.rsh:145:9:function exp)', 'at ./index.rsh:154:26:application call to "returnPayFunc" (defined at: ./index.rsh:145:9:function exp)'],
    msg: 'out',
    who: 'Any_requestPayment'
    });
  
  const v935 = v500;
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
    Any_contribute0_94: ctc4,
    Contributor_register0_94: ctc4
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
  
  
  const [v323, v328, v330, v351, v378, v386] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v390 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:103:15:application call to [unknown function] (defined at: ./index.rsh:103:15:function exp)', 'at ./index.rsh:100:23:application call to "runContributor_register0_94" (defined at: ./index.rsh:103:15:function exp)', 'at ./index.rsh:100:23:application call to [unknown function] (defined at: ./index.rsh:100:23:function exp)'],
    msg: 'in',
    who: 'Contributor_register'
    });
  const v394 = ['Contributor_register0_94', v390];
  
  const txn1 = await (ctc.sendrecv({
    args: [v323, v328, v330, v351, v378, v386, v394],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v330, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v407], secs: v409, time: v408, didSend: v173, from: v406 } = txn1;
      
      switch (v407[0]) {
        case 'Any_contribute0_94': {
          const v410 = v407[1];
          
          break;
          }
        case 'Contributor_register0_94': {
          const v435 = v407[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Contributor_register"
            });
          const v442 = stdlib.add(v378, v330);
          sim_r.txns.push({
            amt: v330,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v453 = null;
          const v454 = await txn1.getOutput('Contributor_register', 'v453', ctc0, v453);
          
          const v966 = v442;
          const v971 = stdlib.add(v408, v351);
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v407], secs: v409, time: v408, didSend: v173, from: v406 } = txn1;
  switch (v407[0]) {
    case 'Any_contribute0_94': {
      const v410 = v407[1];
      return;
      break;
      }
    case 'Contributor_register0_94': {
      const v435 = v407[1];
      undefined /* setApiDetails */;
      const v442 = stdlib.add(v378, v330);
      ;
      const v453 = null;
      const v454 = await txn1.getOutput('Contributor_register', 'v453', ctc0, v453);
      if (v173) {
        stdlib.protect(ctc0, await interact.out(v435, v454), {
          at: './index.rsh:103:16:application',
          fs: ['at ./index.rsh:103:16:application call to [unknown function] (defined at: ./index.rsh:103:16:function exp)', 'at ./index.rsh:106:25:application call to "callBack" (defined at: ./index.rsh:105:13:function exp)', 'at ./index.rsh:105:13:application call to [unknown function] (defined at: ./index.rsh:105:13:function exp)'],
          msg: 'out',
          who: 'Contributor_register'
          });
        }
      else {
        }
      
      const v966 = v442;
      const v968 = stdlib.sub(stdlib.UInt_max, v408);
      const v969 = stdlib.sub(v968, v351);
      const v970 = stdlib.ge(v969, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v970, {
        at: 'reach standard library:567:15:application',
        fs: ['at reach standard library:575:29:application call to [unknown function] (defined at: reach standard library:564:55:function exp)', 'at ./index.rsh:120:19:application call to "relativeTime" (defined at: reach standard library:570:71:function exp)'],
        msg: null,
        who: 'Contributor_register'
        });
      const v971 = stdlib.add(v408, v351);
      return;
      
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
    Any_contribute0_94: ctc6,
    Contributor_register0_94: ctc6
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
  
  
  const v308 = stdlib.protect(ctc5, interact.getPoolDetails, 'for PoolCreator\'s interact field getPoolDetails');
  const v309 = v308.contributionAmt;
  const v311 = v308.penaltyAmt;
  
  const v318 = stdlib.div(v309, stdlib.checkedBigNumberify('./index.rsh:50:45:decimal', stdlib.UInt_max, '2'));
  const v320 = stdlib.eq(v311, v318);
  stdlib.assert(v320, {
    at: './index.rsh:51:14:application',
    fs: ['at ./index.rsh:57:27:application call to "checkPoolStructure" (defined at: ./index.rsh:49:38:function exp)', 'at ./index.rsh:55:12:application call to [unknown function] (defined at: ./index.rsh:55:16:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v322 = stdlib.gt(v309, stdlib.checkedBigNumberify('./index.rsh:52:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v322, {
    at: './index.rsh:52:14:application',
    fs: ['at ./index.rsh:57:27:application call to "checkPoolStructure" (defined at: ./index.rsh:49:38:function exp)', 'at ./index.rsh:55:12:application call to [unknown function] (defined at: ./index.rsh:55:16:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v308],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v324], secs: v326, time: v325, didSend: v39, from: v323 } = txn1;
      
      ;
      const v328 = v324.contributionAmt;
      const v330 = v324.penaltyAmt;
      const v336 = v324.duration;
      const v337 = stdlib.add(v328, v330);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v324], secs: v326, time: v325, didSend: v39, from: v323 } = txn1;
  ;
  const v328 = v324.contributionAmt;
  const v329 = stdlib.div(v328, stdlib.checkedBigNumberify('./index.rsh:50:45:decimal', stdlib.UInt_max, '2'));
  const v330 = v324.penaltyAmt;
  const v331 = stdlib.eq(v330, v329);
  stdlib.assert(v331, {
    at: './index.rsh:51:14:application',
    fs: ['at ./index.rsh:61:23:application call to "checkPoolStructure" (defined at: ./index.rsh:49:38:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v333 = stdlib.gt(v328, stdlib.checkedBigNumberify('./index.rsh:52:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v333, {
    at: './index.rsh:52:14:application',
    fs: ['at ./index.rsh:61:23:application call to "checkPoolStructure" (defined at: ./index.rsh:49:38:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  const v336 = v324.duration;
  const v337 = stdlib.add(v328, v330);
  const txn2 = await (ctc.sendrecv({
    args: [v323, v328, v330, v336, v337],
    evt_cnt: 0,
    funcNum: 1,
    lct: v325,
    onlyIf: true,
    out_tys: [],
    pay: [v337, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v340, time: v339, didSend: v57, from: v338 } = txn2;
      
      sim_r.txns.push({
        amt: v337,
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
  const {data: [], secs: v340, time: v339, didSend: v57, from: v338 } = txn2;
  ;
  const v343 = stdlib.addressEq(v323, v338);
  stdlib.assert(v343, {
    at: './index.rsh:70:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  stdlib.protect(ctc0, await interact.readyForContribution(), {
    at: './index.rsh:71:37:application',
    fs: ['at ./index.rsh:71:37:application call to [unknown function] (defined at: ./index.rsh:71:37:function exp)', 'at ./index.rsh:71:37:application call to "liftedInteract" (defined at: ./index.rsh:71:37:application)'],
    msg: 'readyForContribution',
    who: 'PoolCreator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v323, v328, v330, v336, v337, v339],
    evt_cnt: 0,
    funcNum: 2,
    lct: v339,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v347, time: v346, didSend: v66, from: v345 } = txn3;
      
      ;
      const v350 = stdlib.add(v339, stdlib.checkedBigNumberify('./index.rsh:82:41:decimal', stdlib.UInt_max, '2'));
      const v351 = stdlib.add(v350, v336);
      const v354 = v346;
      const v361 = v337;
      
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
  const {data: [], secs: v347, time: v346, didSend: v66, from: v345 } = txn3;
  ;
  const v348 = stdlib.addressEq(v323, v345);
  stdlib.assert(v348, {
    at: './index.rsh:73:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v350 = stdlib.add(v339, stdlib.checkedBigNumberify('./index.rsh:82:41:decimal', stdlib.UInt_max, '2'));
  const v351 = stdlib.add(v350, v336);
  let v354 = v346;
  let v361 = v337;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v323, v328, v330, v351, v361],
      evt_cnt: 0,
      funcNum: 5,
      lct: v354,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:96:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v365, time: v364, didSend: v81, from: v363 } = txn4;
        
        ;
        const v367 = ['Contribution', null];
        null;
        const v370 = false;
        const v371 = v364;
        const v378 = v361;
        
        if (await (async () => {
          const v380 = v370 ? false : true;
          
          return v380;})()) {
          const v386 = stdlib.add(v371, v351);
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc8, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v365, time: v364, didSend: v81, from: v363 } = txn4;
    ;
    const v366 = stdlib.addressEq(v323, v363);
    stdlib.assert(v366, {
      at: './index.rsh:96:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v367 = ['Contribution', null];
    null;
    let v370 = false;
    let v371 = v364;
    let v378 = v361;
    
    while (await (async () => {
      const v380 = v370 ? false : true;
      
      return v380;})()) {
      const v383 = stdlib.sub(stdlib.UInt_max, v371);
      const v384 = stdlib.sub(v383, v351);
      const v385 = stdlib.ge(v384, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v385, {
        at: 'reach standard library:567:15:application',
        fs: ['at reach standard library:575:29:application call to [unknown function] (defined at: reach standard library:564:55:function exp)', 'at ./index.rsh:120:19:application call to "relativeTime" (defined at: reach standard library:570:71:function exp)'],
        msg: null,
        who: 'PoolCreator'
        });
      const v386 = stdlib.add(v371, v351);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 9,
        out_tys: [ctc7],
        timeoutAt: ['time', v386],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v323, v328, v330, v351, v378, v386],
          evt_cnt: 0,
          funcNum: 10,
          lct: v371,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:122:16:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            
            const {data: [], secs: v462, time: v461, didSend: v211, from: v460 } = txn6;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc8, ctc2, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v462, time: v461, didSend: v211, from: v460 } = txn6;
        ;
        const v463 = stdlib.addressEq(v323, v460);
        stdlib.assert(v463, {
          at: './index.rsh:122:16:dot',
          fs: ['at ./index.rsh:120:33:application call to [unknown function] (defined at: ./index.rsh:120:33:function exp)'],
          msg: 'sender correct',
          who: 'PoolCreator'
          });
        const txn7 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 11,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v468], secs: v470, time: v469, didSend: v223, from: v467 } = txn7;
        undefined /* setApiDetails */;
        ;
        const v471 = null;
        await txn7.getOutput('Any_poolTimeout', 'v471', ctc0, v471);
        const cv370 = true;
        const cv371 = v469;
        const cv378 = v378;
        
        v370 = cv370;
        v371 = cv371;
        v378 = cv378;
        
        continue;
        
        
        }
      else {
        const {data: [v407], secs: v409, time: v408, didSend: v173, from: v406 } = txn5;
        switch (v407[0]) {
          case 'Any_contribute0_94': {
            const v410 = v407[1];
            undefined /* setApiDetails */;
            const v417 = stdlib.add(v378, v328);
            ;
            await stdlib.mapSet(map1, v406, null);
            const v420 = null;
            await txn5.getOutput('Any_contribute', 'v420', ctc0, v420);
            const cv370 = false;
            const cv371 = v408;
            const cv378 = v417;
            
            v370 = cv370;
            v371 = cv371;
            v378 = cv378;
            
            continue;
            break;
            }
          case 'Contributor_register0_94': {
            const v435 = v407[1];
            undefined /* setApiDetails */;
            const v442 = stdlib.add(v378, v330);
            ;
            const v453 = null;
            await txn5.getOutput('Contributor_register', 'v453', ctc0, v453);
            const cv370 = false;
            const cv371 = v408;
            const cv378 = v442;
            
            v370 = cv370;
            v371 = cv371;
            v378 = cv378;
            
            continue;
            break;
            }
          }}
      
      }
    const txn5 = await (ctc.sendrecv({
      args: [v323, v328, v330, v351, v378],
      evt_cnt: 0,
      funcNum: 7,
      lct: v371,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:135:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v480, time: v479, didSend: v235, from: v478 } = txn5;
        
        ;
        const v482 = ['Payment', null];
        null;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc8, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v480, time: v479, didSend: v235, from: v478 } = txn5;
    ;
    const v481 = stdlib.addressEq(v323, v478);
    stdlib.assert(v481, {
      at: './index.rsh:135:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v482 = ['Payment', null];
    null;
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 8,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v493], secs: v495, time: v494, didSend: v259, from: v492 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v500 = stdlib.sub(v378, v378);
    ;
    await stdlib.mapSet(map0, v492, null);
    const v502 = null;
    await txn6.getOutput('Any_requestPayment', 'v502', ctc0, v502);
    const cv354 = v494;
    const cv361 = v500;
    
    v354 = cv354;
    v361 = cv361;
    
    continue;
    
    
    
    
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v323],
    evt_cnt: 0,
    funcNum: 4,
    lct: v354,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:160:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v511, time: v510, didSend: v278, from: v509 } = txn4;
      
      ;
      const v513 = ['Finished', null];
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
  const {data: [], secs: v511, time: v510, didSend: v278, from: v509 } = txn4;
  ;
  const v512 = stdlib.addressEq(v323, v509);
  stdlib.assert(v512, {
    at: './index.rsh:160:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v513 = ['Finished', null];
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
export async function Any_poolTimeout(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_poolTimeout expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_poolTimeout expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 11, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [11]');
  if (step == 11) {return _Any_poolTimeout11(ctcTop, interact);}
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
    impure: [`Any_contribute()byte[0]`, `Any_poolTimeout()byte[0]`, `Any_requestPayment()byte[0]`, `Contributor_register()byte[0]`],
    pure: [],
    sigs: [`Any_contribute()byte[0]`, `Any_poolTimeout()byte[0]`, `Any_requestPayment()byte[0]`, `Contributor_register()byte[0]`]
    },
  appApproval: `BiASAAEgKDA4AggKCwlABbeT8dwMl/bqjw2mj9SZCAQGJgMBAAACAAAiNQAxGEEFoylkSSJbNQEhB1s1AjEZIxJBAAgxACgqZkIFcTYaABdJQQBNIjUEIzUGSSENDEAAJUkhDgxAAA4hDhJEKTX/KDT/UEIBFCENEkQpNf+AAQE0/1BCAQRJIQ8MQAAIIQ8SRClCADmBhMvC/AMSRClCAZk2GgIXNQQ2GgM2GgEXSYEHDEACYEkhCgxAAXZJIQgMQADGSSEJDEAAUyEJEkQhCTQBEkQ0BEkiEkw0AhIRRChkNQNJNQU1/4AEn9ybtTT/ULCACAAAAAAAAAHXsCk1BzQDVwAgNAMkWzQDJVs0AyEEWyMyBjQDIQVbQgPrSCEINAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yRbNf4lWzX9IQRbNfwhBVs1+4AE00RzI7AyBjQDIQtbD0Q0/zEAEkQ0/zT+FlA0/RZQNPwWUDT7FlAoSwFXAEBnSCEJNQEyBjUCQgQXSCEINAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yRbNf4lWzX9IQRbNfwhBVs1+0k1BTX6gASC9iw2NPpQsDIGNAMhC1sMRDT6IlVAADM0/ogEDDEAKDEAiAP3IyNMVmaACAAAAAAAAAGksCk1BzT/NP40/TT8IjIGNPs0/ghCAvw0/YgD2YAIAAAAAAAAAcWwKTUHNP80/jT9NPwiMgY0+zT9CEIC1kkhBwxAAHFIIQo0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/STUFNf6ABEfkryc0/lCwsSKyATT/sggjshAxALIHszEAKDEAiANhIyJMVmaACAAAAAAAAAH2sCk1BzQDVwAgNAMkWzQDJVs0AyEEWzIGNP9JCUICLkghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8kWzX+JVs1/SEEWzX8IQVbNfuABOIbs6mwNP8xABJEgAXPAYysArA0/zT+FlA0/RZQNPwWUDT7FlAoSwFXAEBnSCEKNQEyBjUCQgKLSSEGDEAA2EkhEAxAAINJIQwMQABOIQwSRCERNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEzJmSXLA0/zEAEkSABc8BjKwAsDT/NAMkWzQDJVs0AyEEWyIyBjQDIQVbQgGQSCEQNAESRDQESSISTDQCEhFEKGQ1A4AEkSc087A0AzEAEkSABc8BjKwBsEIB3iEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABEGxQE2wNP8xABJENP80AyRbNAMlWzQDIQtbIQYINAMhBFsIMgY0AyEFW0IA5EkjDEAAa0gjNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yRbNf4lWzX9IQRbNfwhBVs1+4AEmouRdLA0+4gBtDT/MQASRDT/NP4WUDT9FlA0/BZQNPsWUDIGFlAoSwFXAEhnSCEGNQEyBjUCQgE7SCI0ARJENARJIhJMNAISEURJNQU1/4AEPYSSizT/ULCBoI0GiAFeNP8iWzX+NP+BEFtJNf00/iEGChJENP4iDUQ0/yEHWzX8NP40/Qg1+zEANP4WUDT9FlA0/BZQNPsWUChLAVcAQGdIIzUBMgY1AkIAyDX/Nf41/TX8NftJNfo0+xZQNPwWUDT9FlA0/xZQKEsBVwBAZ0ghETUBMgY1AkIAmDX/Nf41/TX8Nfs1+jX5NP1BACU0+TT6FlA0+xZQNPwWUDT/FlAoSwFXAEBnSCEHNQEyBjUCQgBggf///////////wE0/gk0/AkiD0Q0/jT8CDX4NPk0+hZQNPsWUDT8FlA0/xZQNPgWUChLAVcASGdIIQg1ATIGNQJCABwxGSEMEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/w0kxGGFAAANIKokoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 1,
  stateSize: 72,
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
                "name": "v324",
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
                "name": "v324",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v468",
                "type": "bool"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
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
                "name": "v493",
                "type": "bool"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
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
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_contribute0_94",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Contributor_register0_94",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T23",
                "name": "v407",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
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
    "name": "_reach_oe_v420",
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
    "name": "_reach_oe_v453",
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
    "name": "_reach_oe_v471",
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
    "name": "_reach_oe_v502",
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
    "name": "Any_poolTimeout",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v468",
                "type": "bool"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
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
                "name": "v493",
                "type": "bool"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
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
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_contribute0_94",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Contributor_register0_94",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T23",
                "name": "v407",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
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
  Bytecode: `0x608060405260405162002a1e38038062002a1e833981016040819052620000269162000392565b60008080554360035560408051602081018252918252517f86ab9b5dfe08695de221ce76e0233830fa2ac7a69b9b5393f17c58dee18a8ba7906200006e90339085906200049e565b60405180910390a162000084341560076200018b565b60208201515151620000b1906200009e9060029062000558565b602084015151604001511460086200018b565b60208201515151620000c790151560096200018b565b60208201515160408101519051620000e091906200057b565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d88018051515188528051518d01518752515188015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c090910190935280519192620001819260029290910190620001b5565b50505050620005df565b81620001b15760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001c390620005a2565b90600052602060002090601f016020900481019282620001e7576000855562000232565b82601f106200020257805160ff191683800117855562000232565b8280016001018555821562000232579182015b828111156200023257825182559160200191906001019062000215565b506200024092915062000244565b5090565b5b8082111562000240576000815560010162000245565b604080519081016001600160401b03811182821017156200028c57634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156200028c57634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156200028c57634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156200028c57634e487b7160e01b600052604160045260246000fd5b6000602082840312156200033857600080fd5b604051602081016001600160401b03811182821017156200036957634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160801b0319811681146200038a57600080fd5b905292915050565b6000818303610180811215620003a757600080fd5b620003b16200025b565b8351815261016080601f1984011215620003ca57600080fd5b620003d462000292565b620003de620002c3565b60208701518152604087015160208201526060870151604082015260e0607f19860112156200040c57600080fd5b62000416620002f4565b94506080870151855260a0870151602086015260c0870151604086015260e08701516060860152610100870151608086015261012087015160a086015261014087015160018060c01b0319811681146200046f57600080fd5b60c086015260608101859052620004898888850162000325565b60808201528152602083015250949350505050565b60006101a08201905060018060a01b0384168252825160208301526020830151518051604084015260208101516060840152604081015160808401526060810151805160a0850152602081015160c0850152604081015160e08501526060810151610100850152608081015161012085015260a081015161014085015260018060c01b031960c082015116610160850152506080810151905062000550610180840182516001600160801b0319169052565b509392505050565b6000826200057657634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156200059d57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620005b757607f821691505b60208210811415620005d957634e487b7160e01b600052602260045260246000fd5b50919050565b61242f80620005ef6000396000f3fe6080604052600436106101015760003560e01c80637f33c0f51161008f578063ab53f2c611610061578063ab53f2c614610212578063beaeb1d414610235578063bf2c5b2414610248578063cadc2e7a1461025b578063e00acef11461027b57005b80637f33c0f5146101cf57806383230757146101d75780638e314769146101ec578063a7661d54146101ff57005b80632c10a159116100d35780632c10a159146101615780632d27d46c146101745780633bc5b7bf1461017c5780633ccb4082146101a95780637eea518c146101bc57005b80631039115f1461010a57806316013779146101275780631a15cef81461013a5780631e93b0f11461014257005b3661010857005b005b61011261028e565b60405190151581526020015b60405180910390f35b610108610135366004611d44565b6102c8565b6101126102ec565b34801561014e57600080fd5b506003545b60405190815260200161011e565b61010861016f366004611d44565b610343565b610112610363565b34801561018857600080fd5b5061019c610197366004611d7c565b61039d565b60405161011e9190611dbf565b6101086101b7366004611d44565b6103c9565b6101086101ca366004611d44565b6103e9565b610112610409565b3480156101e357600080fd5b50600154610153565b6101086101fa366004611d44565b61045c565b61010861020d366004611d44565b61047c565b34801561021e57600080fd5b5061022761049c565b60405161011e929190611df1565b610108610243366004611e4e565b610539565b610108610256366004611d44565b610559565b34801561026757600080fd5b5061019c610276366004611d7c565b610579565b610108610289366004611d44565b61059f565b6000610298611af4565b6102a0611b1b565b60408051602080820190925260008152908201526102be81836105bf565b5060200151919050565b6102d0611af4565b6102e86102e236849003840184611f59565b826105bf565b5050565b60006102f6611af4565b6102fe611b4a565b6040805160608101825260006020808301829052828401919091526001825282518082019093528183528301919091526103388284610774565b505060600151919050565b61034b611af4565b6102e861035d36849003840184611f75565b82610a53565b600061036d611af4565b610375611b1b565b60408051602080820190925260008152908201526103938183610c44565b5060400151919050565b60408051606081018252600080825260208201819052918101919091526103c382610e41565b92915050565b6103d1611af4565b6102e86103e336849003840184611f59565b82610c44565b6103f1611af4565b6102e861040336849003840184611f75565b82610f1a565b6000610413611af4565b61041b611b4a565b60408051606081018252600080825260208083018290528284019190915282518082019093528183528301919091526104548284610774565b505051919050565b610464611af4565b6102e861047636849003840184611f75565b826110bc565b610484611af4565b6102e861049636849003840184611f75565b826112bc565b6000606060005460028080546104b190611fd7565b80601f01602080910402602001604051908101604052809291908181526020018280546104dd90611fd7565b801561052a5780601f106104ff5761010080835404028352916020019161052a565b820191906000526020600020905b81548152906001019060200180831161050d57829003601f168201915b50505050509050915091509091565b610541611af4565b6102e86105533684900384018461200c565b82610774565b610561611af4565b6102e861057336849003840184611f75565b82611474565b60408051606081018252600080825260208201819052918101919091526103c382611696565b6105a7611af4565b6102e86105b936849003840184611f75565b82611723565b6105cf600b60005414602d6118b5565b81516105ea9015806105e357508251600154145b602e6118b5565b6000808055600280546105fc90611fd7565b80601f016020809104026020016040519081016040528092919081815260200182805461062890611fd7565b80156106755780601f1061064a57610100808354040283529160200191610675565b820191906000526020600020905b81548152906001019060200180831161065857829003601f168201915b505050505080602001905181019061068d919061214b565b90507ff83c076bd4c0d71c52b5e6c31f5b75951081ea51d930ed4c540a97b78913927333846040516106c0929190612167565b60405180910390a16106d43415602c6118b5565b604051600081527f29f5456df299720881c39325bab61c4644d025156b100fb0ef74470ef49ae2cf9060200160405180910390a160006020830152610717611b83565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015260608085015184519091015281830180516001905280514393019290925260808401519151015261076e816118da565b50505050565b610784600a6000541460246118b5565b815161079f90158061079857508251600154145b60256118b5565b6000808055600280546107b190611fd7565b80601f01602080910402602001604051908101604052809291908181526020018280546107dd90611fd7565b801561082a5780601f106107ff5761010080835404028352916020019161082a565b820191906000526020600020905b81548152906001019060200180831161080d57829003601f168201915b50505050508060200190518101906108429190612224565b90506108558160a00151431060266118b5565b7f7acd45deac5af00e15049a262090ed20edd50699d0cd0f139ab781b5082790783384604051610886929190612240565b60405180910390a160006020840151515160018111156108a8576108a8611d99565b1415610981576108bf8160200151341460226118b5565b336000908152600560209081526040808320805462ff00ff19166001179055519182527fc997f00f2b9cb51cb96e96f7f41ea1b1d81c0753da95de63d677c3af2e8c61eb910160405180910390a160008252610919611b83565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152606080850151845190910152818301805160009052514392019190915251608083015161096f91906122a9565b60208201516040015261076e816118da565b600160208401515151600181111561099b5761099b611d99565b1415610a4e576109b28160400151341460236118b5565b604051600081527f3282bb1fcf364b4bdfdca3241f3c1f1596c428697d7660fc91c387a5e79544f89060200160405180910390a1600060608301526109f5611b83565b815181516001600160a01b039091169052602080830151825182015260408084018051845190920191909152606080850151845190910152818301805160009052514392019190915251608083015161096f91906122a9565b505050565b610a63600160005414600c6118b5565b8151610a7e901580610a7757508251600154145b600d6118b5565b600080805560028054610a9090611fd7565b80601f0160208091040260200160405190810160405280929190818152602001828054610abc90611fd7565b8015610b095780601f10610ade57610100808354040283529160200191610b09565b820191906000526020600020905b815481529060010190602001808311610aec57829003601f168201915b5050505050806020019051810190610b21919061214b565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610b549291906122c1565b60405180910390a1610b6d81608001513414600a6118b5565b8051610b85906001600160a01b03163314600b6118b5565b610bc76040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03168152602080830151818301526040808401518184015260608085015190840152608080850151908401524360a08401819052600260005560015551610c19918391016122e9565b60405160208183030381529060405260029080519060200190610c3d929190611bd1565b5050505050565b610c5460096000541460206118b5565b8151610c6f901580610c6857508251600154145b60216118b5565b600080805560028054610c8190611fd7565b80601f0160208091040260200160405190810160405280929190818152602001828054610cad90611fd7565b8015610cfa5780601f10610ccf57610100808354040283529160200191610cfa565b820191906000526020600020905b815481529060010190602001808311610cdd57829003601f168201915b5050505050806020019051810190610d12919061214b565b90507f849b84b294e785a61d632662c725690ca1d438a787e4a7d9b8444daff5ba54483384604051610d45929190612167565b60405180910390a1610d593415601f6118b5565b6080810151604051339180156108fc02916000818181858888f19350505050158015610d89573d6000803e3d6000fd5b50336000908152600460209081526040808320805462ff00ff19166001179055519182527f664b25d56ed76b4a6fad595f306d874270e9d3f55ee91595c45ffbed0f84d839910160405180910390a160006040830152610de7611c55565b815181516001600160a01b03909116905260208083015182518201526040808401518351909101526060808401518351909101528101514390526080820151610e309080612331565b602080830151015261076e81611a41565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610e8d57610e8d611d99565b1415610f0a576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610ece57610ece611d99565b6001811115610edf57610edf611d99565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b610f2a60026000541460106118b5565b8151610f45901580610f3e57508251600154145b60116118b5565b600080805560028054610f5790611fd7565b80601f0160208091040260200160405190810160405280929190818152602001828054610f8390611fd7565b8015610fd05780601f10610fa557610100808354040283529160200191610fd0565b820191906000526020600020905b815481529060010190602001808311610fb357829003601f168201915b5050505050806020019051810190610fe89190612224565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338460405161101b9291906122c1565b60405180910390a161102f3415600e6118b5565b8051611047906001600160a01b03163314600f6118b5565b61104f611c55565b815181516001600160a01b039091169052602080830151825190910152604080830151825190910152606082015160a083015161108e906002906122a9565b61109891906122a9565b81516060015260208082018051439052608084015190519091015261076e81611a41565b6110cc60066000541460186118b5565b81516110e79015806110e057508251600154145b60196118b5565b6000808055600280546110f990611fd7565b80601f016020809104026020016040519081016040528092919081815260200182805461112590611fd7565b80156111725780601f1061114757610100808354040283529160200191611172565b820191906000526020600020905b81548152906001019060200180831161115557829003601f168201915b505050505080602001905181019061118a919061214b565b90506111ba6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33856040516111eb9291906122c1565b60405180910390a16111ff341560166118b5565b8151611217906001600160a01b0316331460176118b5565b805160009081905281516020015280516040517fe0abfc19d3402519a3c2e929b58716d59f12c2429c48f8803b221532b100ea3e9161125591612348565b60405180910390a1611265611b83565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845190910152818301805160009052805143930192909252608085015191510152610c3d816118da565b6112cc60046000541460146118b5565b81516112e79015806112e057508251600154145b60156118b5565b6000808055600280546112f990611fd7565b80601f016020809104026020016040519081016040528092919081815260200182805461132590611fd7565b80156113725780601f1061134757610100808354040283529160200191611372565b820191906000526020600020905b81548152906001019060200180831161135557829003601f168201915b505050505080602001905181019061138a919061238d565b90506113ba6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233856040516113eb9291906122c1565b60405180910390a16113ff341560126118b5565b8151611417906001600160a01b0316331460136118b5565b80516001905280516000604091820152815190517fe0abfc19d3402519a3c2e929b58716d59f12c2429c48f8803b221532b100ea3e9161145691612348565b60405180910390a16000808055600181905561076e90600290611ca2565b611484600860005414601d6118b5565b815161149f90158061149857508251600154145b601e6118b5565b6000808055600280546114b190611fd7565b80601f01602080910402602001604051908101604052809291908181526020018280546114dd90611fd7565b801561152a5780601f106114ff5761010080835404028352916020019161152a565b820191906000526020600020905b81548152906001019060200180831161150d57829003601f168201915b5050505050806020019051810190611542919061214b565b90506115726040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb33856040516115a39291906122c1565b60405180910390a16115b73415601b6118b5565b81516115cf906001600160a01b03163314601c6118b5565b8051600290528051600060609091015280516040517fe0abfc19d3402519a3c2e929b58716d59f12c2429c48f8803b221532b100ea3e9161160f91612348565b60405180910390a161161f611cdf565b82516001600160a01b03168152602080840151818301526040808501518184015260608086015190840152608080860151908401526009600055436001555161166a918391016123bb565b6040516020818303038152906040526002908051906020019061168e929190611bd1565b505050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156116e2576116e2611d99565b1415610f0a576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115610ece57610ece611d99565b611733600a6000541460296118b5565b815161174e90158061174757508251600154145b602a6118b5565b60008080556002805461176090611fd7565b80601f016020809104026020016040519081016040528092919081815260200182805461178c90611fd7565b80156117d95780601f106117ae576101008083540402835291602001916117d9565b820191906000526020600020905b8154815290600101906020018083116117bc57829003601f168201915b50505050508060200190518101906117f19190612224565b90506118058160a00151431015602b6118b5565b7f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a33846040516118369291906122c1565b60405180910390a161184a341560276118b5565b8051611862906001600160a01b0316331460286118b5565b61186a611cdf565b81516001600160a01b0316815260208083015181830152604080840151818401526060808501519084015260808085015190840152600b6000554360015551610c19918391016123bb565b816102e85760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515115611974576118fc611cdf565b8251516001600160a01b0316815282516020908101518183015283516040908101518184015284516060908101519084015281850151810151608084015260086000554360015551611950918391016123bb565b6040516020818303038152906040526002908051906020019061076e929190611bd1565b81516060015160208084015101516119a89160009161199590600019612331565b61199f9190612331565b1015601a6118b5565b81516060015160208084015101516119c091906122a9565b81526040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b51516001600160a01b031689528b518701519095528a51890151909352895190910151905287830151860151905285519052600a9091554360015591519091611950918391016122e9565b611a7c6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015283516060908101519084015281840151820151608084015260066000554360015551611ad0918391016123bb565b60405160208183030381529060405260029080519060200190610a4e929190611bd1565b60408051608081018252600080825260208201819052918101829052606081019190915290565b604051806040016040528060008152602001611b4560405180602001604052806000151581525090565b905290565b604051806040016040528060008152602001611b4560408051608081018252600060208201818152928201819052606082015290815290565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b828054611bdd90611fd7565b90600052602060002090601f016020900481019282611bff5760008555611c45565b82601f10611c1857805160ff1916838001178555611c45565b82800160010185558215611c45579182015b82811115611c45578251825591602001919060010190611c2a565b50611c51929150611d17565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611b45604051806040016040528060008152602001600081525090565b508054611cae90611fd7565b6000825580601f10611cbe575050565b601f016020900490600052602060002090810190611cdc9190611d17565b50565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b5b80821115611c515760008155600101611d18565b600060408284031215611d3e57600080fd5b50919050565b600060408284031215611d5657600080fd5b611d608383611d2c565b9392505050565b6001600160a01b0381168114611cdc57600080fd5b600060208284031215611d8e57600080fd5b8135611d6081611d67565b634e487b7160e01b600052602160045260246000fd5b60028110611cdc57611cdc611d99565b81516060820190611dcf81611daf565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015611e2557858101830151858201606001528201611e09565b81811115611e37576000606083870101525b50601f01601f191692909201606001949350505050565b600060808284031215611d3e57600080fd5b6040805190810167ffffffffffffffff81118282101715611e9157634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611e9157634e487b7160e01b600052604160045260246000fd5b80358015158114610f1557600080fd5b60008183036040811215611eeb57600080fd5b611ef3611e60565b8335815291506020601f1982011215611f0b57600080fd5b506040516020810181811067ffffffffffffffff82111715611f3d57634e487b7160e01b600052604160045260246000fd5b604052611f4c60208401611ec8565b8152602082015292915050565b600060408284031215611f6b57600080fd5b611d608383611ed8565b600060408284031215611f8757600080fd5b6040516040810181811067ffffffffffffffff82111715611fb857634e487b7160e01b600052604160045260246000fd5b60405282358152611fcb60208401611ec8565b60208201529392505050565b600181811c90821680611feb57607f821691505b60208210811415611d3e57634e487b7160e01b600052602260045260246000fd5b6000818303608081121561201f57600080fd5b612027611e60565b833581526060601f198301121561203d57600080fd5b612045611e97565b91506040516060810181811067ffffffffffffffff8211171561207857634e487b7160e01b600052604160045260246000fd5b60405260208501356002811061208d57600080fd5b815261209b60408601611ec8565b60208201526120ac60608601611ec8565b6040820152825260208101919091529392505050565b600060a082840312156120d457600080fd5b60405160a0810181811067ffffffffffffffff8211171561210557634e487b7160e01b600052604160045260246000fd5b8060405250809150825161211881611d67565b80825250602083015160208201526040830151604082015260608301516060820152608083015160808201525092915050565b600060a0828403121561215d57600080fd5b611d6083836120c2565b6001600160a01b038316815260608101611d60602083018480518252602090810151511515910152565b600060c082840312156121a357600080fd5b60405160c0810181811067ffffffffffffffff821117156121d457634e487b7160e01b600052604160045260246000fd5b806040525080915082516121e781611d67565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201525092915050565b600060c0828403121561223657600080fd5b611d608383612191565b6001600160a01b0383168152815160208083019190915282015151805160a08301919061226c81611daf565b80604085015250602081015115156060840152604081015115156080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156122bc576122bc612293565b500190565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c081016103c3565b60008282101561234357612343612293565b500390565b815160808201906003811061235f5761235f611d99565b8083525060208301511515602083015260408301511515604083015260608301511515606083015292915050565b60006020828403121561239f57600080fd5b6123a7611e97565b82516123b281611d67565b81529392505050565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a081016103c356fea2646970667358221220a4dc795749e81a251b8f579af81112e5d1ed95cc3cd39e55052a7be222b47c4264736f6c634300080c0033`,
  BytecodeLen: 10782,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:69:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:72:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:159:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:162:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:91:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:134:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:137:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:100:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:123:21:after expr stmt semicolon',
    fs: ['at ./index.rsh:120:33:application call to [unknown function] (defined at: ./index.rsh:120:33:function exp)'],
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
  "Any_poolTimeout": Any_poolTimeout,
  "Any_requestPayment": Any_requestPayment,
  "Contributor_register": Contributor_register,
  "PoolCreator": PoolCreator
  };
export const _APIs = {
  Any: {
    contribute: Any_contribute,
    poolTimeout: Any_poolTimeout,
    requestPayment: Any_requestPayment
    },
  Contributor: {
    register: Contributor_register
    }
  };
