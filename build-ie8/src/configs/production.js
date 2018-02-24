const config = require('./base')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const es3ifyPlugin = require('es3ify-webpack-plugin')

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
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new es3ifyPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        ie8: true
      }
    }),
    new webpack.NoErrorsPlugin(),
    ...config.plugins
  ],
  resolve: config.resolve
}
