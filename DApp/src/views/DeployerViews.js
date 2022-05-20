import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <>
        <h2>Staking Pool Creator</h2>
        Fill out these fields, and create a staking pool!
        {content}
      </>
    );
  }
}

const defaultPoolName = "My Tanda Pool";
const defaultDescription = "A brief description of the pool.";
const defaultContributionAmt = 10;
const defaultPenaltyAmt = 5;
const defaultDuration = 4;
const defaultMaxUsers = 2;

exports.SetOpts = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poolName: defaultPoolName,
      poolDescription: defaultDescription,
      contributionAmt: defaultContributionAmt,
      penaltyAmt: defaultPenaltyAmt,
      duration: defaultDuration,
      maxUsers: defaultMaxUsers
    };

    // https://www.geeksforgeeks.org/
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // https://www.geeksforgeeks.org/
  // Stores all the values of the
  // input field in state using a single method
  // handleChanges of all the input field using
  // an ES6 javascript feature computed property names
  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  // https://www.geeksforgeeks.org/
  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    event.preventDefault();
    console.info('Wrapper state on submit!', this.state);
    this.props.parent.deploy(this.state);
  }

  render() {
    return (
      <>
        <br />
        <br />
        <div class="form-style-5">
        <form onSubmit={this.handleSubmit}>
        <fieldset>
          <b>Pool name: </b>
          <input
            name='poolName'
            onChange={this.handleChange}
            placeholder={defaultPoolName}
            type='text'
            value={this.state.poolName || defaultPoolName}
          />
          {/* <br /> */}
          {/* <br /> */}
          <b>Pool Description: </b>
          <input
            name='poolDescription'
            onChange={this.handleChange}
            placeholder={defaultDescription}
            type='text'
            value={this.state.poolDescription || defaultDescription}
          />
          {/* <br /> */}
          {/* <br /> */}
          <b>Contribution Amount: </b>
          <input
            name='contributionAmt'
            onChange={this.handleChange}
            placeholder={defaultContributionAmt}
            type='number'
            value={this.state.contributionAmt || defaultContributionAmt}
          />
          {/* <br />
          <br /> */}
          <b>Penalty Amount: </b>
          <input
            name='penaltyAmt'
            onChange={this.handleChange}
            placeholder={defaultPenaltyAmt}
            type='number'
            value={this.state.penaltyAmt || defaultPenaltyAmt}
          />
          {/* <br />
          <br /> */}
          <b>Duration: </b>
          <input
            name='duration'
            onChange={this.handleChange}
            placeholder={defaultDuration}
            type='number'
            value={this.state.duration || defaultDuration}
          />
          {/* <br />
          <br /> */}
          <b>Maximum number of Users: </b>
          <input
            name='maxUsers'
            onChange={this.handleChange}
            placeholder={defaultMaxUsers}
            type='number'
            value={this.state.maxUsers || defaultMaxUsers}
          />
          {/* <br />
          <br /> */}
          </fieldset>
          <input
            // className='Deployer SmallButton'
            type='submit'
          value={"Create Tanda Pool!"}/>
        </form>
        </div>
      </>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <button
          onClick={() => parent.deploy()}
        >Create Staking Pool</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Creating pool... please sign the transactions to deploy the contract and fund it with rewards.</div>
    );
  }
}

exports.Deployed = class extends React.Component {
  getApplicationId() {
    const {ctcInfoStr} = this.props;
    localStorage.setItem('ApplicationID', ctcInfoStr);
    return ctcInfoStr;
  }

  render() {
    const {connector} = this.props;
    const thing = connector == 'ALGO' ? 'Application ID' : 'contract address';
    return (
      <React.Fragment>
        <main>Staking Pool created!</main>
        <p>The {thing} is</p>
        <p>{this.getApplicationId()}</p>
      </React.Fragment>
    );
  }
}

exports.Done  = class extends React.Component {
  render() {
    return <>The contract has run to completion</>;
  }
}

export default exports;
