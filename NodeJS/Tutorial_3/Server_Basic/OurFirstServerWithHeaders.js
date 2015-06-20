/**
 * To run the example with curl to log out the server response headers using the -i (that is, include protocol headers in output) option
 * @type {*}
 */
var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('request headers...');
    //console.log(req.headers);
    console.log(req.headers['user-agent']);
    console.log(req.url);
    console.log(req.method);

    // respond
    res.write('hello guys how is the morning going for you.....!');
    res.end();

}).listen(3000);
console.log('server running on port 3000');