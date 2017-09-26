import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import Login from './components/Login.js';
import Body from './components/Body.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="chat" component={Body} />
  </Route>
);
