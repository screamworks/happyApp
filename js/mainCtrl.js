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
Chart.defaults.global.defaultFontFamily =  'Roboto';
Chart.defaults.global.defaultFontSize = 17;
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.maintainAspectRatio = true;
// test code below


Chart.defaults.global.animationSteps = 50;
Chart.defaults.global.tooltipYPadding = 16;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
Chart.defaults.global.animationEasing = "easeOutBounce";
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleLineColor = "black";
Chart.defaults.global.scaleFontSize = 10;


 ///

var lineChart = new Chart(myChart, {

  type: 'line',
  data: {
    labels: response.map(val => val.happyDates), //loop through val, loop an array, if(val!==array values) val.push([val, index])
    datasets: [{
        data: response.map(val => val.happiness),
        backgroundColor: [
              'rgba(21, 73, 97, 0.50)'

          ],
        borderColor: [
                    'rgb(61, 165, 225)'
              // 'rgba(255,99,132,1)',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1

      },
      {
      fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: response.map(val => val.happyDates)}, {
      label: "Satisfaction in Points",
      // fill: false,
      // lineTension: 0.1,
      // borderColor: "blue",
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: 'yellow',
      // pointBorderWidth: 1,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'blue',
      // pointHoverBorderColor: 'red',
      // pointHoverBorderWidth: 2,
      // pointRadius: 1,
      // pointHitRadius: 10,

      data: happyData,
      // backgroundColor: 'green'
      backgroundColor: [
        'rgba(25,26,26,0.',

      ]
    }]
  },
  options: {
    animation: {
      duration: 5000
    },
    responsive: true,
    maintainAspectRatio: true,
    scaleShowValues: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          steps: 0.1,
          stepValue: 0.1,
          max: 6.40,
          min: 5.80
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: false,
          maxRotation: 180,
          minRotation: 180,
          fontSize: 1
        }
      }]
  },
    title: {
      display: true,
      text: 'Variance in Moods by Day',
      fontSize: 22

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


})












});
