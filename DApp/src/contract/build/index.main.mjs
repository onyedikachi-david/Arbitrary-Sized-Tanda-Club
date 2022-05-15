// Automatically generated with Reach 0.1.10 (c0bba7d2)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c0bba7d2)';
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
    Payment: ctc0,
    Registration: ctc0
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
  
  const map2_ctc = ctc3;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      5: [ctc0],
      7: [ctc0, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc1],
      11: [ctc0, ctc1, ctc1, ctc1],
      12: [ctc0, ctc1, ctc1, ctc1, ctc1],
      13: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
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
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v335, v340, v348, v426, v433] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'), [ctc2, ctc3, ctc3, ctc3, ctc3]);
  const v437 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:128:15:application call to [unknown function] (defined at: ./index.rsh:128:15:function exp)', 'at ./index.rsh:128:15:application call to [unknown function] (defined at: ./index.rsh:128:15:function exp)'],
    msg: 'in',
    who: 'Any_contribute'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v335, v340, v348, v426, v433, v437],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v340, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v441], secs: v443, time: v442, didSend: v187, from: v440 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_contribute"
        });
      const v446 = stdlib.add(v426, v340);
      sim_r.txns.push({
        amt: v340,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 2, v440, null);
      const v448 = null;
      const v449 = await txn1.getOutput('Any_contribute', 'v448', ctc0, v448);
      
      const v808 = v446;
      const v812 = stdlib.add(v442, v348);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v441], secs: v443, time: v442, didSend: v187, from: v440 } = txn1;
  undefined /* setApiDetails */;
  const v446 = stdlib.add(v426, v340);
  ;
  await stdlib.mapSet(map2, v440, null);
  const v448 = null;
  const v449 = await txn1.getOutput('Any_contribute', 'v448', ctc0, v448);
  if (v187) {
    stdlib.protect(ctc0, await interact.out(v441, v449), {
      at: './index.rsh:129:15:application',
      fs: ['at ./index.rsh:129:15:application call to [unknown function] (defined at: ./index.rsh:129:15:function exp)', 'at ./index.rsh:133:27:application call to "returnFunc" (defined at: ./index.rsh:131:15:function exp)', 'at ./index.rsh:131:15:application call to [unknown function] (defined at: ./index.rsh:131:15:function exp)'],
      msg: 'out',
      who: 'Any_contribute'
      });
    }
  else {
    }
  
  const v808 = v446;
  const v809 = stdlib.sub(stdlib.UInt_max, v442);
  const v810 = stdlib.sub(v809, v348);
  const v811 = stdlib.ge(v810, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v811, {
    at: 'reach standard library:567:15:application',
    fs: ['at reach standard library:575:29:application call to [unknown function] (defined at: reach standard library:564:55:function exp)', 'at ./index.rsh:138:19:application call to "relativeTime" (defined at: reach standard library:570:71:function exp)'],
    msg: null,
    who: 'Any_contribute'
    });
  const v812 = stdlib.add(v442, v348);
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
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v335, v340, v348, v426] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc2, ctc3, ctc3, ctc3]);
  const v476 = ctc.selfAddress();
  const v478 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:166:9:application',
    fs: ['at ./index.rsh:166:9:application call to [unknown function] (defined at: ./index.rsh:166:9:function exp)'],
    msg: 'in',
    who: 'Any_requestPayment'
    });
  const v480 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v476), null);
  let v481;
  switch (v480[0]) {
    case 'None': {
      const v482 = v480[1];
      v481 = false;
      
      break;
      }
    case 'Some': {
      const v483 = v480[1];
      v481 = true;
      
      break;
      }
    }
  const v484 = v481 ? false : true;
  stdlib.assert(v484, {
    at: './index.rsh:170:22:application',
    fs: ['at ./index.rsh:166:9:application call to [unknown function] (defined at: ./index.rsh:169:24:function exp)', 'at ./index.rsh:166:9:application call to [unknown function] (defined at: ./index.rsh:166:9:function exp)'],
    msg: null,
    who: 'Any_requestPayment'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v335, v340, v348, v426, v478],
    evt_cnt: 1,
    funcNum: 10,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:168:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v486], secs: v488, time: v487, didSend: v261, from: v485 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_requestPayment"
        });
      ;
      const v493 = stdlib.sub(v426, v426);
      sim_r.txns.push({
        kind: 'from',
        to: v485,
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 1, v485, null);
      const v495 = null;
      const v496 = await txn1.getOutput('Any_requestPayment', 'v495', ctc0, v495);
      
      const v834 = v493;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v486], secs: v488, time: v487, didSend: v261, from: v485 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v493 = stdlib.sub(v426, v426);
  ;
  await stdlib.mapSet(map1, v485, null);
  const v495 = null;
  const v496 = await txn1.getOutput('Any_requestPayment', 'v495', ctc0, v495);
  stdlib.protect(ctc0, await interact.out(v486, v496), {
    at: './index.rsh:166:9:application',
    fs: ['at ./index.rsh:166:9:application call to [unknown function] (defined at: ./index.rsh:166:9:function exp)', 'at ./index.rsh:175:26:application call to "returnPayFunc" (defined at: ./index.rsh:166:9:function exp)'],
    msg: 'out',
    who: 'Any_requestPayment'
    });
  
  const v834 = v493;
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
  
  const map2_ctc = ctc1;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v335, v340, v342, v348, v349, v363, v371] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'), [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v374 = ctc.selfAddress();
  const v376 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:13:function exp)', 'at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:13:function exp)'],
    msg: 'in',
    who: 'Contributor_register'
    });
  const v378 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v374), null);
  let v379;
  switch (v378[0]) {
    case 'None': {
      const v380 = v378[1];
      v379 = false;
      
      break;
      }
    case 'Some': {
      const v381 = v378[1];
      v379 = true;
      
      break;
      }
    }
  const v382 = v379 ? false : true;
  stdlib.assert(v382, {
    at: './index.rsh:90:26:application',
    fs: ['at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:17:function exp)', 'at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:13:function exp)', 'at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:13:function exp)'],
    msg: null,
    who: 'Contributor_register'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v335, v340, v342, v348, v349, v363, v371, v376],
    evt_cnt: 1,
    funcNum: 13,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v342, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v385], secs: v387, time: v386, didSend: v125, from: v384 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributor_register"
        });
      const v390 = stdlib.add(v371, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v384, null);
      const v392 = null;
      const v393 = await txn1.getOutput('Contributor_register', 'v392', ctc0, v392);
      
      const v398 = stdlib.add(v363, stdlib.checkedBigNumberify('./index.rsh:95:38:decimal', stdlib.UInt_max, '1'));
      const v841 = v398;
      const v843 = v390;
      const v844 = stdlib.le(v398, v349);
      if (v844) {
        sim_r.isHalt = false;
        }
      else {
        const v900 = v390;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v385], secs: v387, time: v386, didSend: v125, from: v384 } = txn1;
  undefined /* setApiDetails */;
  const v390 = stdlib.add(v371, v342);
  ;
  await stdlib.mapSet(map0, v384, null);
  const v392 = null;
  const v393 = await txn1.getOutput('Contributor_register', 'v392', ctc0, v392);
  if (v125) {
    stdlib.protect(ctc0, await interact.out(v385, v393), {
      at: './index.rsh:89:16:application',
      fs: ['at ./index.rsh:89:16:application call to [unknown function] (defined at: ./index.rsh:89:16:function exp)', 'at ./index.rsh:94:25:application call to "callBack" (defined at: ./index.rsh:92:13:function exp)', 'at ./index.rsh:92:13:application call to [unknown function] (defined at: ./index.rsh:92:13:function exp)'],
      msg: 'out',
      who: 'Contributor_register'
      });
    }
  else {
    }
  
  const v398 = stdlib.add(v363, stdlib.checkedBigNumberify('./index.rsh:95:38:decimal', stdlib.UInt_max, '1'));
  const v841 = v398;
  const v843 = v390;
  const v844 = stdlib.le(v398, v349);
  if (v844) {
    return;
    }
  else {
    const v900 = v390;
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
  
  
  const v319 = stdlib.protect(ctc5, interact.getPoolDetails, 'for PoolCreator\'s interact field getPoolDetails');
  const v320 = v319.contributionAmt;
  const v323 = v319.penaltyAmt;
  
  const v330 = stdlib.div(v320, stdlib.checkedBigNumberify('./index.rsh:51:45:decimal', stdlib.UInt_max, '2'));
  const v332 = stdlib.eq(v323, v330);
  stdlib.assert(v332, {
    at: './index.rsh:52:14:application',
    fs: ['at ./index.rsh:58:27:application call to "checkPoolStructure" (defined at: ./index.rsh:50:38:function exp)', 'at ./index.rsh:56:12:application call to [unknown function] (defined at: ./index.rsh:56:16:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v334 = stdlib.gt(v320, stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v334, {
    at: './index.rsh:53:14:application',
    fs: ['at ./index.rsh:58:27:application call to "checkPoolStructure" (defined at: ./index.rsh:50:38:function exp)', 'at ./index.rsh:56:12:application call to [unknown function] (defined at: ./index.rsh:56:16:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v319],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:61:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v336], secs: v338, time: v337, didSend: v40, from: v335 } = txn1;
      
      ;
      const v340 = v336.contributionAmt;
      const v342 = v336.penaltyAmt;
      const v348 = v336.duration;
      const v349 = v336.maxUsers;
      const v350 = stdlib.add(v340, v342);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v336], secs: v338, time: v337, didSend: v40, from: v335 } = txn1;
  ;
  const v340 = v336.contributionAmt;
  const v341 = stdlib.div(v340, stdlib.checkedBigNumberify('./index.rsh:51:45:decimal', stdlib.UInt_max, '2'));
  const v342 = v336.penaltyAmt;
  const v343 = stdlib.eq(v342, v341);
  stdlib.assert(v343, {
    at: './index.rsh:52:14:application',
    fs: ['at ./index.rsh:62:23:application call to "checkPoolStructure" (defined at: ./index.rsh:50:38:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v345 = stdlib.gt(v340, stdlib.checkedBigNumberify('./index.rsh:53:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v345, {
    at: './index.rsh:53:14:application',
    fs: ['at ./index.rsh:62:23:application call to "checkPoolStructure" (defined at: ./index.rsh:50:38:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  const v348 = v336.duration;
  const v349 = v336.maxUsers;
  const v350 = stdlib.add(v340, v342);
  const txn2 = await (ctc.sendrecv({
    args: [v335, v340, v342, v348, v349, v350],
    evt_cnt: 0,
    funcNum: 1,
    lct: v337,
    onlyIf: true,
    out_tys: [],
    pay: [v350, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v353, time: v352, didSend: v59, from: v351 } = txn2;
      
      sim_r.txns.push({
        amt: v350,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v353, time: v352, didSend: v59, from: v351 } = txn2;
  ;
  const v356 = stdlib.addressEq(v335, v351);
  stdlib.assert(v356, {
    at: './index.rsh:72:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  stdlib.protect(ctc0, await interact.readyForContribution(), {
    at: './index.rsh:73:37:application',
    fs: ['at ./index.rsh:73:37:application call to [unknown function] (defined at: ./index.rsh:73:37:function exp)', 'at ./index.rsh:73:37:application call to "liftedInteract" (defined at: ./index.rsh:73:37:application)'],
    msg: 'readyForContribution',
    who: 'PoolCreator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v335, v340, v342, v348, v349, v350],
    evt_cnt: 0,
    funcNum: 2,
    lct: v352,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:75:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v360, time: v359, didSend: v68, from: v358 } = txn3;
      
      ;
      const v362 = ['Registration', null];
      null;
      const v363 = stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '0');
      const v364 = v359;
      const v371 = v350;
      
      if (await (async () => {
        const v373 = stdlib.le(v363, v349);
        
        return v373;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v402 = v364;
        const v409 = v371;
        
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
    tys: [ctc7, ctc2, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v360, time: v359, didSend: v68, from: v358 } = txn3;
  ;
  const v361 = stdlib.addressEq(v335, v358);
  stdlib.assert(v361, {
    at: './index.rsh:75:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v362 = ['Registration', null];
  null;
  let v363 = stdlib.checkedBigNumberify('./index.rsh:86:26:decimal', stdlib.UInt_max, '0');
  let v364 = v359;
  let v371 = v350;
  
  while (await (async () => {
    const v373 = stdlib.le(v363, v349);
    
    return v373;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 13,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v385], secs: v387, time: v386, didSend: v125, from: v384 } = txn4;
    undefined /* setApiDetails */;
    const v390 = stdlib.add(v371, v342);
    ;
    await stdlib.mapSet(map0, v384, null);
    const v392 = null;
    await txn4.getOutput('Contributor_register', 'v392', ctc0, v392);
    const v398 = stdlib.add(v363, stdlib.checkedBigNumberify('./index.rsh:95:38:decimal', stdlib.UInt_max, '1'));
    const cv363 = v398;
    const cv364 = v386;
    const cv371 = v390;
    
    v363 = cv363;
    v364 = cv364;
    v371 = cv371;
    
    continue;
    
    }
  let v402 = v364;
  let v409 = v371;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.sendrecv({
      args: [v335, v340, v348, v409],
      evt_cnt: 0,
      funcNum: 6,
      lct: v402,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:121:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v413, time: v412, didSend: v148, from: v411 } = txn4;
        
        ;
        const v415 = ['Contribution', null];
        null;
        const v418 = true;
        const v419 = v412;
        const v426 = v409;
        
        if (await (async () => {
          
          return v418;})()) {
          const v433 = stdlib.add(v419, v348);
          sim_r.isHalt = false;
          }
        else {
          const v462 = stdlib.add(v419, v348);
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v413, time: v412, didSend: v148, from: v411 } = txn4;
    ;
    const v414 = stdlib.addressEq(v335, v411);
    stdlib.assert(v414, {
      at: './index.rsh:121:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v415 = ['Contribution', null];
    null;
    let v418 = true;
    let v419 = v412;
    let v426 = v409;
    
    while (await (async () => {
      
      return v418;})()) {
      const v430 = stdlib.sub(stdlib.UInt_max, v419);
      const v431 = stdlib.sub(v430, v348);
      const v432 = stdlib.ge(v431, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v432, {
        at: 'reach standard library:567:15:application',
        fs: ['at reach standard library:575:29:application call to [unknown function] (defined at: reach standard library:564:55:function exp)', 'at ./index.rsh:138:19:application call to "relativeTime" (defined at: reach standard library:570:71:function exp)'],
        msg: null,
        who: 'PoolCreator'
        });
      const v433 = stdlib.add(v419, v348);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 11,
        out_tys: [ctc6],
        timeoutAt: ['time', v433],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v335, v340, v348, v426, v433],
          evt_cnt: 0,
          funcNum: 12,
          lct: v419,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:140:16:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v457, time: v456, didSend: v214, from: v455 } = txn6;
            
            ;
            const cv418 = false;
            const cv419 = v456;
            const cv426 = v426;
            
            await (async () => {
              const v418 = cv418;
              const v419 = cv419;
              const v426 = cv426;
              
              if (await (async () => {
                
                return v418;})()) {
                const v430 = stdlib.sub(stdlib.UInt_max, v419);
                const v431 = stdlib.sub(v430, v348);
                const v432 = stdlib.ge(v431, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
                ;
                const v433 = stdlib.add(v419, v348);
                sim_r.isHalt = false;
                }
              else {
                const v462 = stdlib.add(v419, v348);
                sim_r.isHalt = false;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc2, ctc2, ctc2],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v457, time: v456, didSend: v214, from: v455 } = txn6;
        ;
        const v458 = stdlib.addressEq(v335, v455);
        stdlib.assert(v458, {
          at: './index.rsh:140:16:dot',
          fs: ['at ./index.rsh:138:33:application call to [unknown function] (defined at: ./index.rsh:138:33:function exp)'],
          msg: 'sender correct',
          who: 'PoolCreator'
          });
        const cv418 = false;
        const cv419 = v456;
        const cv426 = v426;
        
        v418 = cv418;
        v419 = cv419;
        v426 = cv426;
        
        continue;
        }
      else {
        const {data: [v441], secs: v443, time: v442, didSend: v187, from: v440 } = txn5;
        undefined /* setApiDetails */;
        const v446 = stdlib.add(v426, v340);
        ;
        await stdlib.mapSet(map2, v440, null);
        const v448 = null;
        await txn5.getOutput('Any_contribute', 'v448', ctc0, v448);
        const cv418 = true;
        const cv419 = v442;
        const cv426 = v446;
        
        v418 = cv418;
        v419 = cv419;
        v426 = cv426;
        
        continue;}
      
      }
    const v462 = stdlib.add(v419, v348);
    await ctc.waitUntilTime(v462);
    const txn5 = await (ctc.sendrecv({
      args: [v335, v340, v348, v426, v462],
      evt_cnt: 0,
      funcNum: 8,
      lct: v419,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:150:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v469, time: v468, didSend: v232, from: v467 } = txn5;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc2, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v469, time: v468, didSend: v232, from: v467 } = txn5;
    ;
    const v470 = stdlib.addressEq(v335, v467);
    stdlib.assert(v470, {
      at: './index.rsh:150:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const txn6 = await (ctc.sendrecv({
      args: [v335, v340, v348, v426],
      evt_cnt: 0,
      funcNum: 9,
      lct: v468,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:156:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [], secs: v473, time: v472, didSend: v237, from: v471 } = txn6;
        
        ;
        const v475 = ['Payment', null];
        null;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc2, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v473, time: v472, didSend: v237, from: v471 } = txn6;
    ;
    const v474 = stdlib.addressEq(v335, v471);
    stdlib.assert(v474, {
      at: './index.rsh:156:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v475 = ['Payment', null];
    null;
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v486], secs: v488, time: v487, didSend: v261, from: v485 } = txn7;
    undefined /* setApiDetails */;
    ;
    const v493 = stdlib.sub(v426, v426);
    ;
    await stdlib.mapSet(map1, v485, null);
    const v495 = null;
    await txn7.getOutput('Any_requestPayment', 'v495', ctc0, v495);
    const cv402 = v487;
    const cv409 = v493;
    
    v402 = cv402;
    v409 = cv409;
    
    continue;
    
    
    
    
    
    
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v335],
    evt_cnt: 0,
    funcNum: 5,
    lct: v402,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:182:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [], secs: v504, time: v503, didSend: v280, from: v502 } = txn4;
      
      ;
      const v506 = ['Finished', null];
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
    tys: [ctc7],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v504, time: v503, didSend: v280, from: v502 } = txn4;
  ;
  const v505 = stdlib.addressEq(v335, v502);
  stdlib.assert(v505, {
    at: './index.rsh:182:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v506 = ['Finished', null];
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
    pure: [],
    sigs: [`Any_contribute()byte[0]`, `Any_requestPayment()byte[0]`, `Contributor_register()byte[0]`]
    },
  appApproval: `BiAUAAEoIDA4AgwNCAtACQoFA7eT8dwMl/bqjw0GByYCAQAAIjUAMRhBBgQpZEkiWzUBIQlbNQIxGSMSQQAKMQAoIQ+vZkIF0DYaABdJQQAwIjUEIzUGSSEQDEAAF0khEQxAAAghERJEKUIA+yEQEkQpQgA5gYTLwvwDEkQpQgFiNhoCFzUENhoDNhoBF0khCQxAAn9JIQoMQAE4SSEHDEAAxEkhCAxAAHYhCBJEIQg0ARJENARJIhJMNAISEUQoZEk1AyRbNf9JNQU1/oAE7X69+zT+ULA0/4gFbDEAKDEAiAVVIyJMVmaACAAAAAAAAAGIsCk1BzQDVwAgNAMlWzT/NAMhBFs0AyEFWzQDIQtbIwgyBjQDgUhbNP8IQgPHSCEHNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEyqvON7AyBjQDIQVbD0Q0/zEAEkQ0/zQDJVs0AyRbIjIGNAMhBFtCA/xIIQc0ARJENARJIhJMNAISEUQoZEk1AyVbNf9JNQU1/oAEn9ybtTT+ULAyBjQDIQVbDEQ0/4gEqTEAKDEAiASSIyEGTFZmgAgAAAAAAAABwLApNQc0A1cAIDT/NAMkWyMyBjQDIQRbNP8IQgOPSSEMDEAA1EkhDQxAAGxIIQo0ARJENARJIhJMNAISEUQoZEk1AyEEWzX/STUFNf6ABN908jo0/lCwsSKyATT/sggjshAxALIHszEAKDEAiAQUIyNMVmaACAAAAAAAAAHvsCk1BzQDVwAgNAMlWzQDJFsyBjT/SQlCAutIIQ00ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8lWzX+JFs1/SEEWzX8gASiBWaOsDT/MQASRIAFzwGMrAKwNP80/hZQNP0WUDT8FlAoSwFXADhnSCEKNQEyBjUCQgNNSCEMNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4kWzX9IQRbNfwhBVs1+4AEF/zbLrAyBjT7D0Q0/zEAEkQ0/zT+FlA0/RZQNPwWUChLAVcAOGdIIQ01ATIGNQJCAuhJIQYMQADYSSEODEAAfkkhEgxAAEkhEhJEIRM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gARhtKwMsDT/MQASRIAFzwGMrACwNP80AyVbNAMkWyMyBjQDIQRbQgHxSCEONAESRDQESSISTDQCEhFEKGQ1A4AEzJmSXLA0AzEAEkSABc8BjKwBsEICQCEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABEGxQE2wNP8xABJEgAXPAYysA7A0/zQDJVs0AyRbNAMhBFs0AyEFWyIyBjQDIQtbQgD0SSMMQABwSCM0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iRbNf0hBFs1/CEFWzX7IQtbNfqABJqLkXSwNPqIAg40/zEAEkQ0/zT+FlA0/RZQNPwWUDT7FlA0+hZQKEsBVwBIZ0ghBjUBMgY1AkIBk0iBoI0GiAHXIjQBEkQ0BEkiEkw0AhIRREk1BTX/gARHUZUaNP9QsDT/Ils1/jT/gRhbSTX9NP4hBgoSRDT+Ig1ENP8hCVs1/DT/gRBbNfs0/jT9CDX6MQA0/hZQNP0WUDT8FlA0+xZQNPoWUChLAVcASGdIIzUBMgY1AkIBFTX/Nf41/TX8Nfs1+jX5Nfg0/TT8DkEALTT4NPkWUDT6FlA0+xZQNPwWUDT9FlA0/xZQKEsBVwBQZ0ghCDUBMgY1AkIA0DT4NPk0+zT+NP9CAAA1/zX+Nf01/Ek1+zT8FlA0/RZQNP8WUChLAVcAOGdIIRM1ATIGNQJCAJk1/zX+Nf01/DX7Nfo0/UEAQIH///////////8BNP4JNPwJIg9ENP40/Ag1+TT6NPsWUDT8FlA0/xZQNPkWUChLAVcAQGdIIQc1ATIGNQJCAEg0/jT8CDX5NPo0+xZQNPwWUDT/FlA0+RZQKEsBVwBAZ0ghDDUBMgY1AkIAHDEZIQ4SRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghD6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 3,
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
                "name": "v336",
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
            "internalType": "enum _enum_T9",
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
        "internalType": "struct T9",
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
                "name": "v336",
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
        "internalType": "struct T8",
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
                "name": "v486",
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
                "name": "v441",
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
        "internalType": "struct T8",
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
                "name": "v385",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
    "name": "_reach_oe_v392",
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
    "name": "_reach_oe_v448",
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
    "name": "_reach_oe_v495",
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
        "internalType": "struct T8",
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
                "name": "v486",
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
                "name": "v441",
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
        "internalType": "struct T8",
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
                "name": "v385",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
        "internalType": "struct T8",
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
  Bytecode: `0x608060405260405162002e3e38038062002e3e8339810160408190526200002691620003a8565b60008080554360035560408051602081018252918252517f8feaf1d0bfcc4fa330a629199a35f88277bf82201ac8c0e341f9c4957bec7b80906200006e9033908590620004c1565b60405180910390a16200008434156007620001a1565b60208201515151620000b1906200009e9060029062000586565b60208401515160600151146008620001a1565b60208201515151620000c79015156009620001a1565b60208201515160608101519051620000e09190620005a9565b81526040805160c08082018352600060208084018281528486018381526060808701858152608080890187815260a0808b0189815233808d528f8a01805151518a5280515188015189528051518b0151875251518e015184528e51825260019a8b905543909a558c51808a019a909a529651898d0152945193880193909352905190860152519084015251828401528451808303909301835260e090910190935280519192620001979260029290910190620001cb565b505050506200060d565b81620001c75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001d990620005d0565b90600052602060002090601f016020900481019282620001fd576000855562000248565b82601f106200021857805160ff191683800117855562000248565b8280016001018555821562000248579182015b82811115620002485782518255916020019190600101906200022b565b50620002569291506200025a565b5090565b5b808211156200025657600081556001016200025b565b604080519081016001600160401b0381118282101715620002a257634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b0381118282101715620002a257634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715620002a257634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715620002a257634e487b7160e01b600052604160045260246000fd5b6000602082840312156200034e57600080fd5b604051602081016001600160401b03811182821017156200037f57634e487b7160e01b600052604160045260246000fd5b604052825190915081906001600160801b031981168114620003a057600080fd5b905292915050565b60008183036101a0811215620003bd57600080fd5b620003c762000271565b8351815261018080601f1984011215620003e057600080fd5b620003ea620002a8565b620003f4620002d9565b6020870151815260408701516020820152606087015160408201526080870151606082015260e0609f19860112156200042c57600080fd5b620004366200030a565b60a088810151825260c0890151602083015260e0890151604083015261010089015160608301526101208901516080830152610140890151908201526101608801519095506001600160c01b0319811681146200049257600080fd5b60c086015260808101859052620004ac888885016200033b565b60a08201528152602083015250949350505050565b60006101c08201905060018060a01b038416825282516020830152602083015151805160408401526020810151606084015260408101516080840152606081015160a08401526080810151805160c0850152602081015160e085015260408101516101008501526060810151610120850152608081015161014085015260a081015161016085015260018060c01b031960c0820151166101808501525060a081015190506200057e6101a0840182516001600160801b0319169052565b509392505050565b600082620005a457634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115620005cb57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620005e557607f821691505b602082108114156200060757634e487b7160e01b600052602260045260246000fd5b50919050565b612821806200061d6000396000f3fe60806040526004361061010c5760003560e01c80637f33c0f51161009a578063ab53f2c611610061578063ab53f2c614610248578063c79800371461026b578063cadc2e7a1461027e578063de7369981461029e578063e533a29d146102b157005b80637f33c0f5146101e5578063817d57f3146101ed578063832307571461020d5780638e31476914610222578063a9b9855c1461023557005b80632c10a159116100de5780632c10a159146101775780632d27d46c1461018a5780633bc5b7bf1461019257806379aba123146101bf5780637eea518c146101d257005b806311faee8c1461011557806316013779146101285780631a15cef81461013b5780631e93b0f11461015857005b3661011357005b005b61011361012336600461213c565b6102c4565b61011361013636600461213c565b6102fd565b610143610332565b60405190151581526020015b60405180910390f35b34801561016457600080fd5b506003545b60405190815260200161014f565b61011361018536600461213c565b61037e565b6101436103b3565b34801561019e57600080fd5b506101b26101ad366004612174565b6103ff565b60405161014f91906121a7565b6101136101cd36600461213c565b61042b565b6101136101e036600461213c565b610460565b610143610495565b3480156101f957600080fd5b506101b2610208366004612174565b6104de565b34801561021957600080fd5b50600154610169565b61011361023036600461213c565b610504565b61011361024336600461213c565b610539565b34801561025457600080fd5b5061025d61056e565b60405161014f9291906121e0565b61011361027936600461213c565b61060b565b34801561028a57600080fd5b506101b2610299366004612174565b610640565b6101136102ac36600461213c565b610666565b6101136102bf36600461213c565b61069b565b60408051606081018252600080825260208201819052918101919091526102f96102f33684900384018461224d565b826106d0565b5050565b60408051606081018252600080825260208201819052918101919091526102f961032c3684900384018461235a565b82610868565b60408051606081018252600080825260208201819052918101829052610356611ef8565b60408051602080820190925260008152908201526103748183610a49565b5060400151919050565b60408051606081018252600080825260208201819052918101919091526102f96103ad3684900384018461224d565b82610c49565b604080516060810182526000808252602082018190529181018290526103d7611ef8565b60408051602080820190925260008152908201526103f58183610e6b565b5060200151919050565b60408051606081018252600080825260208201819052918101919091526104258261105c565b92915050565b60408051606081018252600080825260208201819052918101919091526102f961045a3684900384018461235a565b82610e6b565b60408051606081018252600080825260208201819052918101919091526102f961048f3684900384018461224d565b82611135565b604080516060810182526000808252602082018190529181018290526104b9611ef8565b60408051602080820190925260008152908201526104d78183610868565b5051919050565b60408051606081018252600080825260208201819052918101919091526104258261130b565b60408051606081018252600080825260208201819052918101919091526102f96105333684900384018461224d565b82611398565b60408051606081018252600080825260208201819052918101919091526102f96105683684900384018461235a565b82610a49565b60006060600054600280805461058390612376565b80601f01602080910402602001604051908101604052809291908181526020018280546105af90612376565b80156105fc5780601f106105d1576101008083540402835291602001916105fc565b820191906000526020600020905b8154815290600101906020018083116105df57829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102f961063a3684900384018461224d565b82611518565b6040805160608101825260008082526020820181905291810191909152610425826116d4565b60408051606081018252600080825260208201819052918101919091526102f96106953684900384018461224d565b82611761565b60408051606081018252600080825260208201819052918101919091526102f96106ca3684900384018461224d565b8261196d565b6106e0600c60005414602d611b21565b81516106fb9015806106f457508251600154145b602e611b21565b60008080556002805461070d90612376565b80601f016020809104026020016040519081016040528092919081815260200182805461073990612376565b80156107865780601f1061075b57610100808354040283529160200191610786565b820191906000526020600020905b81548152906001019060200180831161076957829003601f168201915b505050505080602001905181019061079e9190612434565b90506107b28160800151431015602f611b21565b7f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf33846040516107e3929190612450565b60405180910390a16107f73415602b611b21565b805161080f906001600160a01b03163314602c611b21565b610817611f27565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015281830180516000905280514393019290925260608401519151015261086281611b46565b50505050565b610878600c600054146028611b21565b815161089390158061088c57508251600154145b6029611b21565b6000808055600280546108a590612376565b80601f01602080910402602001604051908101604052809291908181526020018280546108d190612376565b801561091e5780601f106108f35761010080835404028352916020019161091e565b820191906000526020600020905b81548152906001019060200180831161090157829003601f168201915b50505050508060200190518101906109369190612434565b905061094981608001514310602a611b21565b7ff83c076bd4c0d71c52b5e6c31f5b75951081ea51d930ed4c540a97b789139273338460405161097a929190612478565b60405180910390a1610993816020015134146027611b21565b336000908152600660209081526040808320805462ff00ff19166001179055519182527f2f90fb362011fe559b88e7811bcd6c4cf1d625ae0e23d61b312b84d249e32179910160405180910390a1600082526109ed611f27565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528183018051600190525143920191909152516060830151610a3791906124b8565b60208201516040015261086281611b46565b610a59600d600054146031611b21565b8151610a74901580610a6d57508251600154145b6032611b21565b600080805560028054610a8690612376565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab290612376565b8015610aff5780601f10610ad457610100808354040283529160200191610aff565b820191906000526020600020905b815481529060010190602001808311610ae257829003601f168201915b5050505050806020019051810190610b1791906124d0565b90507fc299decf3d819192b45fbfa5962d20828e9997091c154d6e4234231c271ca3a33384604051610b4a929190612478565b60405180910390a1610b63816040015134146030611b21565b336000908152600460209081526040808320805462ff00ff19166001179055519182527f94cd44bef74fe865749796f3735137b453ef831636c16cd60f34a2f3a82d5299910160405180910390a160006040830152610bc0611f6e565b815181516001600160a01b03909116905260208083015182519091015260408083015182519091015260608083015182519091015260808083015182519091015260a0820151610c12906001906124b8565b6020808301805192909252905143910152604082015160c0830151610c3791906124b8565b60208201516040015261086281611cf3565b610c59600160005414600c611b21565b8151610c74901580610c6d57508251600154145b600d611b21565b600080805560028054610c8690612376565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb290612376565b8015610cff5780601f10610cd457610100808354040283529160200191610cff565b820191906000526020600020905b815481529060010190602001808311610ce257829003601f168201915b5050505050806020019051810190610d17919061256b565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610d4a929190612450565b60405180910390a1610d638160a001513414600a611b21565b8051610d7b906001600160a01b03163314600b611b21565b610dbd6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b03168082526020808401518184019081526040808601518186019081526060808801518188019081526080808a0151818a0190815260a0808c0151818c019081526002600055436001558751998a019a909a5296519588019590955292519186019190915251908401525190820152905160c082015260e0015b60405160208183030381529060405260029080519060200190610e64929190611fdd565b5050505050565b610e7b600b600054146025611b21565b8151610e96901580610e8f57508251600154145b6026611b21565b600080805560028054610ea890612376565b80601f0160208091040260200160405190810160405280929190818152602001828054610ed490612376565b8015610f215780601f10610ef657610100808354040283529160200191610f21565b820191906000526020600020905b815481529060010190602001808311610f0457829003601f168201915b5050505050806020019051810190610f39919061267b565b90507f23ab25ff90ab175f27c06d9c6f572bd8c6711034b3bf4029a9427fb5a21a29cc3384604051610f6c929190612478565b60405180910390a1610f8034156024611b21565b6060810151604051339180156108fc02916000818181858888f19350505050158015610fb0573d6000803e3d6000fd5b50336000908152600560209081526040808320805462ff00ff19166001179055519182527fe588daacde14e6cd5b4a0f8b1e9e0a74f44053e5ff3167605f8a35b68d2750da910160405180910390a16000602083015261100e612061565b815181516001600160a01b0390911690526020808301518251820152604080840151835190910152810151439052606082015161104b9080612697565b602080830151015261086281611e7c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156110a8576110a8612191565b1415611125576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156110e9576110e9612191565b60018111156110fa576110fa612191565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b6111456002600054146010611b21565b815161116090158061115957508251600154145b6011611b21565b60008080556002805461117290612376565b80601f016020809104026020016040519081016040528092919081815260200182805461119e90612376565b80156111eb5780601f106111c0576101008083540402835291602001916111eb565b820191906000526020600020905b8154815290600101906020018083116111ce57829003601f168201915b5050505050806020019051810190611203919061256b565b905061120d6120a7565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338560405161123e929190612450565b60405180910390a16112523415600e611b21565b815161126a906001600160a01b03163314600f611b21565b8051600390528051600060809091015280516040516000805160206127cc83398151915291611298916126ae565b60405180910390a16112a8611f6e565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608086015184519091015260808086015184519091015281830180516000905280514393019290925260a085015191510152610e6481611cf3565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff16600181111561135757611357612191565b1415611125576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156110e9576110e9612191565b6113a86005600054146014611b21565b81516113c39015806113bc57508251600154145b6015611b21565b6000808055600280546113d590612376565b80601f016020809104026020016040519081016040528092919081815260200182805461140190612376565b801561144e5780601f106114235761010080835404028352916020019161144e565b820191906000526020600020905b81548152906001019060200180831161143157829003601f168201915b505050505080602001905181019061146691906126ff565b90506114706120a7565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33856040516114a1929190612450565b60405180910390a16114b534156012611b21565b81516114cd906001600160a01b031633146013611b21565b80516001905280516000604091820152815190516000805160206127cc833981519152916114fa916126ae565b60405180910390a160008080556001819055610862906002906120d9565b6115286007600054146018611b21565b815161154390158061153c57508251600154145b6019611b21565b60008080556002805461155590612376565b80601f016020809104026020016040519081016040528092919081815260200182805461158190612376565b80156115ce5780601f106115a3576101008083540402835291602001916115ce565b820191906000526020600020905b8154815290600101906020018083116115b157829003601f168201915b50505050508060200190518101906115e6919061267b565b90506115f06120a7565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3385604051611621929190612450565b60405180910390a161163534156016611b21565b815161164d906001600160a01b031633146017611b21565b805160009081905281516020015280516040516000805160206127cc83398151915291611679916126ae565b60405180910390a1611689611f27565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152818301805160019052805143930192909252606085015191510152610e6481611b46565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561172057611720612191565b1415611125576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156110e9576110e9612191565b611771600a600054146022611b21565b815161178c90158061178557508251600154145b6023611b21565b60008080556002805461179e90612376565b80601f01602080910402602001604051908101604052809291908181526020018280546117ca90612376565b80156118175780601f106117ec57610100808354040283529160200191611817565b820191906000526020600020905b8154815290600101906020018083116117fa57829003601f168201915b505050505080602001905181019061182f919061267b565b90506118396120a7565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd338560405161186a929190612450565b60405180910390a161187e34156020611b21565b8151611896906001600160a01b031633146021611b21565b8051600290528051600060609091015280516040516000805160206127cc833981519152916118c4916126ae565b60405180910390a1611900604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b82516001600160a01b03168152602080840151818301526040808501518184015260608086015190840152600b600055436001555161194191839101612759565b60405160208183030381529060405260029080519060200190611965929190611fdd565b505050505050565b61197d600960005414601d611b21565b815161199890158061199157508251600154145b601e611b21565b6000808055600280546119aa90612376565b80601f01602080910402602001604051908101604052809291908181526020018280546119d690612376565b8015611a235780601f106119f857610100808354040283529160200191611a23565b820191906000526020600020905b815481529060010190602001808311611a0657829003601f168201915b5050505050806020019051810190611a3b9190612434565b9050611a4f8160800151431015601f611b21565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763384604051611a80929190612450565b60405180910390a1611a943415601b611b21565b8051611aac906001600160a01b03163314601c611b21565b611ae0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b03168152602080830151818301526040808401518184015260608085015190840152600a6000554360015551610e4091839101612759565b816102f95760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080518082019091526000808252602082015260208201515115611c46578151604001516020808401510151611b9991600091611b8690600019612697565b611b909190612697565b1015601a611b21565b8151604001516020808401510151611bb191906124b8565b81526040805160a0810182526000808252602080830182815283850183815260608501848152608086018581528951516001600160a01b031687528951850151909352885187015190915287830151860151905285519052600c9091554360015591519091611c229183910161278d565b60405160208183030381529060405260029080519060200190610862929190611fdd565b8151604001516020808401510151611c5e91906124b8565b816020018181525050611ca26040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b0316815282516020908101518183015283516040908101518184015281850151810151606084015283820151608084015260096000554360015551611c229183910161278d565b80516080015160208201515111611e1b57611d4d6040518060e0016040528060006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b03168082528251602090810151818401908152845160409081015181860190815286516060908101518188019081528851608090810151818a01908152878b0180515160a0808d01918252915188015160c0808e01918252600d6000554360015589519b8c019c909c529851978a019790975294519388019390935290519086015251908401525192820192909252905160e0820152610100015b60405160208183030381529060405260029080519060200190611e16929190611fdd565b505050565b611e23612061565b81515181516001600160a01b03909116905281516020908101518251820152825160600151825160409081019190915281840180518301518385018051919091529051909101519051909101526102f981611e7c565b50565b611eb0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015281840151820151606084015260076000554360015551611df291839101612759565b604051806040016040528060008152602001611f2260405180602001604052806000151581525090565b905290565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b6040518060400160405280611fb46040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8152602001611f2260405180606001604052806000815260200160008152602001600081525090565b828054611fe990612376565b90600052602060002090601f01602090048101928261200b5760008555612051565b82601f1061202457805160ff1916838001178555612051565b82800160010185558215612051579182015b82811115612051578251825591602001919060010190612036565b5061205d92915061210f565b5090565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611f22604051806040016040528060008152602001600081525090565b6040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b5080546120e590612376565b6000825580601f106120f5575050565b601f016020900490600052602060002090810190611e7991905b5b8082111561205d5760008155600101612110565b60006040828403121561213657600080fd5b50919050565b60006040828403121561214e57600080fd5b6121588383612124565b9392505050565b6001600160a01b0381168114611e7957600080fd5b60006020828403121561218657600080fd5b81356121588161215f565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106121be576121be612191565b8083525060208301511515602083015260408301511515604083015292915050565b82815260006020604081840152835180604085015260005b81811015612214578581018301518582016060015282016121f8565b81811115612226576000606083870101525b50601f01601f191692909201606001949350505050565b8035801515811461113057600080fd5b60006040828403121561225f57600080fd5b6040516040810181811067ffffffffffffffff8211171561229057634e487b7160e01b600052604160045260246000fd5b604052823581526122a36020840161223d565b60208201529392505050565b60008183036040808212156122c357600080fd5b805181810167ffffffffffffffff82821081831117156122f357634e487b7160e01b600052604160045260246000fd5b818452829550863583526020601f198601121561230f57600080fd5b83519450602085019150848210818311171561233b57634e487b7160e01b600052604160045260246000fd5b50825261234a6020860161223d565b8352602001919091525092915050565b60006040828403121561236c57600080fd5b61215883836122af565b600181811c9082168061238a57607f821691505b6020821081141561213657634e487b7160e01b600052602260045260246000fd5b600060a082840312156123bd57600080fd5b60405160a0810181811067ffffffffffffffff821117156123ee57634e487b7160e01b600052604160045260246000fd5b806040525080915082516124018161215f565b80825250602083015160208201526040830151604082015260608301516060820152608083015160808201525092915050565b600060a0828403121561244657600080fd5b61215883836123ab565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b6001600160a01b038316815260608101612158602083018480518252602090810151511515910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156124cb576124cb6124a2565b500190565b600060e082840312156124e257600080fd5b60405160e0810181811067ffffffffffffffff8211171561251357634e487b7160e01b600052604160045260246000fd5b60405282516125218161215f565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060c0828403121561257d57600080fd5b60405160c0810181811067ffffffffffffffff821117156125ae57634e487b7160e01b600052604160045260246000fd5b60405282516125bc8161215f565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60006080828403121561260e57600080fd5b6040516080810181811067ffffffffffffffff8211171561263f57634e487b7160e01b600052604160045260246000fd5b806040525080915082516126528161215f565b808252506020830151602082015260408301516040820152606083015160608201525092915050565b60006080828403121561268d57600080fd5b61215883836125fc565b6000828210156126a9576126a96124a2565b500390565b815160a0820190600481106126c5576126c5612191565b8083525060208301511515602083015260408301511515604083015260608301511515606083015260808301511515608083015292915050565b60006020828403121561271157600080fd5b6040516020810181811067ffffffffffffffff8211171561274257634e487b7160e01b600052604160045260246000fd5b60405282516127508161215f565b81529392505050565b81516001600160a01b0316815260208083015190820152604080830151908201526060808301519082015260808101610425565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0810161042556fe385b700acb9c5a16396d97c0b604654805d090853851b76400b56b07250c5234a2646970667358221220bd78a3885156fa4121b798e9a883915578bb06892fc2bfa18ed3eb41fcef904b64736f6c634300080c0033`,
  BytecodeLen: 11838,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:71:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:181:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:184:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:116:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:148:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:155:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:158:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:125:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:86:23:after expr stmt semicolon',
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
