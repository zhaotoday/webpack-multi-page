module.exports = (project, page, options) => {
  const globalData = require(`../../../src/projects/${project}/data/global.json`)
  const pageData = require(`../../../src/projects/${project}/data/${page}.json`)

  return options.fn({
    env: process.env.NODE_ENV === 'development' ? 'dev' : 'prod',
    styles: [page],
    scripts: [page],
    ...globalData,
    ...pageData
  })
}
