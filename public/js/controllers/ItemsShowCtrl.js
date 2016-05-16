app.controller("ItemsShowCtrl", function($scope, $routeParams, Item) {
  $scope.item = Item.show({ id: $routeParams.id });
});