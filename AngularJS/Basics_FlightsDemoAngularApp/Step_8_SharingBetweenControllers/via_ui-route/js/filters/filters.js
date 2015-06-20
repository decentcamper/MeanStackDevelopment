/**
 * Created by viveksh2 on 6/19/15.
 */

flightApp.filter('timestampToDate', function () {
    return function (timestamp) {
        var date = new Date(timestamp * 1000);
        var dateObject = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2);
        return dateObject;
    };
});

flightApp.filter('justCode', function () {
    return function (airportInfo) {
        var code = airportInfo.substring(airportInfo.indexOf('(') + 1, airportInfo.indexOf(')'));
        return code;
    }
});
