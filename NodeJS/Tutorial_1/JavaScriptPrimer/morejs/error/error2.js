/**
 * The reason why it does not work is because at the point in time when the callback for setTimeout executes,
 * we would already be outside the try/catch block. The setTimeout is going to call the function provided at a later point,
 * and you can see that happen in this code sample since “I am outside the try block” is executed.
 * The default behavior for uncaught exceptions in Node.js is to exit the process, and this is why our application crashes.
 */

try {
    setTimeout(function () {
        console.log('About to throw an error');
        throw new Error('Error thrown');
    }, 1000);
}
catch (e) {
    console.log('I will never execute!');
}

console.log('I am outside the try block');


/**
 * The Correct way is to put that code in the callback itself..
 */

/**
 *

setTimeout(function () {
    try {
        console.log('About to throw an error');
        throw new Error('Error thrown');
    }
    catch (e) {
        console.log('Error caught!');
    }
}, 1000);

 */