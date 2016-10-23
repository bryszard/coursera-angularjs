(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (itemShortName) {
    return $http.get(ApiPath + '/menu_items/' + itemShortName + '.json');
  };

  service.updateMenuItem = function (menuItem) {
    var config = {};
    if (menuItem) {
      config.menu_item = menuItem;
    }

    return $http.post(ApiPath + '/menu_items.json', config);
  };

  service.getUserData = function (email) {
    var promise = $http.get(ApiPath + '/menu_items.json').then(function (response) {

      var user = response.data.menu_items.filter(function(item) {
        return item.small_portion_name === email;
      });
      return user;
    });
    return promise;
  }
}

})();
