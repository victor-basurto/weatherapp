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