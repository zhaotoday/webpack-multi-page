module.exports = (page, options) => {
  const globalData = require(`../../../../src/mock/data/global.json`)
  const pageData = require(`../../../../src/mock/data/${page}.json`)

  return options.fn({
    styles: [page],
    scripts: [page],
    ...globalData,
    ...pageData
  })
}
