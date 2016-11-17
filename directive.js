(function ()
{
  'use strict';

  angular.module('test.directives')
  .directive('numberDirective', numberDirective);

  function numberDirective()
  {
    return {
      restrict: 'E',
      scope: { items: '=items'},
      link: function(scope) {},
      controller: function($scope) {
      console.log($scope.items);
    },

      templateUrl: "directives/numbersDirective.html"
    };
  }

})();
