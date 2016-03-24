var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongo_1');
var db  = mongoose.connection;
db.on('error',function(err){
    console.log(err.message);
});

db.once('open',function(err){
    if(err){
        console.log(err.message);

    }
    console.log('connected');
});




//var mongoose = require('mongoose');mongoose.connect('mongodb://127.0.0.1:27017/mongo_1');var db = mongoose.connection;db.on('error', function (err) { throw err });db.once('open', function callback() {    console.log('connected!');    db.close();});
