app.controller("ItemsEditCtrl", function($scope, $routeParams, $location, Item) {

  if ($routeParams.id) {
    $scope.item = Item.show({ id: $routeParams.id });
  } else {
    $scope.item = new Item();
  }

  $scope.submit = function() {
    console.log("submit");

    function success(response) {
      console.log("success", response)
      $location.path("/items");
    }

    function failure(response) {
      console.log("failure", response)

      _.each(response.data, function(errors, key) {
        if (errors.length > 0) {
          _.each(errors, function(e) {
            $scope.form[key].$dirty = true;
            $scope.form[key].$setValidity(e, false);
          });
        }
      });
    }

    if ($routeParams.id) {
      Item.update($scope.item, success, failure);
    } else {
      Item.create($scope.item, success, failure);
    }

  };

  $scope.cancel = function() {
    $location.path("/items/"+$scope.item._id);
  };

  $scope.errorClass = function(name) {
    var s = $scope.form[name];
    return s.$invalid && s.$dirty ? "error" : "";
  };

  $scope.errorMessage = function(name) {
    var s = $scope.form[name].$error;
    result = [];
    _.each(s, function(key, value) {
      result.push(value);
    });
    return result.join(", ");
  };
});