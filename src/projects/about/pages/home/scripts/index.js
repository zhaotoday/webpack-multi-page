import '../styles/index.scss'

$(() => {
  var $nav = $('#nav')
  var $next = $('#next')
  var $pages = $('#pages')
  var $clouds = $('.cloud')
  var $comeOns = $('.come-on')
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
  var scrollIndex = 1

  // 滚屏效果
  $pages.onepage_scroll({
    sectionContainer: '.page',
    easing: 'ease',
    animationTime: 400,
    pagination: false,
    updateURL: false,
    beforeMove: function (index) {
      ['zoomInDown', 'zoomInLeft', 'zoomInRight'].forEach((v, i) => {
        if (index - 2 === i) {
          $comeOns.eq(index - 2).hide().removeClass(`animated ${v}`)
        }
      })

      $nav.find('li')
        .eq(index - 1).addClass('active')
        .siblings().removeClass('active')
    },
    afterMove: function (index) {
      ['zoomInDown', 'zoomInLeft', 'zoomInRight'].forEach((v, i) => {
        if (index - 2 === i) {
          $comeOns.eq(index - 2).show().addClass(`animated ${v}`)
        }
      })

      scrollIndex = index
    },
    loop: true,
    keyboard: true,
    responsiveFallback: false,
    direction: 'vertical'
  })

  // 索引按钮监听点击事件
  $nav.on('click', 'li', function () {
    $pages.moveTo($(this).data('index'))
  })

  // 下一页按钮监听点击事件
  $next.on('click', function () {
    $pages.moveDown()
  }).addClass('animated slideInUp')

  // 下一页按钮监听 animationEnd 事件
  $next.on(animationEnd, () => {
    if ($next.hasClass('slideOutDown')) {
      $next.removeClass('slideOutDown').addClass('slideInUp')
    } else {
      $next.removeClass('slideInUp').addClass('slideOutDown')
    }
  })

  // 首屏云朵左右移动
  $clouds.each((index) => {
    setTimeout(() => {
      $clouds.eq(index).addClass('animated slideInLeft')
    }, index * 150)
  })

  // 首屏云朵监听 animationEnd 事件
  $clouds.each(function () {
    var $this = $(this)

    $this.on(animationEnd, () => {
      if ($this.hasClass('slideInLeft')) {
        $this.removeClass('slideInLeft').addClass('slideOutLeft')
      } else {
        $this.removeClass('slideOutLeft').addClass('slideInLeft')
      }
    })
  })
})
