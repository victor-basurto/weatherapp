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