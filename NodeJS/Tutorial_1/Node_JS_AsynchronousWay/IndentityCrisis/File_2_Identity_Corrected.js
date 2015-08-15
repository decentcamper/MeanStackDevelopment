/**
 * Created by viveksh2 on 8/7/15.
 */
var fs = require('fs');
function FileObject(filename) {
    this.filename = filename;
    this.file_exists = function (callback) {
        var self = this;
        console.log("About to open: " + self.filename);
        fs.open(this.filename, 'r', function (err, handle) {
            if (err) {
                console.log("Can't open: " + self.filename);
                callback(err);
                return;
            }
            fs.close(handle, function () {
            });
            callback(null, true);
        });
    };
}


/**
 * The call back to be passed..
 * @param err
 * @param handler
 */

var callBack = function (err, handler) {
    if (err) {
        console.log("Aww Snap...." + JSON.stringify(err));
        return;
    } else {
        console.log("File Exists...");
    }
};


var myFileObject = new FileObject('A_file_which_does_not_exists');
myFileObject.file_exists(callBack);
/**
 * Because function scope is preserved via closures,
 * the new self variable is maintained for you even
 * when your callback is executed asynchronously later by Node.js.
 *
 * You will make extensive use of this in all your applications.
 *
 * Some people like to use me instead of self because it is shorter;
 *
 * others still use completely different words.
 *
 * Pick whatever kind you like and stick with it for consistency.
 */



