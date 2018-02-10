const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const consts = require('./consts')
const pagesDir = `${consts.SRC}/pages`

const getEntry = () => {
  const entry = {}

  fs.readdirSync(pagesDir).forEach(value => {
      const path = `${pagesDir}/${value}/scripts`

      entry[value] = fs.existsSync(`${path}.js`) ? `${path}.js` : `${path}/index.js`
    })

  return entry
}

const getPlugins = () => {
  const plugins = []

  fs.readdirSync(pagesDir).filter(value => value !== 'commons').forEach(value => {
    const template = `${pagesDir}/${value}/template`

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
