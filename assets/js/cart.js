$(document).ready(function(){
  $('.plus').click(function(){
    a = Number($(this).parent().find('input').val());
    if (a >= 0) {
      a = a + 1;
      $(this).parent().find('input').val(a);
    }
  });
  $('.minus').click(function(){
    a = Number($(this).parent().find('input').val());
    if (a >= 1) {
      a = a - 1;
      $(this).parent().find('input').val(a);
    }
  });
  $('.cart-info .accept a').click(function(){
    $('.popup').css('display', 'flex');
  });
  $('.form-header img').click(function(){
    $('.popup').css('display', 'none');
  });
  $('#value').click(function(){
        var toCheck = $(this).attr('toCheck') == 'true';
        $('table :checkbox').each(function () { this.checked = toCheck; });
        $(this).attr('toCheck', !toCheck);
  });
  $('.popup-form .button').click(function(){
    if ($('#name').val() == '') {
      $('#name').attr('placeholder', 'Поле не заполнено');
      $('#name').addClass('error');
    }
    if ($('#phone').val() == '') {
      $('#phone').attr('placeholder', 'Поле не заполнено');
      $('#phone').addClass('error');
    }
    if ($('#email').val() == '') {
      $('#email').attr('placeholder', 'Поле не заполнено');
      $('#email').addClass('error');
    }
  });
  $('.popup-form input').click(function(){
    $(this).removeClass('error');
  });
});
