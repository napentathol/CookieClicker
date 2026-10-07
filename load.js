// ==UserScript==
// @name nap
// @namespace NapCookie
// @include http://orteil.dashnet.org/cookieclicker/
// @include https://orteil.dashnet.org/cookieclicker/
// @version 1
// @grant none
// ==/UserScript==

(function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.LoadMod('https://raw.githubusercontent.com/napentathol/CookieClicker/refs/heads/main/cookie.js');
            clearInterval(checkReady);
        }
    }, 1000);
})();
