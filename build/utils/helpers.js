const consts = require('./consts')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectPath = `${consts.SRC}/projects/${consts.PROJECT}/pages`
const fs = require('fs')

const getEntry = () => {
  const entry = {}

  consts.PAGES.forEach(value => {
    const paths = [
      `${projectPath}/${value}/scripts.js`,
      `${projectPath}/${value}/scripts/index.js`
    ]

    entry[value] = fs.existsSync(paths[0]) ? paths[0] : paths[1]
  })

  return entry
}

const getPlugins = () => {
  const plugins = []

  consts.PAGES.filter(value => value !== 'commons').forEach(value => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${value}.html`,
        template: `${projectPath}/${value}/template.hbs`,
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
