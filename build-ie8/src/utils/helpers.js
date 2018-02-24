const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const consts = require('./consts')

const getEntry = () => {
  const entry = {}

  fs.readdirSync(consts.VIEWS).forEach(value => {
    const path = `${consts.VIEWS}/${value}/scripts`

    entry[value] = fs.existsSync(`${path}.js`) ? `${path}.js` : `${path}/index.js`
  })

  return entry
}

const getPlugins = () => {
  const plugins = []

  fs.readdirSync(consts.VIEWS).filter(value => value !== 'commons').forEach(value => {
    const template = `${consts.VIEWS}/${value}/template`

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
