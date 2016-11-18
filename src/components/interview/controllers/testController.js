(function ()
{
	'use strict';

	angular.module('test.controllers')
	.controller('testController', testController);

	function testController($scope,numberService) {
		$scope.minNumber = 0;
		$scope.maxNumber = 10;
		$scope.all = true;
		$scope.even = false;
		$scope.left = true;

		$scope.change = function(){
			$scope.range = numberService.range($scope.minNumber,$scope.maxNumber);
		};

		$scope.showAll = function(){
			$scope.all = true;
		};

		$scope.changeParity = function(even){
			$scope.all = false;
			$scope.even = even;
		};

		$scope.toggleDisplay = function(left){
			$scope.left = left;
		};

		$scope.range = numberService.range($scope.minNumber,$scope.maxNumber);
	}

})();
