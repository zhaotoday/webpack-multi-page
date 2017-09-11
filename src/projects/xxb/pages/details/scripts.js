import './styles.scss'
import waterfall from '../../scripts/libs/waterfall'

$(() => {
  lightbox.option({
    resizeDuration: 200,
    albumLabel: '%1 / %2'
  })

  $('#waterfall').waterfall({
    itemCls: 'waterfall-item',
    prefix: 'waterfall',
    fitWidth: true,
    colWidth: 400,
    gutterWidth: 20,
    gutterHeight: 20,
    loadingMsg: '',
    debug: false,
    checkImagesLoaded: true
  })
})
