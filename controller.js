(function ()
{
	'use strict';

	angular.module('test.controllers')
	.controller('testController', testController);

	function testController($scope,numberService) {
		$scope.minNumber = 0;
		$scope.maxNumber = 10;

		$scope.range = numberService.range($scope.minNumber,$scope.maxNumber);
	}

})();
