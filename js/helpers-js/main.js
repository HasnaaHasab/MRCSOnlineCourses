$(document).ready(function() {
/*** intialize AOS Library for scroll animation ***/
    AOS.init({
        duration: 1000,
    });
/********* init nice-scroll.js *********/

    $(function() {
          $("body").niceScroll({
            scrollspeed: 80,
            cursorcolor:"rgb(120, 86, 138)"
          });
      });
/*** navbar effects with scroll in all screens ***/
    var header = $(".navbar");
    var winWidth = 0;
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        winWidth = $(window).width();

        if (scroll >= 40) {
            header.addClass("scrolled");
            $(".nav-link").css("color","#533263");
            $("#white-logo-icon").css('display','none');
            $("#move-logo-icon").css('display','inline-block');
        } else {
            if (winWidth > 992)
            {
                header.removeClass("scrolled");
                $("#move-logo-icon").css('display','none');
                $("#white-logo-icon").css('display','inline-block');
                $(".nav-link").css("color","#ffffff");
            }
        }
    });

    $(window).on('resize', function(){
        winWidth = $(window).width();
        if (winWidth <= 992) {
            header.addClass("scrolled");
            $(".nav-link").css("color","#533263");
            $("#white-logo-icon").css('display','none');
            $("#move-logo-icon").css('display','inline-block');
        } else {
            header.removeClass("scrolled");
            $("#move-logo-icon").css('display','none');
            $("#white-logo-icon").css('display','inline-block');
            $(".nav-link").css("color","#ffffff");
        }
    });

    /*var winwidth = 0;
     $(window).resize(function() {
         winWidth = $(window).width();
         if(winwidth <992px){
             $(".nav-link").css("color","#533263");
             $("#white-logo-icon").css('display','none');
             $("#move-logo-icon").css('display','inline-block');
         } else {
             $("#move-logo-icon").css('display','none');
             $("#white-logo-icon").css('display','inline-block');
             $(".nav-link").css("color","#ffffff");
         }
 });*/

     $('a[href*="#"]').on('click', function (e) {
         e.preventDefault();

         $('html, body').animate({
             scrollTop: $($(this).attr('href')).offset().top
         }, 500, 'linear');
    });

    /*** back to top button ***/
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("scroll-to-top-btn").style.display = "block";
        } else {
            document.getElementById("scroll-to-top-btn").style.display = "none";
        }
    }

    $('#scroll-to-top-btn').each(function(){
        $(this).click(function(){
            $('html,body').animate({ scrollTop: 0 }, 1000);
            return false;
        });
    });

    /*** initialize bootstrap carousel ***/
    $('.carousel').carousel();



});
