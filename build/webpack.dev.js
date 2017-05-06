const config = require('./utils/base.config')
const webpack = require('webpack')

module.exports = {
  entry: config.entry,
  output: config.output,
  module: {
    rules: config.module.rules
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins
  ],
  resolve: config.resolve
}
