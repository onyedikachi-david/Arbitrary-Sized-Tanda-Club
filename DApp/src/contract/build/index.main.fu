#lang ll
parts {
  "Any_contribute" = interact {
    in = IT_Fun [] Tuple(),
    out = IT_Fun [Tuple(),Null] Null},
  "Any_requestPayment" = interact {
    in = IT_Fun [] Tuple(),
    out = IT_Fun [Tuple(),Null] Null},
  "Contributor_register" = interact {
    in = IT_Fun [] Tuple(),
    out = IT_Fun [Tuple(),Null] Null},
  "PoolCreator" = interact {
    getPoolDetails = IT_Val Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)}),
    readyForContribution = IT_Fun [] Null}};

// maps
{
  map0 = Null,
  map1 = Null,
  map2 = Null}
// initialization

{
  }
{
  Nothing = {
    poolDetails = IT_Val Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})}}
{
  Just "Any" = {
    contribute = ("Any_contribute", IT_Fun [] Null),
    requestPayment = ("Any_requestPayment", IT_Fun [] Null)},
  Just "Contributor" = {
    register = ("Contributor_register", IT_Fun [] Null)}}
{
  Any_contribute = Nothing,
  Any_requestPayment = Nothing,
  Contributor_register = Nothing}
{
  Just "PoolPhase" = {
    phase = [Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})]},
  Just "Update" = {
    info = [Address, UInt]}}
const initialInfo/320 : Tuple(UInt, UInt, Bool)* = [0, 0, false ];
const tokInfos/321 : Array(Tuple(UInt, UInt, Bool), 0)* = array(Tuple(UInt, UInt, Bool), []);
const tokens/322 : Array(Token, 0)* = array(Token, []);
const v323 : Object({"i": UInt, "sign": Bool})* = {
  i = 0,
  sign = true};
const v324 : Object({"i": UInt, "sign": Bool})* = {
  i = 0,
  sign = true};
only(Left "PoolCreator") {
  const poolDetails/325 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})* = "PoolCreator".interact.getPoolDetails;
  const v326 : UInt* = poolDetails/325.contributionAmt;
  const v327 : UInt* = poolDetails/325.duration;
  const v328 : UInt* = poolDetails/325.maxUsers;
  const v329 : UInt* = poolDetails/325.penaltyAmt;
  const v330 : Bytes(200)* = poolDetails/325.poolDescription;
  const v331 : Bytes(16)* = poolDetails/325.poolName;
   };
only(Left "Contributor_register") {
   };
only(Left "Any_contribute") {
   };
only(Left "Any_requestPayment") {
   };
only(Left "PoolCreator") {
  const v332 : Address* = selfAddress("PoolCreator", False, 26 )();
  let v333 : Null;
  let v334 : Null;
  const v335 : UInt* = poolDetails/325.contributionAmt;
  const penalty/336 : UInt* = v335 / 2;
  const v337 : UInt* = poolDetails/325.penaltyAmt;
  const v338 : Bool* = v337 == penalty/336;
  claim(CT_Assume False)(v338, Just "Penalty amount is not half of the contribution amount.");
  const v339 : UInt* = poolDetails/325.contributionAmt;
  const v340 : Bool* = v339 > 0;
  claim(CT_Assume False)(v340, Just "Contribution amount cannot be zero.");
  v334 : Null = null;
  v333 : Null = null;
   };
only(Left "PoolCreator") {
   };
