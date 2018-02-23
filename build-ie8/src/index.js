const webpack = require('webpack')
const webpackConfig = require('./configs/production')
const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {
  console.log(stats.toString({
    chunks: true,
    colors: true
  }))
})
