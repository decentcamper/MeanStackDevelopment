var express = require('express');
/**
 * JSON body parser
 * Raw body parser
 * Text body parser
 * URL-encoded form body parser
 *
 * @type {exports|module.exports}
 */


var bodyParser = require('body-parser');

var app = express()
    .use(bodyParser.json())
    .use(function (req, res) {
        /**
         * The body-parser sets the req.body to an empty object if the request body
         * does not contain any JSON or urlencoded payload.
         */
        if (req.body.foo) {
            res.end('Body parsed! Value of foo: ' + req.body.foo);
        }
        else {
            res.end('Body does not have foo!');
        }
    })
    .use(function (err, req, res, next) {
        res.end('Invalid body!');
    })
    .listen(3000);
