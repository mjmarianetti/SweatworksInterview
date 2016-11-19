(function ()
{
  'use strict';

  angular.module('test.directives')
  .directive('numberDirective', numberDirective);

  function numberDirective(shouldShowFilter)
  {
    return {
      restrict: 'E',
      scope: { items: '=items', showAll: '=showAll', showEven: '=showEven','showLeft': '=showLeft'},
      templateUrl: 'components/interview/directives/numberDirective/numbersDirective.html'
    };
  }

})();
