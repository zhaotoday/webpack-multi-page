$(() => {
  const $navBar = $('#nav-bar')

  $navBar.find('li').each(function () {
    const $this = $(this)
    const views = $this.data('route')

    if (views.indexOf(window.ROUTE) !== -1) {
      $this.addClass('is-active')
    }
  })
})
