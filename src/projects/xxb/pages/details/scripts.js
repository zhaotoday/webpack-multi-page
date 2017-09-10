import './styles.scss'

import waterfall from '../../scripts/libs/waterfall'

$(() => {
    $('#waterfall').waterfall({
      itemCls: 'waterfall-item',
      prefix: 'waterfall',
      fitWidth: true,
      colWidth: 400,
      gutterWidth: 20,
      gutterHeight: 20,
      loadingMsg: '',
      debug: false
    })

    $('.waterfall-item').show()
})
