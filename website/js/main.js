$(".checkbox").click(function(){
    if($(this).hasClass('icon-check')){
        $(this).removeClass('icon-check').addClass('icon-check-empty');}
    else {
        $(this).removeClass('icon-check-empty').addClass('icon-check');}
});