
$(document).ready(function() {

    var mainSwiper = new Swiper(".mainSwiper", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        autoHeight : true,
        effect:'fade',
        // navigation: {
        //   nextEl: ".main-button-next",
        //   prevEl: ".main-button-prev",
        // },
        pagination: {
          el: ".swiper-pagination",
   
        },
        on: {
          slideChangeTransitionStart: function () {
            $('.mainSwiper .txt').hide(0);
            $('.mainSwiper .txt').removeClass('aos-init').removeClass('aos-animate');
            $('.mainSwiper figure').hide(0);
            $('.mainSwiper figure').removeClass('aos-init').removeClass('aos-animate');
          },
          slideChangeTransitionEnd: function () {
            $('.mainSwiper .txt, .mainSwiper figure').show(0);
            AOS.init({
              offset: 200,
              duration: 400,
              easing: 'linear',
              delay: 10,
              once:true
              });
          },
          }
      });
  
  
      //swiper autoplay control
      $('.swiper-pause').click(function() {
          $(this).toggleClass("on");
          $(".swiper-play").removeClass("on");
        mainSwiper.autoplay.stop();
      })
      $('.swiper-play').click(function() {
          $(this).toggleClass("on");
          $(".swiper-pause").removeClass("on");
        mainSwiper.autoplay.start();
      })



     
});
    

    

$(document).ready(function(){
     //product
     var productSwiper = new Swiper(".productSwiper", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        autoHeight : true,
        navigation: {
           nextEl: ".product-button-next",
           prevEl: ".product-button-prev",
         },
        on: {
          slideChangeTransitionStart: function () {
            $('.productSwiper .txt').hide(0);
            $('.productSwiper .txt').removeClass('aos-init').removeClass('aos-animate');
            $('.productSwiper .up01').hide(0);
            $('.productSwiper .up01').removeClass('aos-init').removeClass('aos-animate');
          },
          slideChangeTransitionEnd: function () {
            $('.productSwiper .txt, .productSwiper .up01').show(0);
            AOS.init({
              offset: 200,
              duration: 400,
              easing: 'linear',
              delay: 10,
              once:true
              });
          },
          }
      });
})







function aniCtrl(){
    var _st = $(window).scrollTop();
   
    var _wH = $(window).height();

    $('.ani-item').each(function(){
        var _this = $(this);
        if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
            _this.addClass('done');
        }
    });
}


$(document).ready(function(){

    aniCtrl();

    $(window).scroll(function(){
        aniCtrl();
    });
});


