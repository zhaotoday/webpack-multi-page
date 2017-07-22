const argv = require('yargs').argv
const fs = require('fs')
const path = require('path')

// 源码目录
const SRC = path.resolve('src')
// 构建目录
const DIST = path.resolve('dist')
// 脚本路径
const SCRIPTS = 'static/scripts/'
// 样式路径
const STYLES = 'static/styles/'
// 图片路径
const IMAGES = 'static/images/'
// CDN
const CDN = '/'
// 项目
const PROJECT = argv.project
// 项目目录
const PROJECT_DIR = `${SRC}/projects/${PROJECT}/pages`
// 页面配置
const PAGES = fs.existsSync(PROJECT_DIR)
  ? fs.readdirSync(PROJECT_DIR) : []

module.exports = {
  SRC,
  DIST,
  SCRIPTS,
  STYLES,
  IMAGES,
  CDN,
  PROJECT,
  PROJECT_DIR,
  PAGES
}
