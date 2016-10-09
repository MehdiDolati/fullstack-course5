(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'js/templates/home.template.html'
    })

    // Premade list page
    .state('categories', {
      url: '/categories',
      templateUrl: 'js/templates/categories.template.html',
      controller: 'CategoriesController as catList',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categoryItems', {
      url: '/categories/{catName}',
      templateUrl: 'js/templates/category_items.template.html',
      controller: 'ItemsController as itemsList',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.catName);
        }]
      }
    })

  }
})();
