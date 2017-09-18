const consts = require('../../utils/consts')

module.exports = function (project, scripts) {
  if (typeof scripts === 'string') scripts = [scripts]

  return scripts.map(value => `<script src="${consts.CDN.replace('{PROJECT}', project)}static/scripts/${value}.js"></script>`).join('\n')
}
