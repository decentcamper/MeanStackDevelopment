/**
 * One thing to note is that you must have a reference to the function you want removed
 * from the listening queue and, therefore, should not should not use an anonymous (inline) function.
 * This is because two functions in JavaScript are not equal if their bodies are the same
 * $ node -e "console.log(function(){} == function(){})" would result to False
 */

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var fooHandler = function () {
    console.log('handler called');

    // Unsubscribe
    emitter.removeListener('foo',fooHandler);
};

emitter.on('foo', fooHandler);

// Emit twice
emitter.emit('foo');
emitter.emit('foo');
