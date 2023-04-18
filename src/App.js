import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/'>
              <Login/>
            </Route>
            <Route path='/home'>
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
