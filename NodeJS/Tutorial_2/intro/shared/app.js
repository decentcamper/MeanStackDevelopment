var foo = require('./foo');
console.log('initial something:', foo.something); // 123

// Now modify something: 
foo.something = "Vivek";

// Now load bar:
var bas = require('./bar');