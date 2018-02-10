const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const consts = require('./consts')

const getEntry = () => {
  const entry = {}

  fs.readdirSync(`${consts.SRC}/pages`).forEach(value => {
    const path = `${consts.SRC}/pages/${value}/scripts`

    entry[value] = fs.existsSync(`${path}.js`) ? `${path}.js` : `${path}/index.js`
  })

  return entry
}

const getPlugins = () => {
  const plugins = []

  fs.readdirSync(`${consts.SRC}/pages`).filter(value => value !== 'commons').forEach(value => {
    const template = `${consts.SRC}/pages/${value}/template`

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
