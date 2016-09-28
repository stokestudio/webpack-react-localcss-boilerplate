var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var buildPath = path.resolve(__dirname, '..', 'build');
var srcPath = path.resolve(__dirname, '..', 'src');

module.exports = {
  entry: [
    require.resolve('./polyfills'),
    path.join(srcPath, 'client', 'index')
  ],

  output: {
    path: path.join(buildPath, 'client'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 25 * 1024 })
  ],

  postcss: require('./postcss.config'),

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: require('./babel.prod')
      },
      {
        test: /\.scss$/,
        // ExtractTextPlugin is not yet compatible with Webpack 2
        // { loader: 'loaderName', query: {...} } loader syntax
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: [
            'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
            'postcss',
            'sass'
          ]
        })
      }
    ]
  }
};
