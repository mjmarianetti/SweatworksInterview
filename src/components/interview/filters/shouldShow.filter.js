(function ()
{
  'use strict';

  angular.module('test.filters')
  .filter('shouldShow', shouldShow);

  function shouldShow()
  {
    return (items,showAll,showEven) => {
      if(showAll){
        return items;
      }

      if(showEven){
        return items.filter(function(number){
          return (number % 2) === 0;
        });
      }

      return items.filter(function(number){
        return (number % 2) !== 0;
      });

    };
  }

})();
