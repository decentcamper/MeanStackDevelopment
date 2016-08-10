/**
 * Created by viveksh2 on 4/22/16.
 */
angular.module('scopeDemoApp', []).controller('scopeDemoAppCtrl', function ($scope) {
    $scope.myMessage = 'How to master the Angular Directives....'
}).directive('bbString', function () {
    return {
        scope: {message: '@theMessage'},
        template: '<input ng-model="message">'
    }
}).directive('bbExpression', function () {
    return {
        scope: {message: '&theMessage'},
        template: '<input ng-model="message">',
        link: function (scope, element, attrs) {
            scope.message = scope.message();
        }
    }
}).directive('bbTwoWay', function () {
    return {
        scope: {message: '=theMessage'},
        template: '<input ng-model="message">'
    }
});
