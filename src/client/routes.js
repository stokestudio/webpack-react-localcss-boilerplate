import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
