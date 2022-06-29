$(function () {
    $('.location-modal').hide()
    $('#location').click(function (e) { 
        e.preventDefault();
        $('.location-modal').addClass('enter-t').removeClass('exit-t').show()
        
    });
    $('.bx-x').click(function (e) { 
        e.preventDefault();
        $('.location-modal').addClass('exit-t').removeClass('enter-t').hide('1000');
        $('.blur').hide()

    });
    $('.location').click(function (e) { 
        e.preventDefault();
        $('.location-modal').addClass('enter-t').removeClass('exit-t').show();
        $('.blur').show();
    });
   
});