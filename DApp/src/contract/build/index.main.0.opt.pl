#lang pl
{
  }
// maps
{
  map0 = Null,
  map1 = Null,
  map2 = Null}
// initialization

APIs:{
  Just "Any" = {
    contribute = ("Any_contribute", IT_Fun [] Null),
    requestPayment = ("Any_requestPayment", IT_Fun [] Null)},
  Just "Contributor" = {
    register = ("Contributor_register", IT_Fun [] Null)}}
{
  ("Any_contribute", Just 12) = interact {
    in = IT_Fun [] Tuple(),
    out = IT_Fun [Tuple(),Null] Null};
  fromConsensus 12 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/438), (v445 : UInt, v445)]) ;
  only(Right False) {
    const .api157.dom/449 : Tuple()* = protect<Tuple()>("Any_contribute".interact.in());
     };
  send({
    amt = [v345, ],
    as = (.api157.dom/449 ),
    saved = (PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/438 : UInt, v445 : UInt ),
    soloSend = False,
    when = true,
    which = 11})
  recv({
    didSendv = didPublish/193 : Bool,
    from = this/452 : Address,
    lct = Nothing,
    msg = (.fork164.msg/453 : Tuple() ),
    out = (),
    prev = 12,
    secsv = thisConsensusSecs/455 : UInt,
    timev = thisConsensusTime/454 : UInt,
    which = 11})
  {
    setApiDetails("Any_contribute", [Tuple()], None, AIC_SpreadArg );
    const v458 : UInt! = netBalance/438 + v345;
    checkPay(v345, None);
    map2[this/452] = null;
    emitLog(event(Just "Update", info))(this/452, v345 );
    const v460 : Null! = null;
    const .api157.rngl/461 : Null* = emitLog(api("Any_contribute"))(v460 );
    only(Right True) {
      local if didPublish/193 then {
        protect<Null>("Any_contribute".interact.out(.fork164.msg/453, .api157.rngl/461 ));
         }
      else {
         };
       };
    const timedOut/826 : Bool* = true;
    const thisConsensusTime/827 : UInt* = thisConsensusTime/454;
    const netBalance/828 : UInt* = v458;
    const v829 : UInt! = UInt.max - thisConsensusTime/454;
    const v830 : UInt! = v829 - v346;
    const v831 : Bool! = v830 >= 0;
    claim(CT_Require)(v831, Nothing);
    const v832 : UInt! = thisConsensusTime/454 + v346;
    fromConsensus 12 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/828), (v445 : UInt, v832)]) ;
     },
  ("Any_requestPayment", Just 11) = interact {
    in = IT_Fun [] Tuple(),
    out = IT_Fun [Tuple(),Null] Null};
  fromConsensus 11 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/438)]) ;
  only(Right False) {
    const v/488 : Address! = selfAddress("Any_requestPayment", True, 246 )();
    const .api245.dom/490 : Tuple()* = protect<Tuple()>("Any_requestPayment".interact.in());
    const v/492 : Data({"None": Null, "Some": Null})! = map1[v/488];
    let x/493 : Bool;
    local switch (v/492 : Data({"None": Null, "Some": Null})) {
      case None as v/494 : Null/False: {
        x/493 : Bool = false;
         }
      case Some as v/495 : Null/False: {
        x/493 : Bool = true;
         } }
    const v496 : Bool! = (x/493 ? false : true);
    claim(CT_Assume False)(v496, Nothing);
     };
  send({
    amt = [0, ],
    as = (.api245.dom/490 ),
    saved = (PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/438 : UInt ),
    soloSend = False,
    when = true,
    which = 10})
  recv({
    didSendv = didPublish/267 : Bool,
    from = v/497 : Address,
    lct = Nothing,
    msg = (.api245.dom/498 : Tuple() ),
    out = (),
    prev = 11,
    secsv = thisConsensusSecs/500 : UInt,
    timev = thisConsensusTime/499 : UInt,
    which = 10})
  {
    setApiDetails("Any_requestPayment", [Tuple()], None, AIC_SpreadArg );
    checkPay(0, None);
    const v505 : UInt! = netBalance/438 - netBalance/438;
    transfer.(netBalance/438, None).to(v/497);
    map1[v/497] = null;
    const v507 : Null! = null;
    const .api245.rngl/508 : Null* = emitLog(api("Any_requestPayment"))(v507 );
    only(Right True) {
      protect<Null>("Any_requestPayment".interact.out(.api245.dom/498, .api245.rngl/508 ));
       };
    const thisConsensusTime/853 : UInt* = thisConsensusTime/499;
    const netBalance/854 : UInt* = v505;
    fromConsensus 7 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/421 : UInt, netBalance/854)]) ;
     },
  ("Contributor_register", Just 13) = interact {
    in = IT_Fun [] Tuple(),
    out = IT_Fun [Tuple(),Null] Null};
  fromConsensus 13 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (v347 : UInt, v347), (v348 : UInt, v348), (numOfUsers/375 : UInt, numOfUsers/375), (netBalance/383 : UInt, netBalance/383)]) ;
  only(Right False) {
    const v/386 : Address! = selfAddress("Contributor_register", True, 102 )();
    const .api78.dom/388 : Tuple()* = protect<Tuple()>("Contributor_register".interact.in());
    const v/390 : Data({"None": Null, "Some": Null})! = map0[v/386];
    let x/391 : Bool;
    local switch (v/390 : Data({"None": Null, "Some": Null})) {
      case None as v/392 : Null/False: {
        x/391 : Bool = false;
         }
      case Some as v/393 : Null/False: {
        x/391 : Bool = true;
         } }
    const v394 : Bool! = (x/391 ? false : true);
    claim(CT_Assume False)(v394, Nothing);
     };
  send({
    amt = [v348, ],
    as = (.api78.dom/388 ),
    saved = (PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, v347 : UInt, v348 : UInt, numOfUsers/375 : UInt, netBalance/383 : UInt ),
    soloSend = False,
    when = true,
    which = 13})
  recv({
    didSendv = didPublish/131 : Bool,
    from = this/396 : Address,
    lct = Nothing,
    msg = (.fork84.msg/397 : Tuple() ),
    out = (),
    prev = 13,
    secsv = thisConsensusSecs/399 : UInt,
    timev = thisConsensusTime/398 : UInt,
    which = 13})
  {
    setApiDetails("Contributor_register", [Tuple()], None, AIC_SpreadArg );
    const v402 : UInt! = netBalance/383 + v348;
    checkPay(v348, None);
    map0[this/396] = null;
    emitLog(event(Just "Update", info))(this/396, v348 );
    const v404 : Null! = null;
    const .api78.rngl/405 : Null* = emitLog(api("Contributor_register"))(v404 );
    only(Right True) {
      local if didPublish/131 then {
        protect<Null>("Contributor_register".interact.out(.fork84.msg/397, .api78.rngl/405 ));
         }
      else {
         };
       };
    const numOfUsers/410 : UInt! = numOfUsers/375 + 1;
    const numOfUsers/861 : UInt* = numOfUsers/410;
    const thisConsensusTime/862 : UInt* = thisConsensusTime/398;
    const netBalance/863 : UInt* = v402;
    const v864 : Bool! = numOfUsers/410 <= v347;
    if v864 then {
      fromConsensus 13 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (v347 : UInt, v347), (v348 : UInt, v348), (numOfUsers/375 : UInt, numOfUsers/861), (netBalance/383 : UInt, netBalance/863)]) ;
       }
    else {
      const thisConsensusTime/919 : UInt* = thisConsensusTime/398;
      const netBalance/920 : UInt* = v402;
      fromConsensus 7 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/421 : UInt, netBalance/920)]) ;
       }; },
  ("PoolCreator", Nothing) = interact {
    getPoolDetails = IT_Val Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}),
    readyForContribution = IT_Fun [] Null};
  only(Right False) {
    const poolDetails/325 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})* = "PoolCreator".interact.getPoolDetails;
    const v326 : UInt* = poolDetails/325.contributionAmt;
    const v329 : UInt! = poolDetails/325.penaltyAmt;
     };
  only(Right False) {
    const penalty/336 : UInt! = v326 / 2;
    const v338 : Bool! = v329 == penalty/336;
    claim(CT_Assume False)(v338, Just "Penalty amount is not half of the contribution amount.");
    const v340 : Bool! = v326 > 0;
    claim(CT_Assume False)(v340, Just "Contribution amount cannot be zero.");
     };
  send({
    amt = [0, ],
    as = (poolDetails/325 ),
    saved = (),
    soloSend = True,
    when = true,
    which = 0})
  recv({
    didSendv = didPublish/40 : Bool,
    from = PoolCreator/341 : Address,
    lct = Just 0,
    msg = (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}) ),
    out = (),
    prev = 0,
    secsv = thisConsensusSecs/344 : UInt,
    timev = thisConsensusTime/343 : UInt,
    which = 0})
  {
    checkPay(0, None);
    const v345 : UInt* = poolDetails/342.contributionAmt;
    const v346 : UInt* = poolDetails/342.duration;
    const v347 : UInt! = poolDetails/342.maxUsers;
    const v348 : UInt* = poolDetails/342.penaltyAmt;
    const penalty/353 : UInt! = v345 / 2;
    const v355 : Bool! = v348 == penalty/353;
    claim(CT_Require)(v355, Just "Penalty amount is not half of the contribution amount.");
    const v357 : Bool! = v345 > 0;
    claim(CT_Require)(v357, Just "Contribution amount cannot be zero.");
    const startingContribution/362 : UInt* = v345 + v348;
    fromConsensus 1 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (v347 : UInt, v347), (v348 : UInt, v348), (startingContribution/362 : UInt, startingContribution/362)]) ;
    send({
      amt = [startingContribution/362, ],
      as = (),
      saved = (PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, v347 : UInt, v348 : UInt, startingContribution/362 : UInt ),
      soloSend = True,
      when = true,
      which = 1})
    recv({
      didSendv = didPublish/65 : Bool,
      from = PoolCreator/363 : Address,
      lct = Just thisConsensusTime/343,
      msg = (),
      out = (),
      prev = 1,
      secsv = thisConsensusSecs/365 : UInt,
      timev = thisConsensusTime/364 : UInt,
      which = 1})
    {
      checkPay(startingContribution/362, None);
      const v368 : Bool! = PoolCreator/341 == PoolCreator/363;
      claim(CT_Require)(v368, Just "sender correct");
      emitLog(event(Just "Update", info))(PoolCreator/363, startingContribution/362 );
      only(Right True) {
        protect<Null>("PoolCreator".interact.readyForContribution());
         };
      fromConsensus 2 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (v347 : UInt, v347), (v348 : UInt, v348), (startingContribution/362 : UInt, startingContribution/362)]) ;
      send({
        amt = [0, ],
        as = (),
        saved = (PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, v347 : UInt, v348 : UInt, startingContribution/362 : UInt ),
        soloSend = True,
        when = true,
        which = 2})
      recv({
        didSendv = didPublish/74 : Bool,
        from = PoolCreator/370 : Address,
        lct = Just thisConsensusTime/364,
        msg = (),
        out = (),
        prev = 2,
        secsv = thisConsensusSecs/372 : UInt,
        timev = thisConsensusTime/371 : UInt,
        which = 2})
      {
        checkPay(0, None);
        const v373 : Bool! = PoolCreator/341 == PoolCreator/370;
        claim(CT_Require)(v373, Just "sender correct");
        const v374 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})! = <Registration null>;
        emitLog(event(Just "PoolPhase", phase))(v374 );
        loopvar {
          numOfUsers/375 : UInt = 0,
          thisConsensusTime/376 : UInt = thisConsensusTime/371,
          netBalance/383 : UInt = startingContribution/362};
        invariant{
          () }
        while{
          const v385 : Bool! = numOfUsers/375 <= v347;
          
          return v385; }
        {
          fromConsensus 13 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (v347 : UInt, v347), (v348 : UInt, v348), (numOfUsers/375 : UInt, numOfUsers/375), (netBalance/383 : UInt, netBalance/383)]) ;
          recv({
            didSendv = didPublish/131 : Bool,
            from = this/396 : Address,
            lct = Just thisConsensusTime/376,
            msg = (.fork84.msg/397 : Tuple() ),
            out = (),
            prev = 13,
            secsv = thisConsensusSecs/399 : UInt,
            timev = thisConsensusTime/398 : UInt,
            which = 13})
          {
            setApiDetails("Contributor_register", [Tuple()], None, AIC_SpreadArg );
            const v402 : UInt! = netBalance/383 + v348;
            checkPay(v348, None);
            map0[this/396] = null;
            emitLog(event(Just "Update", info))(this/396, v348 );
            const v404 : Null! = null;
            const .api78.rngl/405 : Null* = emitLog(api("Contributor_register"))(v404 );
            const numOfUsers/410 : UInt! = numOfUsers/375 + 1;
            {
              numOfUsers/375 : UInt = numOfUsers/410,
              thisConsensusTime/376 : UInt = thisConsensusTime/398,
              netBalance/383 : UInt = v402}
            continue; } }
        loopvar {
          thisConsensusTime/414 : UInt = thisConsensusTime/376,
          netBalance/421 : UInt = netBalance/383};
        invariant{
          () }
        while{
          
          return true; }
        {
          fromConsensus 7 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/421 : UInt, netBalance/421)]) ;
          send({
            amt = [0, ],
            as = (),
            saved = (PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/421 : UInt ),
            soloSend = True,
            when = true,
            which = 6})
          recv({
            didSendv = didPublish/154 : Bool,
            from = PoolCreator/423 : Address,
            lct = Just thisConsensusTime/414,
            msg = (),
            out = (),
            prev = 7,
            secsv = thisConsensusSecs/425 : UInt,
            timev = thisConsensusTime/424 : UInt,
            which = 6})
          {
            checkPay(0, None);
            const v426 : Bool! = PoolCreator/341 == PoolCreator/423;
            claim(CT_Require)(v426, Just "sender correct");
            const v427 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})! = <Contribution null>;
            emitLog(event(Just "PoolPhase", phase))(v427 );
            loopvar {
              timedOut/430 : Bool = true,
              thisConsensusTime/431 : UInt = thisConsensusTime/424,
              netBalance/438 : UInt = netBalance/421};
            invariant{
              () }
            while{
              
              return timedOut/430; }
            {
              const v442 : UInt! = UInt.max - thisConsensusTime/431;
              const v443 : UInt! = v442 - v346;
              const v444 : Bool! = v443 >= 0;
              claim(CT_Require)(v444, Nothing);
              const v445 : UInt! = thisConsensusTime/431 + v346;
              fromConsensus 12 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/438), (v445 : UInt, v445)]) ;
              recv({
                didSendv = didPublish/193 : Bool,
                from = this/452 : Address,
                lct = Just thisConsensusTime/431,
                msg = (.fork164.msg/453 : Tuple() ),
                out = (),
                prev = 12,
                secsv = thisConsensusSecs/455 : UInt,
                timev = thisConsensusTime/454 : UInt,
                which = 11})
              timeout(Just Left v445, {
                send({
                  amt = [0, ],
                  as = (),
                  saved = (PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/438 : UInt, v445 : UInt ),
                  soloSend = True,
                  when = true,
                  which = 12})
                recv({
                  didSendv = didPublish/220 : Bool,
                  from = PoolCreator/467 : Address,
                  lct = Just thisConsensusTime/431,
                  msg = (),
                  out = (),
                  prev = 12,
                  secsv = thisConsensusSecs/469 : UInt,
                  timev = thisConsensusTime/468 : UInt,
                  which = 12})
                {
                  checkPay(0, None);
                  const v470 : Bool! = PoolCreator/341 == PoolCreator/467;
                  claim(CT_Require)(v470, Just "sender correct");
                  {
                    timedOut/430 : Bool = false,
                    thisConsensusTime/431 : UInt = thisConsensusTime/468,
                    netBalance/438 : UInt = netBalance/438}
                  continue; } } )
              {
                setApiDetails("Any_contribute", [Tuple()], None, AIC_SpreadArg );
                const v458 : UInt! = netBalance/438 + v345;
                checkPay(v345, None);
                map2[this/452] = null;
                emitLog(event(Just "Update", info))(this/452, v345 );
                const v460 : Null! = null;
                const .api157.rngl/461 : Null* = emitLog(api("Any_contribute"))(v460 );
                {
                  timedOut/430 : Bool = true,
                  thisConsensusTime/431 : UInt = thisConsensusTime/454,
                  netBalance/438 : UInt = v458}
                continue; } }
            const value/474 : UInt! = thisConsensusTime/431 + v346;
            fromConsensus 9 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/438), (value/474 : UInt, value/474)]) ;
            wait(Left value/474);
            send({
              amt = [0, ],
              as = (),
              saved = (PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/438 : UInt, value/474 : UInt ),
              soloSend = True,
              when = true,
              which = 8})
            recv({
              didSendv = didPublish/238 : Bool,
              from = PoolCreator/479 : Address,
              lct = Just thisConsensusTime/431,
              msg = (),
              out = (),
              prev = 9,
              secsv = thisConsensusSecs/481 : UInt,
              timev = thisConsensusTime/480 : UInt,
              which = 8})
            {
              checkPay(0, None);
              const v482 : Bool! = PoolCreator/341 == PoolCreator/479;
              claim(CT_Require)(v482, Just "sender correct");
              fromConsensus 10 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/438)]) ;
              send({
                amt = [0, ],
                as = (),
                saved = (PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/438 : UInt ),
                soloSend = True,
                when = true,
                which = 9})
              recv({
                didSendv = didPublish/243 : Bool,
                from = PoolCreator/483 : Address,
                lct = Just thisConsensusTime/480,
                msg = (),
                out = (),
                prev = 10,
                secsv = thisConsensusSecs/485 : UInt,
                timev = thisConsensusTime/484 : UInt,
                which = 9})
              {
                checkPay(0, None);
                const v486 : Bool! = PoolCreator/341 == PoolCreator/483;
                claim(CT_Require)(v486, Just "sender correct");
                const v487 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})! = <Payment null>;
                emitLog(event(Just "PoolPhase", phase))(v487 );
                fromConsensus 11 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/438)]) ;
                recv({
                  didSendv = didPublish/267 : Bool,
                  from = v/497 : Address,
                  lct = Just thisConsensusTime/484,
                  msg = (.api245.dom/498 : Tuple() ),
                  out = (),
                  prev = 11,
                  secsv = thisConsensusSecs/500 : UInt,
                  timev = thisConsensusTime/499 : UInt,
                  which = 10})
                {
                  setApiDetails("Any_requestPayment", [Tuple()], None, AIC_SpreadArg );
                  checkPay(0, None);
                  const v505 : UInt! = netBalance/438 - netBalance/438;
                  transfer.(netBalance/438, None).to(v/497);
                  map1[v/497] = null;
                  const v507 : Null! = null;
                  const .api245.rngl/508 : Null* = emitLog(api("Any_requestPayment"))(v507 );
                  {
                    thisConsensusTime/414 : UInt = thisConsensusTime/499,
                    netBalance/421 : UInt = v505}
                  continue; } } } } }
        fromConsensus 5 (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342)]) ;
        send({
          amt = [0, ],
          as = (),
          saved = (PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}) ),
          soloSend = True,
          when = true,
          which = 5})
        recv({
          didSendv = didPublish/286 : Bool,
          from = PoolCreator/514 : Address,
          lct = Just thisConsensusTime/414,
          msg = (),
          out = (),
          prev = 5,
          secsv = thisConsensusSecs/516 : UInt,
          timev = thisConsensusTime/515 : UInt,
          which = 5})
        {
          checkPay(0, None);
          const v517 : Bool! = PoolCreator/341 == PoolCreator/514;
          claim(CT_Require)(v517, Just "sender correct");
          const v518 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})! = <Finished null>;
          emitLog(event(Just "PoolPhase", phase))(v518 );
          fromConsensus 6 (halt []) ;
           } } } }}


