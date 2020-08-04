import React from 'react';
import './App.css';
import Navbar from 'components/Navbar';
import Home from 'screens/Home';
import Scores from 'screens/Scores';
import Rules from 'screens/Rules';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/scores' component={ Scores } />
        <Route path='/rules' component={ Rules } />
      </Switch>
    </div>
  );
}

export default App;
