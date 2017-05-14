const customConsts = require('./custom')

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
const CDN = customConsts.CDN
// 项目
const PROJECT = customConsts.PROJECT
// 页面配置
const PAGES = customConsts.PAGES

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
