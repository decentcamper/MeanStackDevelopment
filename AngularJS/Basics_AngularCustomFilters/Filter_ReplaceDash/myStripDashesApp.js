/**
 * Created by viveksh2 on 6/4/15.
 */

angular.module('myStripDashesApp', []).
    controller('myStripDashesController', function ($scope) {
});
angular.module('myStripDashesApp').
    filter('replaceDash', function () {
    return function (text) {
        if (angular.isString(text)) {
        return text.split('-').join(' ');
    }else{

            return text;

        }


    }
});

