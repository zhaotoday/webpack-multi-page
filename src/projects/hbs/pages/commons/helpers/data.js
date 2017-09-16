module.exports = function (options) {
  return options.fn(require(__dirname + '/dataSource/' + source + '.json'))
}
