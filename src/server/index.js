import compression from 'compression';
import express from 'express';
import { template } from 'lodash';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import App from '../client/App';
import htmlTemplate from './index-template.html';

const app = express();
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.use(compression());
app.use('/assets', express.static('build/client'));
app.use('/assets', express.static('assets'));

const compiledTemplate = template(htmlTemplate);

app.get('*', function (req, res) {
  const context = {};
  const sheet = new ServerStyleSheet();

  const markup = renderToString(
    <StaticRouter context={context} location={req.originalUrl}>
      <StyleSheetManager sheet={sheet.instance}>
        <App />
      </StyleSheetManager>
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(302, context.url);
  } else {
    const html = compiledTemplate({
      css: sheet.getStyleTags(),
      content: markup
    });
    res.status(context.status || 200).send(html);
  }
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
