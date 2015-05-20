"use strict";

$(document).ready(function() {
  $('#menu').accordion();


  $('.parallax-window').parallax({imageSrc: 'img/sky-bg-web.jpg'});
  $('.parallax-window-center').parallax({imageSrc: 'img/intro-bg-web.jpg'});

  // top nav smooth scroll to section
  $('.page-scroll').on('click', function(event){     
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top - 50}, 1000);
    });
});

// $(function() {
//     $('.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });




//$('.site-top-nav').hide();

$('.navtoggle').click(function() {
  $('.nav').slideToggle('fast');
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".nav-wrapper").offset().top > 50) {
        $(".nav-wrapper").addClass("past-main");
        $('.site-top-nav a, .logo').addClass('past-main-font');
    } else {
        $(".nav-wrapper").removeClass("past-main");
        $('.site-top-nav a, .logo').removeClass('past-main-font');
    }
});



// top nav change color upon scrolling -- don't use, "scrollTop" bogs down the browser
// $(window).scroll(function() {
//   if ($(document).scrollTop() > 450) {
//     $('.nav-wrapper').addClass('past-main');
//     $('.site-top-nav a, .logo').addClass('past-main-font');
//   } else {
//     $('.nav-wrapper').removeClass('past-main');
//     $('.site-top-nav a, .logo').removeClass('past-main-font');

//   }

//   if ($(document).scrollTop() > 3500) {
//     $('.quote-wrapper').addClass('animated slideInRight');
//   } 
//   else {
//     $('.quote-wrapper').removeClass('animated slideInRight');
//   }

// });


// $(document).click(function(){
     //$('img').animate({top: '+=100px'}, 1000);
    //$("#work-link").scrollTo($("#top"),800);    
// });

