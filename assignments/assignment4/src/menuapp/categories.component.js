(function () {
'use strict';
angular.module('MenuApp')
.component('CategoriesView', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});
})();
