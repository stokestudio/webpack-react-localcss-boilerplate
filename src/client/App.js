import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './components/asyncComponent';
import Layout from './components/Layout';
import Home from './pages/Home';

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code
    return children
  }}/>
);

const NoMatch = () => (
  <Status code={404}>
    <div>Not Found</div>
  </Status>
);

const hotReloadDynamicRoutes = () => {
  import('./pages/About');
};
if (module.hot) hotReloadDynamicRoutes();

const AsyncAbout = asyncComponent(() => import('./pages/About'));

export default () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AsyncAbout} />
      
      <Route component={NoMatch} />
    </Switch>
  </Layout>
);
