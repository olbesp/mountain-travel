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
});
