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


function loadfileList(callback) {
    fs.readdir("../../myFiles/",
        function (err, data) {
            if (err) {
                return callback(err, null);
            }
            var only_directories = [];
            var completed = 0;
            var errored = false;

            /**
             * The final callback...
             * @param err
             * @returns {*}
             */
            function done(err) {
                if (err) {
                    errored = true;
                    return callback(err, null);
                }
                callback(null, only_directories)

            }

            data.forEach(function (file) {
                fs.stat("../../myFiles/" + file,
                    function (err, stat) {
                        if (err) {
                            errored = true;
                            return done(err);
                        }
                        if (stat.isDirectory()) {
                            only_directories.push(file)
                        }
                        if (++completed === data.length && !errored) {
                            done(null);
                        }

                    })
            })
        })
}

var server = http.createServer(handler);
server.listen(3006);
console.log('Now we are talking');

//The Pattern Which we can relate to :
/*

 var tasks = [...];
 var completed = 0;
 tasks.forEach(function(task) {
 task(function() {
 if(++completed === tasks.length) {
 finish();
 }
 });
 });

 function finish() {
 //all the tasks completed
 }
 */







