const consts = require('../../utils/consts')

module.exports = (project, scripts) => {
  if (typeof scripts === 'string') scripts = [scripts]

  return scripts.map(value => `<script src="${consts.CDN}static/scripts/${value}.js"></script>`).join('\n')
}
