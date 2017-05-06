require('themes/app/commons/global/index.scss')
require('themes/app/commons/header/index.scss')
require('themes/app/commons/footer/index.scss')
require('../utils/zepto')

$('#collapse').on('tap', function () {
  $('#nav-overlay').show().removeClass('fadeOutRight').addClass('fadeInRight')
})

function hideOverlay() {
  $('#nav-overlay').show().removeClass('fadeInRight').addClass('fadeOutRight')
}

$('#nav-close, #lang li a').on('tap', function () {
  hideOverlay()
})

$('#nav li').eq(0).addClass('active')

$('#nav li a').on('tap', function () {
  hideOverlay()
  $(this).parent().addClass('active').siblings().removeClass('active')
})
