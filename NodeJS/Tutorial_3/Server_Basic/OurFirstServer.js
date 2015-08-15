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

var server = http.createServer(function (req, res) {
    myHandler(req, res);


});


var myHandler = function (req, res) {
    console.log(req.url);
    res.write('Hi guys how are you doing today');
    res.end();


};

server.listen('3000');
console.log('Server running at port 3000');
