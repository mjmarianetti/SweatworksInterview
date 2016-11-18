(function ()
{
  'use strict';

  angular.module('test.directives')
  .directive('numberDirective', numberDirective);

  function numberDirective(shouldShow)
  {
    return {
      restrict: 'E',
      scope: { items: '=items', showAll: '=showAll', showEven: '=showEven'},
      templateUrl: "directives/numbersDirective.html",
      link: function($scope, element, attrs) {}
    };
  }

})();
