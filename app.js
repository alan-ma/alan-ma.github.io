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
	app.controller('PortfolioController', ['$scope', function($scope) {
		$scope.profile_open = false;
		$scope.rotate_value = "0deg";
		$scope.clicks = 0;
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
		$scope.toggle_profile = function() {
			$scope.profile_open = !$scope.profile_open;
			if ($scope.profile_open) {
				$scope.open_profile();
			} else {
				$scope.close_profile();
			}
		}
		$scope.open_profile = function() {
			$scope.profile_open = true;
			$scope.rotate_value = "-270deg";
			$scope.clicks = -1;
		}
		$scope.close_profile = function() {
			$scope.profile_open = false;
			$scope.rotate_value = '0deg';
		};
		$scope.check_profile = function() {
			$scope.clicks ++;
			if ($scope.clicks) {
				$scope.close_profile();
			}
		};

		$scope.tabs = [
			{
				"name": "About",
				"value": 0
			},
			{
				"name": "Work",
				"value": 1
			},
			{
				"name": "Fun",
				"value": 2
			}
		];

		$scope.projects = [
			{
				"name": "Hello World!",
				"organization": "Noobs Inc.",
				"tags": ["A", "B", "C"],
				"tab": "work",
				"description": "This is a cool project! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan vestibulum ullamcorper. Aliquam dolor eros, pellentesque vitae odio sed, lacinia semper purus. Sed fermentum, purus at convallis molestie, dui arcu dictum odio, in rutrum lorem urna sed augue. Morbi sollicitudin blandit odio non malesuada. Morbi id quam sed nisi malesuada pulvinar."
			}
		];

		$scope.search = {
			"query": "",
			"tab": 0
		};
	}]);
})();





