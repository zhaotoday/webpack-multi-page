module.exports = function (styles) {
  return styles.map(value => `<link href="/static/styles/${value}.css" rel="stylesheet">\n`).join('')
}
