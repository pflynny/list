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

}

Todo.prototype = {
    remove: function() {
        this.el.parentNode.removeChild(this.el);
        this.div.removeEventListener('click', this.handleRemove, false);
        this.parent.removeItem(this);
        this.parent = null;

    },
    edit: function() {
//          this.parent

    },
    done: function() {

    },
    render: function() {
        return this.el;
    },
    handleRemove: function() {
        this.remove();
    }
}


function List(options) {
    var list, todoInput, entry, div, divContent;

    el = document.getElementById(options.el);
    list = el.querySelector('.todo-list');
    todoInput = el.querySelector('.todo-input');



//    todoInput = document.getElementById('todo_input').value;


    this.list = list;
    this.todoInput = todoInput;
    this.div = div;
    this.entry = entry;
    this.divContent = divContent;
    this.todos = [];


    this.handleKeyDown = this.handleKeyDown.bind(this);
    todoInput.addEventListener('keydown', this.handleKeyDown, false);

}

List.prototype = {
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
//        console.log(this.entry);

    },

    clearInput: function() {
        this.todoInput.value =  " ";
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
    },

    removeItem: function(todo) {
        var index;
        for (var i = 0; i < this.todos.length; i++) {
            var item = this.todos[i];
            if (item === todo) {
                index = i;
            }
        }
        console.log(index);
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
