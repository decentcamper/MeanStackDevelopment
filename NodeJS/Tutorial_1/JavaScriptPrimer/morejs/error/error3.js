/**
 * Consider a simple getConnection function that takes a callback we need to call after a successful connection
 * the suedo code is as follows:
 * @param callback
 */

function getConnection(callback) {
    var connection;
    try {
        // Lets assume that the connection failed 
        throw new Error('connection failed');

        // Notify callback that connection succeeded?
    }
    catch (error) {
        // Notify callback about error?
    }
}


/**
 * We need to notify the callback about success and failure. This is why Node.js has a convention
 * of calling callbacks with the first argument of error if there is an error.
 * If there is no error, we call back with the error set to null. As a result,
 * a getConnection function designed for the Node.js ecosystem would be something like what is shown below
 * @param callback
 */

function getConnection(callback) {
    setTimeout(function () {
        var connection = {message: "I am the connection..."};
        try {
            // Lets assume that the connection failed
            throw new Error('connection failed');
            // Notify callback that connection succeeded?
            callback(null, connection);
        }
        catch (error) {
            // Notify callback about error?
            callback(error, null);
        }

    }, 5000);

}

/**
 * Having the error as the first argument ensures consistency in error checking.
 * This is the convention followed by all Node.js functions that have an error condition.
 * A good example of this is the file system API that we would discuss in the subsequent sessions.
 */
getConnection(function (error, connection) {
    if (error) {
        console.log('Error:', error.message);
    }
    else {
        console.log('Connection succeeded:', connection.message);
    }
});