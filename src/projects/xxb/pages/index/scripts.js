import './styles.scss'

$(() => {
  $('#helps-tabs').on('click', 'li', function () {
    const index = $(this).index()

    $(this).addClass('active').siblings().removeClass('active')
    $('#helps-content').find('li').eq(index).addClass('active').siblings().removeClass('active')
  })
})
