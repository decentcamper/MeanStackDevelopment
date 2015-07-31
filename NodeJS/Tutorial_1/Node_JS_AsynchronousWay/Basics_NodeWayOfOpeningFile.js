/**
 * Created by viveksh2 on 7/30/15.
 */

var fs = require('fs');                 // this is new, see explanation

var file = null;
var buf = new Buffer(100000);
fs.open(
    'info.txt', 'r',
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