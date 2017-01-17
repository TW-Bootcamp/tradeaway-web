import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="signup" component={Signup} />
  </Route>
);
