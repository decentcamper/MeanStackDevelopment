/**
 * Created by viveksh2 on 8/11/15.
 */

var app = angular.module("myBoxOfficeAppFinal", ['servicesModuleFinal']);
app.value('tmdbBaseURL', 'http://image.tmdb.org/t/p/w500/');
app.controller("myBoxOfficeCtrlFinal", function ($scope, movieService, tmdbBaseURL) {

    $scope.movieDBURL = movieService.getURLToHit();

    $scope.movies = movieService.getMovies()
        .then(function (res) {
            $scope.movies = res.data.results;
            $scope.baseURL = tmdbBaseURL;
            console.log(res.data.results);
        }, function (error) {
            console.log(error.message);

        });


});
