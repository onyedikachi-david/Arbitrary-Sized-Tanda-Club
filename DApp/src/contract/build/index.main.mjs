// Automatically generated with Reach 0.1.10 (2604daf0)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (2604daf0)';
export const _backendVersion = 16;

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
    Payment: ctc0,
    Registration: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  return {
    PoolPhase: {
      phase: [ctc1]
      },
    Update: {
      info: [ctc2, ctc3]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc4 = stdlib.T_Object({
    contributionAmt: ctc1,
    duration: ctc1,
    maxUsers: ctc1,
    penaltyAmt: ctc1,
    poolDescription: ctc2,
    poolName: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    None: ctc5,
    Some: ctc5
    });
  const map0_ctc = ctc6;
  
  const map1_ctc = ctc6;
  
  const map2_ctc = ctc6;
  
  
  return {
    infos: {
      poolDetails: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v341, v342, v345, v346, v347, v348, v362] = svs;
            return (await ((async () => {
              
              
              return v342;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v341, v342, v345, v346, v347, v348, v362] = svs;
            return (await ((async () => {
              
              
              return v342;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v341, v342] = svs;
            return (await ((async () => {
              
              
              return v342;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
            const [v341, v342, v345, v346, v421] = svs;
            return (await ((async () => {
              
              
              return v342;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
            const [v341, v342, v345, v346, v438, v474] = svs;
            return (await ((async () => {
              
              
              return v342;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'))) {
            const [v341, v342, v345, v346, v438] = svs;
            return (await ((async () => {
              
              
              return v342;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
            const [v341, v342, v345, v346, v438] = svs;
            return (await ((async () => {
              
              
              return v342;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'))) {
            const [v341, v342, v345, v346, v438, v445] = svs;
            return (await ((async () => {
              
              
              return v342;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'))) {
            const [v341, v342, v345, v346, v347, v348, v375, v383] = svs;
            return (await ((async () => {
              
              
              return v342;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        }
      },
    views: {
      1: [ctc0, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1],
      2: [ctc0, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1],
      5: [ctc0, ctc4],
      7: [ctc0, ctc4, ctc1, ctc1, ctc1],
      9: [ctc0, ctc4, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc4, ctc1, ctc1, ctc1],
      11: [ctc0, ctc4, ctc1, ctc1, ctc1],
      12: [ctc0, ctc4, ctc1, ctc1, ctc1, ctc1],
      13: [ctc0, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
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
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1, ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _Any_contribute12(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_contribute12 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_contribute12 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc6 = stdlib.T_Object({
    contributionAmt: ctc3,
    duration: ctc3,
    maxUsers: ctc3,
    penaltyAmt: ctc3,
    poolDescription: ctc4,
    poolName: ctc5
    });
  const ctc7 = stdlib.T_Tuple([]);
  
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
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v341, v342, v345, v346, v438, v445] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc2, ctc6, ctc3, ctc3, ctc3, ctc3]);
  const v449 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:143:15:application call to [unknown function] (defined at: ./index.rsh:143:15:function exp)', 'at ./index.rsh:143:15:application call to [unknown function] (defined at: ./index.rsh:143:15:function exp)'],
    msg: 'in',
    who: 'Any_contribute'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v341, v342, v345, v346, v438, v445, v449],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v345, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v453], secs: v455, time: v454, didSend: v193, from: v452 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_contribute"
        });
      const v458 = stdlib.add(v438, v345);
      sim_r.txns.push({
        amt: v345,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 2, v452, null);
      null;
      const v460 = null;
      const v461 = await txn1.getOutput('Any_contribute', 'v460', ctc0, v460);
      
      const v828 = v458;
      const v832 = stdlib.add(v454, v346);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc6, ctc3, ctc3, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v453], secs: v455, time: v454, didSend: v193, from: v452 } = txn1;
  undefined /* setApiDetails */;
  const v458 = stdlib.add(v438, v345);
  ;
  await stdlib.mapSet(map2, v452, null);
  null;
  const v460 = null;
  const v461 = await txn1.getOutput('Any_contribute', 'v460', ctc0, v460);
  if (v193) {
    stdlib.protect(ctc0, await interact.out(v453, v461), {
      at: './index.rsh:144:15:application',
      fs: ['at ./index.rsh:144:15:application call to [unknown function] (defined at: ./index.rsh:144:15:function exp)', 'at ./index.rsh:149:27:application call to "returnFunc" (defined at: ./index.rsh:146:15:function exp)', 'at ./index.rsh:146:15:application call to [unknown function] (defined at: ./index.rsh:146:15:function exp)'],
      msg: 'out',
      who: 'Any_contribute'
      });
    }
  else {
    }
  
  const v828 = v458;
  const v829 = stdlib.sub(stdlib.UInt_max, v454);
  const v830 = stdlib.sub(v829, v346);
  const v831 = stdlib.ge(v830, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v831, {
    at: 'reach standard library:567:15:application',
    fs: ['at reach standard library:575:29:application call to [unknown function] (defined at: reach standard library:564:55:function exp)', 'at ./index.rsh:154:19:application call to "relativeTime" (defined at: reach standard library:570:71:function exp)'],
    msg: null,
    who: 'Any_contribute'
    });
  const v832 = stdlib.add(v454, v346);
  return;
  
  
  
  };
export async function _Any_requestPayment11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_requestPayment11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_requestPayment11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc6 = stdlib.T_Object({
    contributionAmt: ctc3,
    duration: ctc3,
    maxUsers: ctc3,
    penaltyAmt: ctc3,
    poolDescription: ctc4,
    poolName: ctc5
    });
  const ctc7 = stdlib.T_Tuple([]);
  
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
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v341, v342, v345, v346, v438] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc2, ctc6, ctc3, ctc3, ctc3]);
  const v488 = ctc.selfAddress();
  const v490 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:182:9:application',
    fs: ['at ./index.rsh:182:9:application call to [unknown function] (defined at: ./index.rsh:182:9:function exp)'],
    msg: 'in',
    who: 'Any_requestPayment'
    });
  const v492 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v488), null);
  let v493;
  switch (v492[0]) {
    case 'None': {
      const v494 = v492[1];
      v493 = false;
      
      break;
      }
    case 'Some': {
      const v495 = v492[1];
      v493 = true;
      
      break;
      }
    }
  const v496 = v493 ? false : true;
  stdlib.assert(v496, {
    at: './index.rsh:186:22:application',
    fs: ['at ./index.rsh:182:9:application call to [unknown function] (defined at: ./index.rsh:185:24:function exp)', 'at ./index.rsh:182:9:application call to [unknown function] (defined at: ./index.rsh:182:9:function exp)'],
    msg: null,
    who: 'Any_requestPayment'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v341, v342, v345, v346, v438, v490],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:184:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v498], secs: v500, time: v499, didSend: v267, from: v497 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_requestPayment"
        });
      ;
      const v505 = stdlib.sub(v438, v438);
      sim_r.txns.push({
        kind: 'from',
        to: v497,
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 1, v497, null);
      const v507 = null;
      const v508 = await txn1.getOutput('Any_requestPayment', 'v507', ctc0, v507);
      
      const v854 = v505;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc6, ctc3, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v498], secs: v500, time: v499, didSend: v267, from: v497 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v505 = stdlib.sub(v438, v438);
  ;
  await stdlib.mapSet(map1, v497, null);
  const v507 = null;
  const v508 = await txn1.getOutput('Any_requestPayment', 'v507', ctc0, v507);
  stdlib.protect(ctc0, await interact.out(v498, v508), {
    at: './index.rsh:182:9:application',
    fs: ['at ./index.rsh:182:9:application call to [unknown function] (defined at: ./index.rsh:182:9:function exp)', 'at ./index.rsh:191:26:application call to "returnPayFunc" (defined at: ./index.rsh:182:9:function exp)'],
    msg: 'out',
    who: 'Any_requestPayment'
    });
  
  const v854 = v505;
  return;
  
  
  
  };
export async function _Contributor_register13(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributor_register13 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributor_register13 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '16'));
  const ctc6 = stdlib.T_Object({
    contributionAmt: ctc3,
    duration: ctc3,
    maxUsers: ctc3,
    penaltyAmt: ctc3,
    poolDescription: ctc4,
    poolName: ctc5
    });
  const ctc7 = stdlib.T_Tuple([]);
  
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
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v341, v342, v345, v346, v347, v348, v375, v383] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'), [ctc2, ctc6, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v386 = ctc.selfAddress();
  const v388 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:13:function exp)', 'at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:13:function exp)'],
    msg: 'in',
    who: 'Contributor_register'
    });
  const v390 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v386), null);
  let v391;
  switch (v390[0]) {
    case 'None': {
      const v392 = v390[1];
      v391 = false;
      
      break;
      }
    case 'Some': {
      const v393 = v390[1];
      v391 = true;
      
      break;
      }
    }
  const v394 = v391 ? false : true;
  stdlib.assert(v394, {
    at: './index.rsh:100:26:application',
    fs: ['at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:17:function exp)', 'at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:13:function exp)', 'at ./index.rsh:100:13:application call to [unknown function] (defined at: ./index.rsh:100:13:function exp)'],
    msg: null,
    who: 'Contributor_register'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v341, v342, v345, v346, v347, v348, v375, v383, v388],
    evt_cnt: 1,
    funcNum: 13,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v348, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v397], secs: v399, time: v398, didSend: v131, from: v396 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributor_register"
        });
      const v402 = stdlib.add(v383, v348);
      sim_r.txns.push({
        amt: v348,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v396, null);
      null;
      const v404 = null;
      const v405 = await txn1.getOutput('Contributor_register', 'v404', ctc0, v404);
      
      const v410 = stdlib.add(v375, stdlib.checkedBigNumberify('./index.rsh:106:38:decimal', stdlib.UInt_max, '1'));
      const v861 = v410;
      const v863 = v402;
      const v864 = stdlib.le(v410, v347);
      if (v864) {
        sim_r.isHalt = false;
        }
      else {
        const v920 = v402;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc6, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v397], secs: v399, time: v398, didSend: v131, from: v396 } = txn1;
  undefined /* setApiDetails */;
  const v402 = stdlib.add(v383, v348);
  ;
  await stdlib.mapSet(map0, v396, null);
  null;
  const v404 = null;
  const v405 = await txn1.getOutput('Contributor_register', 'v404', ctc0, v404);
  if (v131) {
    stdlib.protect(ctc0, await interact.out(v397, v405), {
      at: './index.rsh:99:16:application',
      fs: ['at ./index.rsh:99:16:application call to [unknown function] (defined at: ./index.rsh:99:16:function exp)', 'at ./index.rsh:105:25:application call to "callBack" (defined at: ./index.rsh:102:13:function exp)', 'at ./index.rsh:102:13:application call to [unknown function] (defined at: ./index.rsh:102:13:function exp)'],
      msg: 'out',
      who: 'Contributor_register'
      });
    }
  else {
    }
  
  const v410 = stdlib.add(v375, stdlib.checkedBigNumberify('./index.rsh:106:38:decimal', stdlib.UInt_max, '1'));
  const v861 = v410;
  const v863 = v402;
  const v864 = stdlib.le(v410, v347);
  if (v864) {
    return;
    }
  else {
    const v920 = v402;
    return;
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
    maxUsers: ctc2,
    penaltyAmt: ctc2,
    poolDescription: ctc3,
    poolName: ctc4
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Address;
  
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
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v325 = stdlib.protect(ctc5, interact.getPoolDetails, 'for PoolCreator\'s interact field getPoolDetails');
  const v326 = v325.contributionAmt;
  const v329 = v325.penaltyAmt;
  
  const v336 = stdlib.div(v326, stdlib.checkedBigNumberify('./index.rsh:59:45:decimal', stdlib.UInt_max, '2'));
  const v338 = stdlib.eq(v329, v336);
  stdlib.assert(v338, {
    at: './index.rsh:60:14:application',
    fs: ['at ./index.rsh:66:27:application call to "checkPoolStructure" (defined at: ./index.rsh:58:38:function exp)', 'at ./index.rsh:64:12:application call to [unknown function] (defined at: ./index.rsh:64:16:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v340 = stdlib.gt(v326, stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v340, {
    at: './index.rsh:61:14:application',
    fs: ['at ./index.rsh:66:27:application call to "checkPoolStructure" (defined at: ./index.rsh:58:38:function exp)', 'at ./index.rsh:64:12:application call to [unknown function] (defined at: ./index.rsh:64:16:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v325],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:69:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:69:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v342], secs: v344, time: v343, didSend: v40, from: v341 } = txn1;
      
      ;
      const v345 = v342.contributionAmt;
      const v346 = v342.duration;
      const v347 = v342.maxUsers;
      const v348 = v342.penaltyAmt;
      const v362 = stdlib.add(v345, v348);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v342], secs: v344, time: v343, didSend: v40, from: v341 } = txn1;
  ;
  const v345 = v342.contributionAmt;
  const v346 = v342.duration;
  const v347 = v342.maxUsers;
  const v348 = v342.penaltyAmt;
  const v353 = stdlib.div(v345, stdlib.checkedBigNumberify('./index.rsh:59:45:decimal', stdlib.UInt_max, '2'));
  const v355 = stdlib.eq(v348, v353);
  stdlib.assert(v355, {
    at: './index.rsh:60:14:application',
    fs: ['at ./index.rsh:71:23:application call to "checkPoolStructure" (defined at: ./index.rsh:58:38:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v357 = stdlib.gt(v345, stdlib.checkedBigNumberify('./index.rsh:61:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v357, {
    at: './index.rsh:61:14:application',
    fs: ['at ./index.rsh:71:23:application call to "checkPoolStructure" (defined at: ./index.rsh:58:38:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  const v362 = stdlib.add(v345, v348);
  const txn2 = await (ctc.sendrecv({
    args: [v341, v342, v345, v346, v347, v348, v362],
    evt_cnt: 0,
    funcNum: 1,
    lct: v343,
    onlyIf: true,
    out_tys: [],
    pay: [v362, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v365, time: v364, didSend: v65, from: v363 } = txn2;
      
      sim_r.txns.push({
        amt: v362,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      null;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v365, time: v364, didSend: v65, from: v363 } = txn2;
  ;
  const v368 = stdlib.addressEq(v341, v363);
  stdlib.assert(v368, {
    at: './index.rsh:81:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  null;
  stdlib.protect(ctc0, await interact.readyForContribution(), {
    at: './index.rsh:83:37:application',
    fs: ['at ./index.rsh:83:37:application call to [unknown function] (defined at: ./index.rsh:83:37:function exp)', 'at ./index.rsh:83:37:application call to "liftedInteract" (defined at: ./index.rsh:83:37:application)'],
    msg: 'readyForContribution',
    who: 'PoolCreator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v341, v342, v345, v346, v347, v348, v362],
    evt_cnt: 0,
    funcNum: 2,
    lct: v364,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:85:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v372, time: v371, didSend: v74, from: v370 } = txn3;
      
      ;
      const v374 = ['Registration', null];
      null;
      const v375 = stdlib.checkedBigNumberify('./index.rsh:96:26:decimal', stdlib.UInt_max, '0');
      const v376 = v371;
      const v383 = v362;
      
      if (await (async () => {
        const v385 = stdlib.le(v375, v347);
        
        return v385;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v414 = v376;
        const v421 = v383;
        
        if (await (async () => {
          
          return true;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v372, time: v371, didSend: v74, from: v370 } = txn3;
  ;
  const v373 = stdlib.addressEq(v341, v370);
  stdlib.assert(v373, {
    at: './index.rsh:85:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v374 = ['Registration', null];
  null;
  let v375 = stdlib.checkedBigNumberify('./index.rsh:96:26:decimal', stdlib.UInt_max, '0');
  let v376 = v371;
  let v383 = v362;
  
  while (await (async () => {
    const v385 = stdlib.le(v375, v347);
    
    return v385;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 13,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v397], secs: v399, time: v398, didSend: v131, from: v396 } = txn4;
    undefined /* setApiDetails */;
    const v402 = stdlib.add(v383, v348);
    ;
    await stdlib.mapSet(map0, v396, null);
    null;
    const v404 = null;
    await txn4.getOutput('Contributor_register', 'v404', ctc0, v404);
    const v410 = stdlib.add(v375, stdlib.checkedBigNumberify('./index.rsh:106:38:decimal', stdlib.UInt_max, '1'));
    const cv375 = v410;
    const cv376 = v398;
    const cv383 = v402;
    
    v375 = cv375;
    v376 = cv376;
    v383 = cv383;
    
    continue;
    
    }
  let v414 = v376;
  let v421 = v383;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v341, v342, v345, v346, v421],
      evt_cnt: 0,
      funcNum: 6,
      lct: v414,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:132:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v425, time: v424, didSend: v154, from: v423 } = txn4;
        
        ;
        const v427 = ['Contribution', null];
        null;
        const v430 = true;
        const v431 = v424;
        const v438 = v421;
        
        if (await (async () => {
          
          return v430;})()) {
          const v445 = stdlib.add(v431, v346);
          sim_r.isHalt = false;
          }
        else {
          const v474 = stdlib.add(v431, v346);
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc5, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v425, time: v424, didSend: v154, from: v423 } = txn4;
    ;
    const v426 = stdlib.addressEq(v341, v423);
    stdlib.assert(v426, {
      at: './index.rsh:132:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v427 = ['Contribution', null];
    null;
    let v430 = true;
    let v431 = v424;
    let v438 = v421;
    
    while (await (async () => {
      
      return v430;})()) {
      const v442 = stdlib.sub(stdlib.UInt_max, v431);
      const v443 = stdlib.sub(v442, v346);
      const v444 = stdlib.ge(v443, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v444, {
        at: 'reach standard library:567:15:application',
        fs: ['at reach standard library:575:29:application call to [unknown function] (defined at: reach standard library:564:55:function exp)', 'at ./index.rsh:154:19:application call to "relativeTime" (defined at: reach standard library:570:71:function exp)'],
        msg: null,
        who: 'PoolCreator'
        });
      const v445 = stdlib.add(v431, v346);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 11,
        out_tys: [ctc6],
        timeoutAt: ['time', v445],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v341, v342, v345, v346, v438, v445],
          evt_cnt: 0,
          funcNum: 12,
          lct: v431,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:156:16:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v469, time: v468, didSend: v220, from: v467 } = txn6;
            
            ;
            const cv430 = false;
            const cv431 = v468;
            const cv438 = v438;
            
            await (async () => {
              const v430 = cv430;
              const v431 = cv431;
              const v438 = cv438;
              
              if (await (async () => {
                
                return v430;})()) {
                const v442 = stdlib.sub(stdlib.UInt_max, v431);
                const v443 = stdlib.sub(v442, v346);
                const v444 = stdlib.ge(v443, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
                ;
                const v445 = stdlib.add(v431, v346);
                sim_r.isHalt = false;
                }
              else {
                const v474 = stdlib.add(v431, v346);
                sim_r.isHalt = false;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc5, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v469, time: v468, didSend: v220, from: v467 } = txn6;
        ;
        const v470 = stdlib.addressEq(v341, v467);
        stdlib.assert(v470, {
          at: './index.rsh:156:16:dot',
          fs: ['at ./index.rsh:154:33:application call to [unknown function] (defined at: ./index.rsh:154:33:function exp)'],
          msg: 'sender correct',
          who: 'PoolCreator'
          });
        const cv430 = false;
        const cv431 = v468;
        const cv438 = v438;
        
        v430 = cv430;
        v431 = cv431;
        v438 = cv438;
        
        continue;
        }
      else {
        const {data: [v453], secs: v455, time: v454, didSend: v193, from: v452 } = txn5;
        undefined /* setApiDetails */;
        const v458 = stdlib.add(v438, v345);
        ;
        await stdlib.mapSet(map2, v452, null);
        null;
        const v460 = null;
        await txn5.getOutput('Any_contribute', 'v460', ctc0, v460);
        const cv430 = true;
        const cv431 = v454;
        const cv438 = v458;
        
        v430 = cv430;
        v431 = cv431;
        v438 = cv438;
        
        continue;}
      
      }
    const v474 = stdlib.add(v431, v346);
    await ctc.waitUntilTime(v474);
    const txn5 = await (ctc.sendrecv({
      args: [v341, v342, v345, v346, v438, v474],
      evt_cnt: 0,
      funcNum: 8,
      lct: v431,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:166:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v481, time: v480, didSend: v238, from: v479 } = txn5;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc5, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v481, time: v480, didSend: v238, from: v479 } = txn5;
    ;
    const v482 = stdlib.addressEq(v341, v479);
    stdlib.assert(v482, {
      at: './index.rsh:166:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const txn6 = await (ctc.sendrecv({
      args: [v341, v342, v345, v346, v438],
      evt_cnt: 0,
      funcNum: 9,
      lct: v480,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:172:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v485, time: v484, didSend: v243, from: v483 } = txn6;
        
        ;
        const v487 = ['Payment', null];
        null;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc5, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v485, time: v484, didSend: v243, from: v483 } = txn6;
    ;
    const v486 = stdlib.addressEq(v341, v483);
    stdlib.assert(v486, {
      at: './index.rsh:172:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v487 = ['Payment', null];
    null;
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v498], secs: v500, time: v499, didSend: v267, from: v497 } = txn7;
    undefined /* setApiDetails */;
    ;
    const v505 = stdlib.sub(v438, v438);
    ;
    await stdlib.mapSet(map1, v497, null);
    const v507 = null;
    await txn7.getOutput('Any_requestPayment', 'v507', ctc0, v507);
    const cv414 = v499;
    const cv421 = v505;
    
    v414 = cv414;
    v421 = cv421;
    
    continue;
    
    
    
    
    
    
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v341, v342],
    evt_cnt: 0,
    funcNum: 5,
    lct: v414,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:198:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v516, time: v515, didSend: v286, from: v514 } = txn4;
      
      ;
      const v518 = ['Finished', null];
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
    tys: [ctc7, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v516, time: v515, didSend: v286, from: v514 } = txn4;
  ;
  const v517 = stdlib.addressEq(v341, v514);
  stdlib.assert(v517, {
    at: './index.rsh:198:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v518 = ['Finished', null];
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
  stdlib.assert(step == 12, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [12]');
  if (step == 12) {return _Any_contribute12(ctcTop, interact);}
  };
export async function Any_requestPayment(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_requestPayment expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_requestPayment expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 11, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [11]');
  if (step == 11) {return _Any_requestPayment11(ctcTop, interact);}
  };
export async function Contributor_register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributor_register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributor_register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 13, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [13]');
  if (step == 13) {return _Contributor_register13(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Any_contribute()byte[0]`, `Any_requestPayment()byte[0]`, `Contributor_register()byte[0]`],
    pure: [`poolDetails()(uint64,uint64,uint64,uint64,byte[200],byte[16])`],
    sigs: [`Any_contribute()byte[0]`, `Any_requestPayment()byte[0]`, `Contributor_register()byte[0]`, `poolDetails()(uint64,uint64,uint64,uint64,byte[200],byte[16])`]
    },
  appApproval: `BiAVAAGYAqACqAICDbACDAUJCwoHCLgCA7eT8dwMl/bqjw3NypKuBgYmBQEAAQEBAgAESP/AeyI1ADEYQQgoK2RJIls1ASEOWzUCMRkjEkEACjEAKCEQr2ZCB/Q2GgAXSUEBNyI1BCM1BkkhEQxAABdJIRIMQAAIIRISRCtCAiMhERJEK0IBQEkhEwxAAQAhExJENAFJIQoMQACDSSELDEAATUkhCAxAADJJIQYMQAAXIQYSRChkKWRQKmRQSTUDVyD4NQdCB5dIKGQpZFAqZFBJNQNXIPg1B0IHg0goZClkUCpkUEk1A1cg+DUHQgdvSSEMDEAAFEgoZClkUCpkUEk1A1cg+DUHQgdUSChkKWRQKmRQSTUDVyD4NQdCB0BJIQkMQAA1SSENDEAAFyENEkQoZClkUCpkUEk1A1cg+DUHQgcbIQkSRChkKWRQKmRQSTUDVyD4NQdCBwRJIQUMQAAXIQUSRChkKWRQKmRQSTUDVyD4NQdCBuYjEkQoZClkUCpkUEk1A1cg+DUHQgbQgYTLwvwDEkQrQgGYNhoCFzUENhoDNhoBF0khDgxAAvlJIQsMQAFuSSEIDEAA5UkhBgxAAIwhBhJEIQY0ARJENARJIhJMNAISEUQoZClkUCpkUEk1AyEHWzX/STUFNf6ABO1+vfs0/lCwNP+IBoIxACgxAIgGayMiTFZmJwQxAFA0/xZQsIAIAAAAAAAAAZSwKzUHNANXACA0A1cg+DQDJFs0AyVbNAMhBFs0/zQDIQ9bIwgyBjQDgcACWzT/CEIEgkghCDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDVwAgNf+ABMqrzjewMgY0AyEHWw9ENP8xABJENP80A1cg+DQDJFs0AyVbIjIGNAMhBFtCBNRIIQg0ARJENARJIhJMNAISEUQoZClkUCpkUEk1AyRbNf9JNQU1/oAEn9ybtTT+ULAyBjQDIQdbDEQ0/4gFnzEAKDEAiAWIIyEFTFZmJwQxAFA0/xZQsIAIAAAAAAAAAcywKzUHNANXACA0A1cg+DT/NAMlWyMyBjQDIQRbNP8IQgRSSSEKDEAA/EkhDAxAAHdIIQs0ARJENARJIhJMNAISEUQoZClkUCpkUEk1AyEEWzX/STUFNf6ABN908jo0/lCwsSKyATT/sggjshAxALIHszEAKDEAiAT1IyNMVmaACAAAAAAAAAH7sCs1BzQDVwAgNANXIPg0AyRbNAMlWzIGNP9JCUIDkEghDDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpJVwAgNf9XIPg1/iRbNf0lWzX8IQRbNfuABKIFZo6wNP8xABJEgAXPAYysArA0/zT+UDT9FlA0/BZQNPsWUChLAVcAf2cpSwFXf39nKksBV/4yZ0ghCzUBMgY1AkIEDEghCjQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpKVwAgNf9XIPg1/iRbNf0lWzX8IQRbNfshB1s1+oAEF/zbLrAyBjT6D0Q0/zEAEkQ0/zT+UDT9FlA0/BZQNPsWUChLAVcAf2cpSwFXf39nKksBV/4yZ0ghDDUBMgY1AkIDi0khBQxAAPdJIQkMQACSSSEUDEAAVCEUEkQhDTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDVwAgNf+ABGG0rAywNP8xABJEgAXPAYysALA0/zQDVyD4NAMkWzQDJVsjMgY0AyEEW0ICZUghCTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQNQOABMyZklywNANXACAxABJEgAXPAYysAbBCAs8hBRJEIQU0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A1cAIDX/gARBsUBNsDT/MQASRIAFzwGMrAOwNP80A1cg+DQDJFs0AyVbNAMhBFs0AyEHWyIyBjQDIQ9bQgEsSSMMQACXSCM0ARJENARJIhJMNAISEUQoZClkUCpkUEk1A0lKSklXACA1/1cg+DX+JFs1/SVbNfwhBFs1+yEHWzX6IQ9bNfmABJqLkXSwNPmIAoY0/zEAEkQnBDEAUDT5FlCwNP80/lA0/RZQNPwWUDT7FlA0+hZQNPkWUChLAVcAf2cpSwFXf39nKksBV/5CZ0ghBTUBMgY1AkIB8EiBoI0GiAI0IjQBEkQ0BEkiEkw0AhIRREk1BTX/gARHUZUaNP9QsDT/Ils1/jT/IQ5bNf00/4EQWzX8NP+BGFtJNfs0/iEFChJENP4iDUQ0/jT7CDX6MQA0/1A0/hZQNP0WUDT8FlA0+xZQNPoWUChLAVcAf2cpSwFXf39nKksBV/5CZ0gjNQEyBjUCQgFhNf81/jX9Nfw1+zX6Nfk1+DX3NP00+w5BAD409zT4UDT5FlA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAf2cpSwFXf39nKksBV/5KZ0ghBjUBMgY1AkIBCTT3NPg0+TT6NP40/0IAADX/Nf41/TX8NftJNfo0+1A0/BZQNP0WUDT/FlAoSwFXAH9nKUsBV39/ZypLAVf+MmdIIQ01ATIGNQJCAL01/zX+Nf01/DX7Nfo1+TT9QQBRgf///////////wE0/gk0/AkiD0Q0/jT8CDX4NPk0+lA0+xZQNPwWUDT/FlA0+BZQKEsBVwB/ZylLAVd/f2cqSwFX/jpnSCEINQEyBjUCQgBZNP40/Ag1+DT5NPpQNPsWUDT8FlA0/xZQNPgWUChLAVcAf2cpSwFXf39nKksBV/46Z0ghCjUBMgY1AkIAHDEZIQkSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghEK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 3,
  stateKeys: 3,
  stateSize: 328,
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
                    "name": "_maxUsers",
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
                    "internalType": "struct T1",
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
                    "internalType": "struct T2",
                    "name": "_poolName",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T3",
                "name": "v342",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
            "internalType": "enum _enum_T15",
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
          },
          {
            "internalType": "bool",
            "name": "_Registration",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "Update_info",
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
                    "name": "_maxUsers",
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
                    "internalType": "struct T1",
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
                    "internalType": "struct T2",
                    "name": "_poolName",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T3",
                "name": "v342",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
        "internalType": "struct T14",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v498",
                "type": "bool"
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
                "name": "v453",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
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
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
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
                "name": "v397",
                "type": "bool"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
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
        "internalType": "struct T14",
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
        "internalType": "struct T14",
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
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
        "internalType": "struct T14",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
    "name": "_reach_oe_v404",
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
    "name": "_reach_oe_v460",
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
    "name": "_reach_oe_v507",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
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
        "internalType": "struct T14",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v498",
                "type": "bool"
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
                "name": "v453",
                "type": "bool"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
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
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
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
                "name": "v397",
                "type": "bool"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
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
        "internalType": "struct T14",
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
        "internalType": "struct T14",
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
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
        "internalType": "struct T14",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
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
    "inputs": [],
    "name": "poolDetails",
    "outputs": [
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
            "name": "_maxUsers",
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
            "internalType": "struct T1",
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
            "internalType": "struct T2",
            "name": "_poolName",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200379d3803806200379d83398101604081905262000026916200043c565b60008080554360035560408051602081018252918252517f8feaf1d0bfcc4fa330a629199a35f88277bf82201ac8c0e341f9c4957bec7b80906200006e9033908590620005ef565b60405180910390a162000084341560086200017e565b60208201515151620000b1906200009e9060029062000627565b602084015151606001511460096200017e565b60208201515151620000c7901515600a6200017e565b60208201515160608101519051620000e091906200064a565b8152620000ec620001a8565b3381526020808401805151828401528051515160408085019190915281515183015160608086019190915282515182015160808601529151519091015160a0840152835160c084015260016000819055439055516200014e9183910162000671565b60405160208183030381529060405260029080519060200190620001749291906200025f565b5050505062000712565b81620001a45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060e0016040528060006001600160a01b03168152602001620002366040805160c08082018352600080835260208084018290528385018290526060808501839052855160e081018752838152808301849052808701849052908101839052608080820184905260a08083018590529482018490528501528451908101909452835281019190915290565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b8280546200026d90620006d5565b90600052602060002090601f016020900481019282620002915760008555620002dc565b82601f10620002ac57805160ff1916838001178555620002dc565b82800160010185558215620002dc579182015b82811115620002dc578251825591602001919060010190620002bf565b50620002ea929150620002ee565b5090565b5b80821115620002ea5760008155600101620002ef565b604080519081016001600160401b03811182821017156200033657634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156200033657634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156200033657634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b03811182821017156200033657634e487b7160e01b600052604160045260246000fd5b600060208284031215620003e257600080fd5b604051602081016001600160401b03811182821017156200041357634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160801b0319811681146200043457600080fd5b905292915050565b60008183036101a08112156200045157600080fd5b6200045b62000305565b8351815261018080601f19840112156200047457600080fd5b6200047e6200033c565b620004886200036d565b6020870151815260408701516020820152606087015160408201526080870151606082015260e0609f1986011215620004c057600080fd5b620004ca6200039e565b60a088810151825260c0890151602083015260e0890151604083015261010089015160608301526101208901516080830152610140890151908201526101608801519095506001600160c01b0319811681146200052657600080fd5b60c0860152608081018590526200054088888501620003cf565b60a08201528152602083015250949350505050565b80518252602081015160208301526040810151604083015260608101516060830152608081015180516080840152602081015160a0840152604081015160c0840152606081015160e0840152608081015161010084015260a081015161012084015260018060c01b031960c0820151166101408401525060a0810151620005ea610160840182516001600160801b0319169052565b505050565b60006101c08201905060018060a01b03841682528251602083015260208301516200061f60408401825162000555565b509392505050565b6000826200064557634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156200066c57634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b03168152602080830151610240830191620006989084018262000555565b5060408301516101a083015260608301516101c083015260808301516101e083015260a083015161020083015260c0909201516102209091015290565b600181811c90821680620006ea57607f821691505b602082108114156200070c57634e487b7160e01b600052602260045260246000fd5b50919050565b61307b80620007226000396000f3fe6080604052600436106101175760003560e01c80638020c5b01161009a578063ab53f2c611610061578063ab53f2c614610275578063c798003714610298578063cadc2e7a146102ab578063de736998146102cb578063e533a29d146102de57005b80638020c5b0146101f8578063817d57f31461021a578063832307571461023a5780638e3147691461024f578063a9b9855c1461026257005b80632d27d46c116100de5780632d27d46c146101955780633bc5b7bf1461019d57806379aba123146101ca5780637eea518c146101dd5780637f33c0f5146101f057005b806311faee8c1461012057806316013779146101335780631a15cef8146101465780631e93b0f1146101635780632c10a1591461018257005b3661011e57005b005b61011e61012e366004612667565b6102f1565b61011e610141366004612667565b61032a565b61014e61035f565b60405190151581526020015b60405180910390f35b34801561016f57600080fd5b506003545b60405190815260200161015a565b61011e610190366004612667565b6103ab565b61014e6103e0565b3480156101a957600080fd5b506101bd6101b836600461269f565b61042c565b60405161015a91906126d2565b61011e6101d8366004612667565b610458565b61011e6101eb366004612667565b61048d565b61014e6104c2565b34801561020457600080fd5b5061020d61050b565b60405161015a91906127ac565b34801561022657600080fd5b506101bd61023536600461269f565b6108eb565b34801561024657600080fd5b50600154610174565b61011e61025d366004612667565b610911565b61011e610270366004612667565b610946565b34801561028157600080fd5b5061028a61097b565b60405161015a9291906127bb565b61011e6102a6366004612667565b610a18565b3480156102b757600080fd5b506101bd6102c636600461269f565b610a4d565b61011e6102d9366004612667565b610a73565b61011e6102ec366004612667565b610aa8565b604080516060810182526000808252602082018190529181019190915261032661032036849003840184612924565b82610add565b5050565b6040805160608101825260008082526020820181905291810191909152610326610359368490038401846129db565b82610c81565b604080516060810182526000808252602082018190529181018290526103836122ab565b60408051602080820190925260008152908201526103a18183610eaf565b5060400151919050565b60408051606081018252600080825260208201819052918101919091526103266103da36849003840184612924565b826110fa565b604080516060810182526000808252602082018190529181018290526104046122ab565b604080516020808201909252600081529082015261042281836112fd565b5060200151919050565b6040805160608101825260008082526020820181905291810191909152610452826114fa565b92915050565b6040805160608101825260008082526020820181905291810191909152610326610487368490038401846129db565b826112fd565b60408051606081018252600080825260208201819052918101919091526103266104bc36849003840184612924565b826115d3565b604080516060810182526000808252602082018190529181018290526104e66122ab565b60408051602080820190925260008152908201526105048183610c81565b5051919050565b6105136122da565b600160005414156105c85760006002805461052d906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610559906129f7565b80156105a65780601f1061057b576101008083540402835291602001916105a6565b820191906000526020600020905b81548152906001019060200180831161058957829003601f168201915b50505050508060200190518101906105be9190612b54565b6020015192915050565b600260005414156105e25760006002805461052d906129f7565b6005600054141561068d576000600280546105fc906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610628906129f7565b80156106755780601f1061064a57610100808354040283529160200191610675565b820191906000526020600020905b81548152906001019060200180831161065857829003601f168201915b50505050508060200190518101906105be9190612bcc565b60076000541415610738576000600280546106a7906129f7565b80601f01602080910402602001604051908101604052809291908181526020018280546106d3906129f7565b80156107205780601f106106f557610100808354040283529160200191610720565b820191906000526020600020905b81548152906001019060200180831161070357829003601f168201915b50505050508060200190518101906105be9190612c94565b600960005414156107e357600060028054610752906129f7565b80601f016020809104026020016040519081016040528092919081815260200182805461077e906129f7565b80156107cb5780601f106107a0576101008083540402835291602001916107cb565b820191906000526020600020905b8154815290600101906020018083116107ae57829003601f168201915b50505050508060200190518101906105be9190612d1f565b600a60005414156107fd576000600280546106a7906129f7565b600b6000541415610817576000600280546106a7906129f7565b600c600054141561083157600060028054610752906129f7565b600d60005414156108dc5760006002805461084b906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610877906129f7565b80156108c45780601f10610899576101008083540402835291602001916108c4565b820191906000526020600020905b8154815290600101906020018083116108a757829003601f168201915b50505050508060200190518101906105be9190612d3c565b6108e8600060076117b5565b90565b6040805160608101825260008082526020820181905291810191909152610452826117da565b604080516060810182526000808252602082018190529181019190915261032661094036849003840184612924565b82611867565b6040805160608101825260008082526020820181905291810191909152610326610975368490038401846129db565b82610eaf565b600060606000546002808054610990906129f7565b80601f01602080910402602001604051908101604052809291908181526020018280546109bc906129f7565b8015610a095780601f106109de57610100808354040283529160200191610a09565b820191906000526020600020905b8154815290600101906020018083116109ec57829003601f168201915b50505050509050915091509091565b6040805160608101825260008082526020820181905291810191909152610326610a4736849003840184612924565b826119e7565b604080516060810182526000808252602082018190529181019190915261045282611baf565b6040805160608101825260008082526020820181905291810191909152610326610aa236849003840184612924565b82611c3c565b6040805160608101825260008082526020820181905291810191909152610326610ad736849003840184612924565b82611e26565b610aed600c60005414602e6117b5565b8151610b08901580610b0157508251600154145b602f6117b5565b600080805560028054610b1a906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610b46906129f7565b8015610b935780601f10610b6857610100808354040283529160200191610b93565b820191906000526020600020905b815481529060010190602001808311610b7657829003601f168201915b5050505050806020019051810190610bab9190612d1f565b9050610bbf8160a0015143101560306117b5565b7f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf3384604051610bf0929190612dbd565b60405180910390a1610c043415602c6117b5565b8051610c1c906001600160a01b03163314602d6117b5565b610c24612349565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152606080850151845190910152818301805160009052805143930192909252608084015191510152610c7b81611fb8565b50505050565b610c91600c6000541460296117b5565b8151610cac901580610ca557508251600154145b602a6117b5565b600080805560028054610cbe906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610cea906129f7565b8015610d375780601f10610d0c57610100808354040283529160200191610d37565b820191906000526020600020905b815481529060010190602001808311610d1a57829003601f168201915b5050505050806020019051810190610d4f9190612d1f565b9050610d628160a001514310602b6117b5565b7ff83c076bd4c0d71c52b5e6c31f5b75951081ea51d930ed4c540a97b7891392733384604051610d93929190612de5565b60405180910390a1610dac8160400151341460286117b5565b33600081815260066020908152604091829020805462ff00ff19166001179055838201518251938452908301527f61edbf727bd9084fefe0767238fc7f625d506fa1d7edb499d49b6ac84f00f072910160405180910390a1604051600081527f96993735d63f2a1492b9aeab1b9d564618a416400594ad357a91b83e5b905b909060200160405180910390a160008252610e44612349565b815181516001600160a01b0390911690526020808301518251820152604080840180518451909201919091526060808501518451909101528183018051600190525143920191909152516080830151610e9d9190612e25565b602082015160400152610c7b81611fb8565b610ebf600d6000541460326117b5565b8151610eda901580610ed357508251600154145b60336117b5565b600080805560028054610eec906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610f18906129f7565b8015610f655780601f10610f3a57610100808354040283529160200191610f65565b820191906000526020600020905b815481529060010190602001808311610f4857829003601f168201915b5050505050806020019051810190610f7d9190612d3c565b90507fc299decf3d819192b45fbfa5962d20828e9997091c154d6e4234231c271ca3a33384604051610fb0929190612de5565b60405180910390a1610fc98160a00151341460316117b5565b33600081815260046020908152604091829020805462ff00ff1916600117905560a08401518251938452908301527f61edbf727bd9084fefe0767238fc7f625d506fa1d7edb499d49b6ac84f00f072910160405180910390a1604051600081527f71103a215dabf4f17525aa217b70f725e11d5f02dcdf76e19edfc7626a0dc8c79060200160405180910390a16000604083015261106561237f565b815181516001600160a01b03909116905260208083015182519091015260408083015182519091015260608083015182519091015260808083015182519091015260a08083015182519091015260c08201516110c390600190612e25565b602080830180519290925290514391015260a082015160e08301516110e89190612e25565b602082015160400152610c7b8161212e565b61110a600160005414600d6117b5565b815161112590158061111e57508251600154145b600e6117b5565b600080805560028054611137906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054611163906129f7565b80156111b05780601f10611185576101008083540402835291602001916111b0565b820191906000526020600020905b81548152906001019060200180831161119357829003601f168201915b50505050508060200190518101906111c89190612b54565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516111fb929190612dbd565b60405180910390a16112148160c001513414600b6117b5565b805161122c906001600160a01b03163314600c6117b5565b60c08101516040805133815260208101929092527f61edbf727bd9084fefe0767238fc7f625d506fa1d7edb499d49b6ac84f00f072910160405180910390a16112736123bb565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401526080808501519084015260a0808501519084015260c08085015190840152600260005543600155516112d291839101612e3d565b604051602081830303815290604052600290805190602001906112f6929190612407565b5050505050565b61130d600b6000541460266117b5565b815161132890158061132157508251600154145b60276117b5565b60008080556002805461133a906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054611366906129f7565b80156113b35780601f10611388576101008083540402835291602001916113b3565b820191906000526020600020905b81548152906001019060200180831161139657829003601f168201915b50505050508060200190518101906113cb9190612c94565b90507f23ab25ff90ab175f27c06d9c6f572bd8c6711034b3bf4029a9427fb5a21a29cc33846040516113fe929190612de5565b60405180910390a1611412341560256117b5565b6080810151604051339180156108fc02916000818181858888f19350505050158015611442573d6000803e3d6000fd5b50336000908152600560209081526040808320805462ff00ff19166001179055519182527ff6dff325d64e18184947edaac9ba1088c7864ba1d78438dfcd859fba2a71f171910160405180910390a1600060208301526114a061248b565b815181516001600160a01b039091169052602080830151825182015260408084015183519091015260608084015183519091015281015143905260808201516114e99080612e9f565b6020808301510152610c7b8161224f565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611546576115466126bc565b14156115c3576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611587576115876126bc565b6001811115611598576115986126bc565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b6115e360026000541460116117b5565b81516115fe9015806115f757508251600154145b60126117b5565b600080805560028054611610906129f7565b80601f016020809104026020016040519081016040528092919081815260200182805461163c906129f7565b80156116895780601f1061165e57610100808354040283529160200191611689565b820191906000526020600020905b81548152906001019060200180831161166c57829003601f168201915b50505050508060200190518101906116a19190612b54565b90506116ab6124c0565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033856040516116dc929190612dbd565b60405180910390a16116f03415600f6117b5565b8151611708906001600160a01b0316331460106117b5565b8051600390528051600060809091015280516040516000805160206130268339815191529161173691612eb6565b60405180910390a161174661237f565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608086015184519091015260808086015184519091015260a08086015184519091015281830180516000905280514393019290925260c0850151915101526112f68161212e565b816103265760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff166001811115611826576118266126bc565b14156115c3576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff166001811115611587576115876126bc565b61187760056000541460156117b5565b815161189290158061188b57508251600154145b60166117b5565b6000808055600280546118a4906129f7565b80601f01602080910402602001604051908101604052809291908181526020018280546118d0906129f7565b801561191d5780601f106118f25761010080835404028352916020019161191d565b820191906000526020600020905b81548152906001019060200180831161190057829003601f168201915b50505050508060200190518101906119359190612bcc565b905061193f6124c0565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3385604051611970929190612dbd565b60405180910390a1611984341560136117b5565b815161199c906001600160a01b0316331460146117b5565b8051600190528051600060409182015281519051600080516020613026833981519152916119c991612eb6565b60405180910390a160008080556001819055610c7b906002906124f2565b6119f760076000541460196117b5565b8151611a12901580611a0b57508251600154145b601a6117b5565b600080805560028054611a24906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054611a50906129f7565b8015611a9d5780601f10611a7257610100808354040283529160200191611a9d565b820191906000526020600020905b815481529060010190602001808311611a8057829003601f168201915b5050505050806020019051810190611ab59190612c94565b9050611abf6124c0565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3385604051611af0929190612dbd565b60405180910390a1611b04341560176117b5565b8151611b1c906001600160a01b0316331460186117b5565b8051600090819052815160200152805160405160008051602061302683398151915291611b4891612eb6565b60405180910390a1611b58612349565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060808601518451909101528183018051600190528051439301929092526080850151915101526112f681611fb8565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff166001811115611bfb57611bfb6126bc565b14156115c3576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611587576115876126bc565b611c4c600a6000541460236117b5565b8151611c67901580611c6057508251600154145b60246117b5565b600080805560028054611c79906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054611ca5906129f7565b8015611cf25780601f10611cc757610100808354040283529160200191611cf2565b820191906000526020600020905b815481529060010190602001808311611cd557829003601f168201915b5050505050806020019051810190611d0a9190612c94565b9050611d146124c0565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3385604051611d45929190612dbd565b60405180910390a1611d59341560216117b5565b8151611d71906001600160a01b0316331460226117b5565b80516002905280516000606090910152805160405160008051602061302683398151915291611d9f91612eb6565b60405180910390a1611daf61252c565b82516001600160a01b0316815260208084015181830152604080850151818401526060808601519084015260808086015190840152600b6000554360015551611dfa91839101612f4b565b60405160208183030381529060405260029080519060200190611e1e929190612407565b505050505050565b611e36600960005414601e6117b5565b8151611e51901580611e4a57508251600154145b601f6117b5565b600080805560028054611e63906129f7565b80601f0160208091040260200160405190810160405280929190818152602001828054611e8f906129f7565b8015611edc5780601f10611eb157610100808354040283529160200191611edc565b820191906000526020600020905b815481529060010190602001808311611ebf57829003601f168201915b5050505050806020019051810190611ef49190612d1f565b9050611f088160a0015143101560206117b5565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763384604051611f39929190612dbd565b60405180910390a1611f4d3415601c6117b5565b8051611f65906001600160a01b03163314601d6117b5565b611f6d61252c565b81516001600160a01b0316815260208083015181830152604080840151818401526060808501519084015260808085015190840152600a60005543600155516112d291839101612f4b565b6040805180820190915260008082526020820152602082015151156120ac57815160600151602080840151015161200b91600091611ff890600019612e9f565b6120029190612e9f565b1015601b6117b5565b81516060015160208084015101516120239190612e25565b815261202d61256a565b8251516001600160a01b03168152825160209081015181830152835160409081015181840152845160609081015190840152818501518101516080840152835160a0840152600c600055436001555161208891839101612fa9565b60405160208183030381529060405260029080519060200190610c7b929190612407565b81516060015160208084015101516120c49190612e25565b60208201526120d161256a565b8251516001600160a01b031681528251602090810151818301528351604090810151818401528451606090810151908401528185015181015160808401528382015160a08401526009600055436001555161208891839101612fa9565b805160800151602082015151116121e4576121476125af565b8151516001600160a01b03168152815160209081015181830152825160409081015181840152835160609081015190840152835160809081015190840152835160a0908101519084015281840180515160c08501525181015160e0840152600d60005543600155516121bb91839101612fb8565b604051602081830303815290604052600290805190602001906121df929190612407565b505050565b6121ec61248b565b81515181516001600160a01b0390911690528151602090810151825182015282516040908101518351820152835160609081015184519091015281840180518301518385018051919091529051909101519051909101526103268161224f565b50565b61225761252c565b8151516001600160a01b03168152815160209081015181830152825160409081015181840152835160609081015190840152818401518201516080840152600760005543600155516121bb91839101612f4b565b6040518060400160405280600081526020016122d560405180602001604052806000151581525090565b905290565b6040805160c08082018352600080835260208084018290528385018290526060808501839052855160e081018752838152808301849052808701849052908101839052608080820184905260a08083018590529482018490528501528451908101909452835281019190915290565b604051806040016040528061235c612603565b815260408051606081018252600080825260208281018290529282015291015290565b604051806040016040528061239261256a565b81526020016122d560405180606001604052806000815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016123de6122da565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054612413906129f7565b90600052602060002090601f016020900481019282612435576000855561247b565b82601f1061244e57805160ff191683800117855561247b565b8280016001018555821561247b579182015b8281111561247b578251825591602001919060010190612460565b5061248792915061263a565b5090565b604051806040016040528061249e612603565b81526020016122d5604051806040016040528060008152602001600081525090565b6040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b5080546124fe906129f7565b6000825580601f1061250e575050565b601f01602090049060005260206000209081019061224c919061263a565b6040518060a0016040528060006001600160a01b0316815260200161254f6122da565b81526020016000815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200161258d6122da565b8152602001600081526020016000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b031681526020016125d36122da565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806080016040528060006001600160a01b031681526020016126266122da565b815260200160008152602001600081525090565b5b80821115612487576000815560010161263b565b60006040828403121561266157600080fd5b50919050565b60006040828403121561267957600080fd5b612683838361264f565b9392505050565b6001600160a01b038116811461224c57600080fd5b6000602082840312156126b157600080fd5b81356126838161268a565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106126e9576126e96126bc565b8083525060208301511515602083015260408301511515604083015292915050565b80518252602081015160208301526040810151604083015260608101516060830152608081015180516080840152602081015160a0840152604081015160c0840152606081015160e0840152608081015161010084015260a081015161012084015267ffffffffffffffff60c01b60c0820151166101408401525060a08101516121df610160840182516fffffffffffffffffffffffffffffffff19169052565b6101808101610452828461270b565b82815260006020604081840152835180604085015260005b818110156127ef578581018301518582016060015282016127d3565b81811115612801576000606083870101525b50601f01601f191692909201606001949350505050565b6040516020810167ffffffffffffffff8111828210171561284957634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561284957634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561284957634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561284957634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff8111828210171561284957634e487b7160e01b600052604160045260246000fd5b803580151581146115ce57600080fd5b60006040828403121561293657600080fd5b6040516040810181811067ffffffffffffffff8211171561296757634e487b7160e01b600052604160045260246000fd5b6040528235815261297a60208401612914565b60208201529392505050565b6000818303604081121561299957600080fd5b6129a161284f565b8335815291506020601f19820112156129b957600080fd5b506129c2612818565b6129ce60208401612914565b8152602082015292915050565b6000604082840312156129ed57600080fd5b6126838383612986565b600181811c90821680612a0b57607f821691505b6020821081141561266157634e487b7160e01b600052602260045260246000fd5b80516115ce8161268a565b600060208284031215612a4957600080fd5b612a51612818565b905081516fffffffffffffffffffffffffffffffff1981168114612a7457600080fd5b815292915050565b6000818303610180811215612a9057600080fd5b612a98612880565b91508251825260208301516020830152604083015160408301526060830151606083015260e0607f1982011215612ace57600080fd5b50612ad76128b1565b6080830151815260a0830151602082015260c0830151604082015260e08301516060820152610100830151608082015261012083015160a082015261014083015167ffffffffffffffff60c01b81168114612b3157600080fd5b60c08201526080820152612b49836101608401612a37565b60a082015292915050565b60006102408284031215612b6757600080fd5b612b6f6128b1565b8251612b7a8161268a565b8152612b898460208501612a7c565b60208201526101a083015160408201526101c083015160608201526101e0830151608082015261020083015160a08201526102209092015160c083015250919050565b60006101a08284031215612bdf57600080fd5b612be761284f565b8251612bf28161268a565b815261297a8460208501612a7c565b60006102008284031215612c1457600080fd5b60405160a0810181811067ffffffffffffffff82111715612c4557634e487b7160e01b600052604160045260246000fd5b80604052508091508251612c588161268a565b8152612c678460208501612a7c565b60208201526101a083015160408201526101c083015160608201526101e083015160808201525092915050565b60006102008284031215612ca757600080fd5b6126838383612c01565b60006102208284031215612cc457600080fd5b612ccc612880565b90508151612cd98161268a565b8152612ce88360208401612a7c565b60208201526101a082015160408201526101c082015160608201526101e0820151608082015261020082015160a082015292915050565b60006102208284031215612d3257600080fd5b6126838383612cb1565b60006102608284031215612d4f57600080fd5b612d576128e2565b612d6083612a2c565b8152612d6f8460208501612a7c565b60208201526101a083015160408201526101c083015160608201526101e0830151608082015261020083015160a082015261022083015160c08201526102409092015160e083015250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b6001600160a01b038316815260608101612683602083018480518252602090810151511515910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115612e3857612e38612e0f565b500190565b81516001600160a01b03168152602080830151610240830191612e629084018261270b565b5060408301516101a083015260608301516101c083015260808301516101e083015260a083015161020083015260c0909201516102209091015290565b600082821015612eb157612eb1612e0f565b500390565b815160a082019060048110612ecd57612ecd6126bc565b8083525060208301511515602083015260408301511515604083015260608301511515606083015260808301511515608083015292915050565b80516001600160a01b0316825260208082015190612f279084018261270b565b5060408101516101a083015260608101516101c0830152608001516101e090910152565b61020081016104528284612f07565b80516001600160a01b0316825260208082015190612f7a9084018261270b565b5060408101516101a083015260608101516101c083015260808101516101e083015260a0015161020090910152565b61022081016104528284612f5a565b81516001600160a01b03168152602080830151610260830191612fdd9084018261270b565b5060408301516101a083015260608301516101c083015260808301516101e083015260a083015161020083015260c083015161022083015260e090920151610240909101529056fe385b700acb9c5a16396d97c0b604654805d090853851b76400b56b07250c5234a2646970667358221220c91a5a9d724d7fb691d58cd1536866a21dc63fa532f73e6b4dc9d25c6b69651564736f6c634300080c0033`,
  BytecodeLen: 14237,
  Which: `oD`,
  version: 7,
  views: {
    poolDetails: `poolDetails`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:80:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:84:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:197:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:200:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:127:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:164:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:171:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:174:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:140:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:96:23:after expr stmt semicolon',
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
