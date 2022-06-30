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
    $('.subMenu').hide()
    $('.subMenu .grid2 .menu-title ul li').mouseenter(function () {
        $('.subMenu .grid2 .menu-title ul li').removeClass('active');
        $(this).addClass('active');
        $('.gird4').stop().slideUp(300);
        let menu = $(this).data('menu');
        $(menu).stop().slideDown(300).css('display', 'grid');
    });
    $('#collection').mouseenter(function () {
        $('.subMenu').slideDown()
        $('.blur').css('z-index', '10').show()
        $('.subMenu').css('top', ($(this).offset().top) + 36 + 'px').slideDown(400)
    });
    $('.subMenu').mouseleave(function () {
        $('.subMenu').slideUp();
        $('.blur').hide()

    })
  
  });


     