angular.module('hotspot').controller('mainCtrl', function($scope, mainService){

$scope.test = "shiv"

var promise = mainService.getLocation();
promise.then(function(data){
  $scope.getLocation = data.data.objects

})

var promise2 = mainService.getNews();
promise2.then(function(data){
  $scope.getNews = data
  console.log($scope.getNews)
})

var happyData = [];





mainService.getHappyData().then( response => {
  console.log('hello from ctrl happy');
console.log(response)
////
happyData = response;

///
})


var myChart = document.getElementById('myChart').getContext('2d')
Chart.defaults.global.defaultFontFamily =  'Lato';
Chart.defaults.global.defaultFontSize = 25;
Chart.defaults.global.defaultFontColor = '#777';
var lineChart = new Chart(myChart, {

  type: 'line',
  data: {
    labels:[2008,2009,2010,2011,2012,2013,2014,2015],
    datasets: [{
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [20, 30, 80, 20, 40, 10, 60]
      },
      {
      fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [...happyData]}, {
      label: "Satisfaction in Points",
      fill: false,
      // lineTension: 0.1,
      // borderColor: "blue",
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: 'red',
      // pointBorderWidth: 1,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'pink',
      // pointHoverBorderColor: 'red',
      // pointHoverBorderWidth: 2,
      // pointRadius: 1,
      // pointHitRadius: 10,
      // xAxisID: '',
      // yAxisID: '',
      data: [...happyData],
      // backgroundColor: 'green'
      backgroundColor: [
        'rgba(225,226,228,0.5)'
      ]
    }]
  },
  options: {
    responsive: true,
    scaleShowValues: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          steps: 0.5,
          stepValue: 0.1,
          max: 100,
          min: 5
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: false
        }
      }]
  },
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
