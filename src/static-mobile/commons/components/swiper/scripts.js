import Swiper from 'swiper/dist/js/swiper'

$(() => {
  new Swiper('#swiper', {
    pagination: {
      el: '#swiper-nav',
      clickable: true,
      passiveListeners: true,
      bulletClass: 'c-swiper__nav-item',
      bulletActiveClass: 'is-active'
    }
  })
})
