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
    $scope.categories = ['Option1', 'Option2'];
});



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



