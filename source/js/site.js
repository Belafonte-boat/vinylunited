//= require "jQuery/dist/jquery.min"
//= require "jquery.slimscroll/jquery.slimscroll.min"
//= require "jquery.easing/js/jquery.easing.min"
//= require "fullpage.js/jquery.fullPage.min"

$(document).ready(function() {

    $("#menu").click(function(e){
        e.preventDefault;
        $("#menu-open").fadeToggle(600);
    });
    $('#fullpage').fullpage({
        verticalCentered: true,
        resize : false,
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        autoScrolling: true,
        slidesNavigation: false,
        navigation: false,
        menu: "#menu-open",
        anchors:['landing', 'aboutus','howwework','ourexperiences','ourvalues','ouroffices'],
        onSlideLeave: function( anchorLink, index, slideIndex, direction){
            $("#menu-open").fadeOut(600);

            if( $("#footer").is(":hidden")) {
                $("#footer").fadeIn(600);
            }


            },
        onLeave: function(index, direction){


            $("#menu-open").fadeOut(600);

            if( $("#footer").is(":hidden")) {
                $("#footer").fadeIn(600);
            }
        },
        afterLoad: function(anchorLink, index){


            //using anchorLink
            if(anchorLink == 'landing'){
                $("#footer").fadeOut(600);
            }
        }
    });

    $("#partners-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#aboutus-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
    $("#whatwedo-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#howwework-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
    $("#experience-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#experience2-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
    $("#contactus-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#ouroffices-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
});