views: ({
  Nothing = {
    poolDetails = IT_Val Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})}}, {
  1 = (view [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, v347 : UInt, v348 : UInt, startingContribution/362 : UInt] {
    Nothing = {
      poolDetails = export (Nothing) => {
      return poolDetails/342;}}}),
  2 = (view [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, v347 : UInt, v348 : UInt, startingContribution/362 : UInt] {
    Nothing = {
      poolDetails = export (Nothing) => {
      return poolDetails/342;}}}),
  5 = (view [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})] {
    Nothing = {
      poolDetails = export (Nothing) => {
      return poolDetails/342;}}}),
  7 = (view [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/421 : UInt] {
    Nothing = {
      poolDetails = export (Nothing) => {
      return poolDetails/342;}}}),
  9 = (view [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/438 : UInt, value/474 : UInt] {
    Nothing = {
      poolDetails = export (Nothing) => {
      return poolDetails/342;}}}),
  10 = (view [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/438 : UInt] {
    Nothing = {
      poolDetails = export (Nothing) => {
      return poolDetails/342;}}}),
  11 = (view [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/438 : UInt] {
    Nothing = {
      poolDetails = export (Nothing) => {
      return poolDetails/342;}}}),
  12 = (view [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, netBalance/438 : UInt, v445 : UInt] {
    Nothing = {
      poolDetails = export (Nothing) => {
      return poolDetails/342;}}}),
  13 = (view [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, v347 : UInt, v348 : UInt, numOfUsers/375 : UInt, netBalance/383 : UInt] {
    Nothing = {
      poolDetails = export (Nothing) => {
      return poolDetails/342;}}})})
