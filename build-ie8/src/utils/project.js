const argv = require('yargs').argv
const fs = require('fs')
const consts = require('./consts')
const path = require('path')

// 名称
const NAME = argv.project
// 目录
const DIR = `${consts.SRC}/projects/${NAME}/`
// 页面
const PAGES = fs.existsSync(`${DIR}pages`)
  ? fs.readdirSync(`${DIR}pages`) : []
// 构建目录
const DIST = path.resolve(`dist/${NAME}`)
// CDN
const CDN = consts.ENV === 'dev' ? '/' : consts.CDN.replace('{PROJECT}', NAME)

module.exports = {
  NAME,
  DIR,
  PAGES,
  DIST,
  CDN
}
