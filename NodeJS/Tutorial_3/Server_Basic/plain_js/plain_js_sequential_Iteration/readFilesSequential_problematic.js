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
            loadfileList(callback); // task 2
        } else {
            callback(null, "The File is already there !!!!!")
        }

    })
}

function loadfileList(callback) {
    fs.readdir("../../myFiles/",
        function (err, data) {
            if (err) {
                return callback(err, null); // return the callback to not have the full if else blocks.Keeps our code Shallow...
            }
            var only_directories = [];
            for (var i = 0; i < data.length; i++) {
                fs.stat("../../myFiles/" + data[i], function (err, stat) { // By the time this call back when put on to the execution stack,
                    // we have already called  writeFile(only_directories, callback) with
                    // the only_directories as an empty array....
                    if (stat.isDirectory()) {
                        only_directories.push(data[i]);
                    }
                })
            }
            writeFile(only_directories, callback); // task3
        })
}


function writeFile(data, callback) {
    fs.writeFile('../../myFiles/result/result.txt', data.join(":"), function (err) {
        if (err) {
            return callback(err);
        }
        callback(null, "File written Successfully");
    });

}
var server = http.createServer(handler);
server.listen(3003);
console.log('Now we are talking');
