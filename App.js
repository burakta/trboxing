import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import BoksHakkında from './compo/BoksHakkında.js';
import Sparring from './compo/Sparring.js';
import Analiz from './compo/Analiz.js';
import Kariyer from './compo/Kariyer.js';
import Antrenman from './compo/Antrenman.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <h1 className="üst-fotolar"></h1>

          <ul className="header">
            <a href=".boxing" id="boxing"><span className="boxing">Boxing-TR</span></a>
            <li><NavLink exact to="/">Boks Hakkında</NavLink></li>
            <li><NavLink to="/Sparring">Sparring Buluşması</NavLink></li>
            <li><NavLink to="/Analiz">Şampiyonların Teknik Analizi</NavLink></li>
            <li><NavLink to="/Kariyer">Boksta Kariyer</NavLink>></li>
            <li><NavLink to="/Antrenman">Baştan Ayağa Antrenman</NavLink></li>

          </ul>

          <div className="content">
            <Route exact path="/" component={
              BoksHakkında} />
            <Route path="/Sparring" component={
              Sparring} />
            <Route path="/Analiz" component={
              Analiz} />
            <Route path="/Kariyer" component={
              Kariyer} />
            <Route path="/Antrenman" component={Antrenman} />
          </div>

        </div>
      </HashRouter>

    );
  }
}
export default App;
