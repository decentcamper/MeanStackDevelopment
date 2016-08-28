/**
 * Created by viveksh2 on 8/24/16.
 */

//"CARRIER","ORIGIN","ORIGIN_CITY_NAME","ORIGIN_STATE_ABR","ORIGIN_STATE_FIPS","ORIGIN_STATE_NM","ORIGIN_WAC","DEST","DEST_CITY_NAME","DEST_STATE_ABR",
// "DEST_STATE_FIPS","DEST_STATE_NM","DEST_WAC","DEP_TIME","ARR_TIME","CANCELLED","CANCELLATION_CODE",

var mongoose = require('mongoose');
var Flight = mongoose.model('Flight', {
    CARRIER: String,
    ORIGIN: String,
    ORIGIN_CITY_NAME: String,
    ORIGIN_STATE_ABR: String,
    ORIGIN_STATE_FIPS: String,
    ORIGIN_STATE_NM: String,
    ORIGIN_WAC: String,
    DEST: String,
    DEST_CITY_NAME: String,
    DEST_STATE_ABR: String,
    DEST_STATE_FIPS: String,
    DEST_STATE_NM: String,
    DEST_WAC: String,
    DEP_TIME: String,
    ARR_TIME: String,
    CANCELLED: String,
    CANCELLATION_CODE: String
});

module.exports = Flight;