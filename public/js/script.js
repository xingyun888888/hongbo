

$(function () {
    // 导航栏
   $('.top-nav').on('mouseenter','.item-nav',function () {
      $(this).children().find('img').fadeOut();
   }).on('mouseleave','.item-nav',function () {
       $(this).children().find('img').fadeIn();
    });

   $('.rectborder').mouseenter(function () {
       $(this).prev().addClass('hover');
   }).mouseleave(function () {
       $(this).prev().removeClass('hover');
   });

   $(window).scroll(function(){
       var h = $('body').scrollTop();
       if(h>=709){
           $('.aside').stop().animate({
               'left':0
           })
       }else {
           $('.aside').stop().animate({
               'left':'-81'
           })
       }
   })

});

$(function () {


});