$(function() {
    $(window).on("scroll", function(){
        if($(window).scrollTop()>50){
            $('.nav').addClass('active');
        }else{
            $('.nav').removeClass('active');
        }
    });
});