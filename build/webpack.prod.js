const config = require('./utils/base.config')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const CleanWebpackPlugin = require('clean-webpack-plugin')
const project = require('./utils/project')

module.exports = {
  entry: config.entry,
  output: config.output,
  module: {
    rules: config.module.rules
  },
  plugins: [
    ...config.plugins,
    new CleanWebpackPlugin([project.DIST], {
      verbose: true,
      dry: false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  resolve: config.resolve
}
