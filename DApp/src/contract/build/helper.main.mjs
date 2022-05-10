// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Struct([['rewardToken', ctc1], ['stakeToken', ctc1], ['rewardsPerBlock', ctc2], ['duration', ctc2]]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc8;
  
  
  return {
    infos: {
      end: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v866, v867, v868, v869, v870, v886, v890, v891, v894] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v927, v928, v1556] = svs;
            return (await ((async () => {
              
              
              return v910;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985] = svs;
            return (await ((async () => {
              
              
              return v910;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      opts: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v866, v867, v868, v869, v870, v886, v890, v891, v894] = svs;
            return (await ((async () => {
              
              
              return v867;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v927, v928, v1556] = svs;
            return (await ((async () => {
              
              
              return v867;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985] = svs;
            return (await ((async () => {
              
              
              return v867;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      remainingRewards: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v866, v867, v868, v869, v870, v886, v890, v891, v894] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v927, v928, v1556] = svs;
            return (await ((async () => {
              
              
              return v918;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985] = svs;
            return (await ((async () => {
              
              
              return v918;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      rewardsAvailableAt: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v866, v867, v868, v869, v870, v886, v890, v891, v894] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v927, v928, v1556] = svs;
            return (await ((async (_v1558, _v1559 ) => {
                const v1558 = stdlib.protect(ctc0, _v1558, null);
                const v1559 = stdlib.protect(ctc2, _v1559, null);
              
              const v1560 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1558), null);
              const v1561 = stdlib.fromSome(v1560, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
              const v1562 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v1558), null);
              const v1563 = stdlib.fromSome(v1562, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
              const v1565 = stdlib.le(v910, v1559);
              const v1566 = v1565 ? v910 : v1559;
              let v1567;
              const v1568 = stdlib.ge(v919, v1566);
              if (v1568) {
                v1567 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1569 = stdlib.sub(v1566, v919);
                v1567 = v1569;
                }
              const v1570 = stdlib.mul(v1567, v890);
              const v1571 = stdlib.add(v917, v1570);
              const v1572 = stdlib.le(v1571, v918);
              const v1573 = v1572 ? v1571 : v918;
              const v1575 = stdlib.muldiv(v1573, v1561, v920);
              let v1576;
              const v1577 = stdlib.ge(v1563, v1575);
              if (v1577) {
                v1576 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1578 = stdlib.sub(v1575, v1563);
                v1576 = v1578;
                }
              const v1579 = stdlib.le(v1576, v1556);
              const v1580 = v1579 ? v1576 : v1556;
              
              return v1580;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985] = svs;
            return (await ((async (_v987, _v988 ) => {
                const v987 = stdlib.protect(ctc0, _v987, null);
                const v988 = stdlib.protect(ctc2, _v988, null);
              
              const v989 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v987), null);
              const v990 = stdlib.fromSome(v989, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
              const v991 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, v987), null);
              const v992 = stdlib.fromSome(v991, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
              const v994 = stdlib.le(v910, v988);
              const v995 = v994 ? v910 : v988;
              let v996;
              const v997 = stdlib.ge(v919, v995);
              if (v997) {
                v996 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v998 = stdlib.sub(v995, v919);
                v996 = v998;
                }
              const v999 = stdlib.mul(v996, v890);
              const v1000 = stdlib.add(v917, v999);
              const v1001 = stdlib.le(v1000, v918);
              const v1002 = v1001 ? v1000 : v918;
              const v1004 = stdlib.muldiv(v1002, v990, v920);
              let v1005;
              const v1006 = stdlib.ge(v992, v1004);
              if (v1006) {
                v1005 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1007 = stdlib.sub(v1004, v992);
                v1005 = v1007;
                }
              const v1008 = stdlib.le(v1005, v985);
              const v1009 = v1008 ? v1005 : v985;
              
              return v1009;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      staked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v866, v867, v868, v869, v870, v886, v890, v891, v894] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v927, v928, v1556] = svs;
            return (await ((async (_v911 ) => {
                const v911 = stdlib.protect(ctc0, _v911, null);
              
              const v912 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v911), null);
              const v913 = stdlib.fromSome(v912, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
              
              return v913;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985] = svs;
            return (await ((async (_v911 ) => {
                const v911 = stdlib.protect(ctc0, _v911, null);
              
              const v912 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v911), null);
              const v913 = stdlib.fromSome(v912, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
              
              return v913;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      totalStaked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v866, v867, v868, v869, v870, v886, v890, v891, v894] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v927, v928, v1556] = svs;
            return (await ((async () => {
              
              
              return v920;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
            const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985] = svs;
            return (await ((async () => {
              
              
              return v920;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc3, ctc1, ctc1, ctc2, ctc6, ctc2, ctc2, ctc2],
      3: [ctc0, ctc3, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2],
      6: [ctc0, ctc3, ctc1, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc6, ctc2, ctc2, ctc4, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Any_halt(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_halt expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_halt expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Struct([['rewardToken', ctc4], ['stakeToken', ctc4], ['rewardsPerBlock', ctc1], ['duration', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Any_halt0_579: ctc9,
    Deployer0_579: ctc0
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v927, v928, v1556] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc5, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1]);
  const v1590 = stdlib.protect(ctc9, await interact.in(), {
    at: './helper.rsh:1:23:application',
    fs: ['at ./helper.rsh:198:9:application call to [unknown function] (defined at: ./helper.rsh:198:9:function exp)', 'at ./helper.rsh:196:7:application call to "runAny_halt0_579" (defined at: ./helper.rsh:198:9:function exp)', 'at ./helper.rsh:196:7:application call to [unknown function] (defined at: ./helper.rsh:196:7:function exp)'],
    msg: 'in',
    who: 'Any_halt'
    });
  const v1594 = ['Any_halt0_579', v1590];
  
  const txn1 = await (ctc.sendrecv({
    args: [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v927, v928, v1556, v1594],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./helper.rsh:198:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1599], secs: v1601, time: v1600, didSend: v634, from: v1598 } = txn1;
      
      switch (v1599[0]) {
        case 'Any_halt0_579': {
          const v1602 = v1599[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_halt"
            });
          ;
          const v1609 = null;
          const v1610 = await txn1.getOutput('Any_halt', 'v1609', ctc0, v1609);
          
          const v1615 = v927[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
          const v1616 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
          const v1622 = stdlib.sub(v1616, v1616);
          const v1625 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '1')];
          const v1626 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '2')];
          const v1627 = [v1622, v1625, v1626];
          const v1628 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '0'), v1627);
          sim_r.txns.push({
            amt: v1616,
            kind: 'from',
            to: v866,
            tok: v868
            });
          const v1629 = v1628[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '1')];
          const v1630 = v1629[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v1630,
            kind: 'from',
            to: v866,
            tok: v869
            });
          sim_r.txns.push({
            amt: v928,
            kind: 'from',
            to: v866,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v869
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v868
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Deployer0_579': {
          const v1699 = v1599[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc5, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1599], secs: v1601, time: v1600, didSend: v634, from: v1598 } = txn1;
  switch (v1599[0]) {
    case 'Any_halt0_579': {
      const v1602 = v1599[1];
      undefined /* setApiDetails */;
      ;
      const v1609 = null;
      const v1610 = await txn1.getOutput('Any_halt', 'v1609', ctc0, v1609);
      if (v634) {
        stdlib.protect(ctc0, await interact.out(v1602, v1610), {
          at: './helper.rsh:198:10:application',
          fs: ['at ./helper.rsh:198:10:application call to [unknown function] (defined at: ./helper.rsh:198:10:function exp)', 'at ./helper.rsh:198:30:application call to "k" (defined at: ./helper.rsh:198:24:function exp)'],
          msg: 'out',
          who: 'Any_halt'
          });
        }
      else {
        }
      
      const v1615 = v927[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
      const v1616 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
      const v1622 = stdlib.sub(v1616, v1616);
      const v1625 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '1')];
      const v1626 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '2')];
      const v1627 = [v1622, v1625, v1626];
      const v1628 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '0'), v1627);
      ;
      const v1629 = v1628[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '1')];
      const v1630 = v1629[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    case 'Deployer0_579': {
      const v1699 = v1599[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Struct([['rewardToken', ctc3], ['stakeToken', ctc3], ['rewardsPerBlock', ctc1], ['duration', ctc1]]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Staker_harvest0_245: ctc5,
    Staker_stake0_245: ctc6,
    Staker_withdraw0_245: ctc6
    });
  const ctc8 = stdlib.T_Struct([['userReceived', ctc1], ['totalRemaining', ctc1]]);
  const ctc9 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  const ctc10 = stdlib.T_Data({
    Any_halt0_579: ctc5,
    Deployer0_579: ctc0
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc12]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v850 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v851 = [v850, v850];
  const v855 = stdlib.protect(ctc4, interact.opts, 'for Deployer\'s interact field opts');
  const v856 = v855.rewardToken;
  const v857 = v855.stakeToken;
  
  const v864 = stdlib.tokenEq(v856, v857);
  const v865 = v864 ? false : true;
  stdlib.assert(v865, {
    at: './helper.rsh:62:11:application',
    fs: ['at ./helper.rsh:59:16:application call to [unknown function] (defined at: ./helper.rsh:59:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v855, v856, v857],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./helper.rsh:64:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v867, v868, v869], secs: v871, time: v870, didSend: v40, from: v866 } = txn1;
      
      const v872 = stdlib.tokenEq(v868, v869);
      const v873 = v872 ? false : true;
      ;
      const v874 = v851[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '0')];
      const v876 = v874[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '1')];
      const v877 = v874[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '2')];
      const v878 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v876, v877];
      const v879 = stdlib.Array_set(v851, stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '0'), v878);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v868
        });
      const v881 = v879[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '1')];
      const v883 = v881[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '1')];
      const v884 = v881[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '2')];
      const v885 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v883, v884];
      const v886 = stdlib.Array_set(v879, stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '1'), v885);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v869
        });
      ;
      const v890 = v867.rewardsPerBlock;
      const v891 = v867.duration;
      const v894 = stdlib.mul(v890, v891);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v867, v868, v869], secs: v871, time: v870, didSend: v40, from: v866 } = txn1;
  const v872 = stdlib.tokenEq(v868, v869);
  const v873 = v872 ? false : true;
  stdlib.assert(v873, {
    at: './helper.rsh:64:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v874 = v851[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '0')];
  const v876 = v874[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '1')];
  const v877 = v874[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '2')];
  const v878 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v876, v877];
  const v879 = stdlib.Array_set(v851, stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '0'), v878);
  ;
  const v881 = v879[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '1')];
  const v883 = v881[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '1')];
  const v884 = v881[stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '2')];
  const v885 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v883, v884];
  const v886 = stdlib.Array_set(v879, stdlib.checkedBigNumberify('./helper.rsh:64:12:dot', stdlib.UInt_max, '1'), v885);
  ;
  ;
  const v890 = v867.rewardsPerBlock;
  const v891 = v867.duration;
  const v894 = stdlib.mul(v890, v891);
  const txn2 = await (ctc.sendrecv({
    args: [v866, v867, v868, v869, v870, v886, v890, v891, v894],
    evt_cnt: 0,
    funcNum: 1,
    lct: v870,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '0'), [[v894, v868]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v897, time: v896, didSend: v54, from: v895 } = txn2;
      
      ;
      const v898 = v886[stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '0')];
      const v899 = v898[stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '0')];
      const v900 = stdlib.add(v899, v894);
      const v903 = v898[stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '1')];
      const v904 = v898[stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '2')];
      const v905 = [v900, v903, v904];
      const v906 = stdlib.Array_set(v886, stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '0'), v905);
      sim_r.txns.push({
        amt: v894,
        kind: 'to',
        tok: v868
        });
      const v907 = stdlib.addressEq(v866, v895);
      ;
      const v909 = stdlib.add(v870, stdlib.checkedBigNumberify('./helper.rsh:75:39:decimal', stdlib.UInt_max, '2'));
      const v910 = stdlib.add(v909, v891);
      
      const v917 = stdlib.checkedBigNumberify('./helper.rsh:92:83:decimal', stdlib.UInt_max, '0');
      const v918 = v894;
      const v919 = v909;
      const v920 = stdlib.checkedBigNumberify('./helper.rsh:92:21:decimal', stdlib.UInt_max, '0');
      const v921 = v896;
      const v922 = v870;
      const v927 = v906;
      const v928 = stdlib.checkedBigNumberify('./helper.rsh:57:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v972 = stdlib.eq(v920, stdlib.checkedBigNumberify('./helper.rsh:142:27:decimal', stdlib.UInt_max, '0'));
        const v974 = stdlib.le(v922, v910);
        const v975 = v972 ? v974 : true;
        
        return v975;})()) {
        const v977 = stdlib.le(v910, v922);
        const v978 = v977 ? v910 : v922;
        let v979;
        const v980 = stdlib.ge(v919, v978);
        if (v980) {
          v979 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v981 = stdlib.sub(v978, v919);
          v979 = v981;
          }
        const v982 = stdlib.mul(v979, v890);
        const v983 = stdlib.add(v917, v982);
        const v984 = stdlib.le(v983, v918);
        const v985 = v984 ? v983 : v918;
        sim_r.isHalt = false;
        }
      else {
        const v1548 = stdlib.le(v910, v922);
        const v1549 = v1548 ? v910 : v922;
        let v1550;
        const v1551 = stdlib.ge(v919, v1549);
        if (v1551) {
          v1550 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1552 = stdlib.sub(v1549, v919);
          v1550 = v1552;
          }
        const v1553 = stdlib.mul(v1550, v890);
        const v1554 = stdlib.add(v917, v1553);
        const v1555 = stdlib.le(v1554, v918);
        const v1556 = v1555 ? v1554 : v918;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc4, ctc3, ctc3, ctc1, ctc14, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v897, time: v896, didSend: v54, from: v895 } = txn2;
  ;
  const v898 = v886[stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '0')];
  const v899 = v898[stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '0')];
  const v900 = stdlib.add(v899, v894);
  const v903 = v898[stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '1')];
  const v904 = v898[stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '2')];
  const v905 = [v900, v903, v904];
  const v906 = stdlib.Array_set(v886, stdlib.checkedBigNumberify('./helper.rsh:70:12:dot', stdlib.UInt_max, '0'), v905);
  ;
  const v907 = stdlib.addressEq(v866, v895);
  stdlib.assert(v907, {
    at: './helper.rsh:70:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v909 = stdlib.add(v870, stdlib.checkedBigNumberify('./helper.rsh:75:39:decimal', stdlib.UInt_max, '2'));
  const v910 = stdlib.add(v909, v891);
  stdlib.protect(ctc0, await interact.readyForStakers(), {
    at: './helper.rsh:90:36:application',
    fs: ['at ./helper.rsh:90:36:application call to [unknown function] (defined at: ./helper.rsh:90:36:function exp)', 'at ./helper.rsh:90:36:application call to "liftedInteract" (defined at: ./helper.rsh:90:36:application)'],
    msg: 'readyForStakers',
    who: 'Deployer'
    });
  
  let v917 = stdlib.checkedBigNumberify('./helper.rsh:92:83:decimal', stdlib.UInt_max, '0');
  let v918 = v894;
  let v919 = v909;
  let v920 = stdlib.checkedBigNumberify('./helper.rsh:92:21:decimal', stdlib.UInt_max, '0');
  let v921 = v896;
  let v922 = v870;
  let v927 = v906;
  let v928 = stdlib.checkedBigNumberify('./helper.rsh:57:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v972 = stdlib.eq(v920, stdlib.checkedBigNumberify('./helper.rsh:142:27:decimal', stdlib.UInt_max, '0'));
    const v974 = stdlib.le(v922, v910);
    const v975 = v972 ? v974 : true;
    
    return v975;})()) {
    const v977 = stdlib.le(v910, v922);
    const v978 = v977 ? v910 : v922;
    let v979;
    const v980 = stdlib.ge(v919, v978);
    if (v980) {
      v979 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v981 = stdlib.sub(v978, v919);
      v979 = v981;
      }
    const v982 = stdlib.mul(v979, v890);
    const v983 = stdlib.add(v917, v982);
    const v984 = stdlib.le(v983, v918);
    const v985 = v984 ? v983 : v918;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1076], secs: v1078, time: v1077, didSend: v418, from: v1075 } = txn3;
    switch (v1076[0]) {
      case 'Staker_harvest0_245': {
        const v1079 = v1076[1];
        undefined /* setApiDetails */;
        ;
        const v1115 = v927[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
        const v1116 = v1115[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '0')];
        const v1120 = v1115[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
        const v1121 = v1115[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '2')];
        const v1122 = [v1116, v1120, v1121];
        const v1123 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1'), v1122);
        ;
        const v1125 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1075), null);
        const v1126 = stdlib.fromSome(v1125, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
        const v1127 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1075), null);
        const v1128 = stdlib.fromSome(v1127, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
        let v1132;
        if (v980) {
          v1132 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1134 = stdlib.sub(v978, v919);
          v1132 = v1134;
          }
        const v1135 = stdlib.mul(v1132, v890);
        const v1136 = stdlib.add(v917, v1135);
        const v1137 = stdlib.le(v1136, v918);
        const v1138 = v1137 ? v1136 : v918;
        const v1140 = stdlib.muldiv(v1138, v1126, v920);
        let v1141;
        const v1142 = stdlib.ge(v1128, v1140);
        if (v1142) {
          v1141 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1143 = stdlib.sub(v1140, v1128);
          v1141 = v1143;
          }
        const v1144 = stdlib.le(v1141, v985);
        const v1145 = v1144 ? v1141 : v985;
        const v1148 = v1123[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '0')];
        const v1149 = v1148[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '0')];
        const v1153 = stdlib.sub(v1149, v1145);
        const v1156 = v1148[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '1')];
        const v1157 = v1148[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '2')];
        const v1158 = [v1153, v1156, v1157];
        const v1159 = stdlib.Array_set(v1123, stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '0'), v1158);
        ;
        const v1160 = stdlib.sub(v918, v1145);
        const v1163 = stdlib.add(v1128, v1145);
        await stdlib.mapSet(map1, v1075, v1163);
        const v1164 = {
          totalRemaining: v1160,
          userReceived: v1145
          };
        await txn3.getOutput('Staker_harvest', 'v1164', ctc8, v1164);
        const v1172 = stdlib.sub(v985, v1145);
        const cv917 = v1172;
        const cv918 = v1160;
        const cv919 = v922;
        const cv920 = v920;
        const cv921 = v1077;
        const cv922 = v921;
        const cv927 = v1159;
        const cv928 = v928;
        
        v917 = cv917;
        v918 = cv918;
        v919 = cv919;
        v920 = cv920;
        v921 = cv921;
        v922 = cv922;
        v927 = cv927;
        v928 = cv928;
        
        continue;
        break;
        }
      case 'Staker_stake0_245': {
        const v1235 = v1076[1];
        undefined /* setApiDetails */;
        const v1247 = v1235[stdlib.checkedBigNumberify('./helper.rsh:143:9:spread', stdlib.UInt_max, '0')];
        ;
        const v1271 = v927[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
        const v1272 = v1271[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '0')];
        const v1273 = stdlib.add(v1272, v1247);
        const v1276 = v1271[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
        const v1277 = v1271[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '2')];
        const v1278 = [v1273, v1276, v1277];
        const v1279 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1'), v1278);
        ;
        const v1332 = stdlib.add(v920, v1247);
        const v1333 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1075), null);
        const v1334 = stdlib.fromSome(v1333, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
        const v1335 = stdlib.add(v1334, v1247);
        await stdlib.mapSet(map0, v1075, v1335);
        const v1336 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1075), null);
        const v1337 = stdlib.fromSome(v1336, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
        const v1338 = stdlib.mul(v985, v1247);
        const v1339 = stdlib.div(v1338, v1332);
        const v1340 = stdlib.add(v1337, v1339);
        await stdlib.mapSet(map1, v1075, v1340);
        const v1341 = {
          newEveryoneStaked: v1332,
          newUserStaked: v1335
          };
        await txn3.getOutput('Staker_stake', 'v1341', ctc9, v1341);
        const cv917 = v985;
        const cv918 = v918;
        const cv919 = v922;
        const cv920 = v1332;
        const cv921 = v1077;
        const cv922 = v921;
        const cv927 = v1279;
        const cv928 = v928;
        
        v917 = cv917;
        v918 = cv918;
        v919 = cv919;
        v920 = cv920;
        v921 = cv921;
        v922 = cv922;
        v927 = cv927;
        v928 = cv928;
        
        continue;
        break;
        }
      case 'Staker_withdraw0_245': {
        const v1391 = v1076[1];
        undefined /* setApiDetails */;
        ;
        const v1427 = v927[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
        const v1428 = v1427[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '0')];
        const v1432 = v1427[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
        const v1433 = v1427[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '2')];
        const v1434 = [v1428, v1432, v1433];
        const v1435 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1'), v1434);
        ;
        const v1508 = v1391[stdlib.checkedBigNumberify('./helper.rsh:155:9:spread', stdlib.UInt_max, '0')];
        const v1509 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1075), null);
        const v1510 = stdlib.fromSome(v1509, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
        const v1512 = stdlib.le(v1508, v1510);
        stdlib.assert(v1512, {
          at: './helper.rsh:161:16:application',
          fs: ['at ./helper.rsh:158:7:application call to [unknown function] (defined at: ./helper.rsh:158:7:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v1513 = v1435[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '1')];
        const v1514 = v1513[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '0')];
        const v1518 = stdlib.sub(v1514, v1508);
        const v1521 = v1513[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '1')];
        const v1522 = v1513[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '2')];
        const v1523 = [v1518, v1521, v1522];
        const v1524 = stdlib.Array_set(v1435, stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '1'), v1523);
        ;
        const v1525 = stdlib.sub(v920, v1508);
        const v1526 = stdlib.sub(v1510, v1508);
        await stdlib.mapSet(map0, v1075, v1526);
        const v1527 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1075), null);
        const v1528 = stdlib.fromSome(v1527, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
        let v1529;
        const v1530 = stdlib.eq(v1525, stdlib.checkedBigNumberify('./helper.rsh:169:36:decimal', stdlib.UInt_max, '0'));
        if (v1530) {
          v1529 = v985;
          }
        else {
          const v1531 = stdlib.mul(v985, v1508);
          const v1532 = stdlib.div(v1531, v1525);
          v1529 = v1532;
          }
        let v1533;
        const v1534 = stdlib.ge(v1529, v1528);
        if (v1534) {
          v1533 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1535 = stdlib.sub(v1528, v1529);
          v1533 = v1535;
          }
        await stdlib.mapSet(map1, v1075, v1533);
        const v1537 = {
          newEveryoneStaked: v1525,
          newUserStaked: v1526
          };
        await txn3.getOutput('Staker_withdraw', 'v1537', ctc9, v1537);
        const cv917 = v985;
        const cv918 = v918;
        const cv919 = v922;
        const cv920 = v1525;
        const cv921 = v1077;
        const cv922 = v921;
        const cv927 = v1524;
        const cv928 = v928;
        
        v917 = cv917;
        v918 = cv918;
        v919 = cv919;
        v920 = cv920;
        v921 = cv921;
        v922 = cv922;
        v927 = cv927;
        v928 = cv928;
        
        continue;
        break;
        }
      }
    
    }
  const v1548 = stdlib.le(v910, v922);
  const v1549 = v1548 ? v910 : v922;
  let v1550;
  const v1551 = stdlib.ge(v919, v1549);
  if (v1551) {
    v1550 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v1552 = stdlib.sub(v1549, v919);
    v1550 = v1552;
    }
  const v1553 = stdlib.mul(v1550, v890);
  const v1554 = stdlib.add(v917, v1553);
  const v1555 = stdlib.le(v1554, v918);
  const v1556 = v1555 ? v1554 : v918;
  const v1586 = ['Deployer0_579', null];
  
  const txn3 = await (ctc.sendrecv({
    args: [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v927, v928, v1556, v1586],
    evt_cnt: 1,
    funcNum: 3,
    lct: v921,
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./helper.rsh:197:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1599], secs: v1601, time: v1600, didSend: v634, from: v1598 } = txn3;
      
      switch (v1599[0]) {
        case 'Any_halt0_579': {
          const v1602 = v1599[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Any_halt"
            });
          ;
          const v1609 = null;
          await txn3.getOutput('Any_halt', 'v1609', ctc0, v1609);
          const v1615 = v927[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
          const v1616 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
          const v1622 = stdlib.sub(v1616, v1616);
          const v1625 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '1')];
          const v1626 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '2')];
          const v1627 = [v1622, v1625, v1626];
          const v1628 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '0'), v1627);
          sim_r.txns.push({
            amt: v1616,
            kind: 'from',
            to: v866,
            tok: v868
            });
          const v1629 = v1628[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '1')];
          const v1630 = v1629[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v1630,
            kind: 'from',
            to: v866,
            tok: v869
            });
          sim_r.txns.push({
            amt: v928,
            kind: 'from',
            to: v866,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v869
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v868
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Deployer0_579': {
          const v1699 = v1599[1];
          ;
          const v1754 = stdlib.addressEq(v1598, v866);
          ;
          const v1755 = v927[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
          const v1756 = v1755[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
          const v1762 = stdlib.sub(v1756, v1756);
          const v1765 = v1755[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '1')];
          const v1766 = v1755[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '2')];
          const v1767 = [v1762, v1765, v1766];
          const v1768 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '0'), v1767);
          sim_r.txns.push({
            amt: v1756,
            kind: 'from',
            to: v866,
            tok: v868
            });
          const v1769 = v1768[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '1')];
          const v1770 = v1769[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v1770,
            kind: 'from',
            to: v866,
            tok: v869
            });
          sim_r.txns.push({
            amt: v928,
            kind: 'from',
            to: v866,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v869
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v868
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc4, ctc3, ctc3, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc14, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1599], secs: v1601, time: v1600, didSend: v634, from: v1598 } = txn3;
  switch (v1599[0]) {
    case 'Any_halt0_579': {
      const v1602 = v1599[1];
      undefined /* setApiDetails */;
      ;
      const v1609 = null;
      await txn3.getOutput('Any_halt', 'v1609', ctc0, v1609);
      const v1615 = v927[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
      const v1616 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
      const v1622 = stdlib.sub(v1616, v1616);
      const v1625 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '1')];
      const v1626 = v1615[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '2')];
      const v1627 = [v1622, v1625, v1626];
      const v1628 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '0'), v1627);
      ;
      const v1629 = v1628[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '1')];
      const v1630 = v1629[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    case 'Deployer0_579': {
      const v1699 = v1599[1];
      ;
      const v1754 = stdlib.addressEq(v1598, v866);
      stdlib.assert(v1754, {
        at: './helper.rsh:196:7:application',
        fs: [],
        msg: null,
        who: 'Deployer'
        });
      const v1755 = v927[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
      const v1756 = v1755[stdlib.checkedBigNumberify('./helper.rsh:200:21:application', stdlib.UInt_max, '0')];
      const v1762 = stdlib.sub(v1756, v1756);
      const v1765 = v1755[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '1')];
      const v1766 = v1755[stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '2')];
      const v1767 = [v1762, v1765, v1766];
      const v1768 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:200:53:application', stdlib.UInt_max, '0'), v1767);
      ;
      const v1769 = v1768[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '1')];
      const v1770 = v1769[stdlib.checkedBigNumberify('./helper.rsh:202:21:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    }
  
  
  
  
  
  };
export async function Staker_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Struct([['rewardToken', ctc4], ['stakeToken', ctc4], ['rewardsPerBlock', ctc1], ['duration', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Staker_harvest0_245: ctc9,
    Staker_stake0_245: ctc10,
    Staker_withdraw0_245: ctc10
    });
  const ctc12 = stdlib.T_Struct([['userReceived', ctc1], ['totalRemaining', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc5, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc6, ctc1]);
  const v1037 = stdlib.protect(ctc9, await interact.in(), {
    at: './helper.rsh:1:23:application',
    fs: ['at ./helper.rsh:184:9:application call to [unknown function] (defined at: ./helper.rsh:184:9:function exp)', 'at ./helper.rsh:92:19:application call to "runStaker_harvest0_245" (defined at: ./helper.rsh:184:9:function exp)', 'at ./helper.rsh:92:19:application call to [unknown function] (defined at: ./helper.rsh:92:19:function exp)'],
    msg: 'in',
    who: 'Staker_harvest'
    });
  const v1041 = ['Staker_harvest0_245', v1037];
  
  const txn1 = await (ctc.sendrecv({
    args: [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985, v1041],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./helper.rsh:185:15:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./helper.rsh:185:19:decimal', stdlib.UInt_max, '0'), v869]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1076], secs: v1078, time: v1077, didSend: v418, from: v1075 } = txn1;
      
      switch (v1076[0]) {
        case 'Staker_harvest0_245': {
          const v1079 = v1076[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_harvest"
            });
          ;
          const v1115 = v927[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
          const v1116 = v1115[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '0')];
          const v1120 = v1115[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
          const v1121 = v1115[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '2')];
          const v1122 = [v1116, v1120, v1121];
          const v1123 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1'), v1122);
          ;
          const v1125 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1075), null);
          const v1126 = stdlib.fromSome(v1125, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
          const v1127 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1075), null);
          const v1128 = stdlib.fromSome(v1127, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
          let v1132;
          if (v980) {
            v1132 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1134 = stdlib.sub(v978, v919);
            v1132 = v1134;
            }
          const v1135 = stdlib.mul(v1132, v890);
          const v1136 = stdlib.add(v917, v1135);
          const v1137 = stdlib.le(v1136, v918);
          const v1138 = v1137 ? v1136 : v918;
          const v1140 = stdlib.muldiv(v1138, v1126, v920);
          let v1141;
          const v1142 = stdlib.ge(v1128, v1140);
          if (v1142) {
            v1141 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1143 = stdlib.sub(v1140, v1128);
            v1141 = v1143;
            }
          const v1144 = stdlib.le(v1141, v985);
          const v1145 = v1144 ? v1141 : v985;
          const v1148 = v1123[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '0')];
          const v1149 = v1148[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '0')];
          const v1153 = stdlib.sub(v1149, v1145);
          const v1156 = v1148[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '1')];
          const v1157 = v1148[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '2')];
          const v1158 = [v1153, v1156, v1157];
          const v1159 = stdlib.Array_set(v1123, stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '0'), v1158);
          sim_r.txns.push({
            amt: v1145,
            kind: 'from',
            to: v1075,
            tok: v868
            });
          const v1160 = stdlib.sub(v918, v1145);
          const v1163 = stdlib.add(v1128, v1145);
          await stdlib.simMapSet(sim_r, 1, v1075, v1163);
          const v1164 = {
            totalRemaining: v1160,
            userReceived: v1145
            };
          const v1165 = await txn1.getOutput('Staker_harvest', 'v1164', ctc12, v1164);
          
          const v1172 = stdlib.sub(v985, v1145);
          const v3086 = v1172;
          const v3087 = v1160;
          const v3088 = v922;
          const v3089 = v920;
          const v3090 = v1077;
          const v3091 = v921;
          const v3092 = v1159;
          const v3093 = v928;
          const v3094 = stdlib.eq(v920, stdlib.checkedBigNumberify('./helper.rsh:142:27:decimal', stdlib.UInt_max, '0'));
          const v3095 = stdlib.le(v921, v910);
          const v3096 = v3094 ? v3095 : true;
          if (v3096) {
            const v3097 = stdlib.le(v910, v921);
            const v3098 = v3097 ? v910 : v921;
            let v3099;
            const v3100 = stdlib.ge(v922, v3098);
            if (v3100) {
              v3099 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v3101 = stdlib.sub(v3098, v922);
              v3099 = v3101;
              }
            const v3102 = stdlib.mul(v3099, v890);
            const v3103 = stdlib.add(v1172, v3102);
            const v3104 = stdlib.le(v3103, v1160);
            const v3105 = v3104 ? v3103 : v1160;
            sim_r.isHalt = false;
            }
          else {
            const v3106 = stdlib.le(v910, v921);
            const v3107 = v3106 ? v910 : v921;
            let v3108;
            const v3109 = stdlib.ge(v922, v3107);
            if (v3109) {
              v3108 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v3110 = stdlib.sub(v3107, v922);
              v3108 = v3110;
              }
            const v3111 = stdlib.mul(v3108, v890);
            const v3112 = stdlib.add(v1172, v3111);
            const v3113 = stdlib.le(v3112, v1160);
            const v3114 = v3113 ? v3112 : v1160;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_stake0_245': {
          const v1235 = v1076[1];
          
          break;
          }
        case 'Staker_withdraw0_245': {
          const v1391 = v1076[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc5, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1076], secs: v1078, time: v1077, didSend: v418, from: v1075 } = txn1;
  switch (v1076[0]) {
    case 'Staker_harvest0_245': {
      const v1079 = v1076[1];
      undefined /* setApiDetails */;
      ;
      const v1115 = v927[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
      const v1116 = v1115[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '0')];
      const v1120 = v1115[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
      const v1121 = v1115[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '2')];
      const v1122 = [v1116, v1120, v1121];
      const v1123 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1'), v1122);
      ;
      const v1125 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1075), null);
      const v1126 = stdlib.fromSome(v1125, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
      const v1127 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1075), null);
      const v1128 = stdlib.fromSome(v1127, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
      let v1132;
      if (v980) {
        v1132 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1134 = stdlib.sub(v978, v919);
        v1132 = v1134;
        }
      const v1135 = stdlib.mul(v1132, v890);
      const v1136 = stdlib.add(v917, v1135);
      const v1137 = stdlib.le(v1136, v918);
      const v1138 = v1137 ? v1136 : v918;
      const v1140 = stdlib.muldiv(v1138, v1126, v920);
      let v1141;
      const v1142 = stdlib.ge(v1128, v1140);
      if (v1142) {
        v1141 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1143 = stdlib.sub(v1140, v1128);
        v1141 = v1143;
        }
      const v1144 = stdlib.le(v1141, v985);
      const v1145 = v1144 ? v1141 : v985;
      const v1148 = v1123[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '0')];
      const v1149 = v1148[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '0')];
      const v1153 = stdlib.sub(v1149, v1145);
      const v1156 = v1148[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '1')];
      const v1157 = v1148[stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '2')];
      const v1158 = [v1153, v1156, v1157];
      const v1159 = stdlib.Array_set(v1123, stdlib.checkedBigNumberify('./helper.rsh:189:42:application', stdlib.UInt_max, '0'), v1158);
      ;
      const v1160 = stdlib.sub(v918, v1145);
      const v1163 = stdlib.add(v1128, v1145);
      await stdlib.mapSet(map1, v1075, v1163);
      const v1164 = {
        totalRemaining: v1160,
        userReceived: v1145
        };
      const v1165 = await txn1.getOutput('Staker_harvest', 'v1164', ctc12, v1164);
      if (v418) {
        stdlib.protect(ctc0, await interact.out(v1079, v1165), {
          at: './helper.rsh:184:10:application',
          fs: ['at ./helper.rsh:184:10:application call to [unknown function] (defined at: ./helper.rsh:184:10:function exp)', 'at ./helper.rsh:192:10:application call to "k" (defined at: ./helper.rsh:186:7:function exp)', 'at ./helper.rsh:186:7:application call to [unknown function] (defined at: ./helper.rsh:186:7:function exp)'],
          msg: 'out',
          who: 'Staker_harvest'
          });
        }
      else {
        }
      
      const v1172 = stdlib.sub(v985, v1145);
      const v3086 = v1172;
      const v3087 = v1160;
      const v3088 = v922;
      const v3089 = v920;
      const v3090 = v1077;
      const v3091 = v921;
      const v3092 = v1159;
      const v3093 = v928;
      const v3094 = stdlib.eq(v920, stdlib.checkedBigNumberify('./helper.rsh:142:27:decimal', stdlib.UInt_max, '0'));
      const v3095 = stdlib.le(v921, v910);
      const v3096 = v3094 ? v3095 : true;
      if (v3096) {
        const v3097 = stdlib.le(v910, v921);
        const v3098 = v3097 ? v910 : v921;
        let v3099;
        const v3100 = stdlib.ge(v922, v3098);
        if (v3100) {
          v3099 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3101 = stdlib.sub(v3098, v922);
          v3099 = v3101;
          }
        const v3102 = stdlib.mul(v3099, v890);
        const v3103 = stdlib.add(v1172, v3102);
        const v3104 = stdlib.le(v3103, v1160);
        const v3105 = v3104 ? v3103 : v1160;
        return;
        }
      else {
        const v3106 = stdlib.le(v910, v921);
        const v3107 = v3106 ? v910 : v921;
        let v3108;
        const v3109 = stdlib.ge(v922, v3107);
        if (v3109) {
          v3108 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3110 = stdlib.sub(v3107, v922);
          v3108 = v3110;
          }
        const v3111 = stdlib.mul(v3108, v890);
        const v3112 = stdlib.add(v1172, v3111);
        const v3113 = stdlib.le(v3112, v1160);
        const v3114 = v3113 ? v3112 : v1160;
        return;
        }
      break;
      }
    case 'Staker_stake0_245': {
      const v1235 = v1076[1];
      return;
      break;
      }
    case 'Staker_withdraw0_245': {
      const v1391 = v1076[1];
      return;
      break;
      }
    }
  
  
  };
