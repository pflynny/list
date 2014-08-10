//var task = require('./task');
//
//function List() {
//
//}
//
//List.prototype = {
//    add: function() {
//
//    }
//}
//
//module.exports =  List;


/**
 *
 * @returns {boolean}
 * check value of input and return value
 *
 *
 */
function getValue() {

    var todoInput;

    todoInput = $('#todo-input');
    console.log(todoInput.value());

    return false;

}

/**
 * this will use getValue's value and
 * append it to the <ol> of todos
 *
 */
function addItem() {

}





$(document).ready(function(){


    $("#todo").submit(function () {
        getValue();
        return false;
    });


});



/**
 * v1 What this will need to do
 * return the input value
 * append value as string to ol
 * if input has no content disable add ability
 *
 */
