(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(window, document) {
    "use strict";

    // var polyfills = require('./components/Polyfills.js');
    // var analytics = require('./components/Analytics.js');
    // var quicktube = require("./components/QuickTube.js");

    /**
     * Main site object
     */
    var Site = function() {
        var self = this;

        if ("addEventListener" in window) {
            document.addEventListener('load', function() {
                if (document.readyState === "complete") {
                    self.init.call(self);
                }
                ggg
                ggg();
            }, false);
        } else {
            window.onload = function() {
                self.init.call(self);
            };
        }
    };


    Site.prototype = {
        init: function() {

            analytics.init();
            polyfills.init();
            quicktube.init();

            if (!window.addEventListener) {
                return;
            }

        }
    };

    var site = new Site();
    window.TOD = site;
    return site;

})(window, document);



},{}]},{},[1]);