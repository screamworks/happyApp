angular.module('hotspot').controller('mainCtrl', function($scope, mainService){



var promise = mainService.getLocation();
promise.then(function(data){
  $scope.getLocation = data.data.objects

})

// var promise2 = mainService.getNews();
// promise2.then(function(data){
//   $scope.getNews = data
//     console.log($scope.getNews = data)
//   // console.log($scope.getNews)
// })


// $scope.gotNews = mainService.getNews(){
//   var articles = getNews.response.docs;
//     for(var i = 0; i < articles.length; i++){
//       createElement('h1', articles[i].headline.main);
//       createP(articles[i].snippet);
//     }
// }

$scope.gotNews = function(val) {
  if (!val){
    alert('Please Add Date To Search');
    return;
  }
  val = val.split('-').join('');
  mainService.getNews(val).then(function(response) {
    console.log(response);
    $scope.news = response.data.response.docs;
  })
}









var happyData = [];

var yearData = [];



mainService.getHappyData().then( response => {
  // console.log('hello from ctrl happy');
// console.log(response)
////

if (document.getElementById('myChart')){
var myChart = document.getElementById('myChart').getContext('2d')
Chart.defaults.global.defaultFontFamily =  'Lato';
Chart.defaults.global.defaultFontSize = 25;
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.maintainAspectRatio = false;

var lineChart = new Chart(myChart, {

  type: 'line',
  data: {
    labels: response.map(val => val.happyDates), //loop through val, loop an array, if(val!==array values) val.push([val, index])
    datasets: [{
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: response.map(val => val.happiness),
      },
      {
      fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: response.map(val => val.happyDates)}, {
      label: "Satisfaction in Points",
      fill: false,
      lineTension: 0.1,
      borderColor: "blue",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'red',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'pink',
      pointHoverBorderColor: 'red',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,

      data: happyData,
      // backgroundColor: 'green'
      backgroundColor: [
        'rgba(225,226,228,0.5)'
      ]
    }]
  },
  options: {
    animation: {
      duration: 5000
    },
    responsive: true,
    maintainAspectRatio: false,
    scaleShowValues: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          steps: 0.1,
          stepValue: 0.2,
          max: 6.4,
          min: 5.90
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: false,
          maxRotation: 180,
          minRotation: 180,
          fontSize: 12
        }
      }]
  },
    title: {
      display: true,
      text: 'Variance in Positive Moods by Day',
      fontSize: 25
    },
    legend: {
      display: false,
      position: 'right',
      labels: {

      }
    },
    layout: {
      padding: {
        left: 0,
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

}
/// 2008-01-01
})












});
