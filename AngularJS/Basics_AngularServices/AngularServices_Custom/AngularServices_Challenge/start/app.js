/**
 * Created by viveksh2 on 8/11/15.
 */

var app = angular.module("myBoxOfficeApp", ['servicesModule']);
app.value('tmdbBaseURL', 'http://image.tmdb.org/t/p/w500/');
app.controller("myBoxOfficeCtrl", function ($scope, movieService, tmdbBaseURL) {
    $scope.baseTMDBURL = tmdbBaseURL;
    $scope.movieDBURL = movieService.getURLToHit();
    $scope.movies = null;

    var promise = movieService.getMovies();
    promise.success(function(data){
        $scope.movies = data.results;
        console.log(data.results) ;
    }).error(function(data){
        console.log('Aww Snap...');

    });


    // use the movie Service to fetch the records...
});
