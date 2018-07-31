$(() => {
  const $articleViews = $('#article-views')
  const resourceId = $articleViews.data('resourceid')

  $.ajax({
    url: `${window.BASE_URL}/apis/v1/views`,
    data: {
      resource_id: resourceId,
      resource_module: 'articles'
    },
    success (res) {
      $articleViews.html(res.data.count + ' 次')
    }
  })
})
