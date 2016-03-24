/**
 * Created by viveksh2 on 8/21/15.
 */
/*var http = require('http');

 var server = http.createServer(function (request, response) {
 console.log('request starting...');

 // respond
 response.write('Hello Guys how is your Saturday Morning going.....!');
 response.end();

 });

 server.listen(3000);
 console.log('Server running at http://127.0.0.1:3000/');


 var http2 = require('http');*/
var http = require('http');


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
   // res.writeHead(200, {"Content-Type": "application/json"});
    successResp.data.message = "I hope we are all good;";

    res.end(JSON.stringify(successResp) + "\n");

};

var server = http.createServer(handler);
server.listen(3000);
console.log('Now we are talking');





