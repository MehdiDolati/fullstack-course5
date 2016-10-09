(function () {
'use strict';

angular.module('menuApp')
.component('categoryItems', {
  templateUrl: 'src/menuapp/templates/items.template.html',
  bindings: {
    items: '<'
  }
});
})();
