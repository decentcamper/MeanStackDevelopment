/**
 * Created by viveksh2 on 7/30/15.
 */

var fs = require('fs');                 // this is new, see explanation

var file = null;
var buffer = new Buffer(100000);
fs.open(
    '../info.txt', 'r',
    function (handle) {
        file = handle;
    }
);

fs.read(                                // this will generate an error.
    file, buffer, 0, 100000, null,
    function () {
        console.log(buf.toString());
        file.close(file, function () { /* don't care */ });
    }
);

/* The first line of this code is something you haven’t seen just yet:

 The require function is a way to include additional functionality in your Node.js programs.
 Node comes with a pretty impressive set of modules,
 each of which you can include separately as you need functionality.
 You will work further with modules frequently from now on;
 you learn about consuming them and writing your own in upcoming sessions: “Modules.”

 If you run this program as it is, it throws an error and terminates. How come?
 Because the fs.open function runs asynchronously;
 it returns immediately, before the file has been opened,
 and you have the handle value returned to you.
 The file variable is not set until the file has been opened and
 the handle to it has been received in the callback specified as the third parameter to the fs.open
 function.
 Thus, it is still undefined when you try to call the fs.read function with it immediately afterward.
 Fixing this program is easy:*/