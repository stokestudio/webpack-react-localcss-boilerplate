var path = require('path');
var webpack = require('webpack');

var buildPath = path.resolve(__dirname, '..', 'build');
var srcPath = path.resolve(__dirname, '..', 'src');

module.exports = {
  target: 'node',

  entry: path.join(srcPath, 'server', 'index'),

  output: {
    path: path.join(buildPath, 'server'),
    filename: 'index.js'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
  ],

  module: {
    loaders: [ {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: require('./babel.prod')
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.scss$/,
      loader: 'css/locals?modules&importLoaders=1&localIdentName=[hash:base64:5]'
    }]
  }
};
