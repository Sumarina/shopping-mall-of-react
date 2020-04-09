const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [new OptimizeCssPlugin()]
});
