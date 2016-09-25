(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    toBuy.isEmpty = function() { return toBuy.items.length < 1; }
    toBuy.moveToBought = function(item) { ShoppingListCheckOffService.moveToBought(item); }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    alreadyBought.isEmpty = function() { return alreadyBought.items.length < 1; }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      { name: "Mineral Waters", quantity: "2" },
      { name: "Avocados", quantity: "10" },
      { name: "Bottles of milk", quantity: "4" },
      { name: "Oranges", quantity: "20" },
      { name: "Bananas", quantity: "6" }
    ];
    var alreadyBoughtItems = [];

    service.moveToBought = function (item) {
      var itemToMove = toBuyItems.indexOf(item);

      toBuyItems.splice(itemToMove, 1);
      alreadyBoughtItems.push(item);
    };

    service.getToBuyItems = function() { return toBuyItems; }
    service.getAlreadyBoughtItems = function() { return alreadyBoughtItems; }
  }
})();