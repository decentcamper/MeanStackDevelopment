var echo = {
    handle: function (req, res, next) {
        req.end(res);
    }
};

var connect = require('connect');

connect()
    .use(echo)
    .listen(3000);

