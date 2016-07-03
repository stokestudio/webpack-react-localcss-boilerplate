var autoprefixerConfig = require('./autoprefixer.config');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'build'),
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
      include: path.join(__dirname, 'src')
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
