angular.module('hotspot').controller('mainCtrl', function($scope, mainService){

$scope.test = "shiv"

var promise = mainService.getLocation();
promise.then(function(data){
  $scope.getLocation = data.data.objects
  console.log($scope.getLocation)
})

var promise2 = mainService.getNews();
promise2.then(function(data){
  $scope.getNews = data
  console.log($scope.getNews)
})


});
