$(document).ready(function() {
/*** intialize AOS Library for scroll animation ***/
    AOS.init({
        duration: 1000,
    });

 /********** sticky navbar *************/
    var header = $(".navbar");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
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
});
    