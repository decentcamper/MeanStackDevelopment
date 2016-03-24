/**
 * When you would run the code you would see that despite the warning,
 * all 20 listeners were called when we emitted the event.

 */
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var listenersCalled = 0;

function someCallback() {
    // Add a listener
    emitter.on('foo', function () { listenersCalled++ });

    // return from callback
}

for (var i = 0; i < 20; i++) {
    someCallback();
}
emitter.emit('foo');
console.log('listeners called:', listenersCalled); // 20


