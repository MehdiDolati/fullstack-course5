(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['user','MenuService'];

    function MyInfoController(user, MenuService) {
        var $ctrl = this;
        $ctrl.registered = false;
                
        if (user) {
            $ctrl.registered = true;
            $ctrl.myInfo = user;
            MenuService.getMenuItem(user.favItem).then(function (response) {
                $ctrl.favItem = response;
            });
        }
        
    }

})();
