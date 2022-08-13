$(function(){
    $("#my-tabs li").bind('click',function () {
      $("#my-tabs li").removeClass('active');
      $(this).addClass('active');
      $(".tab-container > div").slideUp(300);
      $('#'+$(this).data('content')).slideDown(450);
    });
    $('.comment-container').click(function() {
        $(this).addClass('toggled');

        $(document).click(function(){
            $('.comment-container').removeClass('toggled');
        });

        $('.comment-container').click(function(e){
            e.stopPropagation();
        });

        $(this).find('textarea').focus();

    });

    $('.js-star-rating').on('change','input', function() {
        $('.js-current-rating')
            .removeClass()
            .addClass('current-rating js-current-rating current-rating--' + this.value);
    });

    $(".color-pick .color").click(function () {
        $(this).parent().find('.color').removeClass('active');
        $(this).addClass('active');
        $(this).parent().find('input').val($(this).data('color'));
    });


});