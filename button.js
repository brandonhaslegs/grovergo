$(function() {
  $('.btn')
    .on('mouseenter', gradientPosition)
    .on('mouseout', gradientPosition)
    .on('mousemove', gradientPosition)

  function gradientPosition(e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top
    $(this)
      .find('span.span')
      .css({top: relY, left: relX})
  }

  $('[href=#]').click(function() {
    return false
  })
})
