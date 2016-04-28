/**
 * SearchCity Service
 */
WeatherApp.service('SearchCity', function() {
	var self = this;

	this.city = 'San Diego, us';	// default search
});

/**
 * RetrieveWeatherData Service
 */
WeatherApp.service('WeatherData', ['$resource', function( $resource ) {
	

	this.getWeatherData = function( days, city ) {
		// Root Connection
		var WEATHERROOT = 'http://api.openweathermap.org/data/2.5/forecast/daily?';
		
		// API Connection
		var weatherAPI = 
			$resource(WEATHERROOT, {
					callback: "JSON_CALLBACK" 
				},{ 
					get: { 
						method: "JSONP" 
					} 
				});
		return weatherAPI.get({ 
				q: city, 
				cnt: days, 
				appid: "3c9b3f6d94643e8ec390b621a9199339" 
			});
	}

}]);