import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from '../App';
import Body from '../Body';
// import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={Body}>
    <IndexRoute component={App} />
  </Route>
);
