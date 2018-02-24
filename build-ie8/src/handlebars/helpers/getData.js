module.exports = (page, options) => {
  const globalData = require(`../../../website/src/mock/data/global.json`)
  const pageData = require(`../../../website/src/mock/data/${page}.json`)

  return options.fn({
    styles: [page],
    scripts: [page],
    ...globalData,
    ...pageData
  })
}
