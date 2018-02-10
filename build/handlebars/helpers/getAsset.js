const consts = require('../../utils/consts')

module.exports = (project, path) => {
  const baseURL = consts.CDN.replace('{PROJECT}', project)

  return `<script src="${baseURL}assets${path}"></script>`
}
