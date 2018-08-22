import Swiper from 'swiper/dist/js/swiper'

$(() => {
  new Swiper('#swiper', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
    pagination: {
      el: '#swiper-nav',
      clickable: true,
      passiveListeners: true,
      bulletClass: 'c-swiper__nav-item',
      bulletActiveClass: 'is-active'
    }
  })
})
