(function ()
{
	'use strict';

	angular.module('test.services')
	.service('numberService', numberService);

	function numberService() {

		this.range = function(min,max){
			var maxNumber = max +1; //include last element
      return Array.apply(0, Array(maxNumber))
        .map(function (element, i) {
          return i + min;
      });
		};

	}

})();
