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

}())

/*
    Anser du din lösning vara produktionsredo, om inte, vad skulle behöva förbättras (tekniskt eller användarperspektiv)?

    Svar:
    Jag anser att min lösning är produktionsredo met två undantag:
    - Kontaktformuläret skickar inget mail. Innan sidan sattes i produktion skulle man ange en mailadress för att ta
      emot mailen och skapa stöd för ett mail att skickas då användaren klickar "Skicka".
    - Tabellen över medlemmar uppdateras inte dynamiskt. Innan sidan sattes i produktion skulle man ha en underliggande
      datastruktur som hämtar och uppdaterar tabellen med medlemmar automatiskt så att ingen behöver göra det manuellt.

    I övrigt är sidan så simpel och de krav som ställs på den så små att jag anser att den är klar att sättas i produktion.
*/