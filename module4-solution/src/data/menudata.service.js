(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var menu = this;

  menu.getAllCategories = function() {
    return $http({
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    }).then(function(result) {
      return result.data;
    });
  };

  menu.getItemsForCategory = function(categoryShortName) {
    return $http({
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
    }).then(function(result) {
      console.log(result.data);
      console.log(categoryShortName);
      return result.data;
    });
  };
}

})();