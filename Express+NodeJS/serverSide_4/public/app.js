/**
 * Created by viveksh2 on 8/11/15.
 */
var app = angular.module("app", ['controllersModule', 'ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/viewCarriers', {
            templateUrl: 'templates/carriers.html',
            controller: 'carriersCtrl'
        })
        .when('/viewFlights/:flightId', {
            templateUrl: 'templates/carriersDetails.html',
            controller: 'carriersDetailsCtrl'
        })
        .otherwise({
            redirectTo: '/viewCarriers'
        });
});
