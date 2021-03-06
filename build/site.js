(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var task = require('./task');
//

// event listener on the list

function Todo(val, list){
    var entry, div, divContent;

    entry = document.createElement('li');
    div = document.createElement("div");
    divContent = document.createTextNode("X");

    div.appendChild(divContent);
    div.className = 'killSwitch';
    entry.className = 'todo-item';
    entry.setAttribute('draggable', 'true');
    entry.appendChild(document.createTextNode(val));
    entry.appendChild(div);

    this.parent = list;
    this.div = div;
    this.val = val;
    this.el = entry;

    this.handleRemove = this.handleRemove.bind(this);
    div.addEventListener('click', this.handleRemove, false);

    this.done = this.done.bind(this);
    this.el.addEventListener('click', this.done, false);

    this.dragStarted = this.dragStarted.bind(this);
    this.draggingOver = this.draggingOver.bind(this);
    this.dropped = this.dropped.bind(this);


    this.el.addEventListener('dragstart', this.dragStarted, false);
    this.el.addEventListener('dragover', this.draggingOver, false);
    this.el.addEventListener('drop', this.dropped, false);

}

Todo.prototype = {
    remove: function() {
        this.el.parentNode.removeChild(this.el);
        this.div.removeEventListener('click', this.handleRemove, false);
        this.parent.removeItem(this);
        this.parent = null;
    },
    edit: function() {
        var val = this.el.val;
        console.log(val);
    },
    done: function() {
       this.el.classList.add("done");
        console.log("we're here ", this.el);
    },
    render: function() {
        return this.el;
    },
    handleRemove: function() {
        this.remove();
    },
    dragStarted: function(e){
        source = e.target;
//        e.dataTransfer.setData("text/plain", e.target.innerHTML);
        e.dataTransfer.effectAllowed = "move";
    },
    draggingOver: function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    },
    dropped: function(e) {
        e.preventDefault();
//        e.stopPropagation();
//        console.log(e);
//        source.innerHTML = e.target.innerHTML;
//        e.target.innerHTML = e.dataTransfer.getData("text/plain");
    }
}


function List(options) {
    var list, todoInput, entry, div, divContent;

    el = document.getElementById(options.el);
    list = el.querySelector('.todo-list');
    todoInput = el.querySelector('.todo-input');
    entry = document.createElement('li');

    this.list = list;
    this.todoInput = todoInput;
    this.div = div;
    this.entry = entry;
    this.divContent = divContent;
    this.todos = [];

    this.handleKeyDown = this.handleKeyDown.bind(this);
    todoInput.addEventListener('keydown', this.handleKeyDown, false);

    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    list.addEventListener('dragstart', this.handleDrag, false);
    list.addEventListener('drop', this.handleDrop, false);

}

List.prototype = {
    handleDrag: function(e){
        console.log(e);
        this.draggingEl = e.srcElement;
    },
    handleDrop: function(e){
        console.log(e);
        var drop = e.srcElement;

        if(drop === this.draggingEl) {
            return;
        }

        var position = drop.compareDocumentPosition(this.draggingEl);
        console.log(position);

        if(position === 4) {
            drop.parentNode.insertBefore(this.draggingEl, drop);
        }

        if(position === 2) {
            drop.parentNode.insertBefore(this.draggingEl, drop.nextElementSibling);
        }

    },
    handleKeyDown: function(e) {
        if(e.keyCode == 13){
            var val = this.todoInput.value;
            this.add(val);
            this.clearInput();
        }
    },
    add: function(val) {
        var entry = new Todo(val, this);
        this.list.appendChild(entry.render());
        this.todos.push(entry);
    },

    clearInput: function() {
        this.todoInput.value =  " ";
    },

    removeItem: function(todo) {
        var index;
        for (var i = 0; i < this.todos.length; i++) {
            var item = this.todos[i];
            if (item === todo) {
                index = i;
            }
        }
//        console.log(index);
        if (typeof index !== "undefined") {
            this.todos.splice(index, 1);
        }

    },

    remove: function() {
        this.todoInput.removeEventListener('keydown', this.handleKeyDown, false);
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
//            console.log(this);

            var list = new List({
                el: 'todo'
            });

            console.log(list);
            window.list = list;

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

        }
    };

    var site = new Site();
    window.TOD = site;
    return site;

})(window, document);



},{"./components/list.js":1}]},{},[1,2,3]);