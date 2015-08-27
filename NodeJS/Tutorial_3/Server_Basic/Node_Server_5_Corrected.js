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
    fs.readdir("myFiles/",
        function (err, data) {
            if (err) {
                callback(err, null);
                return;
            } else {

                var only_directories = [];
                /*for(var i = 0; i <data.length ; i++){
                 fs.stat("myFiles/" + data[i], function(err, stat){
                 if(stat.isDirectory()){
                 only_directories.push(data[i]);
                 }
                 })

                 }*/

                (function iterator(index) {
                    if (index == data.length) {
                        callback(null, only_directories);
                    } else {
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
        })
}

var server = http.createServer(handler);
server.listen(3000);
console.log('Now we are talking');





