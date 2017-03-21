(function() {
	var app = angular.module('portfolio', ['ngAnimate']);
	app.controller('LoadingController', ['$scope', function($scope) {
		$scope.name = "";
		$scope.data = ['A', 'l', 'a', 'n', ' ', 'M', 'a'];
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
		}, 1500);
		setTimeout(function() {
			$scope.scale_value = 'scale(0.85)';
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
		}, 2500);
	}]);
	app.controller('HeadingController', ['$scope', function($scope) {
		$scope.profile_open = false;
		$scope.rotate_value = "0deg";
		$scope.mouse_enter = function() {
			if (!$scope.profile_open) {
				$scope.rotate_value = '30deg';
			}
		};
		$scope.mouse_leave = function() {
			if (!$scope.profile_open) {
				$scope.rotate_value = '0deg';
			}
		};
		$scope.open_profile = function() {
			$scope.profile_open = !$scope.profile_open;
			if ($scope.profile_open) {
				$scope.rotate_value = "-270deg";
			} else {
				$scope.rotate_value = '0deg';
			}	
		};
	}]);
})();





