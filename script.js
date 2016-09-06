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

$(document).ready(function () {
  $('#show-1').click(function () {
    console.log('clicked')
    $('#session1').removeClass('hidden')
    $('#session2').addClass('hidden')
    $('#session3').addClass('hidden')
    $('#show-1').addClass('active')
    $('#show-2').removeClass('active')
    $('#show-3').removeClass('active')
  })
  $('#show-2').click(function () {
    console.log('clicked')
    $('#session1').addClass('hidden')
    $('#session2').removeClass('hidden')
    $('#session3').addClass('hidden')
    $('#show-1').removeClass('active')
    $('#show-2').addClass('active')
    $('#show-3').removeClass('active')
  })
  $('#show-3').click(function () {
    console.log('clicked')
    $('#session1').addClass('hidden')
    $('#session2').addClass('hidden')
    $('#session3').removeClass('hidden')
    $('#show-1').removeClass('active')
    $('#show-2').removeClass('active')
    $('#show-3').addClass('active')
  })
})

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

// For Newsletter Subscription form
$('.subscribe form').submit(function (e) {
  e.preventDefault()
  var postdata = $('.subscribe form').serialize()
  $.ajax({
    type: 'POST',
    url: './subscribe.php',
    data: postdata,
    dataType: 'json',
    success: function (json) {
      if (json.valid == 0) {
        $('.success-message').hide()
        $('.error-message').hide()
        $('.error-message').html(json.message)
        $('.error-message').fadeIn('fast', function () {
          $('.subscribe form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated shake')
          })
        })
      }else {
        $('.error-message').hide()
        $('.success-message').hide()
        $('.subscribe form').hide()
        $('.success-message').html(json.message)
        $('.success-message').fadeIn('fast', function () {
          $('.top-content').backstretch('resize')
        })
      }
    }
  })
})
