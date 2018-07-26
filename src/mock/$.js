module.exports = page => {
  const globalData = require('./data/global.json')
  const pageData = require(`./data/${page}.json`)
  const isDev = process.env.NODE_ENV === 'development'

  return Object.assign({
    helpers: {
      formatTime () {
        return 2222
      }
    },
    consts: {
      CDN: isDev ? `http://localhost:8083` : 'https://cdn.liruan.cn',
      FILE_URL: isDev ? 'http://localhost:3002/apis/v1/files' : ''
    },
    styles: [page],
    scripts: [page]
  }, globalData, pageData)
}
