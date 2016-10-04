(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/data/templates/home.template.html'
  })

  // Categories list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'src/data/templates/categoryList.template.html',
    controller: 'CategoryListController as categoryList',
    resolve: {
      list: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items list page
  .state('itemsList', {
    url: '/items-list/{categoryShortName}',
    templateUrl: 'src/data/templates/itemsList.template.html',
    controller: 'ItemsListController as itemsList',
    resolve: {
      list2: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}

})();