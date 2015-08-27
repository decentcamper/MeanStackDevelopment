/**
 * Created by viveksh2 on 8/21/15.
 */
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
    console.log("INCOMING REQUEST: " + req.method + " " + req.url);

    /**
     * This is to serve all the directories with  /carriers.json
     */
    if (req.url == '/carriers.json') {
        flightCarrierListHandler(req, res);
    }
    /**
     * This is to serve individual files in the directories....
     */

    else if (req.url.substr(0, 9) == '/carriers'
        && req.url.substr(req.url.length - 5) == '.json') {
        flightListHandler(req, res);
    }

    else {
        send_failure(res, 404, invalid_resource());
    }


    function flightCarrierListHandler(req, res) {
        console.log("I am here");
        loadflightCarrierList(function (err, data) {
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
        })
    }
};

function flightListHandler(req, res) {
    console.log("I am here again...");
    var flightCarrierName = req.url.substr(9, req.url.length - 14);
    loadFlightList(flightCarrierName, function (err, data) {
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
    })
};


function loadflightCarrierList(callback) {
    fs.readdir("myFiles/",
        function (err, data) {
            if (err) {
                callback(err, null);
                return;
            } else {

                var only_directories = [];

                (function iterator(index) {
                    if (index == data.length) {
                        callback(null, only_directories);
                    } else {
                        fs.stat("myFiles/" + data[index],
                            function (err, stat) {
                                if (stat.isDirectory()) {
                                    /**
                                     *
                                     * @type {{name: *}}
                                     */
                                    var obj = {name: data[index]};
                                    only_directories.push(obj);
                                }
                                iterator(index + 1);
                            })
                    }
                })(0);

            }
        })
}


/**
 * You can see that the new function loadFlightList is quite similar to the loadflightCarrierList function.
 *
 * It enumerates all the items in the carrier folder,
 * then goes through each of them to make sure it is a regular file, and returns that final list.
 *
 * I also added a couple extra lines of code to the error handling for fs.readdir in load_album:
 *
 *
 * Started Passing the carrier_name
 * Used the name with the path
 * @param carrier_name
 * @param callback
 */
function loadFlightList(carrier_name, callback) {
    /**
     * we will just assume that any directory in our 'carriers'
     // subfolder is an flight.
     */
    fs.readdir("myFiles/" + carrier_name,
        function (err, data) {
            if (err) {
                callback(err, null);
                return;
            } else {
                var path = "myFiles/" + carrier_name + "/";
                var only_json_Files = [];
                (function iterator(index) {
                    /**
                     *
                     */
                    if (index == data.length) {
                        /**
                         *
                         * @type {{short_name: *, flights: *}}
                         */
                        var obj = {
                            short_name: carrier_name,
                            flights: only_json_Files
                        };
                        callback(null, obj);
                    } else {
                        fs.stat(path + data[index],
                            function (err, stat) {
                                if (stat.isFile()) {
                                    /**
                                     *
                                     * @type {{name: *}}
                                     */
                                    var obj = {
                                        filename: data[index],
                                        desc: data[index]
                                    };
                                    only_json_Files.push(obj);
                                }
                                iterator(index + 1);
                            })
                    }
                })(0);

            }
        })
}


function make_error(err, msg) {
    var e = new Error(msg);
    e.code = err;
    return e;
}
function send_success(res, data) {
    res.writeHead(200, {"Content-Type": "application/json"});
    var output = {error: null, data: data};
    res.end(JSON.stringify(output) + "\n");
}
function send_failure(res, code, err) {
    var code = (err.code) ? err.code : err.name;
    res.writeHead(code, {"Content-Type": "application/json"});
    res.end(JSON.stringify({error: code, message: err.message}) + "\n");
}
function invalid_resource() {
    return make_error("invalid_resource",
        "the requested resource does not exist.");
}
function no_such_album() {
    return make_error("no_such_album",
        "The specified album does not exist");
}
var server = http.createServer(handler);
server.listen(3000);
console.log('Now we are talking');





