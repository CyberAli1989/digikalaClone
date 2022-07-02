$(function () {
    $('.center').hide()
    $('.center1').hide()
    $('#location').click(function (e) { 
        e.preventDefault();
        $('.center').addClass('enter-t').removeClass('exit-t').show()
        
    });
    $('.bx-x').click(function (e) { 
        e.preventDefault();
        $('.center').addClass('exit-t').removeClass('enter-t').hide('1000');
        $('.center1').addClass('exit-t').removeClass('enter-t').hide('1000');
        $('.blur').hide()

    });
    $('.location').click(function (e) { 
        e.preventDefault();
        $('.center').css('z-index', '100').addClass('enter-t').removeClass('exit-t').show();
        $('.blur').css('z-index', '100').show();
    });

    $('#catMore').click(function (e) { 
        e.preventDefault();
        $('.center1').css('z-index', '100').addClass('enter-t').removeClass('exit-t').show();
        $('.blur').css('z-index', '100').show();
        
    });
    $("#GoTop").click(function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 1000);
     });


     $('#support').click(function(e) {
        $('.supp i').toggleClass('bx bx-support').toggleClass('bx bx-x')
     })
    
});