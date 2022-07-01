$(document).ready(function () {
    $('.slider .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        nav: true,
        items: 1,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
    });
    $('.owl-theme .owl-nav button').hide()
    $('.slider .owl-carousel').mouseenter(function () {
        $('.owl-theme .owl-nav button').show(150)

    });
    $('.slider .owl-carousel').mouseleave(function () {
        $('.owl-theme .owl-nav button').hide(150)

    });


    $('.hot-suggest .owl-carousel').owlCarousel({
        rtl: true,
        loop: false,
        nav: false,
        items: 7,
        animateOut: 'fadeOut',
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 3,
                startPosition: 0,
                margin: 5,
                // center: true,

            },
            767: {
                item: 7,
                margin: 5,

            }

        }
    });

    $('#suggestion .owl-carousel').owlCarousel({
        rtl:true,
        loop:false,
        dots:false,
        merge:true,
        responsive:{
            0:{
                items:3,
            },
            800:{
                items:6,
            },
        },
    })
    $('#favorite .owl-carousel').owlCarousel({
        rtl:true,
        loop:false,
        dots:false,
        merge:true,
        responsive:{
            0:{
                items:3,
            },
            800:{
                items:6,
            },
        },
    });
    $('#suggestion2 .owl-carousel').owlCarousel({
        rtl:true,
        loop:false,
        dots:false,
        merge:true,
        responsive:{
            0:{
                items:1,
            },
            800:{
                items:4,
            },
        },
    });
});