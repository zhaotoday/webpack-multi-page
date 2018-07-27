module.exports = page => {
  const globalData = require('./data/global.json')
  const pageData = require(`./data/${page}.json`)
  const isDev = process.env.NODE_ENV === 'development'

  const BASE_URL = 'http://localhost:3002'
  const PAGE_SIZE = 2
  const CDN = isDev ? 'http://localhost:8083' : 'https://cdn.liruan.cn'

  return Object.assign({
    helpers: {
      getFileURL (id) {
        return `${BASE_URL}/apis/v1/files/${id}`
      }
    },
    utils: {
      time: {
        getDate () {
          return '2018-01-01'
        },
        getTime () {
          return '2018-01-01 01:01:01'
        }
      }
    },
    consts: {
      BASE_URL,
      PAGE_SIZE,
      CDN
    },
    styles: [page],
    scripts: [page]
  }, globalData, pageData)
}
