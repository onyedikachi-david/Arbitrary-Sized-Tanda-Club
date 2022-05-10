// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Struct([['poolName', ctc1], ['poolDescription', ctc1], ['contributionAmt', ctc2], ['penaltyAmt', ctc2], ['duration', ctc2]]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  const map1_ctc = ctc5;
  
  
  return {
    infos: {
      contributed: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v255, v256, v261, v263, v276] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v255, v256, v261, v263, v276, v278] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v255, v256, v261, v284, v290, v299] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v255, v256, v261, v284, v290, v324, v329] = svs;
            return (await ((async () => {
              
              
              return v324;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
            const [v255, v256, v261, v284, v290, v324, v329, v350] = svs;
            return (await ((async () => {
              
              
              return v324;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      end: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v255, v256, v261, v263, v276] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v255, v256, v261, v263, v276, v278] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v255, v256, v261, v284, v290, v299] = svs;
            return (await ((async () => {
              
              
              return v290;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v255, v256, v261, v284, v290, v324, v329] = svs;
            return (await ((async () => {
              
              
              return v290;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
            const [v255, v256, v261, v284, v290, v324, v329, v350] = svs;
            return (await ((async () => {
              
              
              return v290;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      paid: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v255, v256, v261, v263, v276] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v255, v256, v261, v263, v276, v278] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v255, v256, v261, v284, v290, v299] = svs;
            return (await ((async () => {
              
              
              return v284;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v255, v256, v261, v284, v290, v324, v329] = svs;
            return (await ((async () => {
              
              
              return v284;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
            const [v255, v256, v261, v284, v290, v324, v329, v350] = svs;
            return (await ((async () => {
              
              
              return v284;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      pooldetails: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v255, v256, v261, v263, v276] = svs;
            return (await ((async () => {
              
              
              return v256;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v255, v256, v261, v263, v276, v278] = svs;
            return (await ((async () => {
              
              
              return v256;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v255, v256, v261, v284, v290, v299] = svs;
            return (await ((async () => {
              
              
              return v256;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v255, v256, v261, v284, v290, v324, v329] = svs;
            return (await ((async () => {
              
              
              return v256;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
            const [v255, v256, v261, v284, v290, v324, v329, v350] = svs;
            return (await ((async () => {
              
              
              return v256;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      remainingAmt: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v255, v256, v261, v263, v276] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v255, v256, v261, v263, v276, v278] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v255, v256, v261, v284, v290, v299] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v255, v256, v261, v284, v290, v324, v329] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
            const [v255, v256, v261, v284, v290, v324, v329, v350] = svs;
            stdlib.assert(false, 'illegal view')
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      totalContributed: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v255, v256, v261, v263, v276] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
            const [v255, v256, v261, v263, v276, v278] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v255, v256, v261, v284, v290, v299] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v255, v256, v261, v284, v290, v324, v329] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
            const [v255, v256, v261, v284, v290, v324, v329, v350] = svs;
            stdlib.assert(false, 'illegal view')
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc3, ctc2, ctc2, ctc2],
      2: [ctc0, ctc3, ctc2, ctc2, ctc2, ctc2],
      5: [ctc0, ctc3, ctc2, ctc0, ctc2, ctc2],
      6: [ctc0, ctc3, ctc2, ctc0, ctc2, ctc0, ctc2],
      7: [ctc0, ctc3, ctc2, ctc0, ctc2, ctc0, ctc2, ctc2]
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
export async function _Any_requestPayment7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Any_requestPayment7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Any_requestPayment7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Struct([['poolName', ctc3], ['poolDescription', ctc3], ['contributionAmt', ctc4], ['penaltyAmt', ctc4], ['duration', ctc4]]);
  const ctc6 = stdlib.T_Tuple([]);
  
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
  
  
  const [v255, v256, v261, v284, v290, v324, v329, v350] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc2, ctc5, ctc4, ctc2, ctc4, ctc2, ctc4, ctc4]);
  const v352 = ctc.selfAddress();
  const v354 = stdlib.protect(ctc6, await interact.in(), {
    at: './final.rsh:203:5:application',
    fs: ['at ./final.rsh:203:5:application call to [unknown function] (defined at: ./final.rsh:203:5:function exp)'],
    msg: 'in',
    who: 'Any_requestPayment'
    });
  const v356 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v352), null);
  let v357;
  switch (v356[0]) {
    case 'None': {
      const v358 = v356[1];
      v357 = false;
      
      break;
      }
    case 'Some': {
      const v359 = v356[1];
      v357 = true;
      
      break;
      }
    }
  const v360 = v357 ? false : true;
  stdlib.assert(v360, {
    at: './final.rsh:206:29:application',
    fs: ['at ./final.rsh:203:5:application call to [unknown function] (defined at: ./final.rsh:206:20:function exp)', 'at ./final.rsh:203:5:application call to [unknown function] (defined at: ./final.rsh:203:5:function exp)'],
    msg: null,
    who: 'Any_requestPayment'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v255, v256, v261, v284, v290, v324, v329, v350, v354],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./final.rsh:205:20:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v362], secs: v364, time: v363, didSend: v197, from: v361 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Any_requestPayment"
        });
      ;
      const v365 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v361), null);
      let v366;
      switch (v365[0]) {
        case 'None': {
          const v367 = v365[1];
          v366 = false;
          
          break;
          }
        case 'Some': {
          const v368 = v365[1];
          v366 = true;
          
          break;
          }
        }
      const v369 = v366 ? false : true;
      ;
      const v374 = stdlib.sub(v329, v329);
      sim_r.txns.push({
        amt: v329,
        kind: 'from',
        to: v361,
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 1, v361, null);
      const v376 = null;
      const v377 = await txn1.getOutput('Any_requestPayment', 'v376', ctc0, v376);
      
      const v639 = v374;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc4, ctc2, ctc4, ctc2, ctc4, ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v362], secs: v364, time: v363, didSend: v197, from: v361 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v365 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v361), null);
  let v366;
  switch (v365[0]) {
    case 'None': {
      const v367 = v365[1];
      v366 = false;
      
      break;
      }
    case 'Some': {
      const v368 = v365[1];
      v366 = true;
      
      break;
      }
    }
  const v369 = v366 ? false : true;
  stdlib.assert(v369, {
    at: './final.rsh:207:14:application',
    fs: [],
    msg: null,
    who: 'Any_requestPayment'
    });
  const v374 = stdlib.sub(v329, v329);
  ;
  await stdlib.mapSet(map1, v361, null);
  const v376 = null;
  const v377 = await txn1.getOutput('Any_requestPayment', 'v376', ctc0, v376);
  stdlib.protect(ctc0, await interact.out(v362, v377), {
    at: './final.rsh:203:5:application',
    fs: ['at ./final.rsh:203:5:application call to [unknown function] (defined at: ./final.rsh:203:5:function exp)', 'at ./final.rsh:211:11:application call to "k2" (defined at: ./final.rsh:203:5:function exp)'],
    msg: 'out',
    who: 'Any_requestPayment'
    });
  
  const v639 = v374;
  return;
  
  
  
  };
export async function _Contributor_contribute5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Contributor_contribute5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Contributor_contribute5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Struct([['poolName', ctc3], ['poolDescription', ctc3], ['contributionAmt', ctc4], ['penaltyAmt', ctc4], ['duration', ctc4]]);
  const ctc6 = stdlib.T_Tuple([]);
  
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
  
  
  const [v255, v256, v261, v284, v290, v299] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc2, ctc5, ctc4, ctc2, ctc4, ctc4]);
  const v315 = ctc.selfAddress();
  const v317 = stdlib.protect(ctc6, await interact.in(), {
    at: './final.rsh:183:5:application',
    fs: ['at ./final.rsh:183:5:application call to [unknown function] (defined at: ./final.rsh:183:5:function exp)'],
    msg: 'in',
    who: 'Contributor_contribute'
    });
  const v319 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v315), null);
  let v320;
  switch (v319[0]) {
    case 'None': {
      const v321 = v319[1];
      v320 = false;
      
      break;
      }
    case 'Some': {
      const v322 = v319[1];
      v320 = true;
      
      break;
      }
    }
  const v323 = v320 ? false : true;
  stdlib.assert(v323, {
    at: './final.rsh:186:29:application',
    fs: ['at ./final.rsh:183:5:application call to [unknown function] (defined at: ./final.rsh:186:20:function exp)', 'at ./final.rsh:183:5:application call to [unknown function] (defined at: ./final.rsh:183:5:function exp)'],
    msg: null,
    who: 'Contributor_contribute'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v255, v256, v261, v284, v290, v299, v317],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v261, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v325], secs: v327, time: v326, didSend: v141, from: v324 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Contributor_contribute"
        });
      const v329 = stdlib.add(v299, v261);
      sim_r.txns.push({
        amt: v261,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v330 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v324), null);
      let v331;
      switch (v330[0]) {
        case 'None': {
          const v332 = v330[1];
          v331 = false;
          
          break;
          }
        case 'Some': {
          const v333 = v330[1];
          v331 = true;
          
          break;
          }
        }
      const v334 = v331 ? false : true;
      ;
      await stdlib.simMapSet(sim_r, 0, v324, null);
      const v336 = null;
      const v337 = await txn1.getOutput('Contributor_contribute', 'v336', ctc0, v336);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc5, ctc4, ctc2, ctc4, ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v325], secs: v327, time: v326, didSend: v141, from: v324 } = txn1;
  undefined /* setApiDetails */;
  const v329 = stdlib.add(v299, v261);
  ;
  const v330 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v324), null);
  let v331;
  switch (v330[0]) {
    case 'None': {
      const v332 = v330[1];
      v331 = false;
      
      break;
      }
    case 'Some': {
      const v333 = v330[1];
      v331 = true;
      
      break;
      }
    }
  const v334 = v331 ? false : true;
  stdlib.assert(v334, {
    at: './final.rsh:187:14:application',
    fs: [],
    msg: null,
    who: 'Contributor_contribute'
    });
  await stdlib.mapSet(map0, v324, null);
  const v336 = null;
  const v337 = await txn1.getOutput('Contributor_contribute', 'v336', ctc0, v336);
  stdlib.protect(ctc0, await interact.out(v325, v337), {
    at: './final.rsh:183:5:application',
    fs: ['at ./final.rsh:183:5:application call to [unknown function] (defined at: ./final.rsh:183:5:function exp)', 'at ./final.rsh:191:10:application call to "k" (defined at: ./final.rsh:183:5:function exp)'],
    msg: 'out',
    who: 'Contributor_contribute'
    });
  
  return;
  
  
  
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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['poolName', ctc2], ['poolDescription', ctc2], ['contributionAmt', ctc3], ['penaltyAmt', ctc3], ['duration', ctc3]]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Address;
  
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
  
  
  const v240 = stdlib.protect(ctc4, interact.getPoolDetails, 'for PoolCreator\'s interact field getPoolDetails');
  const v243 = v240.contributionAmt;
  const v244 = v240.penaltyAmt;
  
  const v250 = stdlib.div(v243, stdlib.checkedBigNumberify('./final.rsh:84:45:decimal', stdlib.UInt_max, '2'));
  const v252 = stdlib.eq(v244, v250);
  stdlib.assert(v252, {
    at: './final.rsh:85:14:application',
    fs: ['at ./final.rsh:95:27:application call to "checkPoolStructure" (defined at: ./final.rsh:82:38:function exp)', 'at ./final.rsh:93:12:application call to [unknown function] (defined at: ./final.rsh:93:16:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v254 = stdlib.gt(v243, stdlib.checkedBigNumberify('./final.rsh:90:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v254, {
    at: './final.rsh:90:14:application',
    fs: ['at ./final.rsh:95:27:application call to "checkPoolStructure" (defined at: ./final.rsh:82:38:function exp)', 'at ./final.rsh:93:12:application call to [unknown function] (defined at: ./final.rsh:93:16:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v240],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./final.rsh:99:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./final.rsh:99:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v256], secs: v258, time: v257, didSend: v39, from: v255 } = txn1;
      
      ;
      const v261 = v256.contributionAmt;
      const v262 = v256.penaltyAmt;
      const v263 = v256.duration;
      const v266 = stdlib.div(v261, stdlib.checkedBigNumberify('./final.rsh:84:45:decimal', stdlib.UInt_max, '2'));
      const v268 = stdlib.eq(v262, v266);
      ;
      const v270 = stdlib.gt(v261, stdlib.checkedBigNumberify('./final.rsh:90:37:decimal', stdlib.UInt_max, '0'));
      ;
      const v276 = stdlib.add(v261, v262);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v256], secs: v258, time: v257, didSend: v39, from: v255 } = txn1;
  ;
  const v261 = v256.contributionAmt;
  const v262 = v256.penaltyAmt;
  const v263 = v256.duration;
  const v266 = stdlib.div(v261, stdlib.checkedBigNumberify('./final.rsh:84:45:decimal', stdlib.UInt_max, '2'));
  const v268 = stdlib.eq(v262, v266);
  stdlib.assert(v268, {
    at: './final.rsh:85:14:application',
    fs: ['at ./final.rsh:101:23:application call to "checkPoolStructure" (defined at: ./final.rsh:82:38:function exp)'],
    msg: 'Penalty amount is not half of the contribution amount.',
    who: 'PoolCreator'
    });
  const v270 = stdlib.gt(v261, stdlib.checkedBigNumberify('./final.rsh:90:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v270, {
    at: './final.rsh:90:14:application',
    fs: ['at ./final.rsh:101:23:application call to "checkPoolStructure" (defined at: ./final.rsh:82:38:function exp)'],
    msg: 'Contribution amount cannot be zero.',
    who: 'PoolCreator'
    });
  const v276 = stdlib.add(v261, v262);
  const txn2 = await (ctc.sendrecv({
    args: [v255, v256, v261, v263, v276],
    evt_cnt: 0,
    funcNum: 1,
    lct: v257,
    onlyIf: true,
    out_tys: [],
    pay: [v276, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v279, time: v278, didSend: v64, from: v277 } = txn2;
      
      sim_r.txns.push({
        amt: v276,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v282 = stdlib.addressEq(v255, v277);
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc4, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v279, time: v278, didSend: v64, from: v277 } = txn2;
  ;
  const v282 = stdlib.addressEq(v255, v277);
  stdlib.assert(v282, {
    at: './final.rsh:119:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  stdlib.protect(ctc0, await interact.readyForContribution(), {
    at: './final.rsh:122:37:application',
    fs: ['at ./final.rsh:122:37:application call to [unknown function] (defined at: ./final.rsh:122:37:function exp)', 'at ./final.rsh:122:37:application call to "liftedInteract" (defined at: ./final.rsh:122:37:application)'],
    msg: 'readyForContribution',
    who: 'PoolCreator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v255, v256, v261, v263, v276, v278],
    evt_cnt: 0,
    funcNum: 2,
    lct: v278,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./final.rsh:124:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v286, time: v285, didSend: v73, from: v284 } = txn3;
      
      ;
      const v287 = stdlib.addressEq(v255, v284);
      ;
      const v289 = stdlib.add(v278, stdlib.checkedBigNumberify('./final.rsh:145:41:decimal', stdlib.UInt_max, '2'));
      const v290 = stdlib.add(v289, v263);
      const v292 = v285;
      const v299 = v276;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc4, ctc3, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v286, time: v285, didSend: v73, from: v284 } = txn3;
  ;
  const v287 = stdlib.addressEq(v255, v284);
  stdlib.assert(v287, {
    at: './final.rsh:124:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PoolCreator'
    });
  const v289 = stdlib.add(v278, stdlib.checkedBigNumberify('./final.rsh:145:41:decimal', stdlib.UInt_max, '2'));
  const v290 = stdlib.add(v289, v263);
  let v292 = v285;
  let v299 = v276;
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v325], secs: v327, time: v326, didSend: v141, from: v324 } = txn4;
    undefined /* setApiDetails */;
    const v329 = stdlib.add(v299, v261);
    ;
    const v330 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v324), null);
    let v331;
    switch (v330[0]) {
      case 'None': {
        const v332 = v330[1];
        v331 = false;
        
        break;
        }
      case 'Some': {
        const v333 = v330[1];
        v331 = true;
        
        break;
        }
      }
    const v334 = v331 ? false : true;
    stdlib.assert(v334, {
      at: './final.rsh:187:14:application',
      fs: [],
      msg: null,
      who: 'PoolCreator'
      });
    await stdlib.mapSet(map0, v324, null);
    const v336 = null;
    await txn4.getOutput('Contributor_contribute', 'v336', ctc0, v336);
    const txn5 = await (ctc.sendrecv({
      args: [v255, v256, v261, v284, v290, v324, v329],
      evt_cnt: 0,
      funcNum: 5,
      lct: v326,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./final.rsh:193:8:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        
        const {data: [], secs: v343, time: v342, didSend: v163, from: v341 } = txn5;
        
        ;
        const v344 = stdlib.addressEq(v255, v341);
        ;
        const v347 = stdlib.sub(stdlib.UInt_max, v342);
        const v348 = stdlib.sub(v347, v290);
        const v349 = stdlib.ge(v348, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
        ;
        const v350 = stdlib.add(v342, v290);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc4, ctc3, ctc6, ctc3, ctc6, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v343, time: v342, didSend: v163, from: v341 } = txn5;
    ;
    const v344 = stdlib.addressEq(v255, v341);
    stdlib.assert(v344, {
      at: './final.rsh:193:8:dot',
      fs: [],
      msg: 'sender correct',
      who: 'PoolCreator'
      });
    const v347 = stdlib.sub(stdlib.UInt_max, v342);
    const v348 = stdlib.sub(v347, v290);
    const v349 = stdlib.ge(v348, stdlib.checkedBigNumberify('reach standard library:567:43:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v349, {
      at: 'reach standard library:567:15:application',
      fs: ['at reach standard library:575:29:application call to [unknown function] (defined at: reach standard library:564:55:function exp)', 'at ./final.rsh:197:9:application call to "relativeTime" (defined at: reach standard library:570:71:function exp)'],
      msg: null,
      who: 'PoolCreator'
      });
    const v350 = stdlib.add(v342, v290);
    await ctc.waitUntilTime(v350);
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v362], secs: v364, time: v363, didSend: v197, from: v361 } = txn6;
    undefined /* setApiDetails */;
    ;
    const v365 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v361), null);
    let v366;
    switch (v365[0]) {
      case 'None': {
        const v367 = v365[1];
        v366 = false;
        
        break;
        }
      case 'Some': {
        const v368 = v365[1];
        v366 = true;
        
        break;
        }
      }
    const v369 = v366 ? false : true;
    stdlib.assert(v369, {
      at: './final.rsh:207:14:application',
      fs: [],
      msg: null,
      who: 'PoolCreator'
      });
    const v374 = stdlib.sub(v329, v329);
    ;
    await stdlib.mapSet(map1, v361, null);
    const v376 = null;
    await txn6.getOutput('Any_requestPayment', 'v376', ctc0, v376);
    const cv292 = v363;
    const cv299 = v374;
    
    v292 = cv292;
    v299 = cv299;
    
    continue;
    
    
    
    
    
    }
  return;
  
  
  
  
  
  
  };
export async function Any_requestPayment(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_requestPayment expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_requestPayment expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 7, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [7]');
  if (step == 7) {return _Any_requestPayment7(ctcTop, interact);}
  };
export async function Contributor_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contributor_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contributor_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _Contributor_contribute5(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Any_requestPayment()byte[0]`, `Contributor_contribute()byte[0]`],
    pure: [`contributed()address`, `end()uint64`, `paid()address`, `pooldetails()(byte[200],byte[200],uint64,uint64,uint64)`, `remainingAmt()uint64`, `totalContributed()uint64`],
    sigs: [`Any_requestPayment()byte[0]`, `Contributor_contribute()byte[0]`, `contributed()address`, `end()uint64`, `paid()address`, `pooldetails()(byte[200],byte[200],uint64,uint64,uint64)`, `remainingAmt()uint64`, `totalContributed()uint64`]
    },
  appApproval: `BiAaACABB6gDBtADAgXwA8gD/QII+AN//AOgndXDBfPM5bsH3Nmj9Q/zlJvfBoTLwvwD0uO5nQSGqt2oAwSYBNgDJgcBAAEBAQIBAwEEAAIAACI1ADEYQQb/JwVkSSJbNQEhDFs1AjEZJBJBAAkxACgnBmZCBss2GgAXSUECKyI1BCQ1BkkhEAxAANpJIREMQAC8SSESDEAASSESEkQ0AUklDEAAHiUSRChkKWRQKmRQK2RQJwRkUEk1AyENI1g1B0IGjSEFEkQoZClkUCpkUCtkUCcEZFBJNQMhDSNYNQdCBm4hERJENAFJIQUMQABASSUMQAAeJRJEKGQpZFAqZFArZFAnBGRQSTUDIQYjWDUHQgY9SChkKWRQKmRQK2RQJwRkUEk1AyEGI1g1B0IGISEIEkQoZClkUCpkUCtkUCcEZFBJNQMhBiNYNQdCBgJJIRMMQAAJIRMSRCcFQgLpIRASRDQBAEkhFAxAALxJIRUMQACsIRUSRDQBSSEIDEAAY0khBQxAAEBJJQxAAB4lEkQoZClkUCpkUCtkUCcEZFBJNQMjIQRYNQdCBaVIKGQpZFAqZFArZFAnBGRQSTUDIyEEWDUHQgWJSChkKWRQKmRQK2RQJwRkUEk1AyMhBFg1B0IFbUkhBwxAABshBxJEKGQpZFAqZFArZFBJNQMjIQRYNQdCBUskEkQoZClkUCpkUCtkUEk1AyMhBFg1B0IFMSEUEkQnBUIAp0khFgxAAG8hFhJENAFJIQUMQABCSSUMQAAfJRJEKGQpZFAqZFArZFAnBGRQSTUDIQkhDFg1B0IE70goZClkUCpkUCtkUCcEZFBJNQMhCSEMWDUHQgTSIQgSRChkKWRQKmRQK2RQJwRkUEk1AyEJIQxYNQdCBLKBt8LxkAISRDQBADYaAhc1BDYaAzYaARdJIRcMQAJwSSEIDEABgkkhBQxAALchBRJEJTQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQJwRkUEk1A0khGFs1/4GgBFs1/kk1BTX9gATJ6I0MNP1QsDIGNP4PRDEAiARKVwEBSTX7IlVAAAYiNfxCAAYkNfxCAAA0/BREsSKyATT/sggkshAxALIHszEAKDEAiAQXJCRMVmaACAAAAAAAAAF4sCcFNQc0A1cAIDQDIyEEWDQDIQpbNAMhBiNYNAMhCVsyBjT/SQlCAzBIIQU0ARJENARJIhJMNAISEUQoZClkUCpkUCtkUCcEZFBJNQNJSkpJVwAgNf8jIQRYNf4hCls1/SEGI1g1/CEJWzX7IQ0jWDX6IRhbNfmABMyZklywNP8xABJEgf///////////wEyBgk0+wkiD0QyBjT7CDX4NP80/lA0/RZQNPxQNPsWUDT6UDT5FlA0+BZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIQshDlhnJwRLASEPgSxYZ0glNQEyBjUCQgLdSCEINAESRDQESSISTDQCEhFEKGQpZFAqZFArZFAnBGRQSTUDSUpJVwAgNf8jIQRYNf4hCls1/SEGI1g1/CEJWzX7STUFNfqABNTgGC00+lCwNAMhDVs0/Qg1+TT9iALJMQCIArZXAAFJNfciVUAABiI1+EIABiQ1+EIAADT4FEQxACgxAIgCkyQiTFZmgAgAAAAAAAABULAnBTUHNP80/lA0/RZQNPxQNPsWUDEAUDT5FlAoSwFXAH9nKUsBV39/ZypLAVf+f2crSwEhCyEOWGcnBEsBIQ+BJFhnSCEFNQEyBjUCQgH2SSQMQADxSSEHDEAAXSEHEkQhBzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQSTUDVwAgNf+ABEGxQE2wNP8xABJENP80AyMhBFg0AyEKWzEANAOB4ANbIQcINAMhBlsIMgY0AyEZW0IBG0gkNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFBJNQNJSklXACA1/yMhBFg1/iEKWzX9IQZbNfwhGVs1+4AEmouRdLA0+4gBkDT/MQASRDT/NP5QNP0WUDT8FlA0+xZQMgYWUChLAVcAf2cpSwFXf39nKksBV/5/ZytLASELgWtYZ0ghBzUBMgY1AkIA/0giNAESRDQESSISTDQCEhFESTUFNf+ABAnFL4Q0/1CwgaCNBogBJDT/gZADWzX+NP+BmANbNf00/4GgA1s1/DT9NP4hBwoSRDT+Ig1ENP40/Qg1+zEANP9QNP4WUDT8FlA0+xZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIQuBY1hnSCQ1ATIGNQJCAHE1/zX+Nf01/DX7NfpJNfk0+lA0+xZQNPxQNP0WUDT/FlAoSwFXAH9nKUsBV39/ZypLAVf+f2crSwEhCyEOWGcnBEsBIQ8hF1hnSCEINQEyBjUCQgAcMRkhCBJEsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEJwU0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSQIMgQSRDEWEkQkQzEZIhJEQv/fIjUBIjUCQv/CSTEYYUAABEgnBokoYok0AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 2,
  stateKeys: 5,
  stateSize: 552,
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
                    "name": "poolName",
                    "type": "tuple"
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
                    "name": "poolDescription",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "contributionAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "penaltyAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v256",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
                    "name": "poolName",
                    "type": "tuple"
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
                    "name": "poolDescription",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "contributionAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "penaltyAmt",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v256",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
        "internalType": "struct T11",
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
        "internalType": "struct T11",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v325",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
        "internalType": "struct T11",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v362",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v336",
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
    "name": "_reach_oe_v376",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
    "name": "Contributor_contribute",
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
        "internalType": "struct T11",
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
        "internalType": "struct T11",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v325",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
        "internalType": "struct T11",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v362",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
    "inputs": [],
    "name": "contributed",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "end",
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
    "name": "paid",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pooldetails",
    "outputs": [
      {
        "components": [
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
            "name": "poolName",
            "type": "tuple"
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
            "name": "poolDescription",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "contributionAmt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "penaltyAmt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          }
        ],
        "internalType": "struct T2",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "remainingAmt",
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
    "name": "totalContributed",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003b5238038062003b5283398101604081905262000026916200044c565b60008080554360035560408051602081018252918252517ff39365d9bf9b38f38f03091975916103bc00007e98daae3fc6eb1a45366c73fe906200006e9033908590620005bf565b60405180910390a1620000843415600d6200016f565b60208201515160400151620000b490620000a190600290620005f7565b6020840151516060015114600e6200016f565b60208201515160400151620000cd901515600f6200016f565b6020820151516060810151604090910151620000ea91906200061a565b8152620000f662000199565b33815260208084018051518284015280515160409081015181850152905151608090810151606085015284519084015260016000819055439055516200013f9183910162000641565b6040516020818303038152906040526002908051906020019062000165929190620001d9565b50505050620006cc565b81620001955760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a0016040528060006001600160a01b03168152602001620001be62000268565b81526020016000815260200160008152602001600081525090565b828054620001e7906200068f565b90600052602060002090601f0160209004810192826200020b576000855562000256565b82601f106200022657805160ff191683800117855562000256565b8280016001018555821562000256579182015b828111156200025657825182559160200191906001019062000239565b5062000264929150620002f0565b5090565b604080516101808101909152600060a0820181815260c0830182905260e08301829052610100830182905261012083018290526101408301829052610160830191909152819081526040805160e08101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820152910190620001be565b5b80821115620002645760008155600101620002f1565b60405160e081016001600160401b03811182821017156200033857634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b03811182821017156200033857634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200033857634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156200033857634e487b7160e01b600052604160045260246000fd5b600060e08284031215620003e457600080fd5b620003ee62000307565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160018060c01b0319811681146200044157600080fd5b60c082015292915050565b60008183036102408112156200046157600080fd5b6200046b6200033e565b8351815261022080601f19840112156200048457600080fd5b6200048e6200036f565b92506200049a620003a0565b620004a98760208801620003d1565b8152620004bb876101008801620003d1565b6020828101919091526101e087015160408301526102008701516060830152919095015160808601529382529283015250919050565b62000543828251805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0808201519083015260c0908101516001600160c01b031916910152565b602081810151805160e08501529081015161010084015260408101516101208401526060810151610140840152608081015161016084015260a081015161018084015260c08101516001600160c01b0319166101a08401525060408101516101c083015260608101516101e08301526080015161020090910152565b60006102608201905060018060a01b0384168252825160208301526020830151620005ef604084018251620004f1565b509392505050565b6000826200061557634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156200063c57634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b031681526020808301516102a08301916200066890840182620004f1565b50604083015161024083015260608301516102608301526080909201516102809091015290565b600181811c90821680620006a457607f821691505b60208210811415620006c657634e487b7160e01b600052602260045260246000fd5b50919050565b61347680620006dc6000396000f3fe6080604052600436106101015760003560e01c80636da017a01161008f5780638e314769116100615780638e3147691461025b578063a98bf2231461026e578063ab53f2c614610281578063cadc2e7a146102a4578063efbe1c1c146102c457005b80636da017a01461020b5780637eea518c1461021e5780638323075714610231578063847b771b1461024657005b80632c10a159116100d35780632c10a159146101895780632d27d46c1461019c5780633bc5b7bf146101b45780634207c6dc146101e15780635c18527d1461020357005b8063023f41471461010a578063112f1907146101325780631e93b0f11461015f578063295b4e171461017457005b3661010857005b005b34801561011657600080fd5b5061011f6102d9565b6040519081526020015b60405180910390f35b34801561013e57600080fd5b50610147610691565b6040516001600160a01b039091168152602001610129565b34801561016b57600080fd5b5060035461011f565b34801561018057600080fd5b50610147610a30565b610108610197366004612ae5565b610dbf565b6101a4610def565b6040519015158152602001610129565b3480156101c057600080fd5b506101d46101cf366004612b20565b610e33565b6040516101299190612b53565b3480156101ed57600080fd5b506101f6610e5f565b6040516101299190612c2c565b6101a46111d4565b610108610219366004612ae5565b61121b565b61010861022c366004612ae5565b611247565b34801561023d57600080fd5b5060015461011f565b34801561025257600080fd5b5061011f611273565b610108610269366004612ae5565b611628565b61010861027c366004612ae5565b611654565b34801561028d57600080fd5b50610296611680565b604051610129929190612c3b565b3480156102b057600080fd5b506101d46102bf366004612b20565b61171d565b3480156102d057600080fd5b5061011f611743565b600060016000541415610396576000600280546102f590612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461032190612c98565b801561036e5780601f106103435761010080835404028352916020019161036e565b820191906000526020600020905b81548152906001019060200180831161035157829003601f168201915b50505050508060200190518101906103869190612e80565b90506103946000600c611ace565b505b60026000541415610451576000600280546103b090612c98565b80601f01602080910402602001604051908101604052809291908181526020018280546103dc90612c98565b80156104295780601f106103fe57610100808354040283529160200191610429565b820191906000526020600020905b81548152906001019060200180831161040c57829003601f168201915b50505050508060200190518101906104419190612ee2565b905061044f6000600c611ace565b505b6005600054141561050c5760006002805461046b90612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461049790612c98565b80156104e45780601f106104b9576101008083540402835291602001916104e4565b820191906000526020600020905b8154815290600101906020018083116104c757829003601f168201915b50505050508060200190518101906104fc9190612f4f565b905061050a6000600c611ace565b505b600660005414156105c75760006002805461052690612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461055290612c98565b801561059f5780601f106105745761010080835404028352916020019161059f565b820191906000526020600020905b81548152906001019060200180831161058257829003601f168201915b50505050508060200190518101906105b79190612fc5565b90506105c56000600c611ace565b505b60076000541415610682576000600280546105e190612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461060d90612c98565b801561065a5780601f1061062f5761010080835404028352916020019161065a565b820191906000526020600020905b81548152906001019060200180831161063d57829003601f168201915b5050505050806020019051810190610672919061304e565b90506106806000600c611ace565b505b61068e6000600c611ace565b90565b60006001600054141561074e576000600280546106ad90612c98565b80601f01602080910402602001604051908101604052809291908181526020018280546106d990612c98565b80156107265780601f106106fb57610100808354040283529160200191610726565b820191906000526020600020905b81548152906001019060200180831161070957829003601f168201915b505050505080602001905181019061073e9190612e80565b905061074c60006007611ace565b505b600260005414156108095760006002805461076890612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461079490612c98565b80156107e15780601f106107b6576101008083540402835291602001916107e1565b820191906000526020600020905b8154815290600101906020018083116107c457829003601f168201915b50505050508060200190518101906107f99190612ee2565b905061080760006007611ace565b505b600560005414156108c45760006002805461082390612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461084f90612c98565b801561089c5780601f106108715761010080835404028352916020019161089c565b820191906000526020600020905b81548152906001019060200180831161087f57829003601f168201915b50505050508060200190518101906108b49190612f4f565b90506108c260006007611ace565b505b60066000541415610979576000600280546108de90612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461090a90612c98565b80156109575780601f1061092c57610100808354040283529160200191610957565b820191906000526020600020905b81548152906001019060200180831161093a57829003601f168201915b505050505080602001905181019061096f9190612fc5565b60a0015192915050565b60076000541415610a245760006002805461099390612c98565b80601f01602080910402602001604051908101604052809291908181526020018280546109bf90612c98565b8015610a0c5780601f106109e157610100808354040283529160200191610a0c565b820191906000526020600020905b8154815290600101906020018083116109ef57829003601f168201915b505050505080602001905181019061096f919061304e565b61068e60006007611ace565b600060016000541415610aed57600060028054610a4c90612c98565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7890612c98565b8015610ac55780601f10610a9a57610100808354040283529160200191610ac5565b820191906000526020600020905b815481529060010190602001808311610aa857829003601f168201915b5050505050806020019051810190610add9190612e80565b9050610aeb60006009611ace565b505b60026000541415610ba857600060028054610b0790612c98565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3390612c98565b8015610b805780601f10610b5557610100808354040283529160200191610b80565b820191906000526020600020905b815481529060010190602001808311610b6357829003601f168201915b5050505050806020019051810190610b989190612ee2565b9050610ba660006009611ace565b505b60056000541415610c5d57600060028054610bc290612c98565b80601f0160208091040260200160405190810160405280929190818152602001828054610bee90612c98565b8015610c3b5780601f10610c1057610100808354040283529160200191610c3b565b820191906000526020600020905b815481529060010190602001808311610c1e57829003601f168201915b5050505050806020019051810190610c539190612f4f565b6060015192915050565b60066000541415610d0857600060028054610c7790612c98565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca390612c98565b8015610cf05780601f10610cc557610100808354040283529160200191610cf0565b820191906000526020600020905b815481529060010190602001808311610cd357829003601f168201915b5050505050806020019051810190610c539190612fc5565b60076000541415610db357600060028054610d2290612c98565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4e90612c98565b8015610d9b5780601f10610d7057610100808354040283529160200191610d9b565b820191906000526020600020905b815481529060010190602001808311610d7e57829003601f168201915b5050505050806020019051810190610c53919061304e565b61068e60006009611ace565b6040805180820190915260008082526020820152610deb610de5368490038401846130ed565b82611af3565b5050565b6040805180820190915260008082526020820181905290610e0e612795565b6040805160208082019092526000815290820152610e2c8183611caa565b5051919050565b6040805160608101825260008082526020820181905291810191909152610e5982611f45565b92915050565b610e676127c4565b60016000541415610f1c57600060028054610e8190612c98565b80601f0160208091040260200160405190810160405280929190818152602001828054610ead90612c98565b8015610efa5780601f10610ecf57610100808354040283529160200191610efa565b820191906000526020600020905b815481529060010190602001808311610edd57829003601f168201915b5050505050806020019051810190610f129190612e80565b6020015192915050565b60026000541415610fc757600060028054610f3690612c98565b80601f0160208091040260200160405190810160405280929190818152602001828054610f6290612c98565b8015610faf5780601f10610f8457610100808354040283529160200191610faf565b820191906000526020600020905b815481529060010190602001808311610f9257829003601f168201915b5050505050806020019051810190610f129190612ee2565b6005600054141561107257600060028054610fe190612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461100d90612c98565b801561105a5780601f1061102f5761010080835404028352916020019161105a565b820191906000526020600020905b81548152906001019060200180831161103d57829003601f168201915b5050505050806020019051810190610f129190612f4f565b6006600054141561111d5760006002805461108c90612c98565b80601f01602080910402602001604051908101604052809291908181526020018280546110b890612c98565b80156111055780601f106110da57610100808354040283529160200191611105565b820191906000526020600020905b8154815290600101906020018083116110e857829003601f168201915b5050505050806020019051810190610f129190612fc5565b600760005414156111c85760006002805461113790612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461116390612c98565b80156111b05780601f10611185576101008083540402835291602001916111b0565b820191906000526020600020905b81548152906001019060200180831161119357829003601f168201915b5050505050806020019051810190610f12919061304e565b61068e6000600a611ace565b60408051808201909152600080825260208201819052906111f3612795565b6040805160208082019092526000815290820152611211818361201e565b5060200151919050565b6040805180820190915260008082526020820152610deb611241368490038401846131fa565b82611caa565b6040805180820190915260008082526020820152610deb61126d368490038401846130ed565b826122c5565b6000600160005414156113305760006002805461128f90612c98565b80601f01602080910402602001604051908101604052809291908181526020018280546112bb90612c98565b80156113085780601f106112dd57610100808354040283529160200191611308565b820191906000526020600020905b8154815290600101906020018083116112eb57829003601f168201915b50505050508060200190518101906113209190612e80565b905061132e6000600b611ace565b505b600260005414156113eb5760006002805461134a90612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461137690612c98565b80156113c35780601f10611398576101008083540402835291602001916113c3565b820191906000526020600020905b8154815290600101906020018083116113a657829003601f168201915b50505050508060200190518101906113db9190612ee2565b90506113e96000600b611ace565b505b600560005414156114a65760006002805461140590612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461143190612c98565b801561147e5780601f106114535761010080835404028352916020019161147e565b820191906000526020600020905b81548152906001019060200180831161146157829003601f168201915b50505050508060200190518101906114969190612f4f565b90506114a46000600b611ace565b505b60066000541415611561576000600280546114c090612c98565b80601f01602080910402602001604051908101604052809291908181526020018280546114ec90612c98565b80156115395780601f1061150e57610100808354040283529160200191611539565b820191906000526020600020905b81548152906001019060200180831161151c57829003601f168201915b50505050508060200190518101906115519190612fc5565b905061155f6000600b611ace565b505b6007600054141561161c5760006002805461157b90612c98565b80601f01602080910402602001604051908101604052809291908181526020018280546115a790612c98565b80156115f45780601f106115c9576101008083540402835291602001916115f4565b820191906000526020600020905b8154815290600101906020018083116115d757829003601f168201915b505050505080602001905181019061160c919061304e565b905061161a6000600b611ace565b505b61068e6000600b611ace565b6040805180820190915260008082526020820152610deb61164e368490038401846130ed565b82612476565b6040805180820190915260008082526020820152610deb61167a368490038401846131fa565b8261201e565b60006060600054600280805461169590612c98565b80601f01602080910402602001604051908101604052809291908181526020018280546116c190612c98565b801561170e5780601f106116e35761010080835404028352916020019161170e565b820191906000526020600020905b8154815290600101906020018083116116f157829003601f168201915b50505050509050915091509091565b6040805160608101825260008082526020820181905291810191909152610e598261266e565b6000600160005414156118005760006002805461175f90612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461178b90612c98565b80156117d85780601f106117ad576101008083540402835291602001916117d8565b820191906000526020600020905b8154815290600101906020018083116117bb57829003601f168201915b50505050508060200190518101906117f09190612e80565b90506117fe60006008611ace565b505b600260005414156118bb5760006002805461181a90612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461184690612c98565b80156118935780601f1061186857610100808354040283529160200191611893565b820191906000526020600020905b81548152906001019060200180831161187657829003601f168201915b50505050508060200190518101906118ab9190612ee2565b90506118b960006008611ace565b505b60056000541415611970576000600280546118d590612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461190190612c98565b801561194e5780601f106119235761010080835404028352916020019161194e565b820191906000526020600020905b81548152906001019060200180831161193157829003601f168201915b50505050508060200190518101906119669190612f4f565b6080015192915050565b60066000541415611a1b5760006002805461198a90612c98565b80601f01602080910402602001604051908101604052809291908181526020018280546119b690612c98565b8015611a035780601f106119d857610100808354040283529160200191611a03565b820191906000526020600020905b8154815290600101906020018083116119e657829003601f168201915b50505050508060200190518101906119669190612fc5565b60076000541415611ac657600060028054611a3590612c98565b80601f0160208091040260200160405190810160405280929190818152602001828054611a6190612c98565b8015611aae5780601f10611a8357610100808354040283529160200191611aae565b820191906000526020600020905b815481529060010190602001808311611a9157829003601f168201915b5050505050806020019051810190611966919061304e565b61068e600060085b81610deb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b611b036001600054146012611ace565b8151611b1e901580611b1757508251600154145b6013611ace565b600080805560028054611b3090612c98565b80601f0160208091040260200160405190810160405280929190818152602001828054611b5c90612c98565b8015611ba95780601f10611b7e57610100808354040283529160200191611ba9565b820191906000526020600020905b815481529060010190602001808311611b8c57829003601f168201915b5050505050806020019051810190611bc19190612e80565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051611bf4929190613216565b60405180910390a1611c0d816080015134146010611ace565b8051611c25906001600160a01b031633146011611ace565b611c2d612861565b81516001600160a01b03168152602080830151818301526040808401518184015260608085015190840152608080850151908401524360a08401819052600260005560015551611c7f9183910161323e565b60405160208183030381529060405260029080519060200190611ca39291906128a6565b5050505050565b611cba6007600054146023611ace565b8151611cd5901580611cce57508251600154145b6024611ace565b600080805560028054611ce790612c98565b80601f0160208091040260200160405190810160405280929190818152602001828054611d1390612c98565b8015611d605780601f10611d3557610100808354040283529160200191611d60565b820191906000526020600020905b815481529060010190602001808311611d4357829003601f168201915b5050505050806020019051810190611d78919061304e565b604080516020810190915260008152909150611d9c8260e001514310156025611ace565b7f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe3385604051611dcd929190613295565b60405180910390a1611de134156021611ace565b6000611dec3361266e565b516001811115611dfe57611dfe612b3d565b1415611e0d5760008152611e35565b6001611e183361266e565b516001811115611e2a57611e2a612b3d565b1415611e3557600181525b8051611e5090611e46576001611e49565b60005b6022611ace565b60c0820151604051339180156108fc02916000818181858888f19350505050158015611e80573d6000803e3d6000fd5b50336000908152600560209081526040808320805462ff00ff19166001179055519182527f6848b2a4aed3e33fc44f4aed149442db40f841e34d2caadf18b8d75059843702910160405180910390a160008352611edb61292a565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451931692019190915260808085015183519091015281015143905260c0830151611f3490806132d5565b6020808301510152611ca3816126fb565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115611f9157611f91612b3d565b141561200e576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115611fd257611fd2612b3d565b6001811115611fe357611fe3612b3d565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b61202e600560005414601a611ace565b815161204990158061204257508251600154145b601b611ace565b60008080556002805461205b90612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461208790612c98565b80156120d45780601f106120a9576101008083540402835291602001916120d4565b820191906000526020600020905b8154815290600101906020018083116120b757829003601f168201915b50505050508060200190518101906120ec9190612f4f565b60408051808201909152600080825260208201529091507f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943385604051612134929190613295565b60405180910390a181604001518260a0015161215091906132ec565b815260408201516121649034146018611ace565b600061216f33611f45565b51600181111561218157612181612b3d565b141561219357600060208201526121be565b600161219e33611f45565b5160018111156121b0576121b0612b3d565b14156121be57600160208201525b6121db81602001516121d15760016121d4565b60005b6019611ace565b336000908152600460209081526040808320805462ff00ff19166001179055519182527faf686feb6236f6c700c0fcb7f01c1132c50520489937505f2b0fc02c0b587193910160405180910390a16000602084015261223861295f565b82516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401523360a0840152835160c0840152600660005543600155905161229991839101613304565b604051602081830303815290604052600290805190602001906122bd9291906128a6565b505050505050565b6122d56002600054146016611ace565b81516122f09015806122e957508251600154145b6017611ace565b60008080556002805461230290612c98565b80601f016020809104026020016040519081016040528092919081815260200182805461232e90612c98565b801561237b5780601f106123505761010080835404028352916020019161237b565b820191906000526020600020905b81548152906001019060200180831161235e57829003601f168201915b50505050508060200190518101906123939190612ee2565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033846040516123c6929190613216565b60405180910390a16123da34156014611ace565b80516123f2906001600160a01b031633146015611ace565b6123fa61292a565b815181516001600160a01b03909116905260208083015182519091015260408083015182519091015280513360609182015282015160a0830151612440906002906132ec565b61244a91906132ec565b8151608090810191909152602080830180514390529184015191510152612470816126fb565b50505050565b612486600660005414601f611ace565b81516124a190158061249a57508251600154145b6020611ace565b6000808055600280546124b390612c98565b80601f01602080910402602001604051908101604052809291908181526020018280546124df90612c98565b801561252c5780601f106125015761010080835404028352916020019161252c565b820191906000526020600020905b81548152906001019060200180831161250f57829003601f168201915b50505050508060200190518101906125449190612fc5565b905061255c6040518060200160405280600081525090565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338560405161258d929190613216565b60405180910390a16125a13415601c611ace565b81516125b9906001600160a01b03163314601d611ace565b6125e460008360800151436000196125d191906132d5565b6125db91906132d5565b1015601e611ace565b60808201516125f390436132ec565b81526125fd6129bd565b82516001600160a01b03908116825260208085015181840152604080860151818501526060808701518416908501526080808701519085015260a0808701519093169284019290925260c08086015190840152835160e084015260076000554360015590516122999183910161336c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156126ba576126ba612b3d565b141561200e576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611fd257611fd2612b3d565b612703612a23565b8151516001600160a01b0390811682528251602090810151818401528351604090810151818501528451606090810151909316928401929092528351608090810151908401528084015181015160a0840152600560005543600155905161276c918391016133e5565b604051602081830303815290604052600290805190602001906127909291906128a6565b505050565b6040518060400160405280600081526020016127bf60405180602001604052806000151581525090565b905290565b604080516101808101909152600060a0820181815260c0830182905260e08301829052610100830182905261012083018290526101408301829052610160830191909152819081526040805160e08101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c082015291019081526020016000815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b031681526020016128846127c4565b8152602001600081526020016000815260200160008152602001600081525090565b8280546128b290612c98565b90600052602060002090601f0160209004810192826128d4576000855561291a565b82601f106128ed57805160ff191683800117855561291a565b8280016001018555821561291a579182015b8281111561291a5782518255916020019190600101906128ff565b50612926929150612a71565b5090565b604051806040016040528061293d612a86565b81526020016127bf604051806040016040528060008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016129826127c4565b81526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b60405180610100016040528060006001600160a01b031681526020016129e16127c4565b81526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b03168152602001612a466127c4565b81526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b5b808211156129265760008155600101612a72565b6040518060a0016040528060006001600160a01b03168152602001612aa96127c4565b81526020016000815260200160006001600160a01b03168152602001600081525090565b600060408284031215612adf57600080fd5b50919050565b600060408284031215612af757600080fd5b612b018383612acd565b9392505050565b6001600160a01b0381168114612b1d57600080fd5b50565b600060208284031215612b3257600080fd5b8135612b0181612b08565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110612b7857634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015267ffffffffffffffff60c01b60c08201511660c08301525050565b612bf6828251612b9a565b6020810151612c0860e0840182612b9a565b5060408101516101c083015260608101516101e08301526080015161020090910152565b6102208101610e598284612beb565b82815260006020604081840152835180604085015260005b81811015612c6f57858101830151858201606001528201612c53565b81811115612c81576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680612cac57607f821691505b60208210811415612adf57634e487b7160e01b600052602260045260246000fd5b60405160e0810167ffffffffffffffff81118282101715612cfe57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a0810167ffffffffffffffff81118282101715612cfe57634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715612cfe57634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715612cfe57634e487b7160e01b600052604160045260246000fd5b805161201981612b08565b600060e08284031215612db557600080fd5b612dbd612ccd565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015167ffffffffffffffff60c01b81168114612e1357600080fd5b60c082015292915050565b60006102208284031215612e3157600080fd5b612e39612d04565b9050612e458383612da3565b8152612e548360e08401612da3565b60208201526101c082015160408201526101e08201516060820152610200820151608082015292915050565b60006102a08284031215612e9357600080fd5b612e9b612d04565b8251612ea681612b08565b8152612eb58460208501612e1e565b60208201526102408301516040820152610260830151606082015261028090920151608083015250919050565b60006102c08284031215612ef557600080fd5b612efd612d35565b8251612f0881612b08565b8152612f178460208501612e1e565b60208201526102408301516040820152610260830151606082015261028083015160808201526102a09092015160a083015250919050565b60006102c08284031215612f6257600080fd5b612f6a612d35565b8251612f7581612b08565b8152612f848460208501612e1e565b60208201526102408301516040820152610260830151612fa381612b08565b606082015261028083015160808201526102a09092015160a083015250919050565b60006102e08284031215612fd857600080fd5b612fe0612ccd565b8251612feb81612b08565b8152612ffa8460208501612e1e565b6020820152610240830151604082015261026083015161301981612b08565b606082015261028083015160808201526130366102a08401612d98565b60a08201526102c0929092015160c083015250919050565b6000610300828403121561306157600080fd5b613069612d66565b61307283612d98565b81526130818460208501612e1e565b6020820152610240830151604082015261309e6102608401612d98565b606082015261028083015160808201526130bb6102a08401612d98565b60a08201526102c083015160c08201526102e09092015160e083015250919050565b8035801515811461201957600080fd5b6000604082840312156130ff57600080fd5b6040516040810181811067ffffffffffffffff8211171561313057634e487b7160e01b600052604160045260246000fd5b60405282358152613143602084016130dd565b60208201529392505050565b600081830360408082121561316357600080fd5b805181810167ffffffffffffffff828210818311171561319357634e487b7160e01b600052604160045260246000fd5b818452829550863583526020601f19860112156131af57600080fd5b8351945060208501915084821081831117156131db57634e487b7160e01b600052604160045260246000fd5b5082526131ea602086016130dd565b8352602001919091525092915050565b60006040828403121561320c57600080fd5b612b01838361314f565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b81516001600160a01b031681526020808301516102c083019161326390840182612beb565b5060408301516102408301526060830151610260830152608083015161028083015260a0909201516102a09091015290565b6001600160a01b038316815260608101612b01602083018480518252602090810151511515910152565b634e487b7160e01b600052601160045260246000fd5b6000828210156132e7576132e76132bf565b500390565b600082198211156132ff576132ff6132bf565b500190565b81516001600160a01b0390811682526020808401516102e08401929161332c90850182612beb565b50604084015161024084015260608401518116610260840152608084015161028084015260a0840151166102a083015260c0909201516102c09091015290565b81516001600160a01b0316815260208083015161030083019161339190840182612beb565b50604083015161024083015260608301516001600160a01b03908116610260840152608084015161028084015260a0840151166102a083015260c08301516102c083015260e0909201516102e09091015290565b81516001600160a01b0390811682526020808401516102c08401929161340d90850182612beb565b506040840151610240840152606084015116610260830152608083015161028083015260a0909201516102a0909101529056fea2646970667358221220e96b5a6b6c54799517425b8bdeee90aa32e63640e11a468f18f536884ca43d9764736f6c634300080c0033`,
  BytecodeLen: 15186,
  Which: `oD`,
  version: 7,
  views: {
    contributed: `contributed`,
    end: `end`,
    paid: `paid`,
    pooldetails: `pooldetails`,
    remainingAmt: `remainingAmt`,
    totalContributed: `totalContributed`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './final.rsh:114:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './final.rsh:123:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './final.rsh:305:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './final.rsh:182:16:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './final.rsh:192:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './final.rsh:194:5:after expr stmt',
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
  "Any_requestPayment": Any_requestPayment,
  "Contributor_contribute": Contributor_contribute,
  "PoolCreator": PoolCreator
  };
export const _APIs = {
  Any: {
    requestPayment: Any_requestPayment
    },
  Contributor: {
    contribute: Contributor_contribute
    }
  };
