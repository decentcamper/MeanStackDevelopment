/**
 * Created by viveksh2 on 9/9/15.
 */


/**
 * We connect using the connect member function.
 *
 * Then we get access to the database object using mongoose.connection and wait for the open event to fire,
 * indicating a successful connection.
 *
 *
 *  Finally, we close the connection to exit the application.
  * @type {*|exports|module.exports}
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongo_1');

var db = mongoose.connection;
db.on('error', function (err) { throw err });
db.once('open', function callback() {
    console.log('connected!');
    db.close();
});
