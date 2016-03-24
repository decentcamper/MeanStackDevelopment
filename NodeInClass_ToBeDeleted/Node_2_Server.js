/**
 * Created by viveksh2 on 3/21/16.
 */
/**
 * Created by viveksh2 on 3/7/16.
 */
var http = require('http');
var fs = require('fs');
var express = require('express');

var async = require("async");

var errorResp = {
    error: {
        message: "Something Really Bad Has Happened...!!",
        code: 503

    }

};

var successResp = {
    error: null,
    data: {}

};

var app = express();

app.get('/flights/carriers', loadFileDirectoriesHandler);
app.get('/flights/carriers/:carrierName', loadFileDirectoryJSONsHandler);


function loadFileDirectories(callBack) {
    fs.readdir("./myfiles", function (err, data) {
        if (err) {
            callBack(err, null);
            return;
        } else {
            var only_Directories = [];

            function readAsync(file, callback) {
                fs.stat('./myFiles/' + file, function (err, stat) {
                    callback(null, stat);
                });
            }

            async.map(data, readAsync, function (err, results) {
                results.forEach(function (ele, index, arr) {
                    if (ele.isDirectory()) {
                        only_Directories.push(data[index]);
                    }
                });
                callBack(null, only_Directories);
            });


            return;
        }
    })
}

function loadFileDirectoriesHandler(req, res) {
    console.log("I am here in loadFileDirectoriesHandler !!!!");
    loadFileDirectories(function (err, data) {
        if (err) {
            res.writeHead(503, {"Content-Type": "application/json"});
            errorResp.message = err;
            res.end(JSON.stringify(errorResp));
            return;
        } else {
            res.writeHead(200, {"Content-Type": "application/json"});
            successResp.data = data;
            res.end(JSON.stringify(successResp));
            return;
        }
    });

}


function loadFileDirectoryJSONs(param, callback) {
    fs.readdir("./myFiles" + param, function (err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
}

function loadFileDirectoryJSONsHandler(req, res) {
    console.log("I am in the loadFileDirectoryJSONsHandler!!!");
    //console.log(req.url.substr(9,req.url.length -14));

    var carrierName = req.param.carrierName;
    loadFileDirectoryJSONs(carrierName, function (err, data) {
        if (err) {
            res.writeHead(503, {"Content-Type": "application/json"});
            errorResp.message = err;
            res.end(JSON.stringify(errorResp));
            return;
        } else {
            res.writeHead(200, {"Content-Type": "application/json"});
            successResp.data = data;
            res.end(JSON.stringify(successResp));
            return;
        }
    })
}


/*var handler = function(req,res){
 if(req.url == "/carriers.json"){
 loadFileDirectoriesHandler(req,res);
 }else if(req.url.substr(0,9) == '/carriers' &&
 req.url.substr(req.url.length-5) == ".json"){
 loadFileDirectoryJSONsHandler(req,res);
 }
 };
 var server = http.createServer(handler);

 server.listen(3000);*/
app.listen(3000);
