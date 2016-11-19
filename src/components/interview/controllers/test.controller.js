(function ()
{
	'use strict';

	angular.module('test.controllers')
	.controller('testController', testController);

	function testController(numberService) {
		let vm = this;

		vm.minNumber = 0;
		vm.maxNumber = 10;
		vm.all = true;
		vm.even = false;
		vm.left = true;

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
