/**
 * Created by viveksh2 on 11/23/15.
 */
angular.module('myBoxOfficeApp',[]).
    controller('myBoxOfficeController', ['$http','$scope', function($http, $scope){
       $http.get('https://api.themoviedb.org/3/discover/movie?api_key=8ba9de8b2a7f0c16b68b1c902d81da58&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22')
           .then(function(res){
               $scope.movies = res.data.results;
               $scope.baseURL = 'http://image.tmdb.org/t/p/w500/';
               console.log(res.data.results);
           }, function(error){
               console.log(error.message);

           });
}]);