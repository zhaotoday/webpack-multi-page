const consts = require('./consts')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectPath = `${consts.SRC}/projects/${consts.PROJECT}/pages`

const getEntry = (pages) => {
  const entry = {}
  const allPages = ['commons', ...pages]

  allPages.map((page) => {
    entry[page] = `${projectPath}/${page}/scripts.js`
  })

  return entry
}

const getPlugins = (pages) => {
  const plugins = []

  pages.map((page) => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${page}.html`,
        template: `${projectPath}/${page}/template.html`,
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
