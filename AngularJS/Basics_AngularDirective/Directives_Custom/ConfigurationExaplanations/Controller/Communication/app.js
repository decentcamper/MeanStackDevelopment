/**
 * Created by viveksh2 on 7/31/15.
 */
var app = angular.module("app", []);

app.directive("country", function () {
    return {
        restrict: "A",
        controller: function () {
            this.makeAnnouncement = function (message) {
                console.log("Country says: " + message);
            };
        }
    };
});

app.directive("state", function () {
    return {
        restrict: "A",
        require: "^country",
        controller: function () {
            this.makeLaw = function (law) {
                console.log("State Says: " + law);
            };
        },
        link: function (scope, element, attr, countryCtrl) {
            countryCtrl.makeAnnouncement("Daniel");

        }
    };
});

app.directive("city", function () {
    return {
        restrict: "A",
        require: ["^country", "^state"],
        link: function (scope, element, attrs, ctrls) {
            ctrls[0].makeAnnouncement("from city");
            ctrls[1].makeLaw("Jump higher");
        }
    };
});
