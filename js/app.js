angular.module('hotspot',["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "../index.html"
    })

    .state("about", {
      url: "/",
      templateUrl: "../views/about.html",
      controller: "aboutCtrl"
    })

    .state("factpage", {
      url: "/",
      templateUrl: "../views/factpage.html",
      controller: "factpageCtrl"
    })

    .state("linechart", {
      url: "/",
      templateUrl: "../views/linechart.html",
      controller: "linechartCtrl"
    })

    .state("newsfeed", {
      url: "/",
      templateUrl: "../views/newsfeed.html",
      controller: "newsfeedCtrl"
    })

    .state("piechart", {
      url: "/piechart",
      templateUrl: "../views/piechart.html",
      controller: "piechartCtrl"
    })

$urlRouterProvider.otherwise("/");



});
