const consts = require('../../utils/consts')

module.exports = (project, styles) => {
  if (typeof styles === 'string') styles = [styles]

  return styles.map(value => `<link href="${consts.CDN}static/styles/${value}.css" rel="stylesheet">`).join('\n')
}
