const config = require('./base')
const webpack = require('webpack')

module.exports = {
  entry: config.entry,
  output: config.output,
  module: {
    rules: config.module.rules
  },
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  resolve: config.resolve
}
