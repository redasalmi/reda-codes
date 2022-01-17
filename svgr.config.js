/* eslint-disable @typescript-eslint/no-var-requires */
const template = require('./svg/template');

module.exports = {
  outDir: 'app/components/icons',
  ref: true,
  template,
  jsxRuntime: 'automatic',
  typescript: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
};
