const path = require('path')

// 当前环境
const ENV = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
// 源码目录
const SRC = path.resolve('src')
// 脚本路径
const SCRIPTS = 'static/scripts/'
// 样式路径
const STYLES = 'static/styles/'
// 图片路径
const IMAGES = 'static/images/'
// CDN，1. 调试时为：/；2. 生产时推荐格式为：//{PROJECT}.cdn.cn/ 或 //cdn.cn/${PROJECT}/
const CDN = '/'

module.exports = {
  ENV,
  SRC,
  SCRIPTS,
  STYLES,
  IMAGES,
  CDN
}
