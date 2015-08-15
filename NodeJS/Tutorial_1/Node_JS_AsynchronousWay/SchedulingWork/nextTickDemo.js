/**
 * Created by viveksh2 on 5/21/15.
 */

/*
 The blocking call fs.stat() is executed first,
 then two setImmediate() calls,
 and then two nextTick() calls.



 The output shows:

 that both nextTick() calls are executed before any of the others,

 followed by the fs.stat() call,

 then the first setImmediate() call,

 and then on the next iteration through the loop,

 the second setImmediate() call.
 */

var fs = require("fs");
fs.stat("nexttick.txt", function (err, stats) {
    if (stats) {
        console.log("nexttick.txt Exists");
    }
});
setImmediate(function () {
    console.log("Immediate Timer 1 Executed");
});
setImmediate(function () {
    console.log("Immediate Timer 2 Executed");
});
process.nextTick(function () {
    console.log("Next Tick 1 Executed");
});
process.nextTick(function () {
    console.log("Next Tick 2 Executed");
});
