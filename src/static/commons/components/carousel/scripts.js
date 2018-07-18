$(() => {
  let images = [0, 1, 2]

  const renderImages = () => {
    $('#carousel-images > div').each(function (index) {
      $(this).removeClass('image-0 image-1 image-2').addClass(`image-${images[index]}`)
    })
  }

  const renderNavIndexes = () => {
    const currentIndex = images.findIndex(index => index === 1)

    $('#carousel-nav > li').removeClass('is-active').eq(currentIndex).addClass('is-active')
  }

  $('#carousel-prev').on('click', () => {
    images.unshift(images[images.length - 1])
    images.pop()
    renderImages()
    renderNavIndexes()
  })

  $('#carousel-next').on('click', () => {
    images.push(images[0])
    images.shift()
    renderImages()
    renderNavIndexes()
  })
})
