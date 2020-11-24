const merge = require('webpack-merge');

const path = require('path');

const { config, BUILD_OUTPUT_DIR_NAME } = require('./webpack.base');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const plugins = [];

if (process.env.anylyzer === 'true') {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(config, {
  output: {
    path: path.resolve(__dirname, `../${BUILD_OUTPUT_DIR_NAME}`), // string
    filename: 'assets/js/[name].[contenthash].js'
  },
  watch: false,
  mode: 'production',
  plugins
});
