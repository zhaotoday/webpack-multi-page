const config = require('./utils/base.config')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin(),
    ...config.plugins
  ],
  resolve: config.resolve
}
