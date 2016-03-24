/**
 * Created by viveksh2 on 8/22/15.
 */


var http = require('http');
var fs = require('fs');


function handle_incoming_request(req, res) {
    if (req.method.toLowerCase() == 'get'
        && req.url.substring(0, 9) == '/content/') {
        serve_static_file(req.url.substring(9), res);
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});

        var out = {
            error: "not_found",
            message: "'" + req.url + "' not found"
        };
        res.end(JSON.stringify(out) + "\n");
    }
}

function serve_static_file(file, res) {
    var rs = fs.createReadStream("./static/"+file);
    var ct = content_type_for_path(file);
    res.writeHead(200, {"Content-Type": ct});

    rs.on(
        'readable',
        function () {
            var d = rs.read();
            if (d) {
                if (typeof d == 'string')
                    /**
                     * The design of the http module in Node.js is sufficiently clever that the ServerResponse object you get
                     * to each request on your server is itself actually a stream to which you can write your output!
                     *
                     * You do this writing by calling the write method on the Stream class:
                     */
                    res.write(d);
                else if (typeof d == 'object' && d instanceof Buffer)
               /* console.log(d.toString('utf8'));*/
                    res.write(d.toString('utf8'));
            }
        }
    );

    rs.on(
        'end',
        function () {
            res.writeHead(404, {"Content-Type": "application/json"});
            var out = {
                error: "not_found",
                message: "'" + file + "' not found"
            };
            res.end(JSON.stringify(out) + "\n");
            return;
        }
    );
}

function content_type_for_path(file) {
    return "text/html; charset=UTF-8";
}

var s = http.createServer(handle_incoming_request);
s.listen(3000);
