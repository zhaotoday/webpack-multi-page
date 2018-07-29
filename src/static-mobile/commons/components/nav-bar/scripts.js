$(() => {
  const $navBar = $('#nav-bar')

  $navBar.find('li').each(function () {
    const $this = $(this)
    const views = $this.data('views').split(',')

    if (views.indexOf(window.VIEW) !== -1) {
      $this.addClass('is-active')
    }
  })
})
