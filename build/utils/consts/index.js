const projectConsts = require('./projects/liruan')

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
const CDN = projectConsts.CDN
// 项目
const PROJECT = projectConsts.PROJECT
// 页面配置
const PAGES = projectConsts.PAGES

module.exports = {
  SRC,
  DIST,
  SCRIPTS,
  STYLES,
  IMAGES,
  CDN,
  PROJECT,
  PAGES
}
