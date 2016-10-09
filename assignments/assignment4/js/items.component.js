(function () {
'use strict';

angular.module('MenuApp')

.component('categoryItems', {
templateUrl: 'js/templates/category_items.template.html',
bindings: {
    catList: '<',
	}
});
})();
