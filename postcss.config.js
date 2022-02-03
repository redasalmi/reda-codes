module.exports = (ctx) => ({
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    cssnano: ctx.env === 'production' ? { preset: 'default' } : false,
  },
});
