const fs = require('fs')
const consts = require('./utils/consts')

module.exports = require(`./webpack.${consts.ENV}`)
