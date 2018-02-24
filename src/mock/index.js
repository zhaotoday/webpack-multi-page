module.exports = page => {
  const globalData = require('./data/global.json')
  const pageData = require(`./data/${page}.json`)

  return Object.assign({
    styles: [page],
    scripts: [page]
  }, globalData, pageData)
}
