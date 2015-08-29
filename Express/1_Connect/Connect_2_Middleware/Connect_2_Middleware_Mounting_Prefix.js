function echo(req, res, next) {
    req.pipe(res);
}

var connect = require('connect');

connect()
    .use('/echo', echo)
    .use(function (req, res) { res.end('Wassup!'); })
    .listen(3000);


/**
 * $ curl http://127.0.0.1:3000/echo -d "hello world!"
 * hello world!
 $ curl http://127.0.0.1:3000/ -d "hello world!"
 Wassup!
 */
