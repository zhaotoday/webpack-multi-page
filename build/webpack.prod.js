const config = require('./utils/base.config')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const consts = require('./utils/consts')

module.exports = {
  entry: config.entry,
  output: config.output,
  module: {
    rules: config.module.rules
  },
  plugins: [
    ...config.plugins,
    new CleanWebpackPlugin([consts.DIST], {
      root: path.resolve(),
      verbose: true,
      dry: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  resolve: config.resolve
}
