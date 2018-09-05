( function() {
    
    'use strict';

    // Get the navbar
    var nav = document.getElementById("nav");

    // Get the offset position of the navbar
    var navOffset = nav.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset >= navOffset) {
            nav.classList.add("scrolled-nav")
        } else {
            nav.classList.remove("scrolled-nav");
        }
    };

}())