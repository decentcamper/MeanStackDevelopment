/**
 * Created by viveksh2 on 8/21/15.
 */

/**
 * Created by viveksh2 on 8/21/15.
 */
/*var http = require('http');

 var server = http.createServer(function (request, response) {
 console.log('request starting...');

 // respond
 response.write('Hello Guys how is your Saturday Morning going.....!');
 response.end();

 });

 server.listen(3000);
 console.log('Server running at http://127.0.0.1:3000/');


 var http2 = require('http');*/
var http = require('http');
var fs = require('fs');
var errorResp = {
    error: {
        message: "Something really bad has happened",
        code: 909
    },
    data: null
};
var successResp = {
    error: null,
    data: {}

};


/**
 * This listing adds some new error-handling code to the handle_incoming_request function:
 * If the fs.readdir function tells you that something bad has happened,
 * you would like the caller to be made aware of that fact,
 * so you still return some JSON and the HTTP response code 503 to indicate that something unexpected has happened.
 *
 *
 * The JSON servers should always return as much information as possible to their clients
 * to help them determine if a problem is something they did or something internally wrong on the server itself.
 *
 *
 * @param req
 * @param res
 */
var handler = function (req, res) {
    console.log(req.headers);
    loadfileList(function (err, data) {
        if (err) {
            res.writeHead(503, {"Content-Type": "application/json"});
            errorResp.error = err;
            res.end(JSON.stringify(errorResp) + "\n");
            return;

        } else {
            res.writeHead(200, {"Content-Type": "application/json"});
            successResp.data = data;
            res.end(JSON.stringify(successResp) + "\n");
            return;
        }
    });


};

/**
 *  it calls the fs.readdir function and provides a function that should be called when
 *  all the items in the directory have been loaded.
 *  This callback function has the same prototype that most callbacks
 *  have: an error parameter and a results parameter; you are free to call these whatever you want.
 *
 *
 *
 *  Note that the only parameter to the load_album_list function itself is a callback function.
 *  Because the load_album_list function is itself asynchronous,
 *  it needs to know where to pass the list of albums when it is finished with its work.
 *  It cannot return a value to the caller,
 *  because it will finish executing long before the fs.readdir function calls back to give you the results.
 *
 *
 *
 * Again, this is the core technique of Node application programming:
 * You tell Node to do something and where to send the results when it is done.
 * In the meantime, you go on with other processing.
 * Many of the tasks you have it perform basically end up being a long series of callbacks.
 *
 *
 * @param callback
 */
function loadfileList(callback) {
    fs.readdir("myFiles/",
        function (err, data) {
            if (err) {
                callback(err, null);
                return;
            } else {
                callback(null, data);
                return;
            }
        })
}

var server = http.createServer(handler);
server.listen(3000);
console.log('Now we are talking');





