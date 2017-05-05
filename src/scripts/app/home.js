require('themes/app/home/slider/index.scss')
require('themes/app/home/about/index.scss')
require('themes/app/home/commodities/index.scss')
require('themes/app/home/contact/index.scss')
require('assets/zepto/plugins/slider')

$('#home-slider').slider({
  contentCls: 'slider-images',
  inEndEffect: 'switch',
  fullScreen: false,
  easing: 'easeIn',
  navCls: 'slider-indexes'
})

$('#home-commodities').slider({
  contentCls: 'slider-images',
  inEndEffect: 'none',
  fullScreen: false,
  easing: 'easeIn',
  prevBtnCls: 'slider-left',
  nextBtnCls: 'slider-right',
  disableBtnCls: 'disabled'
})