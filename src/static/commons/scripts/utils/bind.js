$(() => {
  $('body').on('click', '.js-link', function () {
    window.location.href = $(this).data('url')
  })
})
