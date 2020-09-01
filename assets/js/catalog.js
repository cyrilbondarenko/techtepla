$(document).ready(function(){
  $('.product').mouseenter(function(){
    $(this).css('z-index', '3');
    $('.shadow').fadeIn(300);
  });
  $('.product').mouseleave(function(){
    $(this).css('z-index', '0');
    $('.shadow').fadeOut(0);
  });
});
