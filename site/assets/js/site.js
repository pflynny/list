(function(window, document) {
    "use strict";

    var List = require('./components/list.js');
//    var task = require('./components/task.js');
    // var quicktube = require("./components/QuickTube.js");

    /**
     * Main site object
     */
    var Site = function() {
        var self = this;

        this.init = this.init.bind(this);

        if ("addEventListener" in window) {
            window.addEventListener('load', self.init, false);
        } else {
            window.onload = function() {
                self.init.call(self);
            };
        }
    };


    Site.prototype = {
        init: function() {
            console.log(this);

//            document.getElementById('todo_input').onkeydown = function(e){
//                if(e.keyCode == 13){
//                      List();
//                    console.log('brrr');
//                }
//            }
//            List();
//            List.add();
//            console.log('yoo');
//            console.log(List.changeText2);

            // if (!window.addEventListener) {
            //     return;
            // }
            //
//            console.log(List);
//            task.foo();
//            var test = new List();
//               test;
            //console.log(new List().add());
        }
    };

    var site = new Site();
    window.TOD = site;
    return site;

})(window, document);


