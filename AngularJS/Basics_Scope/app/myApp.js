/**
 * Created by viveksh2 on 4/26/15.
 */
var scopeExample = angular.module('scopeExample', []);
scopeExample.controller('myScopeController', ['$scope', function ($scope) {
    /*
     The scope is a javascript object that is used to update the view....
     */
    $scope.username = '';
    $scope.solicitation = "";
    $scope.sayHello = function () {
        $scope.greeting = $scope.solicitation + $scope.username + '!';
        console.log($scope.username);
    };


}]);
