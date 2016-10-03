(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return ddo;
  }

  function NarrowItDownDirectiveController() {
    var ctrl = this;
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
    };

    narrowCtrl.removeItem = function(index) {
      narrowCtrl.found.splice(index, 1);
    };
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