const consts = require('../../utils/consts')

module.exports = path => {
  return `<script src="${consts.CDN}assets${path}"></script>`
}
