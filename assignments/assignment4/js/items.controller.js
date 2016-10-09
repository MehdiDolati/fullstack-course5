(function() {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject= ['items'];
function ItemsController(items) {
    var catItems = this;
    catItems.items = items[0].menu_items;
    catItems.name = items[1];
}
})();
