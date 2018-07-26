$(() => {
  const $navBar = $('#nav-bar')

  $navBar.find('[data-view="home"]').addClass('is-active')

  $navBar.on('click', 'li', function () {
    if (!$(this).hasClass('is-active')) {
      window.location.href = $(this).data('url')
    }
  })
})()
