/**
 * Created by viveksh2 on 9/9/15.
 */
var sfo_amsterdam = {
    carrierName: "BritishAirways",
    flights: [
        {
            "ident": "EJA944",
            "timestamp": "1434510481",
            "longitude": "-113.04166",
            "latitude": "42.07695",
            "groundspeed": "531",
            "altitude": "430",
            "updateType": "TZ",
            "heading": "65",
            "arrivalTime": "0"
        },
        {
            "ident": "UAL870",
            "timestamp": "1434510780",
            "longitude": "159.62547",
            "latitude": "-31.17262",
            "groundspeed": "456",
            "altitude": "290",
            "updateType": "TP",
            "heading": "52",
            "arrivalTime": "0"
        },
        {
            "ident": "UAL869",
            "timestamp": "1434510780",
            "longitude": "-151.16434",
            "latitude": "52.16279",
            "groundspeed": "507",
            "altitude": "330",
            "updateType": "TP",
            "heading": "282",
            "arrivalTime": "0"
        },
        {
            "ident": "UAL871",
            "timestamp": "1434510435",
            "longitude": "178.13333",
            "latitude": "53.05000",
            "groundspeed": "540",
            "altitude": "340",
            "updateType": "TZ",
            "heading": "270",
            "arrivalTime": "0"
        }

    ]



};


var flightsDef = {
    ident : 'string',
    timestamp: 'string',
    longitude: 'string',
    latitude: 'string',
    groundspeed: 'string',
    altitude: 'string',
    updateType: 'string',
    heading: 'string',
    arrivalTime: 'string'

};



var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flightsSchema  = new Schema(flightsDef);
// Define a schema
var flightsSchema = new Schema({carrierName:'string', flights:[flightsSchema]});
flightsSchema.methods.print = function () { console.log('I am', this.carrierName, 'and my ground speed is ', this.flights[0].ident); };

// Compile it into a model
var flight = mongoose.model('flightModel', flightsSchema);

mongoose.connect('mongodb://127.0.0.1:27017/mongo_1');
var db = mongoose.connection;
db.once('open', function callback() {
    console.log('connected!');

    // Use the model
    var flights = new flight(sfo_amsterdam);
    flights.print(); // I am tony the small
    flights.save(function (err) {
           //db.collection('flightmodels').drop(function () { db.close();})

    });
});

