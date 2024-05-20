let app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/view1", {
      templateUrl : "./views/view1.htm"
    })
    .when("/", {
        templateUrl : "./views/main.htm"
      })
});