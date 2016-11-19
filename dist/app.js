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

		$scope.$watch(function () {
			return vm.minNumber;
		}, function (newVal) {
			if (vm.minNumber > vm.maxNumber) {
				vm.minNumber = vm.maxNumber;
			}
		});

		$scope.$watch(function () {
			return vm.maxNumber;
		}, function (newVal) {
			if (vm.maxNumber < vm.minNumber) {
				vm.maxNumber = vm.minNumber;
			}
		});

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW50ZXJ2aWV3L2ludGVydmlldy5tb2R1bGUuanMiLCJjb21wb25lbnRzL2ludGVydmlldy9zZXJ2aWNlcy9udW1iZXIuc2VydmljZS5qcyIsImNvbXBvbmVudHMvaW50ZXJ2aWV3L2ZpbHRlcnMvc2hvdWxkU2hvdy5maWx0ZXIuanMiLCJjb21wb25lbnRzL2ludGVydmlldy9kaXJlY3RpdmVzL251bWJlckRpcmVjdGl2ZS9udW1iZXIuZGlyZWN0aXZlLmpzIiwiY29tcG9uZW50cy9pbnRlcnZpZXcvY29udHJvbGxlcnMvdGVzdC5jb250cm9sbGVyLmpzIiwidGVtcGxhdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGlzdC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyLm1vZHVsZSgndGVzdCcsIFsndGVzdC5jb250cm9sbGVycycsICd0ZXN0LnNlcnZpY2VzJywgJ3Rlc3QuZmlsdGVycycsICd0ZXN0LmRpcmVjdGl2ZXMnXSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ3Rlc3Quc2VydmljZXMnLCBbXSk7XG4gIGFuZ3VsYXIubW9kdWxlKCd0ZXN0LmNvbnRyb2xsZXJzJywgW10pO1xuICBhbmd1bGFyLm1vZHVsZSgndGVzdC5maWx0ZXJzJywgW10pO1xuICBhbmd1bGFyLm1vZHVsZSgndGVzdC5kaXJlY3RpdmVzJywgW10pO1xufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgndGVzdC5zZXJ2aWNlcycpLnNlcnZpY2UoJ251bWJlclNlcnZpY2UnLCBudW1iZXJTZXJ2aWNlKTtcblxuXHRmdW5jdGlvbiBudW1iZXJTZXJ2aWNlKCkge1xuXG5cdFx0dmFyIHZtID0gdGhpcztcblxuXHRcdHZtLnJhbmdlID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG5cdFx0XHR2YXIgcmFuZ2VBcnJheSA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IG1pbjsgaSA8PSBtYXg7IGkrKykge1xuXHRcdFx0XHRyYW5nZUFycmF5LnB1c2goaSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmFuZ2VBcnJheTtcblx0XHR9O1xuXHR9XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCd0ZXN0LmZpbHRlcnMnKS5maWx0ZXIoJ3Nob3VsZFNob3cnLCBzaG91bGRTaG93KTtcblxuICBmdW5jdGlvbiBzaG91bGRTaG93KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoaXRlbXMsIHNob3dBbGwsIHNob3dFdmVuKSB7XG4gICAgICBpZiAoc2hvd0FsbCkge1xuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG93RXZlbikge1xuICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICByZXR1cm4gbnVtYmVyICUgMiA9PT0gMDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICByZXR1cm4gbnVtYmVyICUgMiAhPT0gMDtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ3Rlc3QuZGlyZWN0aXZlcycpLmRpcmVjdGl2ZSgnbnVtYmVyRGlyZWN0aXZlJywgbnVtYmVyRGlyZWN0aXZlKTtcblxuICBmdW5jdGlvbiBudW1iZXJEaXJlY3RpdmUoc2hvdWxkU2hvd0ZpbHRlcikge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0UnLFxuICAgICAgc2NvcGU6IHsgaXRlbXM6ICc9aXRlbXMnLCBzaG93QWxsOiAnPXNob3dBbGwnLCBzaG93RXZlbjogJz1zaG93RXZlbicsICdzaG93TGVmdCc6ICc9c2hvd0xlZnQnIH0sXG4gICAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvaW50ZXJ2aWV3L2RpcmVjdGl2ZXMvbnVtYmVyRGlyZWN0aXZlL251bWJlcnNEaXJlY3RpdmUuaHRtbCcsXG4gICAgICBsaW5rOiBmdW5jdGlvbiBsaW5rKCRzY29wZSwgZWxlbWVudCwgYXR0cnMpIHt9XG4gICAgfTtcbiAgfVxufSkoKTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgndGVzdC5jb250cm9sbGVycycpLmNvbnRyb2xsZXIoJ3Rlc3RDb250cm9sbGVyJywgdGVzdENvbnRyb2xsZXIpO1xuXG5cdGZ1bmN0aW9uIHRlc3RDb250cm9sbGVyKCRzY29wZSwgbnVtYmVyU2VydmljZSkge1xuXHRcdHZhciB2bSA9IHRoaXM7XG5cblx0XHR2bS5taW5OdW1iZXIgPSAwO1xuXHRcdHZtLm1heE51bWJlciA9IDEwO1xuXHRcdHZtLmFsbCA9IHRydWU7XG5cdFx0dm0uZXZlbiA9IGZhbHNlO1xuXHRcdHZtLmxlZnQgPSB0cnVlO1xuXG5cdFx0JHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gdm0ubWluTnVtYmVyO1xuXHRcdH0sIGZ1bmN0aW9uIChuZXdWYWwpIHtcblx0XHRcdGlmICh2bS5taW5OdW1iZXIgPiB2bS5tYXhOdW1iZXIpIHtcblx0XHRcdFx0dm0ubWluTnVtYmVyID0gdm0ubWF4TnVtYmVyO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gdm0ubWF4TnVtYmVyO1xuXHRcdH0sIGZ1bmN0aW9uIChuZXdWYWwpIHtcblx0XHRcdGlmICh2bS5tYXhOdW1iZXIgPCB2bS5taW5OdW1iZXIpIHtcblx0XHRcdFx0dm0ubWF4TnVtYmVyID0gdm0ubWluTnVtYmVyO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dm0uaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZtLnJhbmdlID0gbnVtYmVyU2VydmljZS5yYW5nZSh2bS5taW5OdW1iZXIsIHZtLm1heE51bWJlcik7XG5cdFx0fTtcblxuXHRcdHZtLmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZtLnJhbmdlID0gbnVtYmVyU2VydmljZS5yYW5nZSh2bS5taW5OdW1iZXIsIHZtLm1heE51bWJlcik7XG5cdFx0fTtcblxuXHRcdHZtLnNob3dBbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2bS5hbGwgPSB0cnVlO1xuXHRcdH07XG5cblx0XHR2bS5jaGFuZ2VQYXJpdHkgPSBmdW5jdGlvbiAoZXZlbikge1xuXHRcdFx0dm0uYWxsID0gZmFsc2U7XG5cdFx0XHR2bS5ldmVuID0gZXZlbjtcblx0XHR9O1xuXG5cdFx0dm0udG9nZ2xlRGlzcGxheSA9IGZ1bmN0aW9uIChsZWZ0KSB7XG5cdFx0XHR2bS5sZWZ0ID0gbGVmdDtcblx0XHR9O1xuXG5cdFx0dm0uaW5pdCgpO1xuXHR9XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3Rlc3QnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvaW50ZXJ2aWV3L2RpcmVjdGl2ZXMvbnVtYmVyRGlyZWN0aXZlL251bWJlcnNEaXJlY3RpdmUuaHRtbCcsICc8dWwgbmctY2xhc3M9XCJzaG93TGVmdCA/IFxcJ3RleHQtbGVmdFxcJyA6IFxcJ3RleHQtcmlnaHRcXCcgXCI+XFxuICA8bGkgbmctcmVwZWF0PVwibnVtYmVyIGluIGl0ZW1zIHwgc2hvdWxkU2hvdzpzaG93QWxsOnNob3dFdmVuXCI+XFxuICAgIHt7IG51bWJlciB9fVxcbiAgPC9saT5cXG48L3VsPlxcbicpO1xufV0pOyJdfQ==
