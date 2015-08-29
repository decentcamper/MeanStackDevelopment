/**
 * Created by viveksh2 on 8/21/15.
 */


/**
 * One of the nice things about the app now is that you no longer need
 * to parse the incoming requests or parameters; express does all this for you.
 *
 * So, whereas before you had to include the url module to parse the incoming URL,
 * it’s now ready for you right when you get to the routing functions.
 *
 *
 * Similarly, you never need to parse GET query parameters because they are also prepared for you in advance.
 * @type {*|exports|module.exports}
 */
var express = require('express');
var handlerModule = require('./handlers/handlerModule');

var path = require("path"),
    async = require('async');
fs = require('fs');

var app = express();
app.get('/flights/carriers', handlerModule.flightCarrierListHandler);
app.get('/flights/carriers/:carrierName', handlerModule.flightListHandler);

app.listen(3000);
console.log('Now we are talking');





