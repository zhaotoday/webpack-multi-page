const config = require('./utils/base.config')
const webpack = require('webpack')

module.exports = {
  entry: config.entry,
  output: config.output,
  module: {
    loaders: config.module.loaders
  },
  postcss: function () {
    return config.postcss
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins
  ],
  resolve: config.resolve
}
