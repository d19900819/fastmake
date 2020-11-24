const merge = require('webpack-merge');

const { config } = require('./webpack.base');

const webpack = require('webpack');

const path = require('path');

module.exports = merge(config, {
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    compress: false,
    hot: true,
    port: 3000,
    proxy: {}
  },

  optimization: {
    moduleIds: 'named',
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  },
  devtool: 'source-map'
});
