import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Components/Landing'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Breaking Bad App</h1>
      </div>
      <Route path='/' component={Landing}></Route>
    </BrowserRouter>
  );
}

export default App;
