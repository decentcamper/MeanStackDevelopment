/**
 * Created by viveksh2 on 8/14/15.
 */
var foo = require('./foo');

var barObject = foo();

barObject.something = 465;

console.log('in another module:', barObject.something); // 456
