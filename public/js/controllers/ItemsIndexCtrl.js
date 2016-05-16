app.controller("ItemsIndexCtrl", function($scope, $location, Item) {
  $scope.items = Item.index();

  $scope.new = function() {
    $location.path("/items/new");
  };

  $scope.pageTitle = "All Items";

});