/**
 * Created by viveksh2 on 6/18/15.
 */
var flightApp = angular.module("flightArrival", [

/*********** ngRoute being replaced by the ui.roter *************/
    'ui.router',
    'flightAppControllers'
]);

flightApp.controller("FlightArrivalCtrl", function ($scope) {
    $scope.flightPageTitle = "UCSC Demo Flight App";
});

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


/**flightApp.config(function($routeProvider) {
 $routeProvider
    .when('/viewFlights', {
            templateUrl: 'partials/flightListTemplate.html',
            controller: 'listCtrl'
        })
    .when('/viewFlights/:flightId', {
            templateUrl: 'partials/flightDetailsTemplate.html',
            controller: 'detailsCtrl'
        })
    .otherwise({
            redirectTo: '/viewFlights'
        });
 });**/




flightApp.config(function ($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise('/viewFlights');
    $stateProvider.
        state("home", {
            url: "/viewFlights",
            controller: "listCtrl",
            templateUrl: "partials/flightListTemplate.html"
        })
        .state("details", {
            url: '/viewFlights/:flightId',
            controller: 'detailsCtrl',
            templateUrl: 'partials/flightDetailsTemplate.html'
        })


});



