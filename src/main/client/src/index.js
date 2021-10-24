import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* <Route path='/register'>
          <Register/>
        </Route> */}
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/'>
          <App/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
