var autoprefixerConfig = require('./autoprefixer.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },

  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ],

  postcss: function() {
    return [
      require('precss'),
      require('postcss-calc'),
      require('postcss-pxtorem'),
      require('autoprefixer')(autoprefixerConfig),
    ];
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      // ExtractTextPlugin is not yet compatible with Webpack 2
      // { loader: 'loaderName', query: {...} } loader syntax
      loader: ExtractTextPlugin.extract('style', [
        'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
        'postcss'
      ])
    }]
  }
};
