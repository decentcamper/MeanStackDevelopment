/**
 * Created by viveksh2 on 4/26/16.
 */
angular.module('Menus', [])
    .directive('bbAnimatedMenu', [function () {
        return {
            restrict: 'EA',
            replace: true,
            template: function (tElem, tAttrs) {
                //Inside the template function, the tElem and tAttrs objects are exactly equal to what they are
                // in the static DOM. This is because the template function is run before the compile phase even
                // happens, and there has been no interpolation on the hello attribute.
                console.log("Elements: " + tElem);
                console.log("Attributes: " + tAttrs);

                var temp = '<div class = "animated-menu animated-value-vertical animated-value-left">' +
                    '{{hello}}' +
                    '{{hello2}}' +
                    '</div>';


                return temp;

            },
            link: function (scope, elem, attrs) {

                scope.showMenu = function () {
                    console.log("I am in the link function !!");
                    //elem.toggleClass('animated-menu-push-toright' );
                }
            }

        };
    }]).controller('menuCtrl', function ($scope) {
    $scope.hello = 'Hello';
    $scope.hello2 = 'World'
});

