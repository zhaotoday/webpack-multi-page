module.exports = page => {
  const globalData = require('./data/global.json')
  const pageData = require(`./data/${page}.json`)

  return Object.assign({
    styles: [page],
    scripts: [page],
    cdn: process.env.NODE_ENV === 'development' ? '/' : '//lrcdn.cn/project/'
  }, globalData, pageData)
}
