module.exports = (page, options) => {
  const globalData = require(`../../../src/data/global.json`)
  const pageData = require(`../../../src/data/${page}.json`)

  return options.fn({
    styles: [page],
    scripts: [page],
    ...globalData,
    ...pageData
  })
}
