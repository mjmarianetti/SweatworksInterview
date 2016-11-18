(function ()
{
	'use strict';

	angular.module('test.services')
	.service('numberService', numberService);

	function numberService() {

		let vm = this;

		vm.range = (min,max) => {
			let rangeArray = [];
			for (let i = min; i <= max; i++) {
				rangeArray.push(i);
			}
			return rangeArray;
		};

	}

})();
