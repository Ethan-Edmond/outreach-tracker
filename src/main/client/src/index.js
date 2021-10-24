import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';
import SecureRoute from './utils/SecureRoute';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          {/* <Route path='/register'>
            <Register/>
          </Route> */}
          <Route path='/login'>
            <Login/>
          </Route>
          <SecureRoute path='/'>
            <App/>
          </SecureRoute>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
