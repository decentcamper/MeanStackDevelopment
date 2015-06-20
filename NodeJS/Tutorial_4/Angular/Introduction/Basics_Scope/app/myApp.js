/**
 * Created by viveksh2 on 4/26/15.
 */
var scopeExample = angular.module('scopeExample', []);
scopeExample.controller('myScopeController' ,['$scope' , function($scope){
    /*
        The scope is a javascript object that is used to update the view....
     */
    $scope.username = 'World';
    $scope.sayHello = function() {
        $scope.greeting = 'Hello ' + $scope.username + '!';
    };
    $scope.AnotherGreeting = "Hi There";
}]);
