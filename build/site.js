(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var task = require('./task');
//
function List() {
    var list, todoInput, entry, div, divContent;

    list = document.getElementById('todoList');
    todoInput = document.getElementById('todo_input').value;
    entry = document.createElement('li');
    div = document.createElement("div");
    divContent = document.createTextNode("X");

    this.list = list;
    this.todoInput = todoInput;
    this.div = div;
    this.entry = entry;
    this.divContent = divContent;

}

List.prototype = {
    add: function() {

        this.div.appendChild(this.divContent);
        this.div.className = 'killSwitch';
        this.entry.appendChild(document.createTextNode(this.todoInput));
        this.entry.appendChild(this.div);
        this.list.appendChild(this.entry);

        console.log(this.entry);

        console.log('flhvsfhbjb');
    },

    clearInput: function() {
        var todoInput = document.getElementById('todo_input');
        todoInput.value = ',cbvds,bv';
    },

    killSwitch: function() {
//            var killSwitch = document.getElementsByClassName('killSwitch');
        $('.killSwitch').on('click', function() {
            $(this).parent().hide();
        });
    },

    strikeOut: function() {
        $('.todo-list').on('click', 'li', function() {
            $(this).addClass('done');
            $('.killSwitch', this).show();
        });
    }

}

module.exports =  List;


/**
 *
 * @returns {boolean}
 * check value of input and return value
 *
 *
 */


/**
 * this will use getValue's value and
 * append it to the <ol> of todos
 *
 */



/**
 * v1 What this will need to do
 * return the input value
 * append value as string to ol
 * if input has no content disable add ability
 *
 */

},{}],2:[function(require,module,exports){
exports.foo = function() {
    console.log("task");
    var toDoInput = document.getElementById('to-do-input');
    console.log(toDoInput);
}

function Task() {

}


module.exports =  Task;


/**
 *
 * 1) aid drag and drop functionality
 * 2) have an edit button, converting string into input
 * 3) delete button, remove from the DOM
 */





},{}],3:[function(require,module,exports){
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



},{"./components/list.js":1}]},{},[1,2,3]);