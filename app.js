(function() {
	var app = angular.module('portfolio', []);
	app.controller('LoadingController', function($scope) {
		$scope.name = "";
		$scope.data = ['A', 'l', 'a', 'n', ' ', 'M', 'a', '.'];
		$scope.transform_value = "translateX(0)";
		$scope.show_intro = true;
		$scope.color_value = '#000';
		setTimeout(function() {
			(function doTimeout (i) {
				setTimeout(function () {
					if (i--) {
						$scope.name += $scope.data[$scope.data.length-1-i];
						$scope.$apply();
						doTimeout(i);
					}
				}, 90);
			})($scope.data.length);
		}, 2000);
		setTimeout(function() {
			$scope.color_value = '#555';
			$scope.$apply();
			setTimeout(function() {
				$scope.color_value = '#000';
				$scope.$apply();
				setTimeout(function() {
					$scope.transform_value = "translateX(-120%)";
					$scope.$apply();
					setTimeout(function() {
						$scope.show_intro = false;
						$scope.$apply();
					}, 400);
				}, 300);
			}, 250);
		}, 3400);
	});
})();





