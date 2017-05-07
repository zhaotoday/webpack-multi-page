import './styles.scss'

import IScroll from 'iscroll/build/iscroll-lite'

new IScroll('#wrapper', {
  mouseWheel: true,
  scrollbars: true,
  scrollX: true,
  scrollY: false,
  freeScroll: true
})

$('#protocol').on('tap', function (e) {
  $(this).toggleClass('pay-confirm__protocol__label--on')
})

$('#pay').on('tap', function () {
  alert('pay')
})
