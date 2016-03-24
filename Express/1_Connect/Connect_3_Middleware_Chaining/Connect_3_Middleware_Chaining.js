function parseJSON(req, res, next) {

    /**
     * It simply checks if the client request is of type application/json.
     *
     * If not, it passes the control onto the next middleware.
     */
    if (req.headers['content-type'] == 'application/json') {

        // Load all the data
        var readData = '';

        /**
         * Otherwise, it waits for the client request to completely stream to the server and,
         *
         * once done, tries to parse the data using JSON.parse.
         */
        req.on('readable', function () {
            readData += req.read();
        });

        // Try to parse
        req.on('end', function () {
            /**
             * If it succeeds, req.body is set.

             */
            try {
                req.body = JSON.parse(readData);
            }
            catch (e) { }

            /**
             * Whether the JSON was parsed and req.body was set or not,
             *
             * we still pass the control to the next middleware.
             */
            next();
        })
    }
    else {
        next();
    }
}


function mySecondMiddleware(req, res) {
    if (req.body) {
        res.end('JSON parsed!, value of foo: '+ req.body.foo);
    }
    else {
        res.end('no JSON detected!');
    }
}

var connect = require('connect');

connect()
    .use(parseJSON)
    .use(mySecondMiddleware)
    .listen(3000);

