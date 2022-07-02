$(function () {
    $('.check-nav ul li').click(function() {
        $('.check-nav ul li').removeClass('active');
        $(this).addClass('active');
    })
});