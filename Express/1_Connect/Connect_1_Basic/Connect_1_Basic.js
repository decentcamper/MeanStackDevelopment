/**
 * If you run this server, it will return a 404 (Not Found) for every client request.
 *
 * This is the built-in behavior provided by connect.
 *
 * In the absence of some middleware to handle the client request, connect will return a 404.
 *
 *In addition to being a function that can accept a request and response objects,
 *
 * the connect dispatcher has a member function, use, that is used to register a middleware with connect.
 *
 * We will look at this function shortly when we create our own connect middleware.
 *
 * One utility function is listen.
 *
 *
 * We will internally call http.createServer, register the connect dispatcher with it as we shown previously,
 *
 * (that is, http.createServer(app)), and finally call the created server’s listen function.
 * @type {*|exports|module.exports}
 */


var connect = require('connect')
    , http = require('http');

// Create a connect dispatcher
var app = connect();

// Register with http
http.createServer(app)
    .listen(3000);
console.log('server running on port 3000');
