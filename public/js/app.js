'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ["ngResource"]).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/items", {
        templateUrl: "partials/index.jade",
        controller: "ItemsIndexCtrl"
      })
      .when("/items/new", { templateUrl: "partials/edit.jade", controller: "ItemsEditCtrl" })
      .when("/items/:id", { templateUrl: "partials/show.jade", controller: "ItemsShowCtrl" })
      .when("/items/:id/edit", { templateUrl: "partials/edit.jade", controller: "ItemsEditCtrl" })
      .otherwise({ redirectTo: "/items" });
  }]);