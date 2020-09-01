$(document).ready(function(){
  $('.sidebar-item ul').hide();
  $('.sidebar-item').click(function(){
    if ($(this).find('ul').is(":hidden")) {
      $(this).find('ul').slideDown(500);
    } else {
      $(this).find('ul').slideUp(500);
    }
  });
  $('.tabs .tab').click(function(){
    $('.tabs .tab').removeClass('active');
    $(this).addClass('active');
  });
  $('#tab1').click(function(){
    $('#table1').show();
    $('#table2, #table3').hide();
  });
  $('#tab2').click(function(){
    $('#table2').show();
    $('#table1, #table3').hide();
  });
  $('#tab3').click(function(){
    $('#table3').show();
    $('#table1, #table2').hide();
  });
});
