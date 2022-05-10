import person from './img/person.png'
import shape from './img/shape.png'



function App() {
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
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#" className="btn">Connect</a></li>
              </ul>
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
              <div className="big-title">
                <h1>Future is here,</h1>
                <h1>Start Exploring now.</h1>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
              <div className="cta">
                <a href="#" className="btn">Connect Wallet</a>
              </div>
            </div>

            <div className="right">
              <img src={person} alt="Person Image" className="person" />
            </div>
          </div>
        </div>

        <div className="bottom-area">
          <div className="container">
            <button className="toggle-btn">
              <i className="far fa-moon"></i>
              <i className="far fa-sun"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}

export default App;
