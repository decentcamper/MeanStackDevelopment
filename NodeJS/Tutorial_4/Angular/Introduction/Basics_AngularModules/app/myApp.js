/**
 * Created by viveksh2 on 4/26/15.
 */
var myAppModule = angular.module('myApp',[]);



myAppModule.filter('myName', function(){
    return function(name){
        return 'Hello ' + name + '!';

    }
});
