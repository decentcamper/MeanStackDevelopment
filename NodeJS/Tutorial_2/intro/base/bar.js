/**
 * Node.js was designed to be simple, and this shows in its module system.
 * The Node.js require function is the main way of importing a module into the current file.
 * @type {*|exports|module.exports}
 */
var foo = require('./foo');
foo(); // logs out : "a function in file foo"
