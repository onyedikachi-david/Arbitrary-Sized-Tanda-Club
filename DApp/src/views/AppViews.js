import React from 'react';
import person from '../img/person.png'
import shape from '../img/shape.png'

const exports = {};

exports.Wrapper = class extends React.Component {

  render() {
    const {content} = this.props;
    // console.log(content.props.date)
    return (
      <div className="App">
      <main>
      <div className="big-wrapper light">
        <img src={shape} alt="" className="shape" />

        <header>
          <div className="container">
            <div className="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjdX_-8MxBDQtQMyNsKg7x84MA5a4g71lGKO1wjvqMA&s" alt="Logo" />
              <h3>Tanda Umoja</h3>
            </div>

            <div className="links">
              <ul>
                <li className="btn">Balance: {content.props.bal === '' ? <>" "</> : <>{content.props.bal}</>}</li>
              </ul>
              {/* {connector === 'ALGO' ? <><br />You may need to disable your popup blocker</> : ''} */}

            </div>

            <div className="overlay"></div>

            <div className="hamburger-menu">
              <div className="bar"></div>
            </div>
          </div>
        </header>

        <div className="showcase-area">
          <div className="container">
            <div className="left">
              <div>
              {content}
              </div>
              {/* <div className="cta">
                <a href="#" className="btn">Connect Wallet</a>
              </div> */}
            </div>

            <div className="right">
              <img src={person} alt="Person Image" className="person" />
            </div>
          </div>
        </div>

      
      </div>
    </main>
    </div>
   
    );
  }
}

exports.SelectNetwork = class extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <>
        {/* <p className='MainContent'> */}
        <div className="big-title">
                <h1>Future is here,</h1>
                <h1>Start Exploring now.</h1>
              </div>
          <br />
            <h3>
          Select a network
          </h3>
          <br />

          {/* </div> */}
          <div className="cta">
    
        <button className="btn" onClick={() => parent.selectNetwork('ALGO', 'TestNet')}
        >Algorand TestNet</button>
        <br />
        <br />
        <button className="btn" onClick={() => parent.selectNetwork('ALGO', 'MainNet')}
        >Algorand MainNet</button>
        <br />
        </div>
      </>
    )
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    const { parent, connector } = this.props;
    const ctcInfoStr = false;
    return (
      <>
        <h4 >
          Please click the button to connect your account.
          {connector === 'ALGO' ? <><br />You may need to disable your popup blocker</> : ''}
          {connector === 'ETH' ? <><br />Select the desired network in MetaMask and refresh the page if necessary.</> : ''}
        </h4>
        {/* <br /> */}
        <br />
        { connector === 'ALGO' ? <>
          <button className="btn" onClick={
            () => parent.openWalletPopUp('MyAlgoConnect')
          }>MyAlgoConnect</button>
      
        </> : <>
          <button className='MyAlgoWalletButton' onClick={
            () => parent.openWalletPopUp('MetaMask')
          }>MetaMask</button>
        </> }
        <br />
        <br />
      </>
    )
  }
}

exports.RoleSelect = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <p className='MainContent'>
          Please select a role:
        </p>
        <br />
        <span className='LargeButtonContainer'>
          <button className="btn" 
            onClick={() => parent.selectDeployer()}
          >
            <h1>Creator</h1>

            <p>
              {/* Incentivise others to stake by creating and funding a staking pool with rewards. */}
              Create a pool and share your pool "ID" with your friends to join!
            </p>
          </button>
        <br />
        <br />
        <br />


          <button className="btn" 
            onClick={() => parent.selectContributor()}
          >
            
            <h1>Contributor</h1>

            <p>
            Join a tanda pool and get the pot at the end of a round
            </p>
          </button>
        </span>
      </div>
    );
  }
}

export default exports;
