/* eslint-disable @typescript-eslint/no-var-requires */
const svgTemplate = require('./svg/template');

module.exports = {
  outDir: 'app/components/icons',
  template: svgTemplate,
  typescript: true,
  expandProps: false,
  svgProps: { className: '{className}' },
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
