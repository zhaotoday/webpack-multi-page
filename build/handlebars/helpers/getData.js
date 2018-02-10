module.exports = (page, options) => {
  const globalData = require(`../../../src/config/global.json`)
  const pageData = require(`../../../src/config/${page}.json`)

  return options.fn({
    styles: [page],
    scripts: [page],
    ...globalData,
    ...pageData
  })
}
