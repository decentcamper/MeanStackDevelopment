/**
 * Created by viveksh2 on 8/11/15.
 */

var module = angular.module('myapp', []);


/**
 * This method takes two arguments, the first of which is the name of our service.
 * We named this service dateTimeService.
 * The second argument is the factory function, which returns an object.
 * This object is known as the service object,
 * and it represents the service that you will ultimately use in your application.
 */


/**
 * When the application first needs to use this service, the framework will call the factory function.
 * In this example, the service object that it creates and returns is called dateTimeSvc,
 * and it is this object that is used whenever the service is needed again.
 *
 * In other words, this service object, once created, is common to the entire application.
 * This is a very important point, because it means that changes made to the state of this object
 * remain in play throughout the lifetime of the application.
 *
 *
 * As the primary purpose of our factory function is to create an object with our service’s functionality,
 * we busy ourselves doing just that.
 * We set up an empty dateTimeSvc object,
 * and then we attach to it the two service methods: getDate() and getTime().
 * We finish by specifying dateTimeSvc as the return value.
 *
 */
module.factory('dateTimeService', function () {

    var dateTimeSvc = {};
    dateTimeSvc.getDate = function () {
        return new Date().toDateString();
    };

    dateTimeSvc.getTime = function () {
        return new Date().toTimeString();
    };

    return dateTimeSvc;

})
/**
 * With the service in place, it’s time to turn our attention to our controller,
 * so that we can find out how to make use of it.
 *
 *
 * The main thing to note about the controller function is that its second argument,
 * the anonymous function, asks for the dateTimeService in exactly the same way that
 * we have already seen when looking at the built-in services.
 *
 *
 * As we registered our service using the name dateTimeService,
 * Angular has no problem resolving this dependency for us.
 */

    .controller("MyController", function ($scope, dateTimeService) {

        $scope.theDate = dateTimeService.getDate();
        $scope.theTime = dateTimeService.getTime();

    });