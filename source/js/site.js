//= require "jQuery/dist/jquery.min"
//= require "jquery.slimscroll/jquery.slimscroll.min"
//= require "jquery.easing/js/jquery.easing.min"
//= require "fullpage.js/jquery.fullPage.min"

$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        resize : true,
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        autoScrolling: true
    });
});

