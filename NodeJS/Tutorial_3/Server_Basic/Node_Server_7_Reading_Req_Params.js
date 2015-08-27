/**
 * Created by viveksh2 on 8/21/15.
 */
/**
 * Created by viveksh2 on 8/21/15.
 */

var http = require('http');
var fs = require('fs');
var url = require('url');
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
     * Getting the core url which is going to give :flights/SouthWest.json
     * Parsed URL which is going to give us an object :
     * {    search: '?page=1&page_size=20',
     *      query: { page: '1', page_size: '20' },
     *      pathname: '/flights/SouthWest.json',
     *      path: '/flights/SouthWest.json?page=1&page_size=20',
     *      href: '/flights/SouthWest.json?page=1&page_size=20'
     *  }
     */
    req.parsed_url = url.parse(req.url, true);
    var core_url = req.parsed_url.pathname;


    if (core_url == '/carriers.json') {
        flightCarrierListHandler(req, res);
    }

    else if (core_url.substr(0, 9) == '/carriers'
        && core_url.substr(core_url.length - 5) == '.json') {
        flightListHandler(req, res);
    }

    else {
        send_failure(res, 404, invalid_resource());
    }


    function flightCarrierListHandler(req, res) {
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

    var getp = req.parsed_url.query;
    var page_num = getp.page ? getp.page : 0;
    var page_size = getp.page_size ? getp.page_size : 1000;

    if (isNaN(parseInt(page_num))) page_num = 0;
    if (isNaN(parseInt(page_size))) page_size = 1000;


    // format of request is /albums/album_name.json
    var core_url = req.parsed_url.pathname;

    var flightCarrierName = req.url.substr(9, req.url.length - 34);
    loadFlightList(flightCarrierName,
        page_num,
        page_size,
        function (err, data) {
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


function loadFlightList(carrier_name, page, page_size, callback) {

    fs.readdir("myFiles" + carrier_name,
        function (err, data) {
            if (err) {
                callback(err, null);
                return;
            } else {
                var path = "myFiles" + carrier_name + "/";
                var only_json_Files = [];
                (function iterator(index) {
                    /**
                     *
                     */
                    if (index == data.length) {
                        var ps;
                        // slice fails gracefully if params are out of range
                        ps = only_json_Files.splice(page * page_size, page_size);

                        var obj = {
                            short_name: carrier_name,
                            flights: ps
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
server.listen(3001);
console.log('Now we are talking');





