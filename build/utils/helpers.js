const consts = require('./consts')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectPath = `${consts.SRC}/projects/${consts.PROJECT}/pages`

const getEntry = () => {
  const entry = {}

  consts.PAGES.forEach(value => {
    entry[value] = `${projectPath}/${value}/scripts.js`
  })

  return entry
}

const getPlugins = () => {
  const plugins = []

  consts.PAGES.filter(value => value !== 'commons').forEach(value => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${value}.html`,
        template: `${projectPath}/${value}/template.html`,
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
