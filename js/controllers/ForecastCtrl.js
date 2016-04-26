WeatherApp.controller('ForecastCtrl', [
	'$scope', 
	'$resource',
	'$routeParams',
	'SearchCity', 
	function( $scope, $resource, $routeParams, SearchCity ) {

		// Root Connection
		var WEATHERROOT = 'http://api.openweathermap.org/data/2.5/forecast/daily?';

		$scope.name = 'Forecast';
		$scope.city = SearchCity.city;			// Value from SearchCity Service
		$scope.days = $routeParams.days || 2;	// days displayed

		// API Connection
		$scope.weatherAPI = 
			$resource(WEATHERROOT, {
					callback: "JSON_CALLBACK" 
				},{ 
					get: { 
						method: "JSONP" 
					} 
				});

		// User Params
		$scope.weatherResult = 
			$scope.weatherAPI.get({ 
				q: $scope.city, 
				cnt: $scope.days, 
				appid: "3c9b3f6d94643e8ec390b621a9199339" 
			});

		/**
		 * Return Fharenheit degrees
		 * @param {Number} degk degrees received from weatherAPI
		 */
		$scope.convertToFahrenheit = function( degk ) {
			return Math.round(( 1.8 * ( degk - 273 )) + 32 );
		}

		/**
		 * Return Todays Date
		 * @param {Date} date received from weatherAPI
		 */
		$scope.dateFormat = function( dt ) {
			return new Date( dt * 1000 );
		}
}]);