/**
 * Created by viveksh2 on 8/21/15.
 */




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


var handler = function (req, res) {
    console.log(req.headers);
    verifyAndLoadfileList(function (err, data) { //task 1
        if (err) {
            res.writeHead(503, {"Content-Type": "application/json"});
            errorResp.error = err;
            res.end(JSON.stringify(errorResp) + "\n");
        } else {
            res.writeHead(200, {"Content-Type": "application/json"});
            successResp.data = data;
            res.end(JSON.stringify(successResp) + "\n");
        }
    });
};

function verifyAndLoadfileList(callback) {
    fs.exists("../../myFiles/result/result.txt", function (exists) {
        if (!exists) {
            loadfileList(callback); // task 1
        } else {
            callback(null, "The File is already there !!!!!")
        }

    })
}

function loadfileList(callback) {
    fs.readdir("../../myFiles/",
        function (err, data) {
            if (err) {
                return callback(err, null);
            }
            writeFile(data, callback); // task 2 [passing the result of the previous asynchronous function to the next......]
        })
}


function writeFile(data, callback) {
    fs.writeFile('../../myFiles/result/result.txt', data, function (err) {
        if (err) {
            return callback(err);
        }
        callback(null, "File written Successfully"); //finally the callback is called with the result.....
    });

}
var server = http.createServer(handler);
server.listen(3003);
console.log('Now we are talking');







