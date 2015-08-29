var util = require('util');

// a simple logging middleware
function logit(req, res, next) {
    util.log(util.format('Request recieved: %s, %s', req.headers.valueOf(), req.url));
    next();
}

var connect = require('connect');

connect()
    .use(logit)
    .listen(3000);

