const consts = require('./consts')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const projectPath = `${consts.SRC}/projects/${consts.PROJECT}/pages`
const fs = require('fs')

const getEntry = () => {
  const entry = {}

  consts.PAGES.forEach(value => {
    const path = `${projectPath}/${value}/scripts`

    entry[value] = fs.existsSync(`${path}.js`) ? `${path}.js` : `${path}/index.js`
  })

  return entry
}

const getPlugins = () => {
  const plugins = []

  consts.PAGES.filter(value => value !== 'commons').forEach(value => {
    const template = `${projectPath}/${value}/template`

    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${value}.html`,
        template: fs.existsSync(`${template}.html`) ? `${template}.html` : `${template}.hbs`,
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
