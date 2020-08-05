import React, { useState } from 'react';
import './App.css';
import Navbar from 'components/Navbar';
import Home from 'screens/Home';
import Scores from 'screens/Scores';
import Rules from 'screens/Rules';
import Contact from 'screens/Contact';
import Vault from 'screens/Vault';
import { Switch, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');

  return (
    <div className='App'>
      <Navbar mode={ mode } setMode={ setMode } />

      <Switch>
        <Route exact path='/'><Home mode={mode} /></Route>
        <Route path='/scores'><Scores mode={mode} /></Route>
        <Route path='/rules'><Rules mode={mode} /></Route>
        <Route path='/contact'><Contact mode={mode} /></Route>
        <Route path='/vault'><Vault mode={mode} /></Route>
      </Switch>
    </div>
  );
}

export default App;
