$(function () {
    $('#mobile-menu').hide()
    $('.blur').hide()
    $('#dropdown').click(function (e) { 
        $('#mobile-menu').addClass('enter-r').removeClass('exit-r').show()
        $('.blur').show()
        $('.blur').click(function (e) { 
            e.preventDefault();
            $('#mobile-menu').addClass('exit-r').removeClass('enter-r').show()
            $('.blur').hide()
            
        });
    });
});