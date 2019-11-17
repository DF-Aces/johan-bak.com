$(window).scroll(function() {
    var wScroll = $(this).scrollTop(), scrollAmount = 150;
  
    if (wScroll > scrollAmount) {
      $(".scroll-up").addClass("is_showing");
    } else {
      $(".scroll-up").removeClass("is_showing");
    }
  });
  
  var c,
      amount = 10;
  
  $('.scroll-up').click( function(){
    $('html , body').animate({scrollTop: 0},1000);
  })