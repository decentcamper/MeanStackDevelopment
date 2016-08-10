/**
 * Created by viveksh2 on 3/28/16.
 *
 */

angular.module('finalDemoApp', [])
    .controller('finalDemoAppCtrl', function ($scope, $http) {
        $scope.refresh = function () {
            $http.get('/getCarriers').then(function (res) {
                $scope.flights = res.data;
            }, function (err) {
                $scope.err = err;
            })
        };
        $scope.saveFlight = function () {
            $http.post('/saveLFlight', {flight: $scope.newFlight}).success(function (data) {
                $scope.refresh();
            })
        };
        $scope.refresh();
    });
