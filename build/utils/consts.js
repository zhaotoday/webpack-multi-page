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
// 页面配置
const PAGES = ['pay', 'guide', 'qa', 'protocol', 'how', 'activity1', 'activity2']

module.exports = {
  SRC,
  DIST,
  SCRIPTS,
  STYLES,
  IMAGES,
  PAGES,
  CDN
}
