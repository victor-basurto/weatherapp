WeatherApp.controller('HomeCtrl', [
	'$scope', 
	'$location',
	'SearchCity', 
	function( $scope, $location, SearchCity ) {
		$scope.name = 'Home';

		// Value from SearchCity Service
		$scope.city = SearchCity.city;

		// watch for changes
		$scope.$watch('city', function() {
			SearchCity.city = $scope.city;
		});

		// submit form
		$scope.submit = function() {
			$location.path( '/forecast' );
		}
}]);