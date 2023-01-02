import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import Detail1 from './components/Detail1';
import Detail2 from './components/Detail2';
import {
  BrowserRouter as Router
  ,Route,
  Switch,
} from 'react-router-dom'


function App() {
  return (
  <Router>
    <div className="App">
        <Header/>
        <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path="/detail2">
          <Detail2/>
        </Route>  
        <Route path='/detail1'>
            <Detail1 />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/detail'>
            <Detail/>
          </Route>
          <Route>
            <Home />
          </Route>

        </Switch>
    </div>
  </Router>
  );
}

export default App;
