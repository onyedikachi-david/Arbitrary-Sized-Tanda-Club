import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    console.log(content.props.dappEvents)
    return (
      <>
      <div className="MainContent">
        <h2>Staker</h2>
        <h3>{content.props.phase}</h3>
        <h3>{content.props.dappEvents}</h3>
        {content}
      </div>
      </>
    );
  }
}

exports.Attach = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ctcInfoStr: localStorage.getItem('ApplicationID') || '',
    }
  }
  render() {
    const {parent, connector} = this.props;
    const {ctcInfoStr} = this.state || {};
    const thing = connector == 'ALGO' ? 'Application ID' : 'contract address';
    return (
      <div class="form-style-5">
        Please paste the {thing} of the staking pool.
        <br />
        <br />
        <fieldset>
        <input
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          spellCheck="false"
          type='text'
          value={ctcInfoStr}
        />
        </fieldset>
        <button
          className="btn"
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
        {/* </fieldset> */}
      </div>
      
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

const defaultAmt = 10;
exports.ApplicationInfo = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amt: defaultAmt,
    }
  }
  render() {
    const {parent, ctcInfoStr} = this.props;
    const {poolDetails} = this.props;
    const {poolName, poolDescription, contributionAmt, penaltyAmt, duration, maxUsers} = poolDetails || {};
    return (
      <main>
          {poolDetails ? '' : <p>
            WARNING: Unable to retrieve info for Application {ctcInfoStr}.
            It may already be deleted.
            You can still click the buttons below but they may not work correctly.
          </p>}

          <h1>Tanda Details!</h1>
          <p>Pool Name: {poolName}</p>
          <p>Pool Description: {poolDescription}</p>
          <p>Contribution Amount: {contributionAmt}</p>
          <p>Duration: {duration} rounds</p>
          <p>Penalty Amount: {penaltyAmt}</p>
          <p>Maximum number of Users: {maxUsers}</p>


          {/* <h1>Current amount staked</h1>
          <p>You have staked {staked || '?'} of the {totalStaked} total staked.</p>

          <h1>Rewards</h1>
          <p>Shared with everyone per block: {rewardsPerBlock}</p>
          <p>Total rewards remaining in the contract: {remainingRewards}</p>
          <p>You can harvest an estimated: {rewardsAvailableAt || '?'}</p>

          <h1>This reward period ends on</h1>
          <p>round {end}</p>
          <p>(Now is approximately round {now})</p> */}
          <div class="form-style-5">
          <fieldset>
          <input 
            onChange={(e) => this.setState({amt: e.currentTarget.value})}
            spellCheck="false"
            type='number'
            placeholder={defaultAmt}
            value={this.state.amt}
          />
          </fieldset>
          </div>
         
          {/* <br /> */}


	<div class="section full-height">
      	<input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn"/>
      	<label for="modal-btn">Open Modal <i class="uil uil-expand-arrows"></i></label> 		
      	<div class="modal">		
	      	<div class="modal-wrap">	
				{/* <img src="https://assets.codepen.io/1462889/sl3.jpg" alt=""/>	
	      		<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>	          		 */}

<div className='divbtn'>
            <button className="btn" onClick={() => parent.register()}>
            Register!
          </button>
          <button className="btn" onClick={() => parent.contribute()}>
            Contribute
          </button>
          {/* <span>---------------------------------------------</span> */}
          <hr />
          <button className={`${this.props.phase !== 'Payment' ? "btn hide" : "btn "} `} disabled={this.props.phase !== 'Payment'} onClick={() => parent.request()}>
            Request Payment
          </button>

          {/* <hr /> */}

          <button className="btn" onClick={() => parent.checkP()}>
            Check current phase!
          </button>
          <button className="btn" onClick={() => parent.checkU()}>
            Check latest Update
          </button>

         
          
          </div>
	      	</div>			          		
      	</div>		
	</div>
          
      </main>
    );
  }
}

export default exports;
