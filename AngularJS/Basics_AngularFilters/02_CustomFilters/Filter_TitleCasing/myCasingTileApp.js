/**
 * Created by viveksh2 on 6/4/15.
 */
var myCasingTileApp = angular.module('myCasingTileApp', []);

myCasingTileApp.filter('casingTitleFilter', function () {
    return function (textToBeCased) {
        if (angular.isString(textToBeCased)) {
            return textToBeCased.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });

        } else {
            return textToBeCased;
        }
    }
});
