'use strict';

(function () {
  'use strict';

  angular.module('test', ['test.controllers', 'test.services', 'test.filters', 'test.directives']);

  angular.module('test.services', []);
  angular.module('test.controllers', []);
  angular.module('test.filters', []);
  angular.module('test.directives', []);
})();
'use strict';

(function () {
	'use strict';

	angular.module('test.services').service('numberService', numberService);

	function numberService() {

		var vm = this;

		vm.range = function (min, max) {
			var rangeArray = [];
			for (var i = min; i <= max; i++) {
				rangeArray.push(i);
			}
			return rangeArray;
		};
	}
})();
'use strict';

(function () {
  'use strict';

  angular.module('test.filters').filter('shouldShow', shouldShow);

  function shouldShow() {
    return function (items, showAll, showEven) {
      if (showAll) {
        return items;
      }

      if (showEven) {
        return items.filter(function (number) {
          return number % 2 === 0;
        });
      }

      return items.filter(function (number) {
        return number % 2 !== 0;
      });
    };
  }
})();
'use strict';

(function () {
  'use strict';

  angular.module('test.directives').directive('numberDirective', numberDirective);

  function numberDirective(shouldShowFilter) {
    return {
      restrict: 'E',
      scope: { items: '=items', showAll: '=showAll', showEven: '=showEven', 'showLeft': '=showLeft' },
      templateUrl: 'components/interview/directives/numberDirective/numbersDirective.html',
      link: function link($scope, element, attrs) {}
    };
  }
})();
'use strict';

(function () {
	'use strict';

	angular.module('test.controllers').controller('testController', testController);

	function testController($scope, numberService) {
		var vm = this;

		vm.minNumber = 0;
		vm.maxNumber = 10;
		vm.all = true;
		vm.even = false;
		vm.left = true;

		vm.init = function () {
			vm.range = numberService.range(vm.minNumber, vm.maxNumber);
		};

		vm.change = function () {
			vm.range = numberService.range(vm.minNumber, vm.maxNumber);
		};

		vm.showAll = function () {
			vm.all = true;
		};

		vm.changeParity = function (even) {
			vm.all = false;
			vm.even = even;
		};

		vm.toggleDisplay = function (left) {
			vm.left = left;
		};

		vm.init();
	}
})();
'use strict';

