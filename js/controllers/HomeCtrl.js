WeatherApp.controller('HomeCtrl', [
	'$scope', 
	'SearchCity', 
	function( $scope, SearchCity ) {
		$scope.name = 'Home';

		// Value from SearchCity Service
		$scope.city = SearchCity.city;

		// watch for changes
		$scope.$watch('city', function() {
			SearchCity.city = $scope.city;
		});
}]);