/**
 * Created by viveksh2 on 8/11/15.
 */

var app = angular.module("app", ['servicesModule']);

app.controller("AppCtrl", function ($scope, dateTimeService) {
    $scope.theDate = dateTimeService.getDate();
    $scope.theTime = dateTimeService.getTime();
});
