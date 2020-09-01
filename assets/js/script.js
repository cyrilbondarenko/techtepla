$(document).ready(function(){
  $('.slider-1').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    navText: ["<div class='nav-button prev'><img src='assets/images/prev.png'></div>","<div class='nav-button next'><img src='assets/images/next.png'></div>"],
    dots: false
  });
  $('.slider-2').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: ["<div class='nav-button prev'><img src='assets/images/prev.png'></div>","<div class='nav-button next'><img src='assets/images/next.png'></div>"],
    responsive : {
        0: {
          items:1
        },
        550:{
            items:2
        },
        800:{
            items:3
        },
        1200:{
            items:4
        }
  }
  });
});
