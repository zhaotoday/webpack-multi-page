const consts = require('./utils/consts')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require(`./webpack.${consts.ENV}`)
const compiler = webpack(webpackConfig)

if (consts.ENV === 'prod') {
  compiler.run((err, stats) => {
    console.log(stats.toString({
      chunks: true,
      colors: true
    }))
  })
} else {
  const server = new WebpackDevServer(compiler, {
    stats: {
      colors: true
    }
  })

  server.listen(consts.DEV_PORT, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:' + consts.DEV_PORT)
  })
}
