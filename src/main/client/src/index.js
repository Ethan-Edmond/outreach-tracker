import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './store';
import './index.css';
import App from './App';
import Login from './components/Login';
import SecureRoute from './utils/SecureRoute';

const store = configureStore({reducer});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
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
