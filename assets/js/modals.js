$(function () {
    $('.center').hide()
    $('#location').click(function (e) { 
        e.preventDefault();
        $('.center').addClass('enter-t').removeClass('exit-t').show()
        
    });
    $('.bx-x').click(function (e) { 
        e.preventDefault();
        $('.center').addClass('exit-t').removeClass('enter-t').hide('1000');
        $('.blur').hide()

    });
    $('.location').click(function (e) { 
        e.preventDefault();
        $('.center').css('z-index', '100').addClass('enter-t').removeClass('exit-t').show();
        $('.blur').css('z-index', '100').show();
    });
   
});