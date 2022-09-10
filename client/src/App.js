import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './Components/Landing'
import Home from './Components/Home';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/characters' component={Home}></Route>
      <Route exact path='/details/:id' component={Details}></Route>
    </BrowserRouter>
  </div>
  );
}

export default App;
