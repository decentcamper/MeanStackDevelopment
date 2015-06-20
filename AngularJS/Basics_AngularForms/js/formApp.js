/**
 * Created by viveksh2 on 6/15/15.
 */

angular.module("registrationApp", [])
    .controller("regCtrl", function ($scope) {
        $scope.person = {};

        $scope.person.channels = [
            { value: "television", label: "Television" },
            { value: "radio", label: "Radio" },
            { value: "social-media", label: "Social Media"},
            { value: "other", label: "Other"}
        ];

        $scope.person.newsletterOptIn = false;

        $scope.person.register = function () {
            <!-- pending implementation -->
        }


    });
