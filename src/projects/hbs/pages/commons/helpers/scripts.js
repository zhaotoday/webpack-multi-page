module.exports = function (scripts) {
  return scripts.map(value => `<script src="/static/scripts/${value}.js"></script>\n`).join('')
}
