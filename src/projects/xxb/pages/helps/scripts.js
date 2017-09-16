import './styles.scss'

$(() => {
  $('#which-tabs').on('click', 'li', function () {
    const index = $(this).index()

    $(this).addClass('active').siblings().removeClass('active')
    $('#which-contents').find('li').eq(index).addClass('active').siblings().removeClass('active')
  })
})
