/**
 * Created by viveksh2 on 8/22/15.
 */
var fs = require('fs');
var contents;

// INCEPTION BWAAAAAAA!!!!
var rs = fs.createReadStream("simple_stream.js");

/**
 * If you’re looking at the preceding code (it creates an object, adds two listeners, and then does...
 * seemingly nothing) and wondering why it doesn’t just exit before the loading is done,
 * recall that Node runs in an event loop waiting for things to happen and executing code when something finally does happen.
 *
 * The following example creates a new read stream given a path with the fs.createReadStream function.
 *
 * It then simply reads itself and prints the contents to the output stream.
 *
 * When it gets a readable event, it calls the read method on the stream and gets back whatever data is currently available.
 *
 * If no data is returned, it just waits until another readable event comes in or an end event is received.
 */

rs.on('readable', function () {
    var str;
    var d = rs.read();
    if (d) {
        if (typeof d == 'string') {
            str = d;
        } else if (typeof d == 'object' && d instanceof Buffer) {
            str = d.toString('utf8');
        }
        if (str) {
            if (!contents)
                contents = d;
            else
                contents += str;
        }
    }
});

rs.on('end', function () {
    console.log("read in the file contents: ");
    console.log(contents.toString('utf8'));
});