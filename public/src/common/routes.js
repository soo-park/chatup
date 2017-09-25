import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Body from '../components/Body';
// import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={Body}>
    <IndexRoute component={App} />
  </Route>
);


// <Route path="about" component={AboutPage} />