export async function Staker_stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Struct([['rewardToken', ctc4], ['stakeToken', ctc4], ['rewardsPerBlock', ctc1], ['duration', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Staker_harvest0_245: ctc10,
    Staker_stake0_245: ctc9,
    Staker_withdraw0_245: ctc9
    });
  const ctc12 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc5, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc6, ctc1]);
  const v1013 = stdlib.protect(ctc9, await interact.in(), {
    at: './helper.rsh:1:23:application',
    fs: ['at ./helper.rsh:143:9:application call to [unknown function] (defined at: ./helper.rsh:143:9:function exp)', 'at ./helper.rsh:92:19:application call to "runStaker_stake0_245" (defined at: ./helper.rsh:143:9:function exp)', 'at ./helper.rsh:92:19:application call to [unknown function] (defined at: ./helper.rsh:92:19:function exp)'],
    msg: 'in',
    who: 'Staker_stake'
    });
  const v1014 = v1013[stdlib.checkedBigNumberify('./helper.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1020 = ['Staker_stake0_245', v1013];
  
  const txn1 = await (ctc.sendrecv({
    args: [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985, v1020],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./helper.rsh:144:18:decimal', stdlib.UInt_max, '0'), [[v1014, v869]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1076], secs: v1078, time: v1077, didSend: v418, from: v1075 } = txn1;
      
      switch (v1076[0]) {
        case 'Staker_harvest0_245': {
          const v1079 = v1076[1];
          
          break;
          }
        case 'Staker_stake0_245': {
          const v1235 = v1076[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_stake"
            });
          const v1247 = v1235[stdlib.checkedBigNumberify('./helper.rsh:143:9:spread', stdlib.UInt_max, '0')];
          ;
          const v1271 = v927[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
          const v1272 = v1271[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '0')];
          const v1273 = stdlib.add(v1272, v1247);
          const v1276 = v1271[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
          const v1277 = v1271[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '2')];
          const v1278 = [v1273, v1276, v1277];
          const v1279 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1'), v1278);
          sim_r.txns.push({
            amt: v1247,
            kind: 'to',
            tok: v869
            });
          const v1332 = stdlib.add(v920, v1247);
          const v1333 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1075), null);
          const v1334 = stdlib.fromSome(v1333, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
          const v1335 = stdlib.add(v1334, v1247);
          await stdlib.simMapSet(sim_r, 0, v1075, v1335);
          const v1336 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1075), null);
          const v1337 = stdlib.fromSome(v1336, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
          const v1338 = stdlib.mul(v985, v1247);
          const v1339 = stdlib.div(v1338, v1332);
          const v1340 = stdlib.add(v1337, v1339);
          await stdlib.simMapSet(sim_r, 1, v1075, v1340);
          const v1341 = {
            newEveryoneStaked: v1332,
            newUserStaked: v1335
            };
          const v1342 = await txn1.getOutput('Staker_stake', 'v1341', ctc12, v1341);
          
          const v3314 = v985;
          const v3315 = v918;
          const v3316 = v922;
          const v3317 = v1332;
          const v3318 = v1077;
          const v3319 = v921;
          const v3320 = v1279;
          const v3321 = v928;
          const v3322 = stdlib.eq(v1332, stdlib.checkedBigNumberify('./helper.rsh:142:27:decimal', stdlib.UInt_max, '0'));
          const v3323 = stdlib.le(v921, v910);
          const v3324 = v3322 ? v3323 : true;
          if (v3324) {
            const v3325 = stdlib.le(v910, v921);
            const v3326 = v3325 ? v910 : v921;
            let v3327;
            const v3328 = stdlib.ge(v922, v3326);
            if (v3328) {
              v3327 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v3329 = stdlib.sub(v3326, v922);
              v3327 = v3329;
              }
            const v3330 = stdlib.mul(v3327, v890);
            const v3331 = stdlib.add(v985, v3330);
            const v3332 = stdlib.le(v3331, v918);
            const v3333 = v3332 ? v3331 : v918;
            sim_r.isHalt = false;
            }
          else {
            const v3334 = stdlib.le(v910, v921);
            const v3335 = v3334 ? v910 : v921;
            let v3336;
            const v3337 = stdlib.ge(v922, v3335);
            if (v3337) {
              v3336 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v3338 = stdlib.sub(v3335, v922);
              v3336 = v3338;
              }
            const v3339 = stdlib.mul(v3336, v890);
            const v3340 = stdlib.add(v985, v3339);
            const v3341 = stdlib.le(v3340, v918);
            const v3342 = v3341 ? v3340 : v918;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_withdraw0_245': {
          const v1391 = v1076[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc5, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1076], secs: v1078, time: v1077, didSend: v418, from: v1075 } = txn1;
  switch (v1076[0]) {
    case 'Staker_harvest0_245': {
      const v1079 = v1076[1];
      return;
      break;
      }
    case 'Staker_stake0_245': {
      const v1235 = v1076[1];
      undefined /* setApiDetails */;
      const v1247 = v1235[stdlib.checkedBigNumberify('./helper.rsh:143:9:spread', stdlib.UInt_max, '0')];
      ;
      const v1271 = v927[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
      const v1272 = v1271[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '0')];
      const v1273 = stdlib.add(v1272, v1247);
      const v1276 = v1271[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
      const v1277 = v1271[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '2')];
      const v1278 = [v1273, v1276, v1277];
      const v1279 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1'), v1278);
      ;
      const v1332 = stdlib.add(v920, v1247);
      const v1333 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1075), null);
      const v1334 = stdlib.fromSome(v1333, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
      const v1335 = stdlib.add(v1334, v1247);
      await stdlib.mapSet(map0, v1075, v1335);
      const v1336 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1075), null);
      const v1337 = stdlib.fromSome(v1336, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
      const v1338 = stdlib.mul(v985, v1247);
      const v1339 = stdlib.div(v1338, v1332);
      const v1340 = stdlib.add(v1337, v1339);
      await stdlib.mapSet(map1, v1075, v1340);
      const v1341 = {
        newEveryoneStaked: v1332,
        newUserStaked: v1335
        };
      const v1342 = await txn1.getOutput('Staker_stake', 'v1341', ctc12, v1341);
      if (v418) {
        stdlib.protect(ctc0, await interact.out(v1235, v1342), {
          at: './helper.rsh:143:10:application',
          fs: ['at ./helper.rsh:143:10:application call to [unknown function] (defined at: ./helper.rsh:143:10:function exp)', 'at ./helper.rsh:152:10:application call to "k" (defined at: ./helper.rsh:145:7:function exp)', 'at ./helper.rsh:145:7:application call to [unknown function] (defined at: ./helper.rsh:145:7:function exp)'],
          msg: 'out',
          who: 'Staker_stake'
          });
        }
      else {
        }
      
      const v3314 = v985;
      const v3315 = v918;
      const v3316 = v922;
      const v3317 = v1332;
      const v3318 = v1077;
      const v3319 = v921;
      const v3320 = v1279;
      const v3321 = v928;
      const v3322 = stdlib.eq(v1332, stdlib.checkedBigNumberify('./helper.rsh:142:27:decimal', stdlib.UInt_max, '0'));
      const v3323 = stdlib.le(v921, v910);
      const v3324 = v3322 ? v3323 : true;
      if (v3324) {
        const v3325 = stdlib.le(v910, v921);
        const v3326 = v3325 ? v910 : v921;
        let v3327;
        const v3328 = stdlib.ge(v922, v3326);
        if (v3328) {
          v3327 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3329 = stdlib.sub(v3326, v922);
          v3327 = v3329;
          }
        const v3330 = stdlib.mul(v3327, v890);
        const v3331 = stdlib.add(v985, v3330);
        const v3332 = stdlib.le(v3331, v918);
        const v3333 = v3332 ? v3331 : v918;
        return;
        }
      else {
        const v3334 = stdlib.le(v910, v921);
        const v3335 = v3334 ? v910 : v921;
        let v3336;
        const v3337 = stdlib.ge(v922, v3335);
        if (v3337) {
          v3336 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3338 = stdlib.sub(v3335, v922);
          v3336 = v3338;
          }
        const v3339 = stdlib.mul(v3336, v890);
        const v3340 = stdlib.add(v985, v3339);
        const v3341 = stdlib.le(v3340, v918);
        const v3342 = v3341 ? v3340 : v918;
        return;
        }
      break;
      }
    case 'Staker_withdraw0_245': {
      const v1391 = v1076[1];
      return;
      break;
      }
    }
  
  
  };
export async function Staker_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Struct([['rewardToken', ctc4], ['stakeToken', ctc4], ['rewardsPerBlock', ctc1], ['duration', ctc1]]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Staker_harvest0_245: ctc10,
    Staker_stake0_245: ctc9,
    Staker_withdraw0_245: ctc9
    });
  const ctc12 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc2;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc3, ctc5, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc6, ctc1]);
  const v1022 = ctc.selfAddress();
  const v1024 = stdlib.protect(ctc9, await interact.in(), {
    at: './helper.rsh:1:23:application',
    fs: ['at ./helper.rsh:156:7:application call to [unknown function] (defined at: ./helper.rsh:156:7:function exp)', 'at ./helper.rsh:92:19:application call to "runStaker_withdraw0_245" (defined at: ./helper.rsh:155:9:function exp)', 'at ./helper.rsh:92:19:application call to [unknown function] (defined at: ./helper.rsh:92:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdraw'
    });
  const v1025 = v1024[stdlib.checkedBigNumberify('./helper.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1027 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1022), null);
  const v1028 = stdlib.fromSome(v1027, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
  const v1029 = stdlib.le(v1025, v1028);
  stdlib.assert(v1029, {
    at: './helper.rsh:156:23:application',
    fs: ['at ./helper.rsh:156:7:application call to [unknown function] (defined at: ./helper.rsh:156:14:function exp)', 'at ./helper.rsh:156:7:application call to [unknown function] (defined at: ./helper.rsh:156:7:function exp)', 'at ./helper.rsh:92:19:application call to "runStaker_withdraw0_245" (defined at: ./helper.rsh:155:9:function exp)', 'at ./helper.rsh:92:19:application call to [unknown function] (defined at: ./helper.rsh:92:19:function exp)'],
    msg: null,
    who: 'Staker_withdraw'
    });
  const v1033 = ['Staker_withdraw0_245', v1024];
  
  const txn1 = await (ctc.sendrecv({
    args: [v866, v867, v868, v869, v890, v910, v917, v918, v919, v920, v921, v922, v927, v928, v978, v980, v985, v1033],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./helper.rsh:157:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./helper.rsh:157:20:decimal', stdlib.UInt_max, '0'), v869]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1076], secs: v1078, time: v1077, didSend: v418, from: v1075 } = txn1;
      
      switch (v1076[0]) {
        case 'Staker_harvest0_245': {
          const v1079 = v1076[1];
          
          break;
          }
        case 'Staker_stake0_245': {
          const v1235 = v1076[1];
          
          break;
          }
        case 'Staker_withdraw0_245': {
          const v1391 = v1076[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Staker_withdraw"
            });
          ;
          const v1427 = v927[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
          const v1428 = v1427[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '0')];
          const v1432 = v1427[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
          const v1433 = v1427[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '2')];
          const v1434 = [v1428, v1432, v1433];
          const v1435 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1'), v1434);
          ;
          const v1508 = v1391[stdlib.checkedBigNumberify('./helper.rsh:155:9:spread', stdlib.UInt_max, '0')];
          const v1509 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1075), null);
          const v1510 = stdlib.fromSome(v1509, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
          const v1512 = stdlib.le(v1508, v1510);
          ;
          const v1513 = v1435[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '1')];
          const v1514 = v1513[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '0')];
          const v1518 = stdlib.sub(v1514, v1508);
          const v1521 = v1513[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '1')];
          const v1522 = v1513[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '2')];
          const v1523 = [v1518, v1521, v1522];
          const v1524 = stdlib.Array_set(v1435, stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '1'), v1523);
          sim_r.txns.push({
            amt: v1508,
            kind: 'from',
            to: v1075,
            tok: v869
            });
          const v1525 = stdlib.sub(v920, v1508);
          const v1526 = stdlib.sub(v1510, v1508);
          await stdlib.simMapSet(sim_r, 0, v1075, v1526);
          const v1527 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1075), null);
          const v1528 = stdlib.fromSome(v1527, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
          let v1529;
          const v1530 = stdlib.eq(v1525, stdlib.checkedBigNumberify('./helper.rsh:169:36:decimal', stdlib.UInt_max, '0'));
          if (v1530) {
            v1529 = v985;
            }
          else {
            const v1531 = stdlib.mul(v985, v1508);
            const v1532 = stdlib.div(v1531, v1525);
            v1529 = v1532;
            }
          let v1533;
          const v1534 = stdlib.ge(v1529, v1528);
          if (v1534) {
            v1533 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v1535 = stdlib.sub(v1528, v1529);
            v1533 = v1535;
            }
          await stdlib.simMapSet(sim_r, 1, v1075, v1533);
          const v1537 = {
            newEveryoneStaked: v1525,
            newUserStaked: v1526
            };
          const v1538 = await txn1.getOutput('Staker_withdraw', 'v1537', ctc12, v1537);
          
          const v3542 = v985;
          const v3543 = v918;
          const v3544 = v922;
          const v3545 = v1525;
          const v3546 = v1077;
          const v3547 = v921;
          const v3548 = v1524;
          const v3549 = v928;
          const v3551 = stdlib.le(v921, v910);
          const v3552 = v1530 ? v3551 : true;
          if (v3552) {
            const v3553 = stdlib.le(v910, v921);
            const v3554 = v3553 ? v910 : v921;
            let v3555;
            const v3556 = stdlib.ge(v922, v3554);
            if (v3556) {
              v3555 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v3557 = stdlib.sub(v3554, v922);
              v3555 = v3557;
              }
            const v3558 = stdlib.mul(v3555, v890);
            const v3559 = stdlib.add(v985, v3558);
            const v3560 = stdlib.le(v3559, v918);
            const v3561 = v3560 ? v3559 : v918;
            sim_r.isHalt = false;
            }
          else {
            const v3562 = stdlib.le(v910, v921);
            const v3563 = v3562 ? v910 : v921;
            let v3564;
            const v3565 = stdlib.ge(v922, v3563);
            if (v3565) {
              v3564 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
              }
            else {
              const v3566 = stdlib.sub(v3563, v922);
              v3564 = v3566;
              }
            const v3567 = stdlib.mul(v3564, v890);
            const v3568 = stdlib.add(v985, v3567);
            const v3569 = stdlib.le(v3568, v918);
            const v3570 = v3569 ? v3568 : v918;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc5, ctc4, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1076], secs: v1078, time: v1077, didSend: v418, from: v1075 } = txn1;
  switch (v1076[0]) {
    case 'Staker_harvest0_245': {
      const v1079 = v1076[1];
      return;
      break;
      }
    case 'Staker_stake0_245': {
      const v1235 = v1076[1];
      return;
      break;
      }
    case 'Staker_withdraw0_245': {
      const v1391 = v1076[1];
      undefined /* setApiDetails */;
      ;
      const v1427 = v927[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
      const v1428 = v1427[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '0')];
      const v1432 = v1427[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1')];
      const v1433 = v1427[stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '2')];
      const v1434 = [v1428, v1432, v1433];
      const v1435 = stdlib.Array_set(v927, stdlib.checkedBigNumberify('./helper.rsh:92:19:dot', stdlib.UInt_max, '1'), v1434);
      ;
      const v1508 = v1391[stdlib.checkedBigNumberify('./helper.rsh:155:9:spread', stdlib.UInt_max, '0')];
      const v1509 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1075), null);
      const v1510 = stdlib.fromSome(v1509, stdlib.checkedBigNumberify('./helper.rsh:84:57:decimal', stdlib.UInt_max, '0'));
      const v1512 = stdlib.le(v1508, v1510);
      stdlib.assert(v1512, {
        at: './helper.rsh:161:16:application',
        fs: ['at ./helper.rsh:158:7:application call to [unknown function] (defined at: ./helper.rsh:158:7:function exp)'],
        msg: null,
        who: 'Staker_withdraw'
        });
      const v1513 = v1435[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '1')];
      const v1514 = v1513[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '0')];
      const v1518 = stdlib.sub(v1514, v1508);
      const v1521 = v1513[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '1')];
      const v1522 = v1513[stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '2')];
      const v1523 = [v1518, v1521, v1522];
      const v1524 = stdlib.Array_set(v1435, stdlib.checkedBigNumberify('./helper.rsh:162:41:application', stdlib.UInt_max, '1'), v1523);
      ;
      const v1525 = stdlib.sub(v920, v1508);
      const v1526 = stdlib.sub(v1510, v1508);
      await stdlib.mapSet(map0, v1075, v1526);
      const v1527 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1075), null);
      const v1528 = stdlib.fromSome(v1527, stdlib.checkedBigNumberify('./helper.rsh:85:67:decimal', stdlib.UInt_max, '0'));
      let v1529;
      const v1530 = stdlib.eq(v1525, stdlib.checkedBigNumberify('./helper.rsh:169:36:decimal', stdlib.UInt_max, '0'));
      if (v1530) {
        v1529 = v985;
        }
      else {
        const v1531 = stdlib.mul(v985, v1508);
        const v1532 = stdlib.div(v1531, v1525);
        v1529 = v1532;
        }
      let v1533;
      const v1534 = stdlib.ge(v1529, v1528);
      if (v1534) {
        v1533 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1535 = stdlib.sub(v1528, v1529);
        v1533 = v1535;
        }
      await stdlib.mapSet(map1, v1075, v1533);
      const v1537 = {
        newEveryoneStaked: v1525,
        newUserStaked: v1526
        };
      const v1538 = await txn1.getOutput('Staker_withdraw', 'v1537', ctc12, v1537);
      if (v418) {
        stdlib.protect(ctc0, await interact.out(v1391, v1538), {
          at: './helper.rsh:155:10:application',
          fs: ['at ./helper.rsh:155:10:application call to [unknown function] (defined at: ./helper.rsh:155:10:function exp)', 'at ./helper.rsh:181:10:application call to "k" (defined at: ./helper.rsh:158:7:function exp)', 'at ./helper.rsh:158:7:application call to [unknown function] (defined at: ./helper.rsh:158:7:function exp)'],
          msg: 'out',
          who: 'Staker_withdraw'
          });
        }
      else {
        }
      
      const v3542 = v985;
      const v3543 = v918;
      const v3544 = v922;
      const v3545 = v1525;
      const v3546 = v1077;
      const v3547 = v921;
      const v3548 = v1524;
      const v3549 = v928;
      const v3551 = stdlib.le(v921, v910);
      const v3552 = v1530 ? v3551 : true;
      if (v3552) {
        const v3553 = stdlib.le(v910, v921);
        const v3554 = v3553 ? v910 : v921;
        let v3555;
        const v3556 = stdlib.ge(v922, v3554);
        if (v3556) {
          v3555 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3557 = stdlib.sub(v3554, v922);
          v3555 = v3557;
          }
        const v3558 = stdlib.mul(v3555, v890);
        const v3559 = stdlib.add(v985, v3558);
        const v3560 = stdlib.le(v3559, v918);
        const v3561 = v3560 ? v3559 : v918;
        return;
        }
      else {
        const v3562 = stdlib.le(v910, v921);
        const v3563 = v3562 ? v910 : v921;
        let v3564;
        const v3565 = stdlib.ge(v922, v3563);
        if (v3565) {
          v3564 = stdlib.checkedBigNumberify('./helper.rsh:24:24:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v3566 = stdlib.sub(v3563, v922);
          v3564 = v3566;
          }
        const v3567 = stdlib.mul(v3564, v890);
        const v3568 = stdlib.add(v985, v3567);
        const v3569 = stdlib.le(v3568, v918);
        const v3570 = v3569 ? v3568 : v918;
        return;
        }
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Any_halt()byte[0]`, `Staker_harvest()(uint64,uint64)`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`],
    pure: [`end()uint64`, `opts()(uint64,uint64,uint64,uint64)`, `remainingRewards()uint64`, `rewardsAvailableAt(address,uint64)uint64`, `staked(address)uint64`, `totalStaked()uint64`],
    sigs: [`Any_halt()byte[0]`, `Staker_harvest()(uint64,uint64)`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `end()uint64`, `opts()(uint64,uint64,uint64,uint64)`, `remainingRewards()uint64`, `rewardsAvailableAt(address,uint64)uint64`, `staked(address)uint64`, `totalStaked()uint64`]
    },
  appApproval: `BiAbAAEEBgMIUFhocGB4QEgCoI0GEpaM7LsJ8KndrQ3CtOXQDbuLhNUOmYT57gnBy8bmBdTmudgGorXpqgnDAYaq3agDJgMBAAEBACI1ADEYQQvxKmRJIls1ASEFWzUCMRkjEkEACjEAKCEQr2ZCC702GgAXSUEDOiI1BCM1BkkhEQxAAMZJIRIMQAB1SSETDEAAYEkhFAxAAEchFBJENAFJJQxAAB0lEkQiNhoBiAudVwAJSTX/I1s0/yJVTRY1B0ILeSEEEkQiNhoBiAt/VwAJSTX/I1s0/yJVTRY1B0ILWyETEkQqNf8oNP9QIQWvUEIC3CESEkQqNf8oNP9QQgaPSSEVDEAAECEVEkQ2GgE1/yk0/1BCArchERJENAFJJQxAABMlEkQoZClkUEk1A1d4CDUHQgsFIQQSRChkKWRQSTUDV3gINQdCCvFJIRYMQAHvSSEXDEABm0khGAxAAYIhGBJENAFJJQxAALolEkQ2GgIXNf82GgE1/ihkKWRQSTUDSUohB1s1/SEIWzX8IQlbNfshGVs1+iI0/ogKr1cJCUk1+CNbNPgiVU01+TT/NP1JNP8OTTX4NPs0+A9BAAYiNfdCAAc0+DT7CTX3NAMhCls09zQDIQZbCwg19jT8NPZJNPwOTSI0/ogKYVcACUk19CNbNPQiVU0dNAMhC1uXNfU0+TT1D0EABiI19EIABzT1NPkJNfQ0+jT0STT6Dk0WNQdCChYhBBJENhoCFzX/NhoBNf4oZClkUEk1A0lKIQdbNf0hCFs1/CEJWzX7gaoBWzX6IjT+iAnzVwkJSTX4I1s0+CJVTTX5NP80/Uk0/w5NNfg0+zT4D0EABiI190IABzT4NPsJNfc0AyEKWzT3NAMhBlsLCDX2NPw09kk0/A5NIjT+iAmlVwAJSTX0I1s09CJVTR00AyELW5c19TT5NPUPQQAGIjX0QgAHNPU0+Qk19DT6NPRJNPoOTRY1B0IJWiEXEkQ2GgE1/4ABAjT/UEIA2yEWEkQ0AUkhBAxAAC1JJQxAABMlEkQoZClkUEk1A1cgIDUHQgkiIQQSRChkKWRQSTUDVyAgNQdCCQ4jEkQoZClkUEk1A1cgIDUHQgj7SSEaDEAAMyEaEkQ0AUklDEAAEyUSRChkKWRQSTUDV1gINQdCCNUhBBJEKGQpZFBJNQNXWAg1B0IIwYH+m9KjAhJENAFJJQxAABMlEkQoZClkUEk1A1doCDUHQgieIQQSRChkKWRQSTUDV2gINQdCCIo2GgIXNQQ2GgM2GgEXSSEEDEAFSEkkDEADwyQSRCU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSklXACA1/1cgIDX+IQxbNf0hDVs1/CEGWzX7IQdbNfohCFs1+SELWzX4gYABWzX3gYgBWzX2V5AiNfWBsgFbNfQhGVs180k1BTXygATVjh2rNPJQsDTyIlVJIwxAAhFJIQ4MQAE2IQ4SRDTyVwEINfE09VcRETXwNPVXABE08FcACDTwVwgIUDTwVxABUFA17zTxFzXuIjEAiAfFVwAJSTXsI1s07CJVTTXtNO407Q5ENO9XERE17LEisgE07rISJLIQMQCyFDT8shGzNPg07gk16zTtNO4JNeoxACgxAIgHfyk06hZQNelXCQk06UxQZiIxAIgHalcJCUk16CNbNOgiVU016TTrIhJBAAc08zXoQgAKNPM07gs06wo16DToNOkPQQAGIjXnQgAHNOk06Ak15zEAKDEAiAcmKTTnFlA15lcACTTmUGaACAAAAAAAAAYBNOoWNOsWUFCwNOoWNOsWUDUHNP80/jT9NPw0+zT6NPM0+TT2NOsyBjT3NO9XABE07CJbNO4JFjTsVwgIUDTsVxABUFA09EIFMEg08lcBCDXxNPEXNfA09VcRETXvNPA0/IgG0TT4NPAINe4iMQCIBp1XAAlJNewjWzTsIlVNNPAINe0xACgxAIgGgyk07RZQNexXCQk07ExQZjEAKDEAiAZsKSIxAIgGZVcJCUk17CNbNOwiVU008zTwCzTuCggWUDXsVwAJNOxQZoAIAAAAAAAABT007RY07hZQULA07RY07hZQNQc0/zT+NP00/DT7NPo08zT5NPY07jIGNPc09VcAETTvIls08AgWNO9XCAhQNO9XEAFQUDT0QgRcSDT1VxERNfE09VcAETTxVwAINPFXCAhQNPFXEAFQUDXwIjEAiAXKVwkJSTXuI1s07iJVTTXvNANXwgEXQQAGIjXuQgAONAOBugFbNAMhCVsJNe40AyEKWzTuNPsLCDXtNPk07Uk0+Q5NIjEAiAWCVwAJSTXrI1s06yJVTR00+Jc17DTvNOwPQQAGIjXrQgAHNOw07wk16zTzNOtJNPMOTTXqNPBXABE16bEisgE06rISJLIQMQCyFDT9shGzNPk06gk16DEAKDEAiAUlKTTvNOoIFlA151cACTTnUGaACAAAAAAAAASMNOoWNOgWUFCwNOoWNOgWUDUHNP80/jT9NPw0+zT6NPM06gk06DT2NPgyBjT3NOkiWzTqCRY06VcICFA06VcQAVA08FcREVA09EIDKUghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpJVwAgNf8hDFs1/iENWzX9V4AiNfyBogFbNftJNQU1+oAELkXGATT6ULA0+iJVQACdgAgAAAAAAAAGSbAqNQc0/FcAEUk1+SJbNfixIrIBNPiyEiSyEDT/shQ0/rIRs7EisgE0+EkJFjT5VwgIUDT5VxABUDT8VxERUFcRESJbshIkshA0/7IUNP2yEbOxIrIBNPuyCCOyEDT/sgezsSKyASKyEiSyEDIJshUyCrIUNP2yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IDezEANP8SRDT8VwARSTX5Ils1+LEisgE0+LISJLIQNP+yFDT+shGzsSKyATT4SQkWNPlXCAhQNPlXEAFQNPxXERFQVxERIluyEiSyEDT/shQ0/bIRs7EisgE0+7III7IQNP+yB7OxIrIBIrISJLIQMgmyFTIKshQ0/bIRs7EisgEishIkshAyCbIVMgqyFDT+shGzQgLmSSMMQACeIxJEIzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpJVwAgNf8hDFs1/iEGWzX9V1giNfyBigFbNfuABJqLkXSwNPxXABE1+jT7NP6IAxM0/zEAEkQ0/SEOCDX5NP80A1cgIDT+NAMhDVs0A4F6WzT5NAOBggFbCCI0+zT5IjIGNP00+iJbNPsIFjT6VwgIUDT6VxABUDT8VxERUCJCAQZIIjQBEkQ0BEkiEkw0AhIRREk1BUlJVwAgNf+BIFs1/oEoWzX9gASsn8yJNP9QNP4WUDT9FlCwIQ+IAm6BEa9JNfxJUDX7NP40/RNENPtXABE1+iEFrzT6VwgIUDT6VxABUDT7VxERUDX5IQ+IAjuxIrIBIrISJLIQMgqyFDT+shGzNPlXERE1+DT5VwARIQWvNPhXCAhQNPhXEAFQUDX3IQ+IAgWxIrIBIrISJLIQMgqyFDT9shGzNP+BEFs19jT/gRhbNfU09jT1CzX0MQA0/1A0/hZQNP0WUDIGFlA091A09hZQNPUWUDT0FlAoSwFXAH9nKUsBV38TZ0gjNQEyBjUCQgFYNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jT7IhM0/TT3DhFBAJQ0/TT3STT9Dk018TT6NPEPSTXvQQAGIjXwQgAHNPE0+gk18DT4NPA09gsINe40+TTuSTT5Dk017TTyNPNQNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUDT7FlA0/BZQNP0WUDT+UDT/FlA08RZQNO8WUQcIUDTtFlAoSwFXAH9nKUsBV39MZ0glNQEyBjUCQgCbNP0090k0/Q5NNfE0+jTxD0EABiI18EIABzTxNPoJNfA0+DTwNPYLCDXvNPk070k0+Q5NNe408jTzUDT0FlA09RZQNPYWUDT3FlA0+BZQNPkWUDT6FlA0+xZQNP5QNP8WUDTuFlAoSwFXAH9nKUsBV38zZ0ghBDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DSTEYYUAABUghEK+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 18,
  stateKeys: 2,
  stateSize: 203,
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
                    "internalType": "address payable",
                    "name": "rewardToken",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "stakeToken",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "rewardsPerBlock",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T1",
                "name": "v867",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v868",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v869",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
                    "internalType": "address payable",
                    "name": "rewardToken",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "stakeToken",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "rewardsPerBlock",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T1",
                "name": "v867",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v868",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v869",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
        "internalType": "struct T13",
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
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_halt0_579",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Deployer0_579",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v1599",
                "type": "tuple"
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
    "name": "_reach_e3",
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
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_245",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Staker_stake0_245",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Staker_withdraw0_245",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1076",
                "type": "tuple"
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
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "userReceived",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalRemaining",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1164",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1341",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1537",
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
    "name": "_reach_oe_v1609",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Any_halt",
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
    "name": "Staker_harvest",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "userReceived",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalRemaining",
            "type": "uint256"
          }
        ],
        "internalType": "struct T20",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Staker_stake",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "internalType": "struct T21",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Staker_withdraw",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "internalType": "struct T21",
        "name": "",
        "type": "tuple"
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
        "internalType": "struct T13",
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
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_halt0_579",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Deployer0_579",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v1599",
                "type": "tuple"
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
    "name": "_reach_m3",
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
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_245",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Staker_stake0_245",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Staker_withdraw0_245",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1076",
                "type": "tuple"
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
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
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
    "name": "opts",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "rewardToken",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "stakeToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "rewardsPerBlock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "remainingRewards",
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
        "internalType": "address payable",
        "name": "v3606",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "v3607",
        "type": "uint256"
      }
    ],
    "name": "rewardsAvailableAt",
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
        "internalType": "address payable",
        "name": "v3610",
        "type": "address"
      }
    ],
    "name": "staked",
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
    "name": "totalStaked",
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
  Bytecode: `0x608060405260405162004b7138038062004b718339810160408190526200002691620005e9565b60008055436003556200003862000306565b7f78bec2c91be6162241b4a44bee8183fcaf4a7dda9d86fe4efda6810de42d1f1233836040516200006b929190620006b3565b60405180910390a180516000908190528151602090810182905282516040908101929092528251818401805191909152835190518201528381015191820151910151620000d8916001600160a01b03918216911614620000cd576001620000d0565b60005b600d62000259565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200011a929062000283565b6060820190815260808201805160009052815160209081015181015182518201528251015160409081015182519015159101529051905162000160919060019062000283565b60a0820152620001733415600e62000259565b60208201515160608101516040909101516200019091906200075b565b60c08201526200019f620003a7565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151909116606080860191909152436080860181905260a0808801519087015283515183015160c0808801919091529351519091015160e0860152918501516101008501526001600081905591909155516200022991839101620007c3565b604051602081830303815290604052600290805190602001906200024f92919062000440565b50505050620008e3565b816200027f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200028d620004cf565b60005b6002811015620002e357848160028110620002af57620002af6200072f565b6020020151828260028110620002c957620002c96200072f565b602002015280620002da8162000888565b91505062000290565b5081818460028110620002fa57620002fa6200072f565b60200201529392505050565b604080516101408101909152600060e0820181815261010083018290526101208301919091528152602081016200033c620004cf565b815260408051606081018252600080825260208281018290529282015291019081526020016200036b620004cf565b815260408051606081018252600080825260208281018290529282015291019081526020016200039a620004cf565b8152602001600081525090565b60405180610120016040528060006001600160a01b0316815260200162000401604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081525090565b815260006020820181905260408201819052606082015260800162000425620004cf565b81526020016000815260200160008152602001600081525090565b8280546200044e90620008a6565b90600052602060002090601f016020900481019282620004725760008555620004bd565b82601f106200048d57805160ff1916838001178555620004bd565b82800160010185558215620004bd579182015b82811115620004bd578251825591602001919060010190620004a0565b50620004cb9291506200051c565b5090565b60405180604001604052806002905b62000505604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004de5790505090565b5b80821115620004cb57600081556001016200051d565b604080519081016001600160401b03811182821017156200056457634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b03811182821017156200056457634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200056457634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620005e457600080fd5b919050565b600081830360e0811215620005fd57600080fd5b6200060762000533565b83518152601f198201915060c08212156200062157600080fd5b6200062b6200056a565b60808312156200063a57600080fd5b620006446200059b565b92506200065460208601620005cc565b83526200066460408601620005cc565b602084015260608501516040840152608085015160608401528281526200068e60a08601620005cc565b6020820152620006a160c08601620005cc565b60408201526020820152949350505050565b60006101008201905060018060a01b0380851683528351602084015260208401516200070f60408501825180516001600160a01b0390811683526020808301519091169083015260408082015190830152606090810151910152565b6020810151821660c0850152604001511660e09092019190915292915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161562000778576200077862000745565b500290565b8060005b6002811015620007bd57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000781565b50505050565b81516001600160a01b03168152602080830151610220830191620008159084018280516001600160a01b0390811683526020808301519091169083015260408082015190830152606090810151910152565b5060408301516001600160a01b03811660a08401525060608301516001600160a01b03811660c084015250608083015160e083015260a083015161010062000860818501836200077d565b60c08501516101c085015260e08501516101e085015280850151610200850152505092915050565b60006000198214156200089f576200089f62000745565b5060010190565b600181811c90821680620008bb57607f821691505b60208210811415620008dd57634e487b7160e01b600052602260045260246000fd5b50919050565b61427e80620008f36000396000f3fe6080604052600436106101015760003560e01c80638712236d1161008f578063afb62e5611610061578063afb62e561461027f578063b0c1f58a14610294578063cadc2e7a146102a7578063e2809549146102c7578063efbe1c1c146102cf57005b80638712236d1461020957806398807d8414610229578063a1bb511614610249578063ab53f2c61461025c57005b80633bc5b7bf116100d35780633bc5b7bf1461017a5780636f0fe5c9146101a7578063817b1cd2146101c757806383230757146101dc5780638521eb92146101f157005b80630329cf491461010a5780630a47debc1461011d5780631e93b0f1146101485780632c10a1591461016757005b3661010857005b005b61010861011836600461364d565b6102e4565b34801561012957600080fd5b50610132610308565b60405161013f9190613696565b60405180910390f35b34801561015457600080fd5b506003545b60405190815260200161013f565b6101086101753660046136a4565b61052a565b34801561018657600080fd5b5061019a6101953660046136cb565b61054a565b60405161013f919061370e565b3480156101b357600080fd5b506101596101c236600461373e565b610576565b3480156101d357600080fd5b50610159610afa565b3480156101e857600080fd5b50600154610159565b6101f9610d24565b604051901515815260200161013f565b61021c61021736600461376a565b610d77565b60405161013f9190613783565b34801561023557600080fd5b506101596102443660046136cb565b610de1565b61010861025736600461379a565b611045565b34801561026857600080fd5b50610271611065565b60405161013f9291906137d8565b34801561028b57600080fd5b50610159611102565b61021c6102a236600461376a565b61132b565b3480156102b357600080fd5b5061019a6102c23660046136cb565b611394565b61021c6113ba565b3480156102db57600080fd5b50610159611419565b6102ec612fec565b6103046102fe36849003840184613976565b82611642565b5050565b610310613066565b600160005414156103c55760006002805461032a90613a15565b80601f016020809104026020016040519081016040528092919081815260200182805461035690613a15565b80156103a35780601f10610378576101008083540402835291602001916103a3565b820191906000526020600020905b81548152906001019060200180831161038657829003601f168201915b50505050508060200190518101906103bb9190613b41565b6020015192915050565b60036000541415610470576000600280546103df90613a15565b80601f016020809104026020016040519081016040528092919081815260200182805461040b90613a15565b80156104585780601f1061042d57610100808354040283529160200191610458565b820191906000526020600020905b81548152906001019060200180831161043b57829003601f168201915b50505050508060200190518101906103bb9190613be3565b6006600054141561051b5760006002805461048a90613a15565b80601f01602080910402602001604051908101604052809291908181526020018280546104b690613a15565b80156105035780601f106104d857610100808354040283529160200191610503565b820191906000526020600020905b8154815290600101906020018083116104e657829003601f168201915b50505050508060200190518101906103bb9190613cb7565b6105276000600861221e565b90565b610532612fec565b61030461054436849003840184613dc1565b82612244565b6040805160608101825260008082526020820181905291810191909152610570826124d7565b92915050565b6000600160005414156106335760006002805461059290613a15565b80601f01602080910402602001604051908101604052809291908181526020018280546105be90613a15565b801561060b5780601f106105e05761010080835404028352916020019161060b565b820191906000526020600020905b8154815290600101906020018083116105ee57829003601f168201915b50505050508060200190518101906106239190613b41565b90506106316000600a61221e565b505b600360005414156108985760006002805461064d90613a15565b80601f016020809104026020016040519081016040528092919081815260200182805461067990613a15565b80156106c65780601f1061069b576101008083540402835291602001916106c6565b820191906000526020600020905b8154815290600101906020018083116106a957829003601f168201915b50505050508060200190518101906106de9190613be3565b90506107196040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6001610724866125a9565b516001811115610736576107366136e8565b14610742576000610750565b61074b856125a9565b604001515b815260a0820151841015610764578361076a565b8160a001515b602082018190526101008301511061078857600060408201526107a3565b816101000151816020015161079d9190613e0f565b60408201525b816080015181604001516107b79190613e26565b8260c001516107c69190613e45565b606082015261012082015160016107dc876124d7565b5160018111156107ee576107ee6136e8565b146107fa576000610808565b610803866124d7565b604001515b8360e0015183606001511115610822578360e00151610828565b82606001515b6108329190613e26565b61083c9190613e5d565b6080820181905281511061085657600060a082015261086d565b805160808201516108679190613e0f565b60a08201525b8161018001518160a0015111156108895781610180015161088f565b8060a001515b92505050610570565b60066000541415610aee576000600280546108b290613a15565b80601f01602080910402602001604051908101604052809291908181526020018280546108de90613a15565b801561092b5780601f106109005761010080835404028352916020019161092b565b820191906000526020600020905b81548152906001019060200180831161090e57829003601f168201915b50505050508060200190518101906109439190613cb7565b905061097e6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6001610989866125a9565b51600181111561099b5761099b6136e8565b146109a75760006109b5565b6109b0856125a9565b604001515b815260a08201518410156109c957836109cf565b8160a001515b60208201819052610100830151106109ed5760006040820152610a08565b8161010001518160200151610a029190613e0f565b60408201525b81608001518160400151610a1c9190613e26565b8260c00151610a2b9190613e45565b60608201526101208201516001610a41876124d7565b516001811115610a5357610a536136e8565b14610a5f576000610a6d565b610a68866124d7565b604001515b8360e0015183606001511115610a87578360e00151610a8d565b82606001515b610a979190613e26565b610aa19190613e5d565b60808201819052815110610abb57600060a0820152610ad2565b80516080820151610acc9190613e0f565b60a08201525b8161020001518160a0015111156108895781610200015161088f565b6105706000600a61221e565b600060016000541415610bb757600060028054610b1690613a15565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4290613a15565b8015610b8f5780601f10610b6457610100808354040283529160200191610b8f565b820191906000526020600020905b815481529060010190602001808311610b7257829003601f168201915b5050505050806020019051810190610ba79190613b41565b9050610bb56000600c61221e565b505b60036000541415610c6d57600060028054610bd190613a15565b80601f0160208091040260200160405190810160405280929190818152602001828054610bfd90613a15565b8015610c4a5780601f10610c1f57610100808354040283529160200191610c4a565b820191906000526020600020905b815481529060010190602001808311610c2d57829003601f168201915b5050505050806020019051810190610c629190613be3565b610120015192915050565b60066000541415610d1857600060028054610c8790613a15565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb390613a15565b8015610d005780601f10610cd557610100808354040283529160200191610d00565b820191906000526020600020905b815481529060010190602001808311610ce357829003601f168201915b5050505050806020019051810190610c629190613cb7565b6105276000600c61221e565b6000610d2e612fec565b610d366130a0565b6040805160608101825260008082526020808301829052828401919091528251808201909352818352830191909152610d6f8284612636565b505051919050565b6040805180820190915260008082526020820152610d93612fec565b610d9b6130d9565b610da36130f3565b60408051602080820183528782526060840191909152600283528151808201909252828252830152610dd58284611642565b50506060015192915050565b600060016000541415610e9e57600060028054610dfd90613a15565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2990613a15565b8015610e765780601f10610e4b57610100808354040283529160200191610e76565b820191906000526020600020905b815481529060010190602001808311610e5957829003601f168201915b5050505050806020019051810190610e8e9190613b41565b9050610e9c6000600b61221e565b505b60036000541415610f8957600060028054610eb890613a15565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee490613a15565b8015610f315780601f10610f0657610100808354040283529160200191610f31565b820191906000526020600020905b815481529060010190602001808311610f1457829003601f168201915b5050505050806020019051810190610f499190613be3565b90506001610f56846124d7565b516001811115610f6857610f686136e8565b14610f74576000610f82565b610f7d836124d7565b604001515b9392505050565b6006600054141561103457600060028054610fa390613a15565b80601f0160208091040260200160405190810160405280929190818152602001828054610fcf90613a15565b801561101c5780601f10610ff15761010080835404028352916020019161101c565b820191906000526020600020905b815481529060010190602001808311610fff57829003601f168201915b5050505050806020019051810190610f499190613cb7565b6110406000600b61221e565b919050565b61104d612fec565b61030461105f36849003840184613e7f565b82612636565b60006060600054600280805461107a90613a15565b80601f01602080910402602001604051908101604052809291908181526020018280546110a690613a15565b80156110f35780601f106110c8576101008083540402835291602001916110f3565b820191906000526020600020905b8154815290600101906020018083116110d657829003601f168201915b50505050509050915091509091565b6000600160005414156111bf5760006002805461111e90613a15565b80601f016020809104026020016040519081016040528092919081815260200182805461114a90613a15565b80156111975780601f1061116c57610100808354040283529160200191611197565b820191906000526020600020905b81548152906001019060200180831161117a57829003601f168201915b50505050508060200190518101906111af9190613b41565b90506111bd6000600961221e565b505b60036000541415611274576000600280546111d990613a15565b80601f016020809104026020016040519081016040528092919081815260200182805461120590613a15565b80156112525780601f1061122757610100808354040283529160200191611252565b820191906000526020600020905b81548152906001019060200180831161123557829003601f168201915b505050505080602001905181019061126a9190613be3565b60e0015192915050565b6006600054141561131f5760006002805461128e90613a15565b80601f01602080910402602001604051908101604052809291908181526020018280546112ba90613a15565b80156113075780601f106112dc57610100808354040283529160200191611307565b820191906000526020600020905b8154815290600101906020018083116112ea57829003601f168201915b505050505080602001905181019061126a9190613cb7565b6105276000600961221e565b6040805180820190915260008082526020820152611347612fec565b61134f6130d9565b6113576130f3565b6040805160208082018352878252838301919091526001835281518082019092528282528301526113888284611642565b50506040015192915050565b6040805160608101825260008082526020820181905291810191909152610570826125a9565b60408051808201909152600080825260208201526113d6612fec565b6113de6130d9565b6113e66130f3565b60006020828101829052908252604080518083019091528281529083015261140e8284611642565b505060200151919050565b6000600160005414156114d65760006002805461143590613a15565b80601f016020809104026020016040519081016040528092919081815260200182805461146190613a15565b80156114ae5780601f10611483576101008083540402835291602001916114ae565b820191906000526020600020905b81548152906001019060200180831161149157829003601f168201915b50505050508060200190518101906114c69190613b41565b90506114d46000600761221e565b505b6003600054141561158b576000600280546114f090613a15565b80601f016020809104026020016040519081016040528092919081815260200182805461151c90613a15565b80156115695780601f1061153e57610100808354040283529160200191611569565b820191906000526020600020905b81548152906001019060200180831161154c57829003601f168201915b50505050508060200190518101906115819190613be3565b60a0015192915050565b60066000541415611636576000600280546115a590613a15565b80601f01602080910402602001604051908101604052809291908181526020018280546115d190613a15565b801561161e5780601f106115f35761010080835404028352916020019161161e565b820191906000526020600020905b81548152906001019060200180831161160157829003601f168201915b50505050508060200190518101906115819190613cb7565b6105276000600761221e565b611652600660005414602061221e565b815161166d90158061166657508251600154145b602161221e565b60008080556002805461167f90613a15565b80601f01602080910402602001604051908101604052809291908181526020018280546116ab90613a15565b80156116f85780601f106116cd576101008083540402835291602001916116f8565b820191906000526020600020905b8154815290600101906020018083116116db57829003601f168201915b50505050508060200190518101906117109190613cb7565b905061171a61312b565b7f1e32d019ee301b7afce8bdcf66594cad07aa0dfc423abb9a3279b3efc317a036338560405161174b929190613f0d565b60405180910390a1600060208501515151600281111561176d5761176d6136e8565b1415611b535761177f3415601961221e565b6101808201805160209081015151835152815181015181015183518201528151015160409081015183519015159101525181516117bf9190600190612981565b81602001819052506117e16117da33846060015160006129f5565b601a61221e565b60016117ec336125a9565b5160018111156117fe576117fe6136e8565b1461180a576000611818565b611813336125a9565b604001515b60408201526101e0820151156118345760006060820152611850565b816101000151826101c0015161184a9190613e0f565b60608201525b816080015181606001516118649190613e26565b8260c001516118739190613e45565b60808201526101208201516001611889336124d7565b51600181111561189b5761189b6136e8565b146118a75760006118b5565b6118b0336124d7565b604001515b8360e00151836080015111156118cf578360e001516118d5565b82608001515b6118df9190613e26565b6118e99190613e5d565b60a0820181905260408201511061190657600060c0820152611920565b80604001518160a0015161191a9190613e0f565b60c08201525b8161020001518160c00151111561193c57816102000151611942565b8060c001515b60e082018190526020820151515161195a9190613e0f565b61010082018051919091526020808301805151820151835190920191909152515160409081015191519115159181019190915282015160e08201516119a191903390612a0b565b8060e001518260e001516119b59190613e0f565b6101208201523360009081526005602052604090819020805460ff1916600117905560e0820151908201516119ea9190613e45565b336000908152600560209081526040918290206001019290925560e08301516101408401805191909152610120840151815190930192909252905190517eb6f5fbd3cde8718ca21ef30003aa65c552eca87bb33528598c15892648b0b291611a5191613783565b60405180910390a16101408101516020840152611a6c613308565b825181516001600160a01b03918216905260208085015183519091015260408085015183519083169101526060808501518351921691015260808084015182519091015260a08084015182519091015260e0820151610200840151611ad19190613e0f565b6020808301805192909252610120808501518351830152610160860151835160400152850151825160600152815143608090910152610140850151915160a00191909152820151610100830151611b2b9190600090612981565b60208201805160c001919091526101a0840151905160e00152611b4d81612a24565b50612218565b6001602085015151516002811115611b6d57611b6d6136e8565b1415611e4c5760208401515160400151610160820152611b8f3415601b61221e565b610160810151516101808301516020015151611bab9190613e45565b610180828101805192909252830180516020908101518101518351820152905101516040908101519151911515910152606082015161016082015151611bfe91611bf7913391906129f5565b601c61221e565b61016081015151610120830151611c159190613e45565b6101a0820152610160810151516001611c2d336124d7565b516001811115611c3f57611c3f6136e8565b14611c4b576000611c59565b611c54336124d7565b604001515b611c639190613e45565b6101c082019081523360009081526004602090815260408083208054600160ff19918216811783559551918601919091556005909252909120805490911690911790556101a081015161016082015151610200840151611cc39190613e26565b611ccd9190613e5d565b6001611cd8336125a9565b516001811115611cea57611cea6136e8565b14611cf6576000611d04565b611cff336125a9565b604001515b611d0e9190613e45565b33600090815260056020908152604091829020600101929092556101c08301516101e084018051919091526101a0840151815190930192909252905190517fdc87fc22ca6bd8c6e0bb6071fae1cc3d9efc6483100d0c5f41e33836184dfe7e91611d7791613783565b60405180910390a16101e08101516040840152611d92613308565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015261020088015184870180519190915260e08901518151909501949094526101608801518451909301929092526101a08601518351909401939093528151439301929092526101408501519051909101526101808084015190830151611b2b9190600190612981565b6002602085015151516002811115611e6657611e666136e8565b14156122185760208401515160600151610200820152611e883415601d61221e565b6101808201805160209081015151610220840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051611ed39190600190612981565b816102400181905250611ef6611eef33846060015160006129f5565b601e61221e565b6001611f01336124d7565b516001811115611f1357611f136136e8565b14611f1f576000611f2d565b611f28336124d7565b604001515b610260820181905261020082015151611f49911015601f61221e565b610200810151516102408201516020015151611f659190613e0f565b6102808201805191909152610240820180516020908101518101518351820152905101516040908101519151911515910152606082015161020082015151611faf91903390612a0b565b61020081015151610120830151611fc69190613e0f565b6102a082015261020081015151610260820151611fe39190613e0f565b6102c08201908152336000818152600460205260409020805460ff191660019081178255925190830155612016906125a9565b516001811115612028576120286136e8565b14612034576000612042565b61203d336125a9565b604001515b6102e08201526102a081015161206357610200820151610300820152612090565b6102a081015161020080830151519084015161207f9190613e26565b6120899190613e5d565b6103008201525b806102e00151816103000151106120ae5760006103208201526120cb565b806103000151816102e001516120c49190613e0f565b6103208201525b33600090815260056020908152604091829020805460ff1916600190811782556103208501519101556102c083015161034084018051919091526102a08401518151909201919091525190517f5a1deca551b6171c9779132f037d89766dd46bf530817257e45c2acee639fea39161214291613783565b60405180910390a1610340810151606084015261215d613308565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015261020088015184870180519190915260e08901518151909501949094526101608801518451909301929092526102a0860151835190940193909352815143930192909252610140850151905190910152610240820151610280830151611b2b9190600190612981565b50505050565b816103045760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b612254600160005414601261221e565b815161226f90158061226857508251600154145b601361221e565b60008080556002805461228190613a15565b80601f01602080910402602001604051908101604052809291908181526020018280546122ad90613a15565b80156122fa5780601f106122cf576101008083540402835291602001916122fa565b820191906000526020600020905b8154815290600101906020018083116122dd57829003601f168201915b50505050508060200190518101906123129190613b41565b905061231c613328565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161236f3415600f61221e565b61010082015160a083015151516123869190613e45565b81515260a0820180515160209081015183519091015251516040908101518251901515908201528201516101008301516123cd916123c6913391906129f5565b601061221e565b81516123e5906001600160a01b03163314601161221e565b600282608001516123f69190613e45565b6020820152612403613308565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169101526060808601518451931692019190915260c084015182516080015260e08401519083015161245b9190613e45565b815160a09081019190915260208083018051600090819052610100870151825184015291850151815160400152805160600182905280514360809182015286015190518301529084015183516124b19290612981565b60208201805160c0019190915251600060e0909101526124d081612a24565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115612523576125236136e8565b141561259a576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115612564576125646136e8565b6001811115612575576125756136e8565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156125f5576125f56136e8565b141561259a576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115612564576125646136e8565b612646600360005414601761221e565b815161266190158061265a57508251600154145b601861221e565b60008080556002805461267390613a15565b80601f016020809104026020016040519081016040528092919081815260200182805461269f90613a15565b80156126ec5780601f106126c1576101008083540402835291602001916126ec565b820191906000526020600020905b8154815290600101906020018083116126cf57829003601f168201915b50505050508060200190518101906127049190613be3565b90506127506040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b7fe30c1faad84d1c2fbcb49a9d8c9c13ee51d538efe993e4477a23c971fd304b583385604051612781929190613f87565b60405180910390a160006020850151515160018111156127a3576127a36136e8565b14156128c5576127b53415601461221e565b604051600081527f666ed62907ef7d15d4ff48d558632dc86a0bb242c0f1066d87b3a1e83f7385589060200160405180910390a16000835261014082015151516127ff9080613e0f565b815152610140820180515160209081015183519091015280515160409081015183519015159082015283015183519151612842929060005b602002015151612a0b565b61286b8260600151836000015161286485610140015160008660000151612981565b6001612837565b81516101608301516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156128a9573d6000803e3d6000fd5b50600080805560018190556128c09060029061335a565b612218565b60016020850151515160018111156128df576128df6136e8565b1415612218576128f13415601561221e565b8151612909906001600160a01b03163314601661221e565b610140820151515161291b9080613e0f565b60208281018051929092526101408401805151820151835190920191909152805151604090810151925192151592810192909252908301518351915161296392906000612837565b61286b82606001518360000151612864856101400151600086602001515b612989613397565b60005b60028110156129d5578481600281106129a7576129a7613f71565b60200201518282600281106129be576129be613f71565b6020020152806129cd81613fda565b91505061298c565b50818184600281106129e9576129e9613f71565b60200201529392505050565b6000612a0383853085612e06565b949350505050565b612a16838383612ee0565b612a1f57600080fd5b505050565b612a7560405180610120016040528060008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60208201516060015115612a8a576001612a9f565b816000015160a00151826020015160a0015111155b15612c7e57816020015160a00151826000015160a001511115612aca57816020015160a00151612ad1565b815160a001515b808252602083015160409081015191909110801591830191909152612afc5760006020820152612b17565b6020820151604001518151612b119190613e0f565b60208201525b8151608001516020820151612b2c9190613e26565b602083015151612b3c9190613e45565b6060820181905260208084015101511015612b5f57816020015160200151612b65565b80606001515b6080820152612b726133e2565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152855160809081015181860152865160a0908101518187015283880180515160c080890191909152815186015160e0808a019190915282518601516101008a0152825190970151610120890152815184015161014089015281519092015161016088015280519091015161018087015251909301516101a085015284516101c08501528481015115156101e0850152918401516102008401526006600055436001559051612c5a91839101614033565b6040516020818303038152906040526002908051906020019061221892919061348f565b816020015160a00151826000015160a001511115612ca457816020015160a00151612cab565b815160a001515b60a0820181905260208301516040015110612ccc57600060c0820152612cea565b8160200151604001518160a00151612ce49190613e0f565b60c08201525b81516080015160c0820151612cff9190613e26565b602083015151612d0f9190613e45565b60e0820181905260208084015101511015612d3257816020015160200151612d38565b8060e001515b610100820152612d46613513565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152855160809081015190850152855160a0908101519085015281860180515160c080870191909152815184015160e08088019190915282518401516101008089019190915283519096015161012088015282519091015161014087015290510151610160850152918401516101808401526003600055436001559051612c5a91839101614139565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612e6d9161420f565b60006040518083038185875af1925050503d8060008114612eaa576040519150601f19603f3d011682016040523d82523d6000602084013e612eaf565b606091505b5091509150612ec082826001612fb1565b5080806020019051810190612ed5919061422b565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612f3f9161420f565b60006040518083038185875af1925050503d8060008114612f7c576040519150601f19603f3d011682016040523d82523d6000602084013e612f81565b606091505b5091509150612f9282826002612fb1565b5080806020019051810190612fa7919061422b565b9695505050505050565b60608315612fc0575081610f82565b825115612fd05782518084602001fd5b60405163100960cb60e01b81526004810183905260240161223b565b604051806080016040528060001515815260200161301d604051806040016040528060008152602001600081525090565b815260200161303f604051806040016040528060008152602001600081525090565b8152602001613061604051806040016040528060008152602001600081525090565b905290565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081525090565b60405180604001604052806000815260200161306160408051608081018252600060208201818152928201819052606082015290815290565b6040518060400160405280600081526020016130616135a2565b604080516080810182526000808252602080830182905283518082018552828152838501528351908101909352825290606082015290565b604080516103c081019091526000610360820181815261038083018290526103a0830191909152815260208101613160613397565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016131b5604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016131de604051806040016040528060008152602001600081525090565b81526020016131f96040518060200160405280600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160008152602001613249604051806040016040528060008152602001600081525090565b81526020016132646040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613291613397565b8152602001600081526020016132c3604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081526020016000815260200160008152602001613061604051806040016040528060008152602001600081525090565b604051806040016040528061331b6135b5565b81526020016130616135fa565b6040805160a08101825260009181018281526060820183905260808201929092529081905b8152602001600081525090565b50805461336690613a15565b6000825580601f10613376575050565b601f0160209004906000526020600020908101906133949190613638565b50565b60405180604001604052806002905b6133cc604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816133a65790505090565b60405180610220016040528060006001600160a01b03168152602001613406613066565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161346b613397565b81526020016000815260200160008152602001600015158152602001600081525090565b82805461349b90613a15565b90600052602060002090601f0160209004810192826134bd5760008555613503565b82601f106134d657805160ff1916838001178555613503565b82800160010185558215613503579182015b828111156135035782518255916020019190600101906134e8565b5061350f929150613638565b5090565b604051806101a0016040528060006001600160a01b03168152602001613537613066565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161358e613397565b815260200160008152602001600081525090565b60405180602001604052806130616130f3565b6040518060c0016040528060006001600160a01b031681526020016135d8613066565b8152600060208201819052604082018190526060820181905260809091015290565b60405180610100016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200161334d613397565b5b8082111561350f5760008155600101613639565b600060a0828403121561365f57600080fd5b50919050565b80516001600160a01b0390811683526020808301519091169083015260408082015190830152606090810151910152565b608081016105708284613665565b60006040828403121561365f57600080fd5b6001600160a01b038116811461339457600080fd5b6000602082840312156136dd57600080fd5b8135610f82816136b6565b634e487b7160e01b600052602160045260246000fd5b60028110613394576133946136e8565b8151606082019061371e816136fe565b808352506020830151151560208301526040830151604083015292915050565b6000806040838503121561375157600080fd5b823561375c816136b6565b946020939093013593505050565b60006020828403121561377c57600080fd5b5035919050565b815181526020808301519082015260408101610570565b60006080828403121561365f57600080fd5b60005b838110156137c75781810151838201526020016137af565b838111156122185750506000910152565b82815260406020820152600082518060408401526137fd8160608501602087016137ac565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561384b5761384b613812565b60405290565b6040516020810167ffffffffffffffff8111828210171561384b5761384b613812565b6040516080810167ffffffffffffffff8111828210171561384b5761384b613812565b6040516060810167ffffffffffffffff8111828210171561384b5761384b613812565b604051610120810167ffffffffffffffff8111828210171561384b5761384b613812565b6040516101a0810167ffffffffffffffff8111828210171561384b5761384b613812565b604051610220810167ffffffffffffffff8111828210171561384b5761384b613812565b801515811461339457600080fd5b60006020828403121561394657600080fd5b6040516020810181811067ffffffffffffffff8211171561396957613969613812565b6040529135825250919050565b600081830360a081121561398957600080fd5b613991613828565b833581526080601f19830112156139a757600080fd5b6139af613851565b91506139b9613874565b6020850135600381106139cb57600080fd5b815260408501356139db81613926565b60208201526139ed8660608701613934565b60408201526139ff8660808701613934565b6060820152825260208101919091529392505050565b600181811c90821680613a2957607f821691505b6020821081141561365f57634e487b7160e01b600052602260045260246000fd5b8051611040816136b6565b600060808284031215613a6757600080fd5b613a6f613874565b90508151613a7c816136b6565b81526020820151613a8c816136b6565b80602083015250604082015160408201526060820151606082015292915050565b805161104081613926565b600082601f830112613ac957600080fd5b613ad1613828565b8060c0840185811115613ae357600080fd5b845b81811015613b365760608188031215613afe5760008081fd5b613b06613897565b8151815260208083015181830152604080840151613b2381613926565b9083015290855290930192606001613ae5565b509095945050505050565b60006102208284031215613b5457600080fd5b613b5c6138ba565b613b6583613a4a565b8152613b748460208501613a55565b6020820152613b8560a08401613a4a565b6040820152613b9660c08401613a4a565b606082015260e08301516080820152610100613bb485828601613ab8565b60a08301526101c084015160c08301526101e084015160e0830152610200909301519281019290925250919050565b60006102a08284031215613bf657600080fd5b613bfe6138de565b613c0783613a4a565b8152613c168460208501613a55565b6020820152613c2760a08401613a4a565b6040820152613c3860c08401613a4a565b606082015260e083015160808201526101008084015160a08301526101208085015160c08401526101408086015160e0850152610160808701518486015261018093508387015183860152613c91886101a08901613ab8565b828601526102608701518186015250505061028084015181830152508091505092915050565b60006103208284031215613cca57600080fd5b613cd2613902565b613cdb83613a4a565b8152613cea8460208501613a55565b6020820152613cfb60a08401613a4a565b6040820152613d0c60c08401613a4a565b606082015260e083015160808201526101008084015160a08301526101208085015160c08401526101408086015160e08501526101608087015184860152610180935083870151838601526101a0925082870151828601526101c091508187015181860152506101e0613d8188828901613ab8565b848601526102a0870151838601526102c087015182860152613da66102e08801613aad565b90850152505050610300929092015161020083015250919050565b600060408284031215613dd357600080fd5b613ddb613828565b823581526020830135613ded81613926565b60208201529392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015613e2157613e21613df9565b500390565b6000816000190483118215151615613e4057613e40613df9565b500290565b60008219821115613e5857613e58613df9565b500190565b600082613e7a57634e487b7160e01b600052601260045260246000fd5b500490565b60008183036080811215613e9257600080fd5b613e9a613828565b833581526060601f1983011215613eb057600080fd5b613eb8613851565b9150613ec2613897565b602085013560028110613ed457600080fd5b81526040850135613ee481613926565b60208201526060850135613ef781613926565b6040820152825260208101919091529392505050565b6001600160a01b0383168152815160208083019190915282015151805160c08301919060038110613f4057613f406136e8565b80604085015250602081015115156060840152604081015151608084015260608101515160a0840152509392505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0383168152815160208083019190915282015151805160a083019190613fb3816136fe565b80604085015250602081015115156060840152604081015115156080840152509392505050565b6000600019821415613fee57613fee613df9565b5060010190565b8060005b6002811015612218578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101613ff9565b81516001600160a01b03168152610320810160208301516140576020840182613665565b5060408301516001600160a01b03811660a08401525060608301516001600160a01b03811660c084015250608083015160e08381019190915260a08401516101008085019190915260c085015161012080860191909152918501516101408086019190915290850151610160808601919091529185015161018080860191909152908501516101a080860191909152918501516101c08086019190915290850151916101e09061410982870185613ff5565b8601516102a0860152908501516102c085015284015115156102e084015250610200909201516103009091015290565b81516001600160a01b031681526102a08101602083015161415d6020840182613665565b5060408301516001600160a01b03811660a08401525060608301516001600160a01b03811660c084015250608083015160e083015260a0830151610100818185015260c08501519150610120828186015260e0860151925061014083818701528287015193506101609250838387015281870151935061018091508382870152808701519350506141f26101a0860184613ff5565b818601516102608601528086015161028086015250505092915050565b600082516142218184602087016137ac565b9190910192915050565b60006020828403121561423d57600080fd5b8151610f828161392656fea2646970667358221220f6c0dd712f961a8402292bd3689d49488f703b6a5673a745079d03c42368f63f64736f6c634300080c0033`,
  BytecodeLen: 19313,
  Which: `oD`,
  version: 7,
  views: {
    end: `end`,
    opts: `opts`,
    remainingRewards: `remainingRewards`,
    rewardsAvailableAt: `rewardsAvailableAt`,
    staked: `staked`,
    totalStaked: `totalStaked`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './helper.rsh:67:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './helper.rsh:195:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './helper.rsh:204:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './helper.rsh:204:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './helper.rsh:92:19:after expr stmt semicolon',
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
  "Any_halt": Any_halt,
  "Deployer": Deployer,
  "Staker_harvest": Staker_harvest,
  "Staker_stake": Staker_stake,
  "Staker_withdraw": Staker_withdraw
  };
export const _APIs = {
  Any: {
    halt: Any_halt
    },
  Staker: {
    harvest: Staker_harvest,
    stake: Staker_stake,
    withdraw: Staker_withdraw
    }
  };
