$(document).ready(function(){
  $('.menu-icon').click(function(){
    $('.popup-menu').slideDown(500);
    $('.popup-menu').css('display', 'flex');
  });
  $('.exit').click(function(){
    $('.popup-menu').slideUp(500);
  });
  $('.popup-menu .nav_item').click(function(){
    if ($(this).find('.submenu').is(":hidden")) {
      $('.popup-menu .nav_item .submenu').slideUp(500);
      $(this).find('.submenu').slideDown(500);
    } else {
      $(this).find('.submenu').slideUp(500);
    }
  });
});
