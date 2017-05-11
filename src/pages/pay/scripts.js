import './styles.scss'
import IScroll from 'iscroll/build/iscroll-lite'
import helpers from '../../scripts/utils/helpers'

$('#scroller').width(helpers.px2rem($('#scroller li').length * 490 + 30) + 'rem')

new IScroll('#wrapper', {
  scrollX: true,
  scrollY: false
})

$('#protocol').tap(function (e) {
  $(this).toggleClass('pay__protocol__label--on')
})

$('#pay').tap(function () {
  alert('pay')
})
