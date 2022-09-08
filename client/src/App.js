import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './Components/Landing'
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Landing}></Route>
      <Route exact path='/characters' component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
