// Promise polyfill for IE11
require('es6-promise').polyfill();

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const renderApp = () => {
  const App = require('./components/App').default;
  render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', renderApp);
}
