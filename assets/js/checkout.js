$(function () {
    $('.check-nav ul li').click(function (e) {
        e.preventDefault();
        $('.check-nav ul li').removeClass('active');
        $(this).addClass('active');

        if(now){
            $('#now').fadeOut()
            $('#next').fadeIn()
            now = !now
            next = !next
        }else{
            $('#now').fadeIn()
            $('#next').fadeOut()
            now = !now
            next = !next
        }
    })
    let windowHash = window.location.hash
    $('#now').show()
    let now = true;
    $('#next').hide()
    let next = false;


});