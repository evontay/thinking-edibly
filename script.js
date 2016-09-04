$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000)
        return false
      }
    }
  })
})

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(document).scrollTop() > 200) {
//       $('body').addClass('green')
//     } else {
//       $('body').removeClass('green')
//     }
//   })
// })

// // For elements floating into place on scroll
// $(document).ready(function () {
//   $(window).scroll(function () {
//     var wScroll = $(this).scrollTop()
//
//     if (wScroll > $('#events').offset().top - $(window).height()) {
//       var offset = Math.min(0, wScroll - $('#events').offset().top + $(window).height() - 0)
//       $('body').addClass('green')
//     } else {
//       $('body').removeClass('green')
//     }
//   })
// })

$(window).on('scroll touchmove', function () {
  console.log('whodis')
  if ($(document).scrollTop() >= $('#header').position().top) {
    $('body').css('background', $('#header').attr('data-color'))
  }
  if ($(document).scrollTop() >= $('#events').position().top - 100) {
    $('body').css('background', $('#events').attr('data-color'))
  }
  if ($(document).scrollTop() > $('#about').position().top - 100) {
    $('body').css('background', $('#about').attr('data-color'))
  }
  if ($(document).scrollTop() > $('#approach').position().top - 300) {
    $('body').css('background', $('#approach').attr('data-color'))
  }
  if ($(document).scrollTop() > $('#involve').position().top - 300) {
    $('body').css('background', $('#involve').attr('data-color'))
  }
})
