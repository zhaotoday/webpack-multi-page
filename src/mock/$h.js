const CDN = process.env.NODE_ENV === 'development' ? '/' : '//lrcdn.cn/project/'

module.exports = {
  getStyles: function (styles) {
    if (typeof styles === 'string') styles = [styles]

    return styles.map(value => `<link href="${CDN}static/styles/${value}.css" rel="stylesheet">`).join('\n')
  },
  getScripts: function (scripts){
    if (typeof scripts === 'string') scripts = [scripts]

    return scripts.map(value => `<script src="${CDN}static/scripts/${value}.js"></script>`).join('\n')
  }
}
