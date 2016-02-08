/**
 * Created by viveksh2 on 8/11/15.
 */
angular.module('servicesModuleFinal', [])
    .value('urlToBeUsed', 'https://api.themoviedb.org/3/discover/movie?api_key=8ba9de8b2a7f0c16b68b1c902d81da58&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22')
    .factory('movieService', function (urlToBeUsed, $http) {
        var movieService = {};
        movieService.getMovies = function () {
            return $http.get('https://api.themoviedb.org/3/discover/movie?api_key=8ba9de8b2a7f0c16b68b1c902d81da58&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22');
        };
        movieService.getURLToHit = function () {
            return urlToBeUsed;
        };
        return movieService;

    });
