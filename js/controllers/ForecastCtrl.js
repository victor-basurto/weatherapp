/**
 * Weather API Controller
 * @param {Service} SearchCity - Search by city
 * @param {Service} WeatherData - Retrieve data from weather api 
 */
WeatherApp.controller('ForecastCtrl', [
	'$scope', 
	'$routeParams',
	'SearchCity',
	'WeatherData', 
	function( $scope, $routeParams, SearchCity, WeatherData ) {

		$scope.name = 'Forecast';
		$scope.city = SearchCity.city;			// Value from SearchCity Service
		$scope.days = $routeParams.days || 2;	// days displayed

		/**
		 * Get WeatherResults
		 * @params {String} city and days - user input
		 */
		$scope.weatherResult = WeatherData.getWeatherData( $scope.city, $scope.days );
			

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