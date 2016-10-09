(function () {
'use strict';
angular.module('menuApp')
.component('categoriesView', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});
})();
