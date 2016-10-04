(function () {
'use strict';

angular.module('data')
.controller('ItemsListController', ItemsListController);

ItemsListController.$inject = ['list2']
function ItemsListController(list2) {
  var itemsList = this;  
  itemsList.items = list2;
}

})();