import './styles.scss'

$(() => {
  const $helpsTabs = $('#helps-tabs')
  const $helpsContent = $('#helps-content')

  const $starsTabsLeft = $('#stars-tabs-left')
  const $starsTabsRight = $('#stars-tabs-right')
  const $starsTabsWrap = $('#stars-tabs-wrap')
  const $starsContent = $('#stars-content')
  const $loadMore = $('#load-more')
  const starsTotal = $starsTabsWrap.find('li').length

  let starIndex = 0

  $helpsTabs.on('click', 'li', function () {
    const index = $(this).index()

    $(this).addClass('active').siblings().removeClass('active')
    $helpsContent.find('li').eq(index).addClass('active').siblings().removeClass('active')
  })

  $starsTabsRight.on('click', function () {
    if (starIndex < starsTotal - 7) {
      $starsTabsWrap.animate({
        scrollLeft: 160 * ++starIndex
      })
    }
  })

  $starsTabsLeft.on('click', function () {
    if (starIndex > 1) {
      $starsTabsWrap.animate({
        scrollLeft: 160 * --starIndex
      })
    }
  })

  $starsTabsWrap.on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active')

    console.log($(this).index())
  })

  $loadMore.on('click', function () {
    console.log('load more')
  })
})
