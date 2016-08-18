module.exports = {
  presets: [
    ['es2015', { modules: false }],
    'stage-0',
    'react'
  ],
  plugins: [
    'babel-plugin-lodash',
    'react-hot-loader/babel'
  ].map(require.resolve)
};
