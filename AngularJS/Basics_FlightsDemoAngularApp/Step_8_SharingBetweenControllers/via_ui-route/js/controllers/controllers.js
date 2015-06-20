/**
 * Created by viveksh2 on 6/18/15.
 */

var flightAppControllers = angular.module('flightAppControllers', []);


/**
 * The controller for the list view.....
 */
flightAppControllers.controller('listCtrl', ['$scope', 'flightService',
    function ($scope, flightService) {
        $scope.fligtsInfo = flightService.list();
    }]);


/**
 * ****** The $routeParams are replaced with the $stateParams ******
 *
 *
 *
 *
 * */
flightAppControllers.controller('detailsCtrl', ['$scope', '$stateParams', 'flightService',
    function($scope, $stateParams, flightService) {
        $scope.flightId = flightService.find($stateParams.flightId).id;
        $scope.flightRet = flightService.find($stateParams.flightId);
    }]);