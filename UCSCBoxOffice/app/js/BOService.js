/**
 * Created by viveksh2 on 11/1/15.
 */
angular.module("myApp.services",[]).
    value('version', 0.1).
    constant('api-key','8ba9de8b2a7f0c16b68b1c902d81da58').
    constant('movieDBDomain','https://api.themoviedb.org/3').
    constant('popularMovies','/movie/popular').
    constant('topRated','/movie/top_rated').
    constant('upComingMovies','/movie/top_rated').
    factory('BOService', function(){
        var countries = [
            {name: 'USA',code: 'us'},
            {name: 'UK',code: 'uk'},
            {name: 'France',code: 'fr'}
        ];
        return {
            getCountries: function() {
                return countries;
            },
            getMovies: function(whichMovies){
                return $http.jsonp(movieDBDomain + whichMovies+'?'+ API_KEY);

            }
        }
    });
