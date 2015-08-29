/**
 * Created by viveksh2 on 8/11/15.
 */
var app = angular.module("app", []);


app.factory('dataManagement', function ($http) {
    return {
        getData: function () {
            //var promise = $http.get("http://localhost:3000/users");
            var promise = $http({method: 'GET', url: 'http://localhost:3000/flights/carriers'});
            return promise;
        }


    }
});
app.controller("AppCtrl", function ($scope, dataManagement) {

    var getDataPromise = dataManagement.getData();

    getDataPromise.success(function (data) {
        $scope.carriers = data.data;
    });

    getDataPromise.error(function (data, status) {
        $scope.errorMessage = status;
    });


});
