var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/FlightsDB');
var app = express();
var Flight = mongoose.model('Flight', {
    ident: String,
    timestamp: String,
    longitude: String,
    latitude: String,
    groundSpeed: String,
    updateType: String,
    heading: String,
    arrivalTime: String
});
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.get('/getCarriers', function (req, res) {
    Flight.find(function (err, flights) {
        if (err) {
            res.header("status", 500);
            res.send(err);
        }
        res.send(flights);
    })
});
app.post('/saveLFlight', function (req, res) {
    var flight = req.body.flight;
    var flightm = new Flight({
        ident: flight.ident,
        timestamp: flight.timestamp,
        longitude: flight.longitude,
        latitude: flight.latitude,
        groundspeed: flight.groundspeed,
        altitude: flight.altitude,
        updateType: flight.updateType,
        heading: flight.heading,
        arrivalTime: flight.arrivalTime
    });
    flightm.save(function (err, flights) {
        if (err) {
            res.header("status", 500);
            res.send(err);
        }
        res.send();

    })

});

app.listen(3012);
