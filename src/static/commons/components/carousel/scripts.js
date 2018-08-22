$(() => {
  const $carouseImages = $('#carousel-images')
  const imagesTotal = $carouseImages.find('.js-carousel-image-item').length
  const images = Array.from({ length: imagesTotal }, (v, k) => k)

  const renderImages = () => {
    const $carouseImageItems = $carouseImages.find('.js-carousel-image-item')

    $carouseImageItems.removeClass('image-left image-middle image-right')

    images.forEach((item, index) => {
      $carouseImageItems.eq(item).addClass(
        'image-' +
        (index === 0
          ? 'left'
          : index === 1
            ? 'middle'
            : 'right')
      )
    })
  }

  const renderNavIndexes = () => {
    const currentIndex = images.findIndex(index => index === 1)

    $('#carousel-nav > li').removeClass('is-active').eq(currentIndex).addClass('is-active')
  }

  function playPrev () {
    images.unshift(images[images.length - 1])
    images.pop()
    renderImages()
    renderNavIndexes()
  }

  function playNext () {
    images.push(images[0])
    images.shift()
    renderImages()
    renderNavIndexes()
  }

  let timer = setInterval(playNext, 3000)

  $('#carousel-prev').on('click', () => {
    clearInterval(timer)
    playPrev()
    timer = setInterval(playNext, 3000)
  })

  $('#carousel-next').on('click', () => {
    clearInterval(timer)
    playNext()
    timer = setInterval(playNext, 3000)
  })
})
