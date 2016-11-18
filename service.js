(function ()
{
	'use strict';

	angular.module('test.services')
	.service('numberService', numberService);

	function numberService() {

		this.range = function(min,max){
			let rangeArray = [];			
			for (let i = min; i <= max; i++) {
				rangeArray.push(i);
			}
			return rangeArray;
		};

	}

})();
