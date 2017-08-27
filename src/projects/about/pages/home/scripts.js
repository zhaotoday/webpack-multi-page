import './styles.scss'

$(function () {
  var $nav = $('#nav')
  var $pages = $('#pages')

  $pages.onepage_scroll({
    sectionContainer: '.page',
    easing: 'ease',
    animationTime: 400,
    pagination: false,
    updateURL: false,
    beforeMove: function (index) {
      $nav.find('li')
        .eq(index - 1).addClass('active')
        .siblings().removeClass('active')
    },
    afterMove: function (index) {
    },
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: 'vertical'
  })

  $nav.on('click', 'li', function () {
    $pages.moveTo($(this).data('index'))
  })
})
