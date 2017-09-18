const consts = require('../../utils/consts')

module.exports = (project, page, options) => {
  const globalData = require(`../../../src/projects/${project}/data/global.json`)
  const pageData = require(`../../../src/projects/${project}/data/${page}.json`)

  return options.fn({
    env: {
      current: process.env.NODE_ENV === 'development' ? 'dev' : 'prod',
      cdn: consts.CDN.replace('{PROJECT}', project)
    },
    styles: [page],
    scripts: [page],
    ...globalData,
    ...pageData
  })
}