apiInfo: {
  "Any_contribute" = {
    11 = {
      compile = AIC_SpreadArg,
      mcase_id = Nothing,
      msg_tys = [Tuple()],
      ret = Null,
      which = 11}},
  "Any_requestPayment" = {
    10 = {
      compile = AIC_SpreadArg,
      mcase_id = Nothing,
      msg_tys = [Tuple()],
      ret = Null,
      which = 10}},
  "Contributor_register" = {
    13 = {
      compile = AIC_SpreadArg,
      mcase_id = Nothing,
      msg_tys = [Tuple()],
      ret = Null,
      which = 13}}}
events: {
  Just "PoolPhase" = {
    phase = [Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})]},
  Just "Update" = {
    info = [Address, UInt]}}
{
  0 = {
    PoolCreator/341 : Address,
    (between [Nothing] [Nothing]),
    last = 0,
    [],
    [],
    [poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*],
    [Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})],
    timev = thisConsensusTime/343 : UInt,
    secsv = thisConsensusSecs/344 : UInt,
    {
      checkPay(0, None);
      const v345 : UInt* = poolDetails/342.contributionAmt;
      const v346 : UInt* = poolDetails/342.duration;
      const v347 : UInt! = poolDetails/342.maxUsers;
      const v348 : UInt* = poolDetails/342.penaltyAmt;
      const penalty/353 : UInt! = v345 / 2;
      const v355 : Bool! = v348 == penalty/353;
      claim(CT_Require)(v355, Just "Penalty amount is not half of the contribution amount.");
      const v357 : Bool! = v345 > 0;
      claim(CT_Require)(v357, Just "Contribution amount cannot be zero.");
      const startingContribution/362 : UInt* = v345 + v348;
      (from 1, (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (v347 : UInt, v347), (v348 : UInt, v348), (startingContribution/362 : UInt, startingContribution/362)])) }
     },
  1 = {
    PoolCreator/363 : Address,
    (between [Nothing] [Nothing]),
    last = 1,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*, v347 : UInt*, v348 : UInt*, startingContribution/362 : UInt*],
    [Address, Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), UInt, UInt, UInt, UInt, UInt],
    [],
    [],
    timev = thisConsensusTime/364 : UInt,
    secsv = thisConsensusSecs/365 : UInt,
    {
      checkPay(startingContribution/362, None);
      const v368 : Bool! = PoolCreator/341 == PoolCreator/363;
      claim(CT_Require)(v368, Just "sender correct");
      emitLog(event(Just "Update", info))(PoolCreator/363, startingContribution/362 );
      (from 2, (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (v347 : UInt, v347), (v348 : UInt, v348), (startingContribution/362 : UInt, startingContribution/362)])) }
     },
  2 = {
    PoolCreator/370 : Address,
    (between [Nothing] [Nothing]),
    last = 2,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*, v347 : UInt*, v348 : UInt*, startingContribution/362 : UInt*],
    [Address, Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), UInt, UInt, UInt, UInt, UInt],
    [],
    [],
    timev = thisConsensusTime/371 : UInt,
    secsv = thisConsensusSecs/372 : UInt,
    {
      checkPay(0, None);
      const v373 : Bool! = PoolCreator/341 == PoolCreator/370;
      claim(CT_Require)(v373, Just "sender correct");
      const v374 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})! = <Registration null>;
      emitLog(event(Just "PoolPhase", phase))(v374 );
      (jump! 3 [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, v347 : UInt, v348 : UInt] {
        numOfUsers/375 : UInt = 0,
        thisConsensusTime/376 : UInt = thisConsensusTime/371,
        netBalance/383 : UInt = startingContribution/362}) }
     },
  3 = {
    loop!,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*, v347 : UInt*, v348 : UInt*],
    [numOfUsers/375 : UInt*, thisConsensusTime/376 : UInt*, netBalance/383 : UInt*],
    {
      const v385 : Bool! = numOfUsers/375 <= v347;
      if v385 then {
        (from 13, (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (v347 : UInt, v347), (v348 : UInt, v348), (numOfUsers/375 : UInt, numOfUsers/375), (netBalance/383 : UInt, netBalance/383)])) }
      else {
        (jump! 4 [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt] {
          thisConsensusTime/414 : UInt = thisConsensusTime/376,
          netBalance/421 : UInt = netBalance/383}) }; }
     },
  4 = {
    loop!,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*],
    [thisConsensusTime/414 : UInt*, netBalance/421 : UInt*],
    {
      (from 7, (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/421 : UInt, netBalance/421)])) }
     },
  5 = {
    PoolCreator/514 : Address,
    (between [Nothing] [Nothing]),
    last = 5,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*],
    [Address, Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})],
    [],
    [],
    timev = thisConsensusTime/515 : UInt,
    secsv = thisConsensusSecs/516 : UInt,
    {
      checkPay(0, None);
      const v517 : Bool! = PoolCreator/341 == PoolCreator/514;
      claim(CT_Require)(v517, Just "sender correct");
      const v518 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})! = <Finished null>;
      emitLog(event(Just "PoolPhase", phase))(v518 );
      (from 6, (halt [])) }
     },
  6 = {
    PoolCreator/423 : Address,
    (between [Nothing] [Nothing]),
    last = 7,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*, netBalance/421 : UInt*],
    [Address, Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), UInt, UInt, UInt],
    [],
    [],
    timev = thisConsensusTime/424 : UInt,
    secsv = thisConsensusSecs/425 : UInt,
    {
      checkPay(0, None);
      const v426 : Bool! = PoolCreator/341 == PoolCreator/423;
      claim(CT_Require)(v426, Just "sender correct");
      const v427 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})! = <Contribution null>;
      emitLog(event(Just "PoolPhase", phase))(v427 );
      (jump! 7 [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt] {
        timedOut/430 : Bool = true,
        thisConsensusTime/431 : UInt = thisConsensusTime/424,
        netBalance/438 : UInt = netBalance/421}) }
     },
  7 = {
    loop!,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*],
    [timedOut/430 : Bool*, thisConsensusTime/431 : UInt*, netBalance/438 : UInt*],
    {
      if timedOut/430 then {
        const v442 : UInt! = UInt.max - thisConsensusTime/431;
        const v443 : UInt! = v442 - v346;
        const v444 : Bool! = v443 >= 0;
        claim(CT_Require)(v444, Nothing);
        const v445 : UInt! = thisConsensusTime/431 + v346;
        (from 12, (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/438), (v445 : UInt, v445)])) }
      else {
        const value/474 : UInt! = thisConsensusTime/431 + v346;
        (from 9, (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/438), (value/474 : UInt, value/474)])) }; }
     },
  8 = {
    PoolCreator/479 : Address,
    (between [Just Left value/474] [Nothing]),
    last = 9,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*, netBalance/438 : UInt*, value/474 : UInt*],
    [Address, Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), UInt, UInt, UInt, UInt],
    [],
    [],
    timev = thisConsensusTime/480 : UInt,
    secsv = thisConsensusSecs/481 : UInt,
    {
      wait(Left value/474);
      checkPay(0, None);
      const v482 : Bool! = PoolCreator/341 == PoolCreator/479;
      claim(CT_Require)(v482, Just "sender correct");
      (from 10, (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/438)])) }
     },
  9 = {
    PoolCreator/483 : Address,
    (between [Nothing] [Nothing]),
    last = 10,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*, netBalance/438 : UInt*],
    [Address, Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), UInt, UInt, UInt],
    [],
    [],
    timev = thisConsensusTime/484 : UInt,
    secsv = thisConsensusSecs/485 : UInt,
    {
      checkPay(0, None);
      const v486 : Bool! = PoolCreator/341 == PoolCreator/483;
      claim(CT_Require)(v486, Just "sender correct");
      const v487 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})! = <Payment null>;
      emitLog(event(Just "PoolPhase", phase))(v487 );
      (from 11, (continue [(PoolCreator/341 : Address, PoolCreator/341), (poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), poolDetails/342), (v345 : UInt, v345), (v346 : UInt, v346), (netBalance/438 : UInt, netBalance/438)])) }
     },
  10 = {
    v/497 : Address,
    (between [Nothing] [Nothing]),
    last = 11,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*, netBalance/438 : UInt*],
    [Address, Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), UInt, UInt, UInt],
    [.api245.dom/498 : Tuple()*],
    [Tuple()],
    timev = thisConsensusTime/499 : UInt,
    secsv = thisConsensusSecs/500 : UInt,
    {
      setApiDetails("Any_requestPayment", [Tuple()], None, AIC_SpreadArg );
      checkPay(0, None);
      const v505 : UInt! = netBalance/438 - netBalance/438;
      transfer.(netBalance/438, None).to(v/497);
      map1[v/497] = null;
      const v507 : Null! = null;
      const .api245.rngl/508 : Null* = emitLog(api("Any_requestPayment"))(v507 );
      (jump! 4 [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt] {
        thisConsensusTime/414 : UInt = thisConsensusTime/499,
        netBalance/421 : UInt = v505}) }
     },
  11 = {
    this/452 : Address,
    (between [Nothing] [Just Left v445]),
    last = 12,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*, netBalance/438 : UInt*, v445 : UInt*],
    [Address, Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), UInt, UInt, UInt, UInt],
    [.fork164.msg/453 : Tuple()*],
    [Tuple()],
    timev = thisConsensusTime/454 : UInt,
    secsv = thisConsensusSecs/455 : UInt,
    {
      setApiDetails("Any_contribute", [Tuple()], None, AIC_SpreadArg );
      const v458 : UInt! = netBalance/438 + v345;
      checkPay(v345, None);
      map2[this/452] = null;
      emitLog(event(Just "Update", info))(this/452, v345 );
      const v460 : Null! = null;
      const .api157.rngl/461 : Null* = emitLog(api("Any_contribute"))(v460 );
      (jump! 7 [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt] {
        timedOut/430 : Bool = true,
        thisConsensusTime/431 : UInt = thisConsensusTime/454,
        netBalance/438 : UInt = v458}) }
     },
  12 = {
    PoolCreator/467 : Address,
    (between [Just Left v445] [Nothing]),
    last = 12,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*, netBalance/438 : UInt*, v445 : UInt*],
    [Address, Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), UInt, UInt, UInt, UInt],
    [],
    [],
    timev = thisConsensusTime/468 : UInt,
    secsv = thisConsensusSecs/469 : UInt,
    {
      checkPay(0, None);
      const v470 : Bool! = PoolCreator/341 == PoolCreator/467;
      claim(CT_Require)(v470, Just "sender correct");
      (jump! 7 [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt] {
        timedOut/430 : Bool = false,
        thisConsensusTime/431 : UInt = thisConsensusTime/468,
        netBalance/438 : UInt = netBalance/438}) }
     },
  13 = {
    this/396 : Address,
    (between [Nothing] [Nothing]),
    last = 13,
    [PoolCreator/341 : Address*, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})*, v345 : UInt*, v346 : UInt*, v347 : UInt*, v348 : UInt*, numOfUsers/375 : UInt*, netBalance/383 : UInt*],
    [Address, Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), UInt, UInt, UInt, UInt, UInt, UInt],
    [.fork84.msg/397 : Tuple()*],
    [Tuple()],
    timev = thisConsensusTime/398 : UInt,
    secsv = thisConsensusSecs/399 : UInt,
    {
      setApiDetails("Contributor_register", [Tuple()], None, AIC_SpreadArg );
      const v402 : UInt! = netBalance/383 + v348;
      checkPay(v348, None);
      map0[this/396] = null;
      emitLog(event(Just "Update", info))(this/396, v348 );
      const v404 : Null! = null;
      const .api78.rngl/405 : Null* = emitLog(api("Contributor_register"))(v404 );
      const numOfUsers/410 : UInt! = numOfUsers/375 + 1;
      (jump! 3 [PoolCreator/341 : Address, poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}), v345 : UInt, v346 : UInt, v347 : UInt, v348 : UInt] {
        numOfUsers/375 : UInt = numOfUsers/410,
        thisConsensusTime/376 : UInt = thisConsensusTime/398,
        netBalance/383 : UInt = v402}) }
     }}