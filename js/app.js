
angular.module('hotspot',["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html"
    })

    .state("about", {
      url: "/about",
      templateUrl: "../views/about.html",
    })

    .state("factpage", {
      url: "/factpage",
      templateUrl: "../views/factpage.html",
      controller: "factpageCtrl"
    })

    .state("linechart", {
      url: "/linechart",
      templateUrl: "../views/linechart.html",
      controller: "linechartCtrl"
    })

    .state("newsfeed", {
      url: "/newsfeed",
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
