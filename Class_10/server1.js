var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FlightsDB');
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

var flight = new Flight({
    ident: "EJA944",
    timestamp: "1434510481",
    longitude: "-113.04166",
    latitude: "42.07695",
    groundspeed: "531",
    altitude: "430",
    updateType: "TZ",
    heading: "65",
    arrivalTime: "0"
});

flight.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('saved');
    }
});
