$(() => {
  const $newsViews = $('#news-views')
  const resourceId = $newsViews.data('resourceid')

  $.ajax({
    url: `${window.BASE_URL}/apis/v1/views`,
    data: {
      resource_id: resourceId,
      resource_module: 'articles'
    },
    success (res) {
      $newsViews.html(res.data.count + ' 次')
    }
  })
})
