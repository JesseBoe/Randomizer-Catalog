import React from 'react';

import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

//Components
import Home from './components/Home/Home';
import ConsoleGameList from './components/ConsoleGameList/ConsolgeGameList';

//Logo
import CatalogLogo from './components/Home/RandomCatalogLogo.png';

//Styles
import Reset from './styles/reset.css';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-light RandomNavbar">
          <Link className="navbar-brand" to="/">
            <img src={CatalogLogo} width="200" draggable="false" alt="" />
          </Link>
        </nav>
        <div className="App">
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path={["/NES", "/GB", "/SNES", "/N64", "/GBC", "/GBA", "/GC", "/NDS", "/3DS", "/WiiU", "/PS1", "/PS2", "/PSP", "/PC", "/Atari", "/SG", "/SMS"]} component={ConsoleGameList} />
        </div>
      </Router>
    </div>
  );
}

export default App;

