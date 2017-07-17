import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { logPageView } from './analytics';
import ScrollToTop from './components/ScrollToTop';
import App from './App';

const container = document.getElementById('root');

const renderApp = () => {
  render(
    <AppContainer>
      <Router onUpdate={logPageView}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </AppContainer>,
    container
  );
};

renderApp();

if (module.hot) {
  module.hot.accept();
  module.hot.accept('./App', () => setTimeout(renderApp, 0));
}
