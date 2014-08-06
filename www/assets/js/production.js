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


