const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')
const consts = require('./consts')

const getEntry = () => {
  const entry = {}

  fs.readdirSync(consts.STATIC).forEach(value => {
    const path = `${consts.STATIC}/${value}/scripts`

    entry[value] = fs.existsSync(`${path}.js`) ? `${path}.js` : `${path}/index.js`
  })

  return entry
}

const getPlugins = () => {
  const plugins = []

  fs.readdirSync(consts.VIEWS).filter(value => value !== 'commons').forEach(value => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${value.split('.')[0]}.html`,
        template: `${consts.VIEWS}/${value}`,
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
