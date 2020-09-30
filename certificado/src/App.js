import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Generar from './components/js/generarpdf.jsx'
import DASH from './components/js/dashboart'
import Imprimir from './components/js/imprimirpdf'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DASH} />
        <Route path="/generarpdf" exact component={Generar} />
        <Route path="/imprimir" exact component={Imprimir} />

      </Switch>
    </Router>
  );
}

export default App;
