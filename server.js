const compression = require('compression');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : undefined));

app.use(compression());
app.use('/assets', express.static('build'));

app.get('*', function (req, res) {
  if (req.accepts('html')) {
    res.sendFile(path.resolve('index.html'));
  } else {
    res.sendStatus(404);
  }
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
