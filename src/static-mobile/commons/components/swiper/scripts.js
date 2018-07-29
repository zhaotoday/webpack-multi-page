import Swiper from 'swiper'

$(() => {
  new Swiper('#swiper', {
    pagination: {
      el: '#swiper-nav',
      clickable: true,
      bulletClass: 'c-swiper__nav-item',
      bulletActiveClass: 'is-active'
    }
  })
})
