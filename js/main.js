// burger
$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, #main-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
// 
// --------------------------------------------------------------------------
// PULL-OUT MENU
$(document).ready(function () {
  var previousScroll = 0,
    navBarOrgOffset = $('#navbar').offset().top;

  $('#navigation').height($('#navbar').height());

  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    // console.log(currentScroll + " and " + previousScroll + " and " + navBarOrgOffset);
    if (currentScroll > navBarOrgOffset) {
      if (currentScroll > previousScroll) {
        document.getElementById("navbar").style.top = "-126px";



      } else {
        document.getElementById("navbar").style.top = "50px";
        $('#navbar').addClass('fixed');


      }
    } else {
      $('#navbar').removeClass('fixed');


    }
    previousScroll = currentScroll;
  });

});
// -------------------------------------------------------------------------------
// slider
'use strict';

$(document).ready(function () {
  $('.charity_slider').slick({
      dots: true,
  });
});

// --------------------------------------------------------------------------
// FILTRATION  
$(document).ready(function () {

  $('.button[filter="all"]').addClass('focused')

  // all
  $('.button[filter="all"]').click(function ready() {


    if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');


      $('.button[filter]').removeClass('focused');
      $(this).addClass('focused');


      $('.filter > div').show(500);

    }
  });
  // end_all
  // button1
  $('.button[filter="wd"]').click(function () {

    if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');

      $('.button[filter]').removeClass('focused');
      $(this).addClass('focused');

      $('.filter > div').hide(300);
      $('.filter > div[filter="wd"], [filter="moc"]:nth-child(5), [filter="ud"]:last-child').show(500);
    }
  });
  // end_button1
  // button2
  $('.button[filter="ud"]').click(function () {

    if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');

      $('.button[filter]').removeClass('focused');
      $(this).addClass('focused');

      $('.filter > div').hide(300);
      $('.filter > div[filter="wd"], [filter="mob"]:nth-child(3), [filter="moc"]:nth-child(5)').show(500);
    }
  });
  // end_button2
  // button3
  $('.button[filter="moc"]').click(function () {

    if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');

      $('.button[filter]').removeClass('focused');
      $(this).addClass('focused');

      $('.filter > div').hide(300);
      $('.filter > div[filter="ud"]:nth-child(2), [filter="mob"]:nth-child(3), [filter="mob"]:nth-child(4), [filter="moc"]:nth-child(5)').show(500);
    }
  });
  // end_button3
  // button4 
  $('.button[filter="mob"]').click(function () {

    if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');

      $('.button[filter]').removeClass('focused');
      $(this).addClass('focused');

      $('.filter > div').hide(300);
      $('.filter > div[filter="mob"]:nth-child(3), [filter="mob"]:nth-child(4), [filter="moc"]:nth-child(5), [filter="ud"]:last-child').show(500);
    }
  });
  // 
});
// 
// --------------------------------------------------------------------------

// FOR VIDEO
var video;
window.onload = function () {
  video = document.getElementById("video");
};
function play1() {
  video1.play();
}
// -----------------------------------------
// пуск1
$(document).on('click', '.play_video', function () {
  $(' .play_video, .overflow_video').hide(100);
});
// --------------------------------



/* --------------------------------- numbers -------------------------------- */
var isAnimatePriceInitialized = false;
var serversTop = $("#nambers_info").offset().top + -200;
function animatePrice(){
  $('.number').addClass('viz');
  $('.num').each(function(){
    $(this).prop('Counter', 0).animate({
      Counter:$(this).text()
    },{
      duration: 2000,
      easing: 'swing',
      step:function(now){
        $(this).text(Math.ceil(now));
      }
    });
  });
  isAnimatePriceInitialized = true;
}
$(window).scroll(function() {
    if($(this).scrollTop() > serversTop){
        if (!isAnimatePriceInitialized) {
            animatePrice();
        }
    };
});






// SCRIPT TO COMPANIES SLIDER
const mySiema = new Siema({
  loop: true
});
//
