const consts = require('../../../../build/src/utils/consts')

module.exports = styles => {
  if (typeof styles === 'string') styles = [styles]

  return styles.map(value => `<link href="${consts.CDN}static/styles/${value}.css" rel="stylesheet">`).join('\n')
}
