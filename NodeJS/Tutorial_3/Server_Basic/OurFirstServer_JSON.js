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

var server = http.createServer(myHandler);


function myHandler(req, res) {
    console.log(req.url);
    load_album_list(myFilesReader, req, res);

};

function myFilesReader(err, data, req, res) {
    if (err) {
        var errorOut = {
            error: "Missing Data",
            Message: "You must give a valid directory "
        };
        res.writeHead(503, {"Content-Type": "application/json"});
        res.end(JSON.stringify(errorOut) + "\n");
        return;
    } else {
        var out = {
            error: null,
            data: {albums: data}
        };
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(out) + "\n");
        return;
    }
};


/**
 *
 * @param callback
 * @param req
 * @param res
 *
 * after fs.readdir has finished, you check the results.
 * If an error occurs, you send that back to the caller
 * (the function you passed to load_album_list in the handle_incoming_request function);
 * otherwise, you send the list of folders (albums) back to the caller with null indicating no error.
 *
 */
function load_album_list(callback, req, res) {
    fs.readdir(
        "myFiles/",
        function (err, files) {
            if (err) {
                callback(err, null, req, res);
                return;
            }

            var only_dirs = [];
            /* for(var i = 0 ; i <files.length; i ++){
             fs.stat("myFiles" + files[i], function(err, stat){
             if(err){
             return;
             }
             if(stat.isDirectory()){
             onlyDirs.push(files[i]);
             }
             })


             }*/

            (function iterator(index) {
                if (index == files.length) {
                    callback(null, only_dirs, req, res);
                    return;
                }

                fs.stat(
                    "myFiles/" + files[index],
                    function (err, stats) {
                        if (err) {
                            callback(err, null, req, res);
                            return;
                        }
                        if (stats.isDirectory()) {
                            only_dirs.push(files[index]);
                        }
                        iterator(index + 1)
                    }
                );
            })(0);


            //callback(null, onlyDirs, req,res);
        }
    );
}


server.listen('3000');
console.log('Server running at port 3000');

/**
 * Starting with this first new program,
 * you can standardize the output of your JSON responses to always
 * have an error field in the output.
 *
 * This way, calling applications can quickly determine the success or failure of the request.
 * In cases in which a failure does occur, you always include a message field with more information,
 * and for cases in which the JSON response is supposed to return some data, you always include a data field:
 *
 *
 * // failure responses will look like this:
 * {    error: "missing_data",
 *      message: "You must include a last name for the user"
 *  }
 *
 *  // success responses will usually have a "data" object
 *  { error: null,
 *  data: {
       user: {
           first_name: "Vivek",
           last_name: "Sharma",
           email: "vivekSharmao@example.org"
       }
   }
 }
 *
 *
 *

 *
 *
 *
 */
