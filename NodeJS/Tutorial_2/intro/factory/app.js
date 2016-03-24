var foo = require('./foo');

// create a new object
var obj = foo();

// use it
console.log(obj.something); // 123

obj.something = "My own Value";

console.log(obj.something); // 123


