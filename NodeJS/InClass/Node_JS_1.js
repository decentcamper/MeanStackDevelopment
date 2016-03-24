/**
 * Created by viveksh2 on 8/22/15.
 */
var http = require('http');
var fs = require('fs');
var successResp = {
    error: null,
    response: {
        lastName: "Sharma",
        firstName: "Vivek"
    }
};
var errorResp = {
    error: {
        code: 505,
        message: "Something has gone terribly wrong..."

    },
    response: null
};


function carrierReaderHandler(callback) {
    fs.readdir(
        "carriers/", function (err, carriers) {
            if (err) {
                callback(err, null);
            } else {
                var carriers_only = [];

                (function iterator(index) {
                    if (index < carriers.length) {
                        fs.stat("carriers/" + carriers[index], function (err, stat) {
                            if (err) {
                                callback(err, null);
                            } else {
                                if (stat.isDirectory()) {
                                    var obj = {};
                                    obj.name = carriers[index];

                                    carriers_only.push(obj);
                                }
                            }
                            iterator(index + 1);
                        });

                    } else {
                        callback(null, carriers_only)
                    }
                })(0);


            }
        })
}


function flightsReaderHandler(carrier_Name, callback) {
    fs.readdir(
        "carriers/" + carrier_Name + "/", function (err, carriers) {
            if (err) {
                callback(err, null);
            } else {
                var files_only = [];

                (function iterator(index) {
                    if (index < carriers.length) {
                        fs.stat("carriers/" + carrier_Name + "/" + carriers[index], function (err, stat) {
                            if (err) {
                                callback(err, null);
                            } else {
                                if (stat.isFile()) {

                                    var obj = {};
                                    obj.carrier = carrier_Name;
                                    obj.flightName = carriers[index];
                                    files_only.push(obj);
                                }
                            }
                            iterator(index + 1);
                        });

                    } else {
                        callback(null, files_only)
                    }
                })(0);


            }
        })
}
var myRequestHandler = function (req, res) {
    console.log(req.url);
    if (req.url == '/carriers.json') {
        carrierReader(req, res);
    } else if (req.url.substr(0, 9) == '/carriers'
        && req.url.substr(req.url.length - 5) == '.json') {
        var carrier_name = req.url.substring(10, req.url.length - 5);
        flightReader(carrier_name, req, res);
    } else {
        //send_failure(res, 404, invalid_resource());
    }

    console.log(req.headers);
};


function carrierReader(req, res) {
    carrierReaderHandler(function (err, data) {
        if (err) {
            res.writeHead(503, {"Content-type": "application/json"});
            errorResp.error = err;
            res.end(JSON.stringify(errorResp) + "\n");
        } else {
            res.writeHead(200, {"Content-type": "application/json"});
            successResp.response = data;
            res.end(JSON.stringify(successResp) + "\n");
        }
    });
};


function flightReader(carrier_name, req, res) {
    flightsReaderHandler(carrier_name, function (err, data) {
        if (err) {
            res.writeHead(503, {"Content-type": "application/json"});
            errorResp.error = err;
            res.end(JSON.stringify(errorResp) + "\n");
        } else {
            res.writeHead(200, {"Content-type": "application/json"});
            successResp.response = data;
            res.end(JSON.stringify(successResp) + "\n");
        }
    });
};
var server = http.createServer(myRequestHandler);
server.listen(3000);
console.log("Now we're talking.....");


