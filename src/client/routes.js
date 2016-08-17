import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

/**
 *  # Adding Routes
 *  In order to get both production JS chunking and development hot reloading to
 *  work, you'll need to follow this process for adding routes:
 *
 *    1. Add `resolveMyComponentName` method following the example below
 *    2. Add a `System.import('[path]')` statement to `hotReloadDynamicRoutes`
 *    3. Add `<Route />` following the "about" example using `getComponent`
 *
 *  Any components called directly in routes (such as in the `Home` route below)
 *  will be placed in the main JS chunk in production.
 *
 *  You may not notice additional chunks being created in production until they
 *  surpass the minimum size configured in *config/webpack.client.prod.js* via
 *  the `MinChunkSizePlugin`.
 */

const hotReloadDynamicRoutes = () => {
  System.import('./components/About');
};
if (module.hot) hotReloadDynamicRoutes();

const load = cb => module => cb(null, module.default);

const onError = err => {
  console.log('==> Error occurred loading dynamic route');
  console.log(err);
};

const resolveAbout = (_, cb) =>
  System.import('./components/About')
    .then(load(cb)).catch(onError);

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="about" getComponent={resolveAbout} />
  </Route>
);

export default routes;
