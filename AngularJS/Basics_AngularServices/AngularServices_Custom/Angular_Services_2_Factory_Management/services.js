/**
 * Created by viveksh2 on 8/11/15.
 */
angular.module('servicesModule', [])
    .factory('dateTimeService', function () {
        var dateTimeSvc = {};
        dateTimeSvc.getDate = function () {
            return new Date().toDateString();
        };

        dateTimeSvc.getTime = function () {
            return new Date().toTimeString();
        };

        return dateTimeSvc;

    });
