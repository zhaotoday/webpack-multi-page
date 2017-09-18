const project = require('./project')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')

const getEntry = () => {
  const entry = {}

  project.PAGES.forEach(value => {
    const path = `${project.DIR}pages/${value}/scripts`

    entry[value] = fs.existsSync(`${path}.js`) ? `${path}.js` : `${path}/index.js`
  })

  return entry
}

const getPlugins = () => {
  const plugins = []

  project.PAGES.filter(value => value !== 'commons').forEach(value => {
    const template = `${project.DIR}pages/${value}/template`

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
