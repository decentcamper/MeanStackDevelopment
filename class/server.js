/**
 * Created by viveksh2 on 8/29/15.
 */
var express = require('express');


var app = express()
    .use(express.static(__dirname + '/public'))
    .listen(3000);
