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
      templateUrl: 'components/interview/directives/numberDirective/numbersDirective.html'
    };
  }
})();
'use strict';

(function () {
	'use strict';

	angular.module('test.controllers').controller('testController', testController);

	function testController(numberService) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW50ZXJ2aWV3L2ludGVydmlldy5tb2R1bGUuanMiLCJjb21wb25lbnRzL2ludGVydmlldy9zZXJ2aWNlcy9udW1iZXIuc2VydmljZS5qcyIsImNvbXBvbmVudHMvaW50ZXJ2aWV3L2ZpbHRlcnMvc2hvdWxkU2hvdy5maWx0ZXIuanMiLCJjb21wb25lbnRzL2ludGVydmlldy9kaXJlY3RpdmVzL251bWJlckRpcmVjdGl2ZS9udW1iZXIuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9pbnRlcnZpZXcvY29udHJvbGxlcnMvdGVzdC5jb250cm9sbGVyLmpzIiwidGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkaXN0L2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCd0ZXN0JywgWyd0ZXN0LmNvbnRyb2xsZXJzJywgJ3Rlc3Quc2VydmljZXMnLCAndGVzdC5maWx0ZXJzJywgJ3Rlc3QuZGlyZWN0aXZlcyddKTtcblxuICBhbmd1bGFyLm1vZHVsZSgndGVzdC5zZXJ2aWNlcycsIFtdKTtcbiAgYW5ndWxhci5tb2R1bGUoJ3Rlc3QuY29udHJvbGxlcnMnLCBbXSk7XG4gIGFuZ3VsYXIubW9kdWxlKCd0ZXN0LmZpbHRlcnMnLCBbXSk7XG4gIGFuZ3VsYXIubW9kdWxlKCd0ZXN0LmRpcmVjdGl2ZXMnLCBbXSk7XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCd0ZXN0LnNlcnZpY2VzJykuc2VydmljZSgnbnVtYmVyU2VydmljZScsIG51bWJlclNlcnZpY2UpO1xuXG5cdGZ1bmN0aW9uIG51bWJlclNlcnZpY2UoKSB7XG5cblx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0dm0ucmFuZ2UgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcblx0XHRcdHZhciByYW5nZUFycmF5ID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gbWluOyBpIDw9IG1heDsgaSsrKSB7XG5cdFx0XHRcdHJhbmdlQXJyYXkucHVzaChpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByYW5nZUFycmF5O1xuXHRcdH07XG5cdH1cbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ3Rlc3QuZmlsdGVycycpLmZpbHRlcignc2hvdWxkU2hvdycsIHNob3VsZFNob3cpO1xuXG4gIGZ1bmN0aW9uIHNob3VsZFNob3coKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpdGVtcywgc2hvd0FsbCwgc2hvd0V2ZW4pIHtcbiAgICAgIGlmIChzaG93QWxsKSB7XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3dFdmVuKSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgIHJldHVybiBudW1iZXIgJSAyID09PSAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBudW1iZXIgJSAyICE9PSAwO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyLm1vZHVsZSgndGVzdC5kaXJlY3RpdmVzJykuZGlyZWN0aXZlKCdudW1iZXJEaXJlY3RpdmUnLCBudW1iZXJEaXJlY3RpdmUpO1xuXG4gIGZ1bmN0aW9uIG51bWJlckRpcmVjdGl2ZShzaG91bGRTaG93RmlsdGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICBzY29wZTogeyBpdGVtczogJz1pdGVtcycsIHNob3dBbGw6ICc9c2hvd0FsbCcsIHNob3dFdmVuOiAnPXNob3dFdmVuJywgJ3Nob3dMZWZ0JzogJz1zaG93TGVmdCcgfSxcbiAgICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9pbnRlcnZpZXcvZGlyZWN0aXZlcy9udW1iZXJEaXJlY3RpdmUvbnVtYmVyc0RpcmVjdGl2ZS5odG1sJ1xuICAgIH07XG4gIH1cbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ3Rlc3QuY29udHJvbGxlcnMnKS5jb250cm9sbGVyKCd0ZXN0Q29udHJvbGxlcicsIHRlc3RDb250cm9sbGVyKTtcblxuXHRmdW5jdGlvbiB0ZXN0Q29udHJvbGxlcihudW1iZXJTZXJ2aWNlKSB7XG5cdFx0dmFyIHZtID0gdGhpcztcblxuXHRcdHZtLm1pbk51bWJlciA9IDA7XG5cdFx0dm0ubWF4TnVtYmVyID0gMTA7XG5cdFx0dm0uYWxsID0gdHJ1ZTtcblx0XHR2bS5ldmVuID0gZmFsc2U7XG5cdFx0dm0ubGVmdCA9IHRydWU7XG5cblx0XHR2bS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dm0ucmFuZ2UgPSBudW1iZXJTZXJ2aWNlLnJhbmdlKHZtLm1pbk51bWJlciwgdm0ubWF4TnVtYmVyKTtcblx0XHR9O1xuXG5cdFx0dm0uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dm0ucmFuZ2UgPSBudW1iZXJTZXJ2aWNlLnJhbmdlKHZtLm1pbk51bWJlciwgdm0ubWF4TnVtYmVyKTtcblx0XHR9O1xuXG5cdFx0dm0uc2hvd0FsbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZtLmFsbCA9IHRydWU7XG5cdFx0fTtcblxuXHRcdHZtLmNoYW5nZVBhcml0eSA9IGZ1bmN0aW9uIChldmVuKSB7XG5cdFx0XHR2bS5hbGwgPSBmYWxzZTtcblx0XHRcdHZtLmV2ZW4gPSBldmVuO1xuXHRcdH07XG5cblx0XHR2bS50b2dnbGVEaXNwbGF5ID0gZnVuY3Rpb24gKGxlZnQpIHtcblx0XHRcdHZtLmxlZnQgPSBsZWZ0O1xuXHRcdH07XG5cblx0XHR2bS5pbml0KCk7XG5cdH1cbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgndGVzdCcpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9pbnRlcnZpZXcvZGlyZWN0aXZlcy9udW1iZXJEaXJlY3RpdmUvbnVtYmVyc0RpcmVjdGl2ZS5odG1sJywgJzx1bCBuZy1jbGFzcz1cInNob3dMZWZ0ID8gXFwndGV4dC1sZWZ0XFwnIDogXFwndGV4dC1yaWdodFxcJyBcIj5cXG4gIDxsaSBuZy1yZXBlYXQ9XCJudW1iZXIgaW4gaXRlbXMgfCBzaG91bGRTaG93OnNob3dBbGw6c2hvd0V2ZW5cIj5cXG4gICAge3sgbnVtYmVyIH19XFxuICA8L2xpPlxcbjwvdWw+XFxuJyk7XG59XSk7Il19
