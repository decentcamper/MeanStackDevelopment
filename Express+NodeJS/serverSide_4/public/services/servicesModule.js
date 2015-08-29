/**
 * Created by viveksh2 on 8/29/15.
 */
angular.module('servicesModule', [])
    .factory('dataManagement', function ($http) {
        return {
            getCarriers: function () {
                var carrierPromise = $http({method: 'GET', url: 'http://localhost:3000/flights/carriers'});
                return carrierPromise;
            },
            getCarriersDetails: function (carrierName) {
                var detailspromise = $http({
                    method: 'GET',
                    url: 'http://localhost:3000/flights/carriers/' + carrierName
                });
                return detailspromise;
            }


        }


    })
