angular.module('hotspot').service('mainService', function($http, $q){

var apiUrl = "https://andyreagan-hedonometer-v1.p.mashape.com/timeseries/?mashape-key=YsYAz9PaAMmshGq8Zo0UUZjPFhEJp1t7NFGjsnE1yZUBoAgY1P"

var apiUrl2 = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=f2306175c0924281ad560ebd4f9de8aa"

var deferred = $q.defer();
$http.get(apiUrl).then(function(data){
  deferred.resolve(data);
})

this.getLocation = function(){
  return deferred.promise
}

var deferred2 = $q.defer();
$http.get(apiUrl2).then(function(data){
  deferred2.resolve(data);
})

this.getNews = function(){
  return deferred2.promise
}

});
