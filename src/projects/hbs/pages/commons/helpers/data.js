module.exports = function (page, options) {
  const globalData = require('../data/global.json')
  const pageData = require(`../data/${page}.json`)

  return options.fn({
    styles: [page],
    scripts: [page],
    ...globalData,
    ...pageData
  })
}
