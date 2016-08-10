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


function loadFilesSequentially(data, callback) {
    var only_directories = [];
    (function iterator(index) {
        if (index == data.length) {
            callback(null, only_directories);
        } else {
            //NodeJS/Tutorial_3/Server_Basic/myFiles
            fs.stat("myFiles/" + data[index],
                function (err, stat) {
                    if (stat.isDirectory()) {
                        only_directories.push(data[index]);
                    }
                    iterator(index + 1);
                })
        }
    })(0);

}

function loadfileList(callback) {
    fs.readdir("myFiles/",
        function (err, data) {
            if (err) {
                return callback(err, null); // return the callback to not have the full if else blocks.Keeps our code Shallow...

            }
            loadFilesSequentially(data, callback);
        })
}

var server = http.createServer(handler);
server.listen(3006);
console.log('Now we are talking');





