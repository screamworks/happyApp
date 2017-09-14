angular.module('hotspot').service('mainService', function($http, $q){

var apiUrl = "https://andyreagan-hedonometer-v1.p.mashape.com/timeseries/?mashape-key=YsYAz9PaAMmshGq8Zo0UUZjPFhEJp1t7NFGjsnE1yZUBoAgY1P"

var apiUrl2 = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=f2306175c0924281ad560ebd4f9de8aa"

var deferred = $q.defer();


this.getHappyData = function(){
  console.log('hello from service');

  return $http.get(apiUrl).then(function(response){
    // deferred.resolve(response);
    // console.log("is this everything?", response);
    // return response.data.objects.map(number => number.happiness)
    //
    return response.data.objects.map(number => {

      return {
        happiness :  parseFloat(number.happiness),
        happyDates : number.date
      }
      // console.log(number.happiness)
      // parseFloat(number.happiness)
    })

   //console.log(response.data.objects.map(number => number.happiness) );

  })


}

// my test code to get years for chart
// this.getYearData = function(){
//   console.log('hello from yeardata');
//
//   return $http.get(apiUrl).then(function(response){
//
//     return response.data.objects.map(number => number.date)
//
//   })
// }


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
