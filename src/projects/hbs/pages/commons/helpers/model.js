module.exports = function (source, options) {
  return options.fn(require(__dirname + '/dataSource/' + source + '.json'))
}
