var http = require('http');
var fs = require('fs');
var path = require('path');

function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Error 404: Resource not found.');
    response.end();
}

var server = http.createServer(function (req, res) {
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream('./public/saturday.html').pipe(res);
        //res.sendFile(path.resolve(process.cwd() + '/public/appSettings/emailsettings.html'));
    }
    else {
        send404(res);
    }
}).listen(3012);
console.log('server running on port 3000');
