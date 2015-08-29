/**
 * Express ships with the static middleware as a part of its NPM package.
 *
 * So if you are using Express, you can use express.static
 *
 * @type {*|exports|module.exports}
 */

var express = require('express');

var app = express()
    .use(express.static(__dirname + '/public'))
    .listen(3000);
