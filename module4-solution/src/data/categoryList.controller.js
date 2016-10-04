(function () {
'use strict';

angular.module('data')
.controller('CategoryListController', CategoryListController);

CategoryListController.$inject = ['list'];
function CategoryListController(list) {
  var categoryList = this;  
  categoryList.categories = list;
}

})();