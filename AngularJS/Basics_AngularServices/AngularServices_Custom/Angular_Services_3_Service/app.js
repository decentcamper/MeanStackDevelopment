/**
 * Created by viveksh2 on 8/11/15.
 */

var app = angular.module("app", []);

function dateServiceFunc() {

    this.getDate = function () {
        return new Date().toDateString();
    };

    this.getTime = function () {
        return new Date().toTimeString();
    };


}

app.service("dateTimeService", dateServiceFunc);

app.controller("AppCtrl", function ($scope, dateTimeService) {
    $scope.theDate = dateTimeService.getDate();
    $scope.theTime = dateTimeService.getTime();
});
