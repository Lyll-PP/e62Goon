// ==UserScript==
// @name         Goon-Prime
// @author       Lyll-PP
// @version      0.0
// @description  Automatically visit post's image source
// @match        https://e621.net/posts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=e621.net
// ==/UserScript==




//===================================
// Variables to modify:
//===================================

// Refresh timer variable in ms (5000ms = 5 seconds)
// How often to check for refresh
var refreshCheck = 1;





//===================================
// Nerd shit:
//===================================

// Grab post image ID
var goonImg = document.getElementById('image');

// Redirect to URL
function redirectToUrl() {
    // Change the URL to the destination you want
    window.location.href = goonImg.src;
}

// Set a timer to trigger the redirect
setTimeout(redirectToUrl, refreshCheck);

// You know what they say.
