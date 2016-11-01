(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'FavoriteItemService'];

    function SignUpController(MenuService, FavoriteItemService) {
        var $ctrl = this;
        var user;

        $ctrl.signUp = function (user) {
            MenuService.getMenuItem(user.favItem).then(
                function (response) {
                    if (response) {
                        FavoriteItemService.setFavorite(user);
                        $ctrl.success = true;
                        $ctrl.notFound = false;
                    }
                    else {
                        $ctrl.notFound = true;
                    }
                },
                function () {
                    console.response(error);
                });
        };
    }

})();
