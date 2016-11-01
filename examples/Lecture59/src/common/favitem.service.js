(function () {
    "use strict";

    angular.module('common')
        .service('FavoriteItemService', FavoriteItemService);

    function FavoriteItemService() {

        var service = this;
        
        var favoriteMenuItem;
        
        service.setFavorite = function(menuItem) {
            favoriteMenuItem = menuItem;
        };
        
        service.getFavorite = function() {
            return favoriteMenuItem;
        };

    }



})();
