$(document).ready(function() {

  // goTop_btn script

  var btnToTop = $(".goTop_btn");

  btnToTop.click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      btnToTop.fadeIn();
    } else {
      btnToTop.fadeOut();
    }
  });

  let hamburger = $("#hamburger-menu");
  let closeBtn = $(".close-menu-area");
  let nav = $("nav");

  hamburger.click(function(e) {
    e.stopPropagation();
    nav.addClass("slide-down");
  });
  closeBtn.click(function() {
    nav.removeClass("slide-down");
  });

  nav.click(function(e) {
    e.stopPropagation();
  });

  $(document).click(function() {
    nav.removeClass("slide-down");
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      nav.removeClass("slide-down");
    }
  });


    $('#time-picker').datetimepicker({
        // weeks:true,
        // format:'H:1',
        // inline:true,
        // theme:'dark',
        hours12:true,
        step:5,
        allowTimes:['09:00','09:15','09:20','09:25','09:30','09:35','09:40','09:45','09:50','09:55','10:00','10:05','10:10','10:15','10:20',
        '10:25','10:30','10:35','10:40','10:45']
    });

    let firstName = $('#f-name');
      lastName = $('#l-name'),
      fullName = $('#full-name');

    firstName.on('keyup', function() {
        fullName.val($(this).val() + ' ' + lastName.val());
    });

    lastName.on('keyup', function() {
        fullName.val(firstName.val() + ' ' + $(this).val());
    });

});
