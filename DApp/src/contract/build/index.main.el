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
only(Left "PoolCreator") {
  const poolDetails/325 : Object({"contributionAmt": UInt, "duration": UInt, "maxUsers": UInt, "penaltyAmt": UInt, "poolDescription": Bytes(200), "poolName": Bytes(16)})* = "PoolCreator".interact.getPoolDetails;
  const v326 : UInt* = poolDetails/325.contributionAmt;
  const v329 : UInt! = poolDetails/325.penaltyAmt;
   };
only(Left "PoolCreator") {
  const penalty/336 : UInt! = v326 / 2;
  const v338 : Bool! = v329 == penalty/336;
  claim(CT_Assume False)(v338, Just "Penalty amount is not half of the contribution amount.");
  const v340 : Bool! = v326 > 0;
  claim(CT_Assume False)(v340, Just "Contribution amount cannot be zero.");
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
    checkPay(0, None);
    const v345 : UInt* = poolDetails/342.contributionAmt;
    const v346 : UInt* = poolDetails/342.duration;
    const v347 : UInt* = poolDetails/342.maxUsers;
    const v348 : UInt* = poolDetails/342.penaltyAmt;
    view(Nothing).poolDetails.is(Just export (Nothing) => {
    return poolDetails/342;})
    const penalty/353 : UInt! = v345 / 2;
    const v355 : Bool! = v348 == penalty/353;
    claim(CT_Require)(v355, Just "Penalty amount is not half of the contribution amount.");
    const v357 : Bool! = v345 > 0;
    claim(CT_Require)(v357, Just "Contribution amount cannot be zero.");
    const startingContribution/362 : UInt* = v345 + v348;
    commit();
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
        checkPay(startingContribution/362, None);
        const v368 : Bool! = PoolCreator/341 == PoolCreator/363;
        claim(CT_Require)(v368, Just "sender correct");
        emitLog(event(Just "Update", info))(PoolCreator/363, startingContribution/362 );
        only(Left "PoolCreator") {
          protect<Null>("PoolCreator".interact.readyForContribution());
           };
        commit();
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
              [invariant(
              return null;, Nothing)] }
            while{
              const v385 : Bool! = numOfUsers/375 <= v347;
              
              return v385; }
            {
              commit();
              only(Left "Contributor_register") {
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
              publish(@thisConsensusTime/376)
                .case("Contributor_register").send({
                  isClass = True,
                  msg = [.api78.dom/388],
                  pay = [v348, ],
                  when = true})
                .recv({
                  didSend = didPublish/131 : Bool,
                  from = this/396 : Address,
                  msg = [.fork84.msg/397 : Tuple()],
                  secs = thisConsensusSecs/399 : UInt,
                  time = thisConsensusTime/398 : UInt}){
                  const v402 : UInt! = netBalance/383 + v348;
                  checkPay(v348, None);
                  setApiDetails("Contributor_register", [Tuple()], None, AIC_SpreadArg );
                  map0[this/396] = null;
                  emitLog(event(Just "Update", info))(this/396, v348 );
                  const v404 : Null! = null;
                  const .api78.rngl/405 : Null* = emitLog(api("Contributor_register"))(v404 );
                  only(Left "Contributor_register") {
                    local if didPublish/131 then {
                      protect<Null>("Contributor_register".interact.out(.fork84.msg/397, .api78.rngl/405 ));
                       }
                    else {
                       };
                     };
                  const numOfUsers/410 : UInt! = numOfUsers/375 + 1;
                  {
                    numOfUsers/375 : UInt = numOfUsers/410,
                    thisConsensusTime/376 : UInt = thisConsensusTime/398,
                    netBalance/383 : UInt = v402}
                  continue; }
                 }
            loopvar {
              thisConsensusTime/414 : UInt = thisConsensusTime/376,
              netBalance/421 : UInt = netBalance/383};
            invariant{
              [invariant(
              return null;, Nothing)] }
            while{
              
              return true; }
            {
              commit();
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
                    [invariant(
                    return null;, Nothing)] }
                  while{
                    
                    return timedOut/430; }
                  {
                    const v442 : UInt! = UInt.max - thisConsensusTime/431;
                    const v443 : UInt! = v442 - v346;
                    const v444 : Bool! = v443 >= 0;
                    claim(CT_Require)(v444, Nothing);
                    const v445 : UInt* = thisConsensusTime/431 + v346;
                    commit();
                    only(Left "Any_contribute") {
                      const .api157.dom/449 : Tuple()* = protect<Tuple()>("Any_contribute".interact.in());
                       };
                    publish(@thisConsensusTime/431)
                      .timeout(Left v445, {
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
                            checkPay(0, None);
                            const v470 : Bool! = PoolCreator/341 == PoolCreator/467;
                            claim(CT_Require)(v470, Just "sender correct");
                            {
                              timedOut/430 : Bool = false,
                              thisConsensusTime/431 : UInt = thisConsensusTime/468,
                              netBalance/438 : UInt = netBalance/438}
                            continue; }
                           } )
                      .case("Any_contribute").send({
                        isClass = True,
                        msg = [.api157.dom/449],
                        pay = [v345, ],
                        when = true})
                      .recv({
                        didSend = didPublish/193 : Bool,
                        from = this/452 : Address,
                        msg = [.fork164.msg/453 : Tuple()],
                        secs = thisConsensusSecs/455 : UInt,
                        time = thisConsensusTime/454 : UInt}){
                        const v458 : UInt! = netBalance/438 + v345;
                        checkPay(v345, None);
                        setApiDetails("Any_contribute", [Tuple()], None, AIC_SpreadArg );
                        map2[this/452] = null;
                        emitLog(event(Just "Update", info))(this/452, v345 );
                        const v460 : Null! = null;
                        const .api157.rngl/461 : Null* = emitLog(api("Any_contribute"))(v460 );
                        only(Left "Any_contribute") {
                          local if didPublish/193 then {
                            protect<Null>("Any_contribute".interact.out(.fork164.msg/453, .api157.rngl/461 ));
                             }
                          else {
                             };
                           };
                        {
                          timedOut/430 : Bool = true,
                          thisConsensusTime/431 : UInt = thisConsensusTime/454,
                          netBalance/438 : UInt = v458}
                        continue; }
                       }
                  const value/474 : UInt! = thisConsensusTime/431 + v346;
                  commit();
                  wait(Left value/474);
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
                      checkPay(0, None);
                      const v482 : Bool! = PoolCreator/341 == PoolCreator/479;
                      claim(CT_Require)(v482, Just "sender correct");
                      commit();
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
                          checkPay(0, None);
                          const v486 : Bool! = PoolCreator/341 == PoolCreator/483;
                          claim(CT_Require)(v486, Just "sender correct");
                          const v487 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})! = <Payment null>;
                          emitLog(event(Just "PoolPhase", phase))(v487 );
                          commit();
                          only(Left "Any_requestPayment") {
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
                              checkPay(0, None);
                              setApiDetails("Any_requestPayment", [Tuple()], None, AIC_SpreadArg );
                              const v505 : UInt! = netBalance/438 - netBalance/438;
                              transfer.(netBalance/438, None).to(v/497);
                              map1[v/497] = null;
                              const v507 : Null! = null;
                              const .api245.rngl/508 : Null* = emitLog(api("Any_requestPayment"))(v507 );
                              only(Left "Any_requestPayment") {
                                protect<Null>("Any_requestPayment".interact.out(.api245.dom/498, .api245.rngl/508 ));
                                 };
                              {
                                thisConsensusTime/414 : UInt = thisConsensusTime/499,
                                netBalance/421 : UInt = v505}
                              continue; }
                             }
                         }
                     }
                 }
            commit();
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
                checkPay(0, None);
                const v517 : Bool! = PoolCreator/341 == PoolCreator/514;
                claim(CT_Require)(v517, Just "sender correct");
                const v518 : Data({"Contribution": Null, "Finished": Null, "Payment": Null, "Registration": Null})! = <Finished null>;
                emitLog(event(Just "PoolPhase", phase))(v518 );
                commit();
                exit(); }
               }
           }
       }
  