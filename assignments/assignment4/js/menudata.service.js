(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
	var menu = this;
	menu.getAllCategories = function () {
		return $http({
			method: "GET",
			url: 'https://davids-restaurant.herokuapp.com/categories.json'
			})
			.then(function (response) {			
				return response.data;
			})
			.catch(function(error) {
				alert('Error while getting categories.');
			});
	}
	menu.getItemsForCategory = function(categoryShortName) {
		return $http({
				method: "GET",
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=',
				params: {
					categoryShortName
					}
				})
				.then(function (response) {		
					return [response.data, categoryShortName];
				})
				.catch(function(error) {
					alert('Error while getting items for category.');
				});
		}
    }

})();
