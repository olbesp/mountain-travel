$(document).ready(function(){

  // Menu scrolling

  $('.menu-item').eq(0).click(function() {
      $('html, body').animate({
          scrollTop: $('#packages').offset().top
      }, 600);
  });
  $('.menu-item').eq(1).click(function() {
      $('html, body').animate({
          scrollTop: $('#destination').offset().top
      }, 600);
  });
  $('.menu-item').eq(2).click(function() {
      $('html, body').animate({
          scrollTop: $('#contact').offset().top
      }, 600);
  });

  // Button scrolling
  $('.btn-contact').click(function() {
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 600);
  });

  // Fade in / fade out effects for photos

  $(window).on("load",function() {
    function fade() {
      var animation_height = $(window).innerHeight() * 0.4;
      var ratio = Math.round((1 / animation_height) * 10000) / 10000;

      $('.js-fade').each(function() {

        var objectTop = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).innerHeight();

          if (objectTop < windowBottom) {
            if (objectTop < windowBottom - animation_height) {
              $(this).css({
                transition: 'opacity 0.1s linear',
                opacity: 1
              });
            } else {
              $(this).css({
                transition: 'opacity 0.25s linear',
                opacity: (windowBottom - objectTop) * ratio
              });
            }
          } else {
            $(this).css( 'opacity', 0 );
          }
      });
    }
    $('.js-fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
  });

});
