/**
 * Created by viveksh2 on 8/11/15.
 */
var app = angular.module("app", []);


app.factory('dataManagement', function ($http) {
    return {
        getData: function () {
            //var promise = $http.get("http://localhost:3000/users");
            var promise = $http({method: 'GET', url: 'http://localhost:3000/users'});
            return promise;
        },

        addPerson: function ($scope) {
            $http.post("http://localhost:3000/users", $scope.person)
                .success(function (data, status, headers, config, statusText) {
                    $scope.people = data;
                }).error(function (message, data, status, headers, config, statusText) {
                    console.log('Oops we ran into an error ' + message);


                })
        }
    }
});
app.controller("AppCtrl", function ($scope, dataManagement) {

    var getDataPromise = dataManagement.getData();

    getDataPromise.success(function (data) {
        $scope.people = data;
    });

    getDataPromise.error(function (data, status) {
        $scope.errorMessage = status;
    });


    $scope.addPerson = function () {
        dataManagement.addPerson($scope);

    }
});


