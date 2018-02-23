const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const consts = require('../../../build/src/utils/consts')

const getEntry = () => {
  const entry = {}

  fs.readdirSync(consts.PAGES).forEach(value => {
    const path = `${consts.PAGES}/${value}/scripts`

    entry[value] = fs.existsSync(`${path}.js`) ? `${path}.js` : `${path}/index.js`
  })

  return entry
}

const getPlugins = () => {
  const plugins = []

  fs.readdirSync(consts.PAGES).filter(value => value !== 'commons').forEach(value => {
    const template = `${consts.PAGES}/${value}/template`

    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${value}.html`,
        template: fs.existsSync(`${template}.html`)
          ? `${template}.html`
          : fs.existsSync(`${template}.hbs`)
            ? `${template}.hbs`
            : `${template}.ejs`,
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
