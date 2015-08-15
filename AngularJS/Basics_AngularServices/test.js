/**
 * Created by viveksh2 on 8/14/15.
 */


var app = angular.module('myApp', []);

app.config(function ($provide) {
    $provide.provider('game', function () {
        return {
            customTitle: null,
            setTitle: function (title) {
                this.customTitle = title;

            },
            $get: function () {
                return {
                    title: this.customTitle + "Our Mean Stack"
                }
            }
        }
    })
});

app.config(function (gameProvider) {
    gameProvider.setTitle("Which Stack: ")

});

app.controller("AppCtrl", function ($scope, game) {
    $scope.title = game.title;
});








