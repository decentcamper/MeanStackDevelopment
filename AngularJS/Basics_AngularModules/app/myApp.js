/**
 * Created by viveksh2 on 4/26/15.
 * The key thing is to recognize that when we talk about the module,
 * we are talking about the object we created and named when we called the angular.module method.
 * It is this name that we can use to get a reference to the module whenever we need it.
 */
var myAppModule = angular.module('myApp', []);


// use the js variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
        // controller code would go here
    }
);

myAppModule.filter('myName', function () {
    return function (name) {
        return 'Hello ' + name + '!';

    }
});
