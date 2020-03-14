import React from 'react';

import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

//Components
import Home from './components/Home/Home';
import ConsoleGameList from './components/ConsoleGameList/ConsolgeGameList';
import About from './components/About/About'

//Logo
import CatalogLogo from './components/Home/RandomCatalogLogo.png';

//svg
import mySVG from './drawing3.svg'

//Styles
import Reset from './styles/reset.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Scrolled : false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => { this.Scrolled(window.scrollY)});
  }

  Scrolled = (posY) => {
    console.log(posY);
    if (!this.state.Scrolled) {
      if (posY > 15) {
        this.setState({Scrolled: true});
        document.getElementById("navbar").style.background = "rgba(94,53,152,1)";
      }
    }
    else {
      if (posY < 15) {
        this.setState({Scrolled: false});
        document.getElementById("navbar").style.background = "rgba(94,53,152,0)";
      }
    }
  }

  render() {
    return (
      <div>
        <img src={mySVG} style={{ width: "100%", height: "auto", position: "absolute", overflow: "hidden" }}></img>
        <Router>
          <nav id="navbar" className="navbar navbar-light RandomNavbar fixed-top">
            <Link className="navbar-brand" to="/">
              <img className="logo" src={CatalogLogo} width={this.state.Scrolled ? "125" : "200"} draggable="false" alt="" />
            </Link>
            <span className="nav-item">
              <Link to="/About"><a className="nav-link" href="#">About<span class="sr-only">(current)</span></a></Link>
            </span>
            <span className="personal-links">
              <i style={{ marginLeft: 8, marginRight: 8 }} href="mailto:JesseBoeWork@gmail.com" class="fas fa-envelope-square navbarLinkIcon"></i>
              <i style={{ marginLeft: 8, marginRight: 8 }} href="https://github.com/JesseBoe" class="fab fa-github-square navbarLinkIcon"></i>
              <i style={{ marginLeft: 8 }} href="https://jesseboe.github.io/Portfolio/" class="fas fa-address-card navbarLinkIcon"></i>
            </span>
          </nav>
          <div className="App" style={{paddingTop: 80}}>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/About" component={About} />
            <Route exact={true} path="/Login" component={Home} />
            <Route exact={true} path={["/NES", "/GB", "/SNES", "/N64", "/GBC", "/GBA", "/GC", "/NDS", "/3DS", "/WiiU", "/PS1", "/PS2", "/PSP", "/PC", "/Atari", "/SG", "/SMS"]} component={ConsoleGameList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

