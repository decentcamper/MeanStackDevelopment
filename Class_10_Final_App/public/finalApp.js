/**
 * Created by viveksh2 on 6/15/16.
 */
angular.module('finalApp', []).controller('finalAppCtrl', function ($scope) {


}).factory('finalAppSvc', function ($http) {
    var ser = {};
    ser.getEmp = function () {
        return $http.get('/getEmployees');
    };

    ser.saveEmp = function () {
        return $http.post('/saveEmployee');
    };


})
