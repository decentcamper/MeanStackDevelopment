/**
 * var obj  ={};
 var obj1 = {
  a: "a",
    b: "b",
}

 obj = obj1;
 */

var a = function () {
    console.log('a called');
};

var b = function () {
    console.log('b called');
};

module.exports = {
    a: a,
    b: b
};
