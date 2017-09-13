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

var myChart = document.getElementById('myChart').getContext('2d')
Chart.defaults.global.defaultFontFamily =  'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';
var lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels:['Points of Satisfaction'],
    dataSets: [{
      label: "In Years",
      data: [
        200000,
        150000,
        175000
      ],
      // backgroundColor: 'green'
      backgroundColor: [
        'red',
        'green',
        'blue'
      ]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Happiness Levels Measured',
      fontSize: 25
    },
    legend: {
      display: true,
      position: 'right',
      labels: {

      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0
      }
    },
    tooltips:{
      enabled: true
    }
  }
})

});
