var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

var PORT = 4000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
}).listen(PORT, 'localhost', function(err, result) {
  if (err)
    return console.log(err);

  console.log('Listening at http://localhost:' + PORT);
});
