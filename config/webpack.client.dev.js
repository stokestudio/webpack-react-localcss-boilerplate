var path = require('path');
var webpack = require('webpack');

var buildPath = path.resolve(__dirname, '..', 'build');
var srcPath = path.resolve(__dirname, '..', 'src');

module.exports = {
  devtool: 'eval',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    require.resolve('./polyfills'),
    path.join(srcPath, 'client', 'index')
  ],

  output: {
    path: path.join(buildPath, 'client'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
  ],

  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },

  postcss: require('./postcss.config'),

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: srcPath,
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: require('./babel.dev')
      },
      {
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
          'postcss',
          'sass'
        ]
      }
    ]
  }
};