publish(@0)
  .case("PoolCreator").send({
    isClass = False,
    msg = [poolDetails/325],
    pay = [0, ],
    when = true})
  .recv({
    didSend = didPublish/40 : Bool,
    from = PoolCreator/341 : Address,
    msg = [poolDetails/342 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})],
    secs = thisConsensusSecs/344 : UInt,
    time = thisConsensusTime/343 : UInt}){
    timeOrder(>, Nothing, thisConsensusTime/343 : UInt);
    timeOrder(>=, Nothing, thisConsensusSecs/344 : UInt);
    checkPay(0, None);
    const v345 : UInt* = poolDetails/342.contributionAmt;
    const v346 : UInt* = poolDetails/342.duration;
    const v347 : UInt* = poolDetails/342.maxUsers;
    const v348 : UInt* = poolDetails/342.penaltyAmt;
    const v349 : Bytes(200)* = poolDetails/342.poolDescription;
    const v350 : Bytes(16)* = poolDetails/342.poolName;
    view(Nothing).poolDetails.is(Just export (Nothing) => {
    return poolDetails/342;})
    let v351 : Null;
    const v352 : UInt* = poolDetails/342.contributionAmt;
    const penalty/353 : UInt* = v352 / 2;
    const v354 : UInt* = poolDetails/342.penaltyAmt;
    const v355 : Bool* = v354 == penalty/353;
    claim(CT_Require)(v355, Just "Penalty amount is not half of the contribution amount.");
    const v356 : UInt* = poolDetails/342.contributionAmt;
    const v357 : Bool* = v356 > 0;
    claim(CT_Require)(v357, Just "Contribution amount cannot be zero.");
    v351 : Null = null;
    const contributionAmt/358 : UInt* = poolDetails/342.contributionAmt;
    const penaltyAmt/359 : UInt* = poolDetails/342.penaltyAmt;
    const duration/360 : UInt* = poolDetails/342.duration;
    const InumUsers/361 : UInt* = poolDetails/342.maxUsers;
    const startingContribution/362 : UInt* = contributionAmt/358 + penaltyAmt/359;
    commit();
    only(Left "PoolCreator") {
       };
    publish(@thisConsensusTime/343)
      .case("PoolCreator").send({
        isClass = False,
        msg = [],
        pay = [startingContribution/362, ],
        when = true})
      .recv({
        didSend = didPublish/65 : Bool,
        from = PoolCreator/363 : Address,
        msg = [],
        secs = thisConsensusSecs/365 : UInt,
        time = thisConsensusTime/364 : UInt}){
        timeOrder(>, Just thisConsensusTime/343, thisConsensusTime/364 : UInt);
        timeOrder(>=, Just thisConsensusSecs/344, thisConsensusSecs/365 : UInt);
        const netBalance/366 : UInt* = 0;
        const v367 : UInt* = netBalance/366 + startingContribution/362;
        checkPay(startingContribution/362, None);
        const v368 : Bool* = PoolCreator/341 == PoolCreator/363;
        claim(CT_Require)(v368, Just "sender correct");
        emitLog(event(Just "Update", info))(PoolCreator/363, startingContribution/362 );
        only(Left "PoolCreator") {
          const v369 : Address* = selfAddress("PoolCreator", False, 67 )();
          protect<Null>("PoolCreator".interact.readyForContribution());
           };
        commit();
        only(Left "PoolCreator") {
           };
        publish(@thisConsensusTime/364)
          .case("PoolCreator").send({
            isClass = False,
            msg = [],
            pay = [0, ],
            when = true})
          .recv({
            didSend = didPublish/74 : Bool,
            from = PoolCreator/370 : Address,
            msg = [],
            secs = thisConsensusSecs/372 : UInt,
            time = thisConsensusTime/371 : UInt}){
            timeOrder(>, Just thisConsensusTime/364, thisConsensusTime/371 : UInt);
            timeOrder(>=, Just thisConsensusSecs/365, thisConsensusSecs/372 : UInt);
            checkPay(0, None);
            const v373 : Bool* = PoolCreator/341 == PoolCreator/370;
            claim(CT_Require)(v373, Just "sender correct");
            const v374 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})* = <Registration null>;
            emitLog(event(Just "PoolPhase", phase))(v374 );
            loopvar {
              numOfUsers/375 : UInt = 0,
              thisConsensusTime/376 : UInt = thisConsensusTime/371,
              lastConsensusTime/377 : UInt = thisConsensusTime/364,
              baseWaitTime/378 : UInt = thisConsensusTime/364,
              thisConsensusSecs/379 : UInt = thisConsensusSecs/372,
              lastConsensusSecs/380 : UInt = thisConsensusSecs/365,
              baseWaitSecs/381 : UInt = thisConsensusSecs/365,
              tokenInfos/382 : Array(Tuple(UInt, UInt, Bool), 0) = tokInfos/321,
              netBalance/383 : UInt = v367};
            invariant{
              [invariant(const v384 : Bool* = numOfUsers/375 >= 0;
              
              return v384;, Nothing)] }
            while{
              const v385 : Bool* = numOfUsers/375 <= InumUsers/361;
              
              return v385; }
            {
              commit();
              only(Left "Contributor_register") {
                const v/386 : Address* = selfAddress("Contributor_register", True, 102 )();
                let v387 : Null;
                const .api78.dom/388 : Tuple()* = protect<Tuple()>("Contributor_register".interact.in());
                let v389 : Null;
                const v/390 : Data({"None": Null, "Some": Null})* = map0[v/386];
                let x/391 : Bool;
                local switch (v/390 : Data({"None": Null, "Some": Null})) {
                  case None as v/392 : Null/True: {
                    x/391 : Bool = false;
                     }
                  case Some as v/393 : Null/True: {
                    x/391 : Bool = true;
                     } }
                const v394 : Bool* = (x/391 ? false : true);
                claim(CT_Assume False)(v394, Nothing);
                v389 : Null = null;
                const v395 : Object({"msg": Tuple()})* = {
                  msg = .api78.dom/388};
                v387 : Null = null;
                 };
              only(Left "Contributor_register") {
                 };
              publish(@thisConsensusTime/376)
                .case("Contributor_register").send({
                  isClass = True,
                  msg = [.api78.dom/388],
                  pay = [penaltyAmt/359, ],
                  when = true})
                .recv({
                  didSend = didPublish/131 : Bool,
                  from = this/396 : Address,
                  msg = [.fork84.msg/397 : Tuple()],
                  secs = thisConsensusSecs/399 : UInt,
                  time = thisConsensusTime/398 : UInt}){
                  timeOrder(>, Just thisConsensusTime/376, thisConsensusTime/398 : UInt);
                  timeOrder(>=, Just thisConsensusSecs/379, thisConsensusSecs/399 : UInt);
                  let v400 : Null;
                  v400 : Null = null;
                  const netBalance/401 : UInt* = netBalance/383;
                  const v402 : UInt* = netBalance/401 + penaltyAmt/359;
                  checkPay(penaltyAmt/359, None);
                  setApiDetails("Contributor_register", [Tuple()], None, AIC_SpreadArg );
                  map0[this/396] = null;
                  const v403 : Null* = null;
                  emitLog(event(Just "Update", info))(this/396, penaltyAmt/359 );
                  const v404 : Null* = null;
                  const .api78.rngl/405 : Null* = emitLog(api("Contributor_register"))(v404 );
                  only(Left "Contributor_register") {
                    const v406 : Address* = selfAddress("Contributor_register", True, 137 )();
                    let v407 : Null;
                    const didPublish/408 : Bool* = didPublish/131;
                    local if didPublish/408 then {
                      protect<Null>("Contributor_register".interact.out(.fork84.msg/397, .api78.rngl/405 ));
                       }
                    else {
                       };
                    v407 : Null = null;
                     };
                  const v409 : Null* = null;
                  const numOfUsers/410 : UInt* = numOfUsers/375 + 1;
                  const v411 : Tuple(UInt)* = [numOfUsers/410 ];
                  {
                    numOfUsers/375 : UInt = numOfUsers/410,
                    thisConsensusTime/376 : UInt = thisConsensusTime/398,
                    lastConsensusTime/377 : UInt = thisConsensusTime/376,
                    baseWaitTime/378 : UInt = thisConsensusTime/376,
                    thisConsensusSecs/379 : UInt = thisConsensusSecs/399,
                    lastConsensusSecs/380 : UInt = thisConsensusSecs/379,
                    baseWaitSecs/381 : UInt = thisConsensusSecs/379,
                    tokenInfos/382 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/382,
                    netBalance/383 : UInt = v402}
                  continue; }
                 }
            loopvar {
              numUsers/412 : UInt = 0,
              usersPaid/413 : UInt = 0,
              thisConsensusTime/414 : UInt = thisConsensusTime/376,
              lastConsensusTime/415 : UInt = lastConsensusTime/377,
              baseWaitTime/416 : UInt = baseWaitTime/378,
              thisConsensusSecs/417 : UInt = thisConsensusSecs/379,
              lastConsensusSecs/418 : UInt = lastConsensusSecs/380,
              baseWaitSecs/419 : UInt = baseWaitSecs/381,
              tokenInfos/420 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/382,
              netBalance/421 : UInt = netBalance/383};
            invariant{
              [invariant(const v422 : Bool* = usersPaid/413 <= numUsers/412;
              
              return v422;, Nothing)] }
            while{
              
              return true; }
            {
              commit();
              only(Left "PoolCreator") {
                 };
              publish(@thisConsensusTime/414)
                .case("PoolCreator").send({
                  isClass = False,
                  msg = [],
                  pay = [0, ],
                  when = true})
                .recv({
                  didSend = didPublish/154 : Bool,
                  from = PoolCreator/423 : Address,
                  msg = [],
                  secs = thisConsensusSecs/425 : UInt,
                  time = thisConsensusTime/424 : UInt}){
                  timeOrder(>, Just thisConsensusTime/414, thisConsensusTime/424 : UInt);
                  timeOrder(>=, Just thisConsensusSecs/417, thisConsensusSecs/425 : UInt);
                  checkPay(0, None);
                  const v426 : Bool* = PoolCreator/341 == PoolCreator/423;
                  claim(CT_Require)(v426, Just "sender correct");
                  const v427 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})* = <Contribution null>;
                  emitLog(event(Just "PoolPhase", phase))(v427 );
                  loopvar {
                    InumUsers/428 : UInt = InumUsers/361,
                    IusersPaid/429 : UInt = usersPaid/413,
                    timedOut/430 : Bool = true,
                    thisConsensusTime/431 : UInt = thisConsensusTime/424,
                    lastConsensusTime/432 : UInt = thisConsensusTime/414,
                    baseWaitTime/433 : UInt = thisConsensusTime/414,
                    thisConsensusSecs/434 : UInt = thisConsensusSecs/425,
                    lastConsensusSecs/435 : UInt = thisConsensusSecs/417,
                    baseWaitSecs/436 : UInt = thisConsensusSecs/417,
                    tokenInfos/437 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/420,
                    netBalance/438 : UInt = netBalance/421};
                  invariant{
                    [invariant(const v439 : Bool* = usersPaid/413 <= numUsers/412;
                    
                    return v439;, Nothing)] }
                  while{
                    
                    return timedOut/430; }
                  {
                    const baseWaitTime/440 : UInt* = thisConsensusTime/431;
                    const baseWaitTime/441 : UInt* = thisConsensusTime/431;
                    const v442 : UInt* = UInt.max - baseWaitTime/441;
                    const v443 : UInt* = v442 - duration/360;
                    const v444 : Bool* = v443 >= 0;
                    claim(CT_Require)(v444, Nothing);
                    const v445 : UInt* = baseWaitTime/440 + duration/360;
                    const v446 : Data({"Left": UInt, "Right": UInt})* = <Left v445>;
                    commit();
                    only(Left "Any_contribute") {
                      const v447 : Address* = selfAddress("Any_contribute", True, 173 )();
                      let v448 : Null;
                      const .api157.dom/449 : Tuple()* = protect<Tuple()>("Any_contribute".interact.in());
                      let v450 : Null;
                      v450 : Null = null;
                      const v451 : Object({"msg": Tuple()})* = {
                        msg = .api157.dom/449};
                      v448 : Null = null;
                       };
                    only(Left "Any_contribute") {
                       };
                    publish(@thisConsensusTime/431)
                      .timeout(Left v445, {
                        only(Left "PoolCreator") {
                           };
                        publish(@thisConsensusTime/431)
                          .case("PoolCreator").send({
                            isClass = False,
                            msg = [],
                            pay = [0, ],
                            when = true})
                          .recv({
                            didSend = didPublish/220 : Bool,
                            from = PoolCreator/467 : Address,
                            msg = [],
                            secs = thisConsensusSecs/469 : UInt,
                            time = thisConsensusTime/468 : UInt}){
                            timeOrder(>, Just thisConsensusTime/431, thisConsensusTime/468 : UInt);
                            timeOrder(>=, Just thisConsensusSecs/434, thisConsensusSecs/469 : UInt);
                            checkPay(0, None);
                            const v470 : Bool* = PoolCreator/341 == PoolCreator/467;
                            claim(CT_Require)(v470, Just "sender correct");
                            const v471 : Tuple(Bool, UInt, UInt)* = [false, IusersPaid/429, InumUsers/428 ];
                            const v472 : Tuple(Bool, UInt, UInt)* = v471;
                            {
                              InumUsers/428 : UInt = InumUsers/428,
                              IusersPaid/429 : UInt = IusersPaid/429,
                              timedOut/430 : Bool = false,
                              thisConsensusTime/431 : UInt = thisConsensusTime/468,
                              lastConsensusTime/432 : UInt = thisConsensusTime/431,
                              baseWaitTime/433 : UInt = v445,
                              thisConsensusSecs/434 : UInt = thisConsensusSecs/469,
                              lastConsensusSecs/435 : UInt = thisConsensusSecs/434,
                              baseWaitSecs/436 : UInt = thisConsensusSecs/434,
                              tokenInfos/437 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/437,
                              netBalance/438 : UInt = netBalance/438}
                            continue; }
                           } )
                      .case("Any_contribute").send({
                        isClass = True,
                        msg = [.api157.dom/449],
                        pay = [contributionAmt/358, ],
                        when = true})
                      .recv({
                        didSend = didPublish/193 : Bool,
                        from = this/452 : Address,
                        msg = [.fork164.msg/453 : Tuple()],
                        secs = thisConsensusSecs/455 : UInt,
                        time = thisConsensusTime/454 : UInt}){
                        timeOrder(>, Just thisConsensusTime/431, thisConsensusTime/454 : UInt);
                        timeOrder(>=, Just thisConsensusSecs/434, thisConsensusSecs/455 : UInt);
                        let v456 : Null;
                        v456 : Null = null;
                        const netBalance/457 : UInt* = netBalance/438;
                        const v458 : UInt* = netBalance/457 + contributionAmt/358;
                        checkPay(contributionAmt/358, None);
                        setApiDetails("Any_contribute", [Tuple()], None, AIC_SpreadArg );
                        map2[this/452] = null;
                        const v459 : Null* = null;
                        emitLog(event(Just "Update", info))(this/452, contributionAmt/358 );
                        const v460 : Null* = null;
                        const .api157.rngl/461 : Null* = emitLog(api("Any_contribute"))(v460 );
                        only(Left "Any_contribute") {
                          const v462 : Address* = selfAddress("Any_contribute", True, 199 )();
                          let v463 : Null;
                          const didPublish/464 : Bool* = didPublish/193;
                          local if didPublish/464 then {
                            protect<Null>("Any_contribute".interact.out(.fork164.msg/453, .api157.rngl/461 ));
                             }
                          else {
                             };
                          v463 : Null = null;
                           };
                        const v465 : Null* = null;
                        const v466 : Tuple(Bool, UInt, UInt)* = [true, IusersPaid/429, InumUsers/428 ];
                        {
                          InumUsers/428 : UInt = InumUsers/428,
                          IusersPaid/429 : UInt = IusersPaid/429,
                          timedOut/430 : Bool = true,
                          thisConsensusTime/431 : UInt = thisConsensusTime/454,
                          lastConsensusTime/432 : UInt = thisConsensusTime/431,
                          baseWaitTime/433 : UInt = v445,
                          thisConsensusSecs/434 : UInt = thisConsensusSecs/455,
                          lastConsensusSecs/435 : UInt = thisConsensusSecs/434,
                          baseWaitSecs/436 : UInt = thisConsensusSecs/434,
                          tokenInfos/437 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/437,
                          netBalance/438 : UInt = v458}
                        continue; }
                       }
                  const lastConsensusTime/473 : UInt* = thisConsensusTime/431;
                  const value/474 : UInt* = lastConsensusTime/473 + duration/360;
                  const v475 : UInt* = UInt.max - value/474;
                  const _/476 : Bool* = v475 >= 0;
                  let v477 : Null;
                  v477 : Null = null;
                  const v478 : Data({"Left": UInt, "Right": UInt})* = <Left value/474>;
                  commit();
                  wait(Left value/474);
                  only(Left "PoolCreator") {
                     };
                  publish(@thisConsensusTime/431)
                    .case("PoolCreator").send({
                      isClass = False,
                      msg = [],
                      pay = [0, ],
                      when = true})
                    .recv({
                      didSend = didPublish/238 : Bool,
                      from = PoolCreator/479 : Address,
                      msg = [],
                      secs = thisConsensusSecs/481 : UInt,
                      time = thisConsensusTime/480 : UInt}){
                      timeOrder(>, Just thisConsensusTime/431, thisConsensusTime/480 : UInt);
                      timeOrder(>=, Just thisConsensusSecs/434, thisConsensusSecs/481 : UInt);
                      checkPay(0, None);
                      const v482 : Bool* = PoolCreator/341 == PoolCreator/479;
                      claim(CT_Require)(v482, Just "sender correct");
                      commit();
                      only(Left "PoolCreator") {
                         };
                      publish(@thisConsensusTime/480)
                        .case("PoolCreator").send({
                          isClass = False,
                          msg = [],
                          pay = [0, ],
                          when = true})
                        .recv({
                          didSend = didPublish/243 : Bool,
                          from = PoolCreator/483 : Address,
                          msg = [],
                          secs = thisConsensusSecs/485 : UInt,
                          time = thisConsensusTime/484 : UInt}){
                          timeOrder(>, Just thisConsensusTime/480, thisConsensusTime/484 : UInt);
                          timeOrder(>=, Just thisConsensusSecs/481, thisConsensusSecs/485 : UInt);
                          checkPay(0, None);
                          const v486 : Bool* = PoolCreator/341 == PoolCreator/483;
                          claim(CT_Require)(v486, Just "sender correct");
                          const v487 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})* = <Payment null>;
                          emitLog(event(Just "PoolPhase", phase))(v487 );
                          commit();
                          only(Left "Any_requestPayment") {
                            const v/488 : Address* = selfAddress("Any_requestPayment", True, 246 )();
                            let v489 : Null;
                            const .api245.dom/490 : Tuple()* = protect<Tuple()>("Any_requestPayment".interact.in());
                            let v491 : Null;
                            const v/492 : Data({"None": Null, "Some": Null})* = map1[v/488];
                            let x/493 : Bool;
                            local switch (v/492 : Data({"None": Null, "Some": Null})) {
                              case None as v/494 : Null/True: {
                                x/493 : Bool = false;
                                 }
                              case Some as v/495 : Null/True: {
                                x/493 : Bool = true;
                                 } }
                            const v496 : Bool* = (x/493 ? false : true);
                            claim(CT_Assume False)(v496, Nothing);
                            v491 : Null = null;
                            v489 : Null = null;
                             };
                          only(Left "Any_requestPayment") {
                             };
                          publish(@thisConsensusTime/484)
                            .case("Any_requestPayment").send({
                              isClass = True,
                              msg = [.api245.dom/490],
                              pay = [0, ],
                              when = true})
                            .recv({
                              didSend = didPublish/267 : Bool,
                              from = v/497 : Address,
                              msg = [.api245.dom/498 : Tuple()],
                              secs = thisConsensusSecs/500 : UInt,
                              time = thisConsensusTime/499 : UInt}){
                              timeOrder(>, Just thisConsensusTime/484, thisConsensusTime/499 : UInt);
                              timeOrder(>=, Just thisConsensusSecs/485, thisConsensusSecs/500 : UInt);
                              checkPay(0, None);
                              setApiDetails("Any_requestPayment", [Tuple()], None, AIC_SpreadArg );
                              const netBalance/501 : UInt* = netBalance/438;
                              const netBalance/502 : UInt* = netBalance/438;
                              const v503 : Bool* = netBalance/501 <= netBalance/502;
                              claim(CT_Assert)(v503, Just "balance sufficient for transfer");
                              const netBalance/504 : UInt* = netBalance/438;
                              const v505 : UInt* = netBalance/504 - netBalance/501;
                              transfer.(netBalance/501, None).to(v/497);
                              map1[v/497] = null;
                              const v506 : Null* = null;
                              const v507 : Null* = null;
                              const .api245.rngl/508 : Null* = emitLog(api("Any_requestPayment"))(v507 );
                              only(Left "Any_requestPayment") {
                                const v509 : Address* = selfAddress("Any_requestPayment", True, 277 )();
                                let v510 : Null;
                                protect<Null>("Any_requestPayment".interact.out(.api245.dom/498, .api245.rngl/508 ));
                                v510 : Null = null;
                                 };
                              const v511 : Null* = null;
                              const usersPaid/512 : UInt* = usersPaid/413 + 1;
                              const numUsers/513 : UInt* = numUsers/412 + 1;
                              {
                                numUsers/412 : UInt = numUsers/513,
                                usersPaid/413 : UInt = usersPaid/512,
                                thisConsensusTime/414 : UInt = thisConsensusTime/499,
                                lastConsensusTime/415 : UInt = thisConsensusTime/484,
                                baseWaitTime/416 : UInt = thisConsensusTime/484,
                                thisConsensusSecs/417 : UInt = thisConsensusSecs/500,
                                lastConsensusSecs/418 : UInt = thisConsensusSecs/485,
                                baseWaitSecs/419 : UInt = thisConsensusSecs/485,
                                tokenInfos/420 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/437,
                                netBalance/421 : UInt = v505}
                              continue; }
                             }
                         }
                     }
                 }
            commit();
            only(Left "PoolCreator") {
               };
            publish(@thisConsensusTime/414)
              .case("PoolCreator").send({
                isClass = False,
                msg = [],
                pay = [0, ],
                when = true})
              .recv({
                didSend = didPublish/286 : Bool,
                from = PoolCreator/514 : Address,
                msg = [],
                secs = thisConsensusSecs/516 : UInt,
                time = thisConsensusTime/515 : UInt}){
                timeOrder(>, Just thisConsensusTime/414, thisConsensusTime/515 : UInt);
                timeOrder(>=, Just thisConsensusSecs/417, thisConsensusSecs/516 : UInt);
                checkPay(0, None);
                const v517 : Bool* = PoolCreator/341 == PoolCreator/514;
                claim(CT_Require)(v517, Just "sender correct");
                const v518 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})* = <Finished null>;
                emitLog(event(Just "PoolPhase", phase))(v518 );
                const netBalance/519 : UInt* = netBalance/421;
                const v520 : Bool* = 0 == netBalance/519;
                claim(CT_Assert)(v520, Just "balance zero at application exit");
                commit();
                exit(); }
               }
           }
       }
  