/**
 * Created by viveksh2 on 8/7/15.
 */
var fs = require('fs');
function FileObject(filename) {
    this.filename = filename;
    this.file_exists = function (callback) {
        console.log("About to open: " + this.filename);

        fs.open(this.filename, 'r', function (err, handle) {
            if (err) {
                console.log("Can't open: " + this.filename);
                callback(err);
                return;
            }
            fs.close(handle, function () {
            });
            callback(null, true);
        }.bind(this))
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
 * What happened? Most of the time, when you have a function nested within another,
 * it inherits the scope of its parent/host function and should have access to all the same variables.
 * So why does the nested callback function not get the correct value for the filename property?
 *
 * The problem lies with the this keyword and asynchronous callback functions.
 *
 * Don’t forget that when you call a function like fs.open, it initializes itself,
 * calls the underlying operating system function (in this case to open a file),
 * and places the provided callback function on the event queue.
 *
 * Execution immediately returns to the FileObject#file_exists function, and then you exit.
 *
 * When the fs.open function completes its work and Node runs the callback,
 * you no longer have the context of the FileObject class anymore,
 * and the callback function is given a new this pointer!
 *
 * The bad news is that you have, indeed, lost your this pointer referring to the FileObject class.
 *
 * The good news is that the callback function for fs.open does still have its function scope.
 *
 * A common solution to this problem is to “save” the disappearing this pointer in a variable
 * called self or me or something similar.
 */



