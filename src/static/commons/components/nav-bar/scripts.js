$(() => {
  const $navBar = $('#nav-bar')

  $navBar.find('a').each(function () {
    if ($(this).data('route') === window.ROUTE) {
      $(this).addClass('is-active')
    }
  })
})
