/**
 * Created by viveksh2 on 8/15/16.
 */
/**
 * Created by viveksh2 on 8/21/15.
 */




var http = require('http');
var fs = require('fs');
var waterfall = require('async-waterfall');


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


var handler = function (req, res) {
    console.log(req.headers);

    waterfall([
        function (callback) {
            fs.exists("../myFiles/result/result.txt", function (exists) {
                if (!exists) {
                    callback(null)
                } else {
                    callback(new Error("File Already Exists!!!!"), null);
                }
            })
        }, function (callback) {
            fs.readdir("../myFiles/",
                function (err, data) {
                    if (err) {
                        return callback(err);
                    }
                    callback(null, data);
                })
        }, function (data, callback) {
            fs.writeFile('../myFiles/result/result.txt', data, function (err) {
                if (err) {
                    return callback(err);
                }
                callback(null, "Result File written Successfully...."); //finally the callback is called with the result.....
            });
        }
    ], function (err, data) {

        if (err) {
            res.writeHead(503, {"Content-Type": "application/json"});
            errorResp.error = err.message;
            res.end(JSON.stringify(errorResp) + "\n");
        } else {
            res.writeHead(200, {"Content-Type": "application/json"});
            successResp.data = data;
            res.end(JSON.stringify(successResp) + "\n");
        }
    })
};


var server = http.createServer(handler);
server.listen(3003);
console.log('Now we are talking');







