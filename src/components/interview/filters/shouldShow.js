(function ()
{
  'use strict';

  angular.module('test.filters')
  .filter('shouldShow', shouldShow);

  function shouldShow()
  {
    return function(showAll,showEven,number){
      return showAll || ((number % 2) != showEven);
    };
  }

})();
