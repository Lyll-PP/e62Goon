// ==UserScript==
// @name         Goon-Direct
// @author       Lyll-PP
// @version      0.0
// @description  Automatically refresh to a new post
// @match        https://static1.e621.net/data/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=e621.net
// ==/UserScript==




//===================================
// Variables to modify:
//===================================

// Refresh timer variable in ms (5000ms = 5 seconds)
// How often to check for refresh
var refreshDelay = 15000;

// Tags to include with random search:
var postTags = "score:>1337 big_balls -animated";





//===================================
// Nerd shit:
//===================================
function redirectToUrl() {
    // Change the URL to the destination you want
    window.location.href = "https://e621.net/posts/random?tags=" + postTags;
}

// Set a timer to trigger the redirect
setTimeout(redirectToUrl, refreshDelay);

// You know what they say.
