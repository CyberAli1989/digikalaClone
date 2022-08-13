// $(function () {
//     $('.disabled').slideUp()
//     $().mouseenter(function () { 

//     });

//     $('.subMenu .grid2 .menu-title ul li').mouseenter(function () { 
//       
//         // $('.disabled').show()

//         $(this).addClass('active');
//         let show = $(this).data('menu');
//         if(show == $('#'+ show).attr('id')){
//             $('#'+show).stop().slideDown().show();
//         }else{
//             $('.menu-items').stop().slideUp().hide();
//         }
//     });

// });

$(function () {
    $('.subMenu').hide();
    $('#menu1').hide();
    $('#menu2').hide();
    $('#menu3').hide();
    $('#menu4').hide();
    $('#menu5').hide();
    $('#menu6').hide();
    $('#menu7').hide();
    $('#menu8').hide();
    $('#menu9').hide();
    $('#menu10').hide();
    $('.navPlace .subMenu .grid2 .menu-title ul li').mouseenter(function () {
        $(this).addClass('active');
        $('.gird4').stop().slideUp(300).css('display', 'none');
        let menu = $(this).data("menu");
        $(menu).stop().slideDown(300).css('display', 'grid');
    });
    $('#collection').mouseenter(function () {
        $('#menu1').show();
        $('.subMenu').slideDown()
        $('.blur').css('z-index', '10').show()
        $('.subMenu').css('top', ($(this).offset().top) + 33 + 'px').slideDown(400)
    });
    $('.subMenu').mouseleave(function () {
        $('.subMenu').slideUp();
        $('.blur').hide()

    })

});


     