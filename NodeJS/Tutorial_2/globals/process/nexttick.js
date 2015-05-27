/**
 * As you can see, the immediate call is executed first, whereas the nextTick callback is executed in the next run of the event loop.
 * The reason why you should be aware of this function is because, due to the async nature of Node.js,
 * this function will show up in the call stack quite commonly as this will be the starting point of a Node.js event loop.
 * Everything before this function is in C. Everything after this function in the call stack is in JavaScript.
 */

process.nextTick(function () {
    console.log('next tick');
});

console.log('immediate');