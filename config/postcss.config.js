var autoprefixerConfig = require('./autoprefixer.config');

module.exports = function() {
  return [
    require('precss'),
    require('postcss-assets'),
    require('postcss-flexbugs-fixes'),
    require('postcss-pseudo-class-any-link'),
    require('postcss-pxtorem'),
    require('autoprefixer')(autoprefixerConfig),
  ];
};
