import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './Home';
import Layout from './Layout';

const App = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default App;
