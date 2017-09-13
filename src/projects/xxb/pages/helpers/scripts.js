import './styles.scss'

$(() => {
  var $whichTabs = $('#which-tabs')
  var $whichContents = $('#which-contents')

  $whichTabs.on('click', 'li', function () {
    var index = $(this).index()

    $(this).addClass('active').siblings().removeClass('active')
    $whichContents.find('li').eq(index).addClass('active').siblings().removeClass('active')
  })
})
