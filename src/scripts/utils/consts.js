// 当前 host
var HOST = window.location.host
// 开发
var DEV = 'DEV'
// 生产
var PROD = 'PROD'

// 当前环境
var ENV = (function () {
  if (HOST === 'localhost:8080') {
    return DEV
  } else {
    return PROD
  }
})()

// 基础地址
var BASE_URL = (function () {
  if (ENV === DEV) {
    return 'http://localhost:8080'
  } else {
    return 'http://production.com'
  }
})()

module.exports = {
  BASE_URL: BASE_URL
}
