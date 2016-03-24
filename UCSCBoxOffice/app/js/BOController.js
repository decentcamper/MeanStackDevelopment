/**
 * Created by viveksh2 on 11/1/15.
 */
angular.module('myApp.controllers',[]).
    controller('BOMoviesListController', ['$scope','BOService',function($scope, BOService){
            $scope.countries = BOService.getCountries();
    }]);
