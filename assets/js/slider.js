$(document).ready(function () {
    $('.slider .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        nav: true,
        items:1,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:3000,
    });
    $('.owl-theme .owl-nav button').hide()
    $('.owl-carousel').mouseenter(function () { 
        $('.owl-theme .owl-nav button').show(150)
        
    });
    $('.owl-carousel').mouseleave(function () { 
        $('.owl-theme .owl-nav button').hide(150)
        
    });
});