import './styles.scss'
import IScroll from 'iscroll/build/iscroll-lite'

new IScroll('#wrapper', {
  mouseWheel: true,
  scrollbars: true,
  scrollX: true,
  scrollY: false,
  freeScroll: true
})
