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

        this.div.appendChild(divContent);
        this.div.className = 'killSwitch';
        this.entry.appendChild(document.createTextNode(todoInput));
        this.entry.appendChild(div);
        this.list.appendChild(entry);

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
