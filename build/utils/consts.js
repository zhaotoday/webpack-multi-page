const path = require('path')

// 当前环境
const ENV = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
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
// 1. 开发时为：/；
// 2. 构建时为：//lrcdn.cn/${PROJECT}/；
const CDN = ENV === 'dev' ? '/' : '//lrcdn.cn/project/'

module.exports = {
  ENV,
  SRC,
  DIST,
  SCRIPTS,
  STYLES,
  IMAGES,
  CDN
}
