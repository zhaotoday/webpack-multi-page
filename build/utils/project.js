const argv = require('yargs').argv
const fs = require('fs')
const consts = require('./consts')

// 名称
const NAME = argv.project
// 目录
const DIR = `${consts.SRC}/projects/${NAME}/`
// 页面
const PAGES = fs.existsSync(`${DIR}pages`)
  ? fs.readdirSync(`${DIR}pages`) : []

module.exports = {
  NAME,
  DIR,
  PAGES
}
