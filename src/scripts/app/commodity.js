require('themes/app/commodity/details/index.scss')
require('themes/app/commodity/slider/index.scss')
require('themes/app/commodity/more/index.scss')
require('assets/zepto/plugins/slider')

$('#commodity-images').slider({
  contentCls: 'slider-images',
  inEndEffect: 'none',
  fullScreen: false,
  easing: 'easeIn',
  prevBtnCls: 'slider-left',
  nextBtnCls: 'slider-right',
  disableBtnCls: 'disabled'
})