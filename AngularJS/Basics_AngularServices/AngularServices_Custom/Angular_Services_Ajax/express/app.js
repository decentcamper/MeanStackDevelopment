/**
 * Created by viveksh2 on 8/11/15.
 */
var express = require('express');
var http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.set('port', 3000);
app.set('hostname', "localhost");

var data = [
    {"firstName": "Jeff", "lastname": "Winger"},
    {"firstName": "Troy", "lastname": "Barnes"},
    {"firstName": "Britta", "lastname": "Perry"},
    {"firstName": "Abed", "lastname": "Nadir"}
];

app.get('/users', function (req, res) {
    res.send(data);
});
app.post('/users', function (req, res) {
    data.push(req.body);
    res.send(data);
});

app.listen(3000, 'localhost');
