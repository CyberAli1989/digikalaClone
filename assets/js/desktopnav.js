$(function () {
    $('.disabled').slideUp()
    $().mouseenter(function () { 
      
    });
    
    $('.subMenu .grid2 .menu-title ul li').mouseenter(function () { 
        $('.subMenu .grid2 .menu-title ul li').removeClass('active')
        // $('.disabled').show()

        $(this).addClass('active');
        let show = $(this).data('menu');
        if(show == $('#'+ show).attr('id')){
            $('#'+show).stop().slideDown().show();
        }else{
            $('.menu-items').stop().slideUp().hide();
        }
    });
    
});