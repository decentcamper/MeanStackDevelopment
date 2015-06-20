var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('request starting...');

    // respond
    response.write('Hello Guys how is your Saturday Morning going.....!');
    response.end();

});

server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');