/**
 * Created by viveksh2 on 6/4/15.
 */

/**
 * This file does not use a variable to store a reference to the module.
 * Instead, it uses the single argument version of the angular.module method to retrieve a reference to it.
 * This single argument is the name we gave the module when we created it.
 * It really doesn’t make much difference which approach you use, and both are commonly used.
 */
// Create a new module
angular.module('myAppModule', []);

// configure the module with a controller
angular.module('myAppModule').controller('MyFilterDemoCtrl', function ($scope) {
        // controller code would go here
    }
);

// configure the module with a filter
angular.module('myAppModule'). filter('stripDashes', function() {
    return function(txt) {
        return txt.replace('-','');
    };
});
