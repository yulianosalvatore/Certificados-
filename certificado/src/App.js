import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Generar from './components/js/generarpdf'
import DASH from './components/js/dashboart'
import Crud from './components/js/crud'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DASH} />
        <Route path="/crud" exact component={Crud} />
        <Route path="/generarpdf" exact component={Generar} />
        
      </Switch>
    </Router>
  );
}

export default App;
