( function() {
    
    'use strict';

    var nav = document.getElementById("nav");
    var navOffset = nav.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset >= navOffset) {
            nav.classList.add("scrolled-nav")
        } else {
            nav.classList.remove("scrolled-nav");
        }
    };

    /*document.addEventListener("DOMContentLoaded", function(event){
        var wrapper = document.getElementById("wrapper");
        var wrapperOffset = wrapper.offsetHeight;
        if(wrapperOffset < screen.height) {
            document.getElementById("footer").classList.add("fixed-footer");
        }
    }, false);*/

}())