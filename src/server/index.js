import compression from 'compression';
import express from 'express';
import { template } from 'lodash';
import morgan from 'morgan';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, createMemoryHistory, match } from 'react-router';
import routes from '../client/routes';
import htmlTemplate from './index-template.html';

const app = express();
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.use(compression());
app.use('/assets', express.static('build/client'));
app.use('/assets', express.static('assets'));

const compiledTemplate = template(htmlTemplate);

app.get('*', function (req, res) {
  const history = createMemoryHistory(req.originalUrl);

  match({ routes, history }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps} />);
      const html = compiledTemplate({ content });
      res.status(200).send(html);
    } else {
      res.status(404).send('Not found');
    }
  });
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
