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
var handler = function (req, res) {
    console.log(req.headers);
    res.write("How is this Wednesday Evening treating you guys....");
    res.end();

};
var server = http.createServer(handler);
server.listen(3000);
console.log('Now we are talking');





