import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, applyRouterMiddleware, browserHistory, match } from 'react-router/es6';
import { useScroll } from 'react-router-scroll';
import { logPageView } from './analytics';

const container = document.getElementById('root');

const renderApp = () => {
  const routes = require('./routes').default;
  match(
    { history: browserHistory, routes },
    (error, redirectLocation, renderProps) => {
      render(
        <AppContainer>
          <Router render={applyRouterMiddleware(useScroll())}
            onUpdate={logPageView}
            {...renderProps} />
        </AppContainer>,
        container
      );
    }
  );
};

renderApp();

if (module.hot) {
  module.hot.accept();
  module.hot.accept('./routes', renderApp);
}
