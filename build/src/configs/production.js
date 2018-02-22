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
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
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
