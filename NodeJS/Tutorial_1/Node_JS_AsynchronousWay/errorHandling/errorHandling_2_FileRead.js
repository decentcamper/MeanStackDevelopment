/**
 * Created by viveksh2 on 8/7/15.
 */

var fs = require('fs');

/**
 * Opening the file......
 */
fs.open(
    '/info.txt', 'r',
    function (err, handle) {
        if (err) {
            console.log("ERROR: " + err.code
                + " (" + err.message + ")");
            return;
        }
        /**
         * Creating the buffer..
         * @type {Buffer}
         */
        var buf = new Buffer(100000);
        /**
         * Attempting to read with the previously created
         * handle and the buffer..
         */
        fs.read(
            handle, buf, 0, 100000, null,
            function (err, length) {
                if (err) {
                    console.log("ERROR: " + err.code +
                        " (" + err.message + ")");
                    return;
                }
                /**
                 * Converting the buffer to string to console log it..
                 */
                console.log(buf.toString('utf8', 0, length));
                fs.close(handle, function () { /* don't care */
                });
            }
        );
    }
);


