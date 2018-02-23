const config = require('./utils/base.config')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const consts = require('./utils/consts')
const project = require('./utils/project')

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
    new CleanWebpackPlugin([project.DIST], {
      verbose: true,
      dry: false
    }),
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
