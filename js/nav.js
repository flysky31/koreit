
$(document).ready(function() {
  $(window).scroll(function(){
    var scrollPosition = $(window).scrollTop();

    if(scrollPosition >= 50){
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  });
 
  $(".navbar-toggler").click(function(){
      $("#aside").toggleClass("on");
      $(".aside_bg").toggleClass("on");
      $(this).toggleClass("on");

      function toggleClassBasedOnScreenSize() {

      if ($(window).width() > 1024) { 
          $("#aside").removeClass("on");
          $(".aside_bg").removeClass("on");
          $(".navbar-toggler").removeClass("on");
          $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
        } else {
        
        }
      }
      toggleClassBasedOnScreenSize();

      $(window).resize(function() {
          toggleClassBasedOnScreenSize();
      });

     
    });
    $(".aside_bg").click(function(){
        $("#aside").removeClass("on");
        $(".aside_bg").removeClass("on");
        $(".navbar-toggler").removeClass("on");
        $("#aside .navbar-nav_m li").removeClass("on");
        $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
    });


    // $("#aside .navbar-nav_m li .sub").hide();
    $("#aside .navbar-nav_m li").click(function(){
        $(this).toggleClass("on");
        //$(this).find(".sub").slideDown();
        $('#aside .navbar-nav_m li').not(this).removeClass('on');        
        let subElement = $(this).find(".sub");

        if (subElement.is(":visible")) {
          subElement.slideUp();
        } else {
          $("#aside .navbar-nav_m li .sub").slideUp();
          subElement.slideDown();
        }
    });

    $('.nav-item').mouseenter(function(){
      //$(this).find('.sub_menu').stop().slideDown();
      $(this).addClass("on");
      $(this).find('.sub_menu').addClass("on");
      //$(this).find('.sub_menu').slideDown();
    });
    $('.nav-item').mouseleave(function(){
        //$(this).find('.sub_menu').stop().slideUp();
        $(this).removeClass("on");
        $(this).find('.sub_menu').removeClass("on");
       // $(this).find('.sub_menu').slideUp();
    });
});
    


$(document).ready(function() {
  $('.select_box .top').click(function(e) {
      e.preventDefault();
      $(".select_box").toggleClass("on");
      $(".sub_box").toggleClass("on");
  });
});




$(document).ready(function() {
  var gnb = $('#navbarNav');
  var gnbOffset = gnb.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() >= gnbOffset) {
      gnb.addClass('fixed');
    } else {
      gnb.removeClass('fixed');
    }
  });
});


$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
          $('#topBtn.go_top').addClass("on");
      } else {
          $('#topBtn.go_top').removeClass("on");
      }
  });

  $('#topBtn.go_top').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
  });
  AOS.init();
});
