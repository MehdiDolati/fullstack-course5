(function () {
'use strict';

angular.module('menuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'categories'];
function CategoriesController(MenuDataService, categories) {
  var ctrl = this;
  ctrl.categories = categories;
}
})();
