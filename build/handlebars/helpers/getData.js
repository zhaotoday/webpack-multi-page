module.exports = (page, options) => {
  const globalData = require(`../../../src/assets/data/global.json`)
  const pageData = require(`../../../src/assets/data/${page}.json`)

  return options.fn({
    styles: [page],
    scripts: [page],
    ...globalData,
    ...pageData
  })
}
