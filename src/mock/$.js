module.exports = page => {
  const globalData = require('./data/global.json')
  const pageData = require(`./data/${page}.json`)
  const isDev = process.env.NODE_ENV === 'development'

  const BASE_URL = 'http://localhost:3002'
  const PAGE_SIZE = 2
  const CDN = isDev ? 'http://localhost:8083' : 'https://yly-cdn.liruan.cn'
  const STATIC_VERSION = '0.1'

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
      },
      cut () {
        return '引进美国先进的养老经验，结合国内养老特点，为长者提供一站式的退休生活解决方案'
      }
    },
    consts: {
      BASE_URL,
      PAGE_SIZE,
      CDN,
      STATIC_VERSION
    },
    styles: [page],
    scripts: [page]
  }, globalData, pageData)
}
