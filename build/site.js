(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var task = require('./task');

function List() {

}

List.prototype = {
    add: function() {

    }
}

module.exports =  List;



$(document).ready(function(){
    
});
},{"./task":2}],2:[function(require,module,exports){
exports.foo = function() {
    console.log("task");
    var toDoInput = document.getElementById('to-do-input');
    console.log(toDoInput);
}

function Task() {

}


module.exports =  Task;



/**
 * v1 What this will need to do
 * return the input value
 * append value as string to ol
 * if input has no content disable add ability
 *
 */


},{}],3:[function(require,module,exports){
(function(window, document) {
    "use strict";

    var List = require('./components/list.js');
    var task = require('./components/task.js');
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
            // if (!window.addEventListener) {
            //     return;
            // }
            //
            console.log(List);
            task.foo();
            console.log(new List());
        }
    };

    var site = new Site();
    window.TOD = site;
    return site;

})(window, document);



},{"./components/list.js":1,"./components/task.js":2}]},{},[1,2,3]);