angular.module('test').run(['$templateCache', function ($templateCache) {
  $templateCache.put('components/interview/directives/numberDirective/numbersDirective.html', '<ul ng-class="showLeft ? \'text-left\' : \'text-right\' ">\n  <li ng-repeat="number in items | shouldShow:showAll:showEven">\n    {{ number }}\n  </li>\n</ul>\n');
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW50ZXJ2aWV3L2ludGVydmlldy5tb2R1bGUuanMiLCJjb21wb25lbnRzL2ludGVydmlldy9zZXJ2aWNlcy9udW1iZXIuc2VydmljZS5qcyIsImNvbXBvbmVudHMvaW50ZXJ2aWV3L2ZpbHRlcnMvc2hvdWxkU2hvdy5maWx0ZXIuanMiLCJjb21wb25lbnRzL2ludGVydmlldy9kaXJlY3RpdmVzL251bWJlckRpcmVjdGl2ZS9udW1iZXIuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9pbnRlcnZpZXcvY29udHJvbGxlcnMvdGVzdC5jb250cm9sbGVyLmpzIiwidGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRpc3QvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ3Rlc3QnLCBbJ3Rlc3QuY29udHJvbGxlcnMnLCAndGVzdC5zZXJ2aWNlcycsICd0ZXN0LmZpbHRlcnMnLCAndGVzdC5kaXJlY3RpdmVzJ10pO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCd0ZXN0LnNlcnZpY2VzJywgW10pO1xuICBhbmd1bGFyLm1vZHVsZSgndGVzdC5jb250cm9sbGVycycsIFtdKTtcbiAgYW5ndWxhci5tb2R1bGUoJ3Rlc3QuZmlsdGVycycsIFtdKTtcbiAgYW5ndWxhci5tb2R1bGUoJ3Rlc3QuZGlyZWN0aXZlcycsIFtdKTtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ3Rlc3Quc2VydmljZXMnKS5zZXJ2aWNlKCdudW1iZXJTZXJ2aWNlJywgbnVtYmVyU2VydmljZSk7XG5cblx0ZnVuY3Rpb24gbnVtYmVyU2VydmljZSgpIHtcblxuXHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHR2bS5yYW5nZSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuXHRcdFx0dmFyIHJhbmdlQXJyYXkgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSBtaW47IGkgPD0gbWF4OyBpKyspIHtcblx0XHRcdFx0cmFuZ2VBcnJheS5wdXNoKGkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJhbmdlQXJyYXk7XG5cdFx0fTtcblx0fVxufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyLm1vZHVsZSgndGVzdC5maWx0ZXJzJykuZmlsdGVyKCdzaG91bGRTaG93Jywgc2hvdWxkU2hvdyk7XG5cbiAgZnVuY3Rpb24gc2hvdWxkU2hvdygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGl0ZW1zLCBzaG93QWxsLCBzaG93RXZlbikge1xuICAgICAgaWYgKHNob3dBbGwpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvd0V2ZW4pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bWJlciAlIDIgPT09IDA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bWJlciAlIDIgIT09IDA7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCd0ZXN0LmRpcmVjdGl2ZXMnKS5kaXJlY3RpdmUoJ251bWJlckRpcmVjdGl2ZScsIG51bWJlckRpcmVjdGl2ZSk7XG5cbiAgZnVuY3Rpb24gbnVtYmVyRGlyZWN0aXZlKHNob3VsZFNob3dGaWx0ZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHNjb3BlOiB7IGl0ZW1zOiAnPWl0ZW1zJywgc2hvd0FsbDogJz1zaG93QWxsJywgc2hvd0V2ZW46ICc9c2hvd0V2ZW4nLCAnc2hvd0xlZnQnOiAnPXNob3dMZWZ0JyB9LFxuICAgICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL2ludGVydmlldy9kaXJlY3RpdmVzL251bWJlckRpcmVjdGl2ZS9udW1iZXJzRGlyZWN0aXZlLmh0bWwnLFxuICAgICAgbGluazogZnVuY3Rpb24gbGluaygkc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7fVxuICAgIH07XG4gIH1cbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ3Rlc3QuY29udHJvbGxlcnMnKS5jb250cm9sbGVyKCd0ZXN0Q29udHJvbGxlcicsIHRlc3RDb250cm9sbGVyKTtcblxuXHRmdW5jdGlvbiB0ZXN0Q29udHJvbGxlcigkc2NvcGUsIG51bWJlclNlcnZpY2UpIHtcblx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0dm0ubWluTnVtYmVyID0gMDtcblx0XHR2bS5tYXhOdW1iZXIgPSAxMDtcblx0XHR2bS5hbGwgPSB0cnVlO1xuXHRcdHZtLmV2ZW4gPSBmYWxzZTtcblx0XHR2bS5sZWZ0ID0gdHJ1ZTtcblxuXHRcdHZtLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2bS5yYW5nZSA9IG51bWJlclNlcnZpY2UucmFuZ2Uodm0ubWluTnVtYmVyLCB2bS5tYXhOdW1iZXIpO1xuXHRcdH07XG5cblx0XHR2bS5jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2bS5yYW5nZSA9IG51bWJlclNlcnZpY2UucmFuZ2Uodm0ubWluTnVtYmVyLCB2bS5tYXhOdW1iZXIpO1xuXHRcdH07XG5cblx0XHR2bS5zaG93QWxsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dm0uYWxsID0gdHJ1ZTtcblx0XHR9O1xuXG5cdFx0dm0uY2hhbmdlUGFyaXR5ID0gZnVuY3Rpb24gKGV2ZW4pIHtcblx0XHRcdHZtLmFsbCA9IGZhbHNlO1xuXHRcdFx0dm0uZXZlbiA9IGV2ZW47XG5cdFx0fTtcblxuXHRcdHZtLnRvZ2dsZURpc3BsYXkgPSBmdW5jdGlvbiAobGVmdCkge1xuXHRcdFx0dm0ubGVmdCA9IGxlZnQ7XG5cdFx0fTtcblxuXHRcdHZtLmluaXQoKTtcblx0fVxufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCd0ZXN0JykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL2ludGVydmlldy9kaXJlY3RpdmVzL251bWJlckRpcmVjdGl2ZS9udW1iZXJzRGlyZWN0aXZlLmh0bWwnLCAnPHVsIG5nLWNsYXNzPVwic2hvd0xlZnQgPyBcXCd0ZXh0LWxlZnRcXCcgOiBcXCd0ZXh0LXJpZ2h0XFwnIFwiPlxcbiAgPGxpIG5nLXJlcGVhdD1cIm51bWJlciBpbiBpdGVtcyB8IHNob3VsZFNob3c6c2hvd0FsbDpzaG93RXZlblwiPlxcbiAgICB7eyBudW1iZXIgfX1cXG4gIDwvbGk+XFxuPC91bD5cXG4nKTtcbn1dKTsiXX0=
