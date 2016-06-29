//= require "jQuery/dist/jquery.min"
//= require "jquery.slimscroll/jquery.slimscroll.min"
//= require "jquery.easing/js/jquery.easing.min"
//= require "fullpage.js/jquery.fullPage.min"
//= require "enquire/dist/enquire.min"
//= require "jquery-html5-placeholder-shim/jquery.html5-placeholder-shim"
$( window ).resize(function() {
    location.reload();
});


var isMobile= false;
enquire
    .register("screen and (max-width:69.9em)",  {

        match : function() {

        },

        // OPTIONAL
        // If supplied, triggered when the media query transitions
        // *from a matched state to an unmatched state*.
        unmatch : function() {},

        // OPTIONAL
        // If supplied, triggered once, when the handler is registered.
        setup : function() {
            isMobile = true;
            $(document).ready(function() {

            });


        },

        // OPTIONAL, defaults to false
        // If set to true, defers execution of the setup function
        // until the first time the media query is matched
        deferSetup : true
    })
    .register("screen and (min-width: 70em)", {

        deferSetup : true,
        setup : function() {
            isMobile = false;
            $(document).ready(function(){


            });
        },
        match : function() {

        },
        unmatch : function() {

        }

    });


function menuAppear(){

        $("#menu-open").fadeOut(600);
        $("#nav-toggle").removeClass( "active" );
        if ($("#footer").is(":hidden")) {
            $("#footer").fadeIn(600);
        }

}

$(document).ready(function() {
    if(isMobile == false) {
        $("#menu-open").fadeIn(600);
        $("#nav-toggle").addClass( "active" );
    }
    $("#footer #small-logo").click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveTo('landing');
    });
    switch (window.location.pathname){
        case "/":
            $("li.en").hide();
            $("li.it").show();
            break;
        case "/it/" :
            $("li.en").show();
            $("li.it").hide();
            break;
    }

    $("li.en a").click(function(e){

        e.preventDefault();
        params = window.location.hash;
        link = $(this).attr("href");

        window.location = link + params;
    });
    $("li.it a").click(function(e){
        e.preventDefault();
        params = window.location.hash;
        link = $(this).attr("href");

        window.location = link + params;
    });

    $("#menu").click(function(e){
        e.preventDefault();
        $("#nav-toggle").toggleClass( "active" );
        $("#menu-open").fadeToggle(600);
    });
    $('#fullpage').fullpage({
        css3: true,
        verticalCentered: true,
        resize : false,
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        autoScrolling: true,
        slidesNavigation: false,
        navigation: false,
        scrollOverflow: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        menu: "#menu-open",
        anchors:['landing', 'mission','whatwedo','howwework','advantages','ourvalues','partners','reasons','ourofficies'],
        onSlideLeave: function( anchorLink, index, slideIndex, direction){
            menuAppear()
            },
        onLeave: function(index, direction){
            menuAppear()
        },
        afterLoad: function(anchorLink, index){

            if(isMobile == false) {
                //using anchorLink
                if (anchorLink == 'landing') {
                    $("#footer").fadeOut(600);
                    $("#menu-open").fadeIn(600);
                    $("#nav-toggle").addClass( "active" );
                }

            }
        }
    });

    $(".partners-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $(".partners-back-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
    $("#aboutus-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
    $("#aboutusfromright-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
    $("#video-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#whatwedo-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#howwework-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
    $("#process-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
    $("#partners-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#experience-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#experience2-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#experience3-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
    $("#contactus-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#reasons-link").click(function(e){
        $.fn.fullpage.moveSlideRight();
    });
    $("#ouroffices-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });
    $("#thename-link").click(function(e){
        $.fn.fullpage.moveSlideLeft();
    });

    $("ul.one li").sort(asc_sort).appendTo('ul.one');
    $("ul.two li").sort(asc_sort).appendTo('ul.two');
    $("ul.three li").sort(asc_sort).appendTo('ul.three');
    $("ul.four li").sort(asc_sort).appendTo('ul.four');
    $("ul.five li").sort(asc_sort).appendTo('ul.five');
    $("ul.six li").sort(asc_sort).appendTo('ul.six');
    $("ul.seven li").sort(asc_sort).appendTo('ul.seven');
    $("ul.eight li").sort(asc_sort).appendTo('ul.eight');
    $("ul.nine li").sort(asc_sort).appendTo('ul.nine');
    $("ul.ten li").sort(asc_sort).appendTo('ul.ten');

// accending sort
    function asc_sort(a, b){
        return ($(b).text()) < ($(a).text()) ? 1 : -1;
    }

// decending sort
    function dec_sort(a, b){
        return ($(b).text()) > ($(a).text()) ? 1 : -1;
    }
});
