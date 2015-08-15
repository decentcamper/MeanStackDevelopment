/**
 * Created by viveksh2 on 8/11/15.
 */

var app = angular.module("app", []);


function titleProvider() {
    this.title = "MeanCraft";


}

/*app.config(function($provide){
 $provide.factory("gameFactory", function(){
 return {
 title : "StarCraft"
 }
 })
 });*/


/*
 app.config(function($provide){
 $provide.provider("game" , function(){
 return {
 $get : function(){
 return {
 title:"ProvideCraft"
 }
 }
 }
 })
 });
 */

app.provider("wars", function () {
    var title;
    return {
        setTitle: function (titlePassed) {
            title = titlePassed;
        },
        $get: function () {
            return {
                title: "My war Provider" + title
            }
        }
    }
});


/**
 * AngularJS makes the provider object available for dependency injection,
 * using the name of the service combined with the word Provider,
 * so for the example the provider object can be obtained by declaring a dependency on warsProvider.
 * The most common way to obtain and use the provider object is in a function passed to the Module.config method,
 * which will be executed when AngularJS has loaded all of the modules in the application.
 */
app.config(function (warsProvider) {
    warsProvider.setTitle(": I love Mind Games");
});


app.controller("AppCtrl", function ($scope, wars) {
    $scope.title = wars.title;
});
