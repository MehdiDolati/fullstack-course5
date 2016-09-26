(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemBuyer = this;

  itemBuyer.items = ShoppingListCheckOffService.getToBuyItems();

  itemBuyer.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    { name: "cookies", quantity: 10 }, { name: "chikens", quantity: 5 },
    { name: "oragnes", quantity: 8 }, { name: "apples", quantity: 9 },
    { name: "eggs", quantity: 7 }, { name: "limes", quantity: 6 },
    { name: "beers", quantity: 4 }, { name: "beverages", quantity: 5 }];
  var alreadyBoughtItems = [];

  service.buyItem = function (toBuyItemIndex) {
    var item = toBuyItems[toBuyItemIndex];
    alreadyBoughtItems.push(item);
    toBuyItems.splice(toBuyItemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}
})();
