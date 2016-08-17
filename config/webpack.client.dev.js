var autoprefixerConfig = require('./autoprefixer.config');
var path = require('path');
var webpack = require('webpack');

var buildPath = path.resolve(__dirname, '..', 'build');
var srcPath = path.resolve(__dirname, '..', 'src');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(srcPath, 'index')
  ],

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  postcss: function() {
    return [
      require('precss'),
      require('postcss-calc')({ warnWhenCannotResolve: true }),
      require('postcss-pxtorem'),
      require('autoprefixer')(autoprefixerConfig),
    ];
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: srcPath
    }, {
      test: /\.scss$/,
      loaders: [
        'style',
        {
          loader: 'css',
          query: {
            modules: 1,
            importLoaders: 1,
            localIdentName: '[name]_[local]_[hash:base64:5]'
          }
        },
        'postcss'
      ]
    }]
  }
};
