(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems)

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<'
      },
      controller: NarrowItDownController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;

    narrowCtrl.searchTerm = "";
    narrowCtrl.found = [];

    narrowCtrl.findMatched = function() {
      MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
      .then(function(result) {
        narrowCtrl.found = result;
      });
    }
  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    var msearch = this;

    msearch.getMatchedMenuItems = function(searchTerm) {
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function(result) {
        var foundItems = result.data.menu_items.filter(function(item) {
          return item.description.includes(searchTerm);
        });
        return foundItems;
      });
    };
  }

})();