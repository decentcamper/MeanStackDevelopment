var express = require('express');
var serveStatic = require('serve-static');


/**
 *  By using use ‘__dirname’, we make sure that the path is always relative to the current file
 *  instead of the current working directory (CWD).
 *
 *  Relative path names such as ‘./public’ resolve relative to the CWD.
 *
 *  Using ‘__dirname’, making it independent of the CWD.
 */
var app = express()
    .use(serveStatic(__dirname + '/public'))
    .listen(3000);
