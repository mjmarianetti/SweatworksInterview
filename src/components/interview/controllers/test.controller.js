(function ()
{
	'use strict';

	angular.module('test.controllers')
	.controller('testController', testController);

	function testController($scope,numberService) {
		let vm = this;

		vm.minNumber = 0;
		vm.maxNumber = 10;
		vm.all = true;
		vm.even = false;
		vm.left = true;

		$scope.$watch(() => vm.minNumber, function (newVal) {
			if(vm.minNumber > vm.maxNumber) {
				vm.minNumber = vm.maxNumber;
			}
		});

		$scope.$watch(() => vm.maxNumber, function (newVal) {
			if(vm.maxNumber < vm.minNumber) {
				vm.maxNumber = vm.minNumber;
			}
		});


		vm.init = () => {
			vm.range = numberService.range(vm.minNumber,vm.maxNumber);
		};

		vm.change = () => {
			vm.range = numberService.range(vm.minNumber,vm.maxNumber);
		};

		vm.showAll = () => {
			vm.all = true;
		};

		vm.changeParity = (even) => {
			vm.all = false;
			vm.even = even;
		};

		vm.toggleDisplay = (left) => {
			vm.left = left;
		};

		vm.init();
	}

})();
