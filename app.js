/**
* WeatherApp Module
*
* Description
*/
var WeatherApp = angular.module('WeatherApp', [ 'ngRoute', 'ngResource' ]);

/**
 * Routing
 */
WeatherApp.config([ '$routeProvider', function( $routeProvider ) {
	$routeProvider
		.when('/', {
			templateUrl: './views/home.html',
			controller: 'HomeCtrl'
		}).when('/forecast', {
			templateUrl: './views/forecast.html',
			controller: 'ForecastCtrl'
		}).when('/forecast/:days', {
			templateUrl: './views/forecast.html',
			controller: 'ForecastCtrl'
		}).otherwise({
			redirectTo: '/'
		});
}]);

/**
 * Services
 */
WeatherApp.service('SearchCity', function() {
	var self = this;

	this.city = 'San Diego, us';
});

/**
 * WeatherResults Directive
 */
WeatherApp.directive('weatherResults', function() {
	return {
		restrict: 'E',
		templateUrl: './directives/result-weather.html',
		replace: true,
		scope: {
			weatherDay: '=',
			dateFormatConverter: '&',
			fahrenheitConverter: '&',
			formattedDate: '@'
		}
	}
});