module.exports = {
  presets: [
    'babel-preset-es2015-native-modules',
    'babel-preset-stage-0',
    'babel-preset-react'
  ].map(require.resolve),
  plugins: [
    'babel-plugin-lodash',
    'react-hot-loader/babel'
  ].map(require.resolve)
};
