const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = (ctx) => {
  const isProduction = ctx.env === 'production';
  const plugins = [postcssImport, postcssPresetEnv];

  if (isProduction) {
    plugins.push(cssnano);
  }

  return {
    plugins,
  };
};
