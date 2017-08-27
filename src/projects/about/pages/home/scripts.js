import './styles.scss'

$(function () {
  var currentIndex = 1
  var $nav = $('#nav')
  var $next = $('#next')
  var $pages = $('#pages')

  $pages.onepage_scroll({
    sectionContainer: '.page',
    easing: 'ease',
    animationTime: 400,
    pagination: false,
    updateURL: false,
    beforeMove: function (index) {
      currentIndex = index

      $nav.find('li')
        .eq(index - 1).addClass('active')
        .siblings().removeClass('active')
    },
    afterMove: function (index) {
    },
    loop: true,
    keyboard: true,
    responsiveFallback: false,
    direction: 'vertical'
  })

  $nav.on('click', 'li', function () {
    $pages.moveTo($(this).data('index'))
  })

  $next.on('click', function () {
    $pages.moveDown()
  })
})
