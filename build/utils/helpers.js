const HtmlWebpackPlugin = require('html-webpack-plugin')
const consts = require('./consts')

const getEntry = (pages) => {
  const entry = {}
  const allPages = ['commons', ...pages]

  allPages.map((page) => {
    entry[page] = `./${consts.SRC}${consts.SCRIPTS}${page}.js`
  })

  return entry
}

const getPlugins = (pages) => {
  const plugins = []

  pages.map((page) => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${page}.html`,
        template: `./src/templates/${page}/index.html`,
        inject: false
      })
    )
  })

  return plugins
}

module.exports = {
  getEntry,
  getPlugins
}
