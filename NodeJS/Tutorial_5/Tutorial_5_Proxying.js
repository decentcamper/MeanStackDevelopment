/**
 * Created by viveksh2 on 9/23/15.
 */
var http = require('http');
var server = new http.Server();

server.on("request", function (request, socket) {
    http.request({
        host: 'www.google.com',
        method: 'GET',
        path: "/",
        port: 80
    }, function (response) {
        response.pipe(socket);
    }).end();
});

server.listen(8080);
