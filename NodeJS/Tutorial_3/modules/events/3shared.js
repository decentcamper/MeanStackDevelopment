/**
 * In this sample, the first listener modified the passed event argument and the second listener got the modified object.
 * You can potentially use this fact for getting you out of a tricky situation, but I highly caution against it. The reason for showing
 * this sharing of the event arguments is to warn you about the dangers of modifying the event object directly in a listener.
 */
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('foo', function (ev) {
    console.log('subscriber 1:', ev);
    ev.handled = true;
});

emitter.on('foo', function (ev) {
    if (ev.handled) {
        console.log('event already handled');
    }
});

// Emit
emitter.emit('foo', { handled: false });
