(function() {
	var app = angular.module('portfolio', []);
	app.controller('LoadingController', function($scope) {
		$scope.name = "";
		$scope.data = ['A', 'l', 'a', 'n', ' ', 'M', 'a', '.'];
		$scope.transform_value = "translateX(0)";
		$scope.show_intro = true;
		$scope.scale_value = 'scale(1)';
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
			$scope.scale_value = 'scale(0.9)';
			$scope.$apply();
			setTimeout(function() {
				$scope.scale_value = 'scale(1)';
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





