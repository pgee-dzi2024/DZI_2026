var admissionRatioOption = {
  series: [
      {
          name: '',
          data: [30, 29.31, 29.7, 29.7, 31.32, 31.65, 31.13, 29.8, 31.79, 31.67, 32.39, 30.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 34, 34.50, 34.50, 32.53, 31.37, 32.43, 32.44, 30.2,
              30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 31.02, 30.33, 32.95, 31.89, 30.01, 30.88, 30.69, 30.58, 32.02, 32.14, 30.37, 30.51, 32.65, 32.64, 32.27, 32.1, 32.91, 30.65, 30.8, 31.92
          ],
      },
  ],
  chart: {
      type: 'area',
      height: 90,
      offsetY: -10,
      offsetX: 0,
      toolbar: {
          show: false,
      },
  },
  stroke: {
      width: 2,
      curve: 'smooth'
  },
  grid: {
      show: false,
      borderColor: 'var(--light)',
      padding: {
          top: 5,
          right: 0,
          bottom: -30,
          left: 0,
      },
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          gradientToColors:['var(--primary-bg-color)'],
          stops: [0, 100, 150]
      }
  },
  dataLabels: {
      enabled: false,
  },
  colors: ['var(--primary-bg-color)'],
  xaxis: {
      labels: {
          show: false,
      },
      tooltip: {
          enabled: false,
      },
      labels: {
          show: false,
      },
      axisBorder: {
          show: false,
      },
      axisTicks: {
          show: false,
      },
  },
  yaxis: {
      opposite: false,
      min: 29,
      max: 35,
      logBase: 100,
      tickAmount: 4,
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
      labels: {
          show: false,
          offsetX: -12,
          offsetY: -15,
          rotate: 0,
      },
  },
  legend: {
      horizontalAlign: 'left',
  },
};

var admissionRatio = new ApexCharts(document.querySelector('#admissionRatio'), admissionRatioOption);
admissionRatio.render();


var admissionRatioOption = {
  series: [
      {
          name: '',
          data: [30, 32.31, 31.47, 30.69, 29.32, 31.65, 31.13, 31.77, 31.79, 31.67, 32.39, 32.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 32.37, 32.19, 32.51, 32.53, 31.37, 30.43, 30.44, 30.2,
            30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 30.02, 30.33, 30.95, 31.89, 31.01, 30.88, 30.69, 30.58, 32.02, 32.14, 32.37, 32.51, 32.65, 32.64, 32.27, 32.1, 32.91, 33.65, 33.8, 33.92
        ],
      },
  ],
  chart: {
      type: 'area',
      height: 90,
      offsetY: -10,
      offsetX: 0,
      toolbar: {
          show: false,
      },
  },
  stroke: {
      width: 2,
      curve: 'smooth'
  },
  grid: {
      show: false,
      borderColor: 'var(--light)',
      padding: {
          top: 5,
          right: 0,
          bottom: -30,
          left: 0,
      },
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          gradientToColors:['#f7b731'],
          stops: [0, 100, 150]
      }
  },
  dataLabels: {
      enabled: false,
  },
  colors: ['#f7b731'],
  xaxis: {
      labels: {
          show: false,
      },
      tooltip: {
          enabled: false,
      },
      labels: {
          show: false,
      },
      axisBorder: {
          show: false,
      },
      axisTicks: {
          show: false,
      },
  },
  yaxis: {
      opposite: false,
      min: 29,
      max: 35,
      logBase: 100,
      tickAmount: 4,
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
      labels: {
          show: false,
          offsetX: -12,
          offsetY: -15,
          rotate: 0,
      },
  },
  legend: {
      horizontalAlign: 'left',
  },
};

var admissionRatio = new ApexCharts(document.querySelector('#order-value'), admissionRatioOption);
admissionRatio.render();

var admissionRatioOption = {
  series: [
      {
          name: '',
          data: [30, 29.31, 29.7, 29.7, 31.32, 31.65, 31.13, 29.8, 31.79, 31.67, 32.39, 30.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 34, 34.50, 34.50, 32.53, 31.37, 32.43, 32.44, 30.2,
            30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 31.02, 30.33, 32.95, 31.89, 30.01, 30.88, 30.69, 30.58, 32.02, 32.14, 30.37, 30.51, 32.65, 32.64, 32.27, 32.1, 32.91, 30.65, 30.8, 31.92
        ],
      },
  ],
  chart: {
      type: 'area',
      height: 90,
      offsetY: -10,
      offsetX: 0,
      toolbar: {
          show: false,
      },
  },
  stroke: {
      width: 2,
      curve: 'smooth'
  },
  grid: {
      show: false,
      borderColor: 'var(--light)',
      padding: {
          top: 5,
          right: 0,
          bottom: -30,
          left: 0,
      },
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          gradientToColors:['#1170e4'],
          stops: [0, 100, 150]
      }
  },
  dataLabels: {
      enabled: false,
  },
  colors: ['#1170e4'],
  xaxis: {
      labels: {
          show: false,
      },
      tooltip: {
          enabled: false,
      },
      labels: {
          show: false,
      },
      axisBorder: {
          show: false,
      },
      axisTicks: {
          show: false,
      },
  },
  yaxis: {
      opposite: false,
      min: 29,
      max: 35,
      logBase: 100,
      tickAmount: 4,
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
      labels: {
          show: false,
          offsetX: -12,
          offsetY: -15,
          rotate: 0,
      },
  },
  legend: {
      horizontalAlign: 'left',
  },
};

var admissionRatio = new ApexCharts(document.querySelector('#daily-value'), admissionRatioOption);
admissionRatio.render();


var admissionRatioOption = {
  series: [
      {
          name: '',
          data: [29, 30.31, 30.7, 31.69, 31.32, 31.65, 31.13, 31.77, 31.79, 31.67, 32.39, 32.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 32.37, 32.19, 32.51, 32.53, 31.37, 30.43, 30.44, 30.2,
            30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 30.02, 30.33, 30.95, 31.89, 31.01, 30.88, 30.69, 30.58, 32.02, 32.14, 32.37, 32.51, 32.65, 32.64, 32.27, 32.1, 32.91, 33.65, 33.8, 33.92
        ],
      },
  ],
  chart: {
      type: 'area',
      height: 90,
      offsetY: -10,
      offsetX: 0,
      toolbar: {
          show: false,
      },
  },
  stroke: {
      width: 2,
      curve: 'smooth'
  },
  grid: {
      show: false,
      borderColor: 'var(--light)',
      padding: {
          top: 5,
          right: 0,
          bottom: -30,
          left: 0,
      },
  },
  fill: {
      type: "gradient",
      gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          gradientToColors:['#09ad95'],
          stops: [0, 100, 150]
      }
  },
  dataLabels: {
      enabled: false,
  },
  colors: ['#09ad95'],
  xaxis: {
      labels: {
          show: false,
      },
      tooltip: {
          enabled: false,
      },
      labels: {
          show: false,
      },
      axisBorder: {
          show: false,
      },
      axisTicks: {
          show: false,
      },
  },
  yaxis: {
      opposite: false,
      min: 29,
      max: 35,
      logBase: 100,
      tickAmount: 4,
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
      labels: {
          show: false,
          offsetX: -12,
          offsetY: -15,
          rotate: 0,
      },
  },
  legend: {
      horizontalAlign: 'left',
  },
};

var admissionRatio = new ApexCharts(document.querySelector('#daily-revenue'), admissionRatioOption);
admissionRatio.render();

$(function (e) {
  'use strict'

  


  

  

  

  // DATA TABLE
 
// DATA TABLE


$('#data-table').DataTable({
  "order": [
      [0, "desc"]
  ],
  order: [],
  columnDefs: [{ orderable: false, targets: [0, 4, 5] }],
  language: {
      searchPlaceholder: 'Search...',
      sSearch: '',
  }
});


});
function getCssValuePrefix() {
  'use strict'

  var retuenValue = ''; //default to standard syntax
  var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

  // Create a temporary DOM object for testing
  var dom = document.createElement('div');

  for (var i = 0; i < prefixes.length; i++) {
      // Attempt to set the style
      dom.style.background = prefixes[i] + 'linear-gradient(#ffffff, #000000)';

      // Detect if the style was successfully set
      if (dom.style.background) {
          retuenValue = prefixes[i];
      }
  }

  dom = null;
  dom.remove();

  return retuenValue;
}

// TRANSACTIONS

var options = {
  series: [{
      name: 'TEAM A',
      type: 'area',
      data: [20, 50, 60, 180, 90, 340, 120, 250, 190, 100, 180, 380, 190, 220, 100, 90, 140, 70, 130, 90, 100, 50, 0]
  }, {
      name: 'TEAM B',
      type: 'line',
      data: [20, 70, 30, 100, 120, 220, 250, 100, 200, 300, 330, 270, 300, 200, 180, 220, 130, 300, 220, 180, 40, 70, 0]
  }],
  chart: {
      height: 255,
      type: 'line',
      toolbar: {
          show: false,
      },
      dropShadow: {
          enabled: true,
          top: 4,
          left: 1,
          blur: 8,
          color: ['transparent', '#8D8D8D'],
          opacity: 0.6
      },

  },
  stroke: {
      curve: 'smooth',
      width: [3, 3],
      dashArray: [0, 4],
      colors: ['var(--primary-bg-color)', '#8D8D8D'],

  },
  grid: {
      show: true,
      borderColor: 'rgba(106, 113, 133, 0.30)',
      strokeDashArray: 3,
  },
  fill: {
      type: 'solid',
      opacity: [0, 1],
  },

  labels: ['Jan', '', 'Feb', '', 'Mar', '', 'Apr', '', 'May', '', 'Jun', '', 'Jul', '', 'Aug', '', 'Sep', '', 'Oct', '', 'Nov', '', 'Dec'],
  markers: {
      size: [3, 0],
      colors: ['#3D434A'],
      strokeWidth: [0, 0],
  },
  responsive: [
      {
          breakpoint: 991,
          options: {
              chart: {
                  height: 300
              }
          }
      },
      {
          breakpoint: 1500,
          options: {
              chart: {
                  height: 325
              }
          }
      }
  ],
  tooltip: {
      shared: true,
      intersect: false,
      y: {
          formatter: function (y) {
              if (typeof y !== "undefined") {
                  return y.toFixed(0) + " points";
              }
              return y;
          }
      }
  },
  annotations: {
      xaxis: [{
          x: 550,
          strokeDashArray: 5,
          borderWidth: 3,
          borderColor: '#7a70ba69',
      },
      ],
      points: [{
          x: 550,
          y: 330,
          marker: {
              size: 8,
              fillColor: 'var(--primary-bg-color)',
              strokeColor: "#ffffff",
              strokeWidth: 4,
              radius: 5,
          },
          label: {
              borderWidth: 1,
              offsetY: 0,
              text: '35.20k',
              style: {
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'Outfit, sans-serif',
              }
          }
      }],
  },
  legend: {
      show: false,
  },
  colors: ['transparent', '#8D8D8D'],
  xaxis: {
      labels: {
          style: {
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              colors: '#8D8D8D',
          },
      },
      axisBorder: {
          show: false
      },
  },
  yaxis: {
      labels: {
          formatter: function (value) {
              return value + "k";
          },
          style: {
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              colors: '#3D434A',
          },
      },
  },
  responsive: [
      {
          breakpoint: 576,
          options: {
              series: [{
                  name: 'TEAM A',
                  type: 'area',
                  data: [0, 50, 60, 180, 90, 340, 120, 250, 190, 100, 180, 380, 190, 220, 100, 90, 140]
              }, {
                  name: 'TEAM B',
                  type: 'line',
                  data: [0, 70, 30, 100, 120, 220, 250, 100, 200, 300, 330, 270, 300, 200, 180, 220, 130]
              }],
          }
      },
  ]
};
var chart = new ApexCharts(document.querySelector("#transactions"), options);
chart.render();


/* Earnings Report Chart */
// var options = {
//   series:[{
//       name: 'Income',
//       data:[2, 15, 25, 20, 30, 26, 24, 15, 12, 20]
//     },         
//     {
//       name: 'Expense',
//       data:[10, 25, 15, 16, 10, 14, 28, 18, 20, 16]
//     },
//     {
//       name: 'Profit',
//       data:[16,20,18,28,14,10,16,15,25,10]
//     }
//   ],
//   chart:{
//     height: 155,
//     type:'area',
//     opacity:1 ,
//     toolbar: {
//       show:false,
//     },
//   },
//   grid: {
//     yaxis: {
//       lines: {
//         show: false,
//       }
//     }
//   },
//   dataLabels: {
//     enabled: false
//   },
//   fill:{ 
//     opacity: [0.5, 0.25, 1],        
//   },
//   stroke: {
//     width:[3, 3],
//     curve: 'smooth',
//   },
//   xaxis: {
//     offsetX: 0,
//     offsetY: 0,
//     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
//     labels: {
//         low: 0,
//         offsetX: 0,
//         show: false,
//     },
//     axisBorder: {
//         low: 0,
//         offsetX: 0,
//         show: false,
//     },
//     axisTicks: {
//         show: false,
//     },
//   },
//   legend:{
//     show: false
//   },
//   yaxis: {
//     show: false,
//   },
//   tooltip: {
//     x: {
//         format: 'MM'
//     },
//   },
// };
// document.getElementById('reportChart').innerHTML='';
// var chart1 = new ApexCharts(document.querySelector("#reportChart"), options);
// chart1.render();
// function earningsReport() {
//   chart1.updateOptions({
//       colors: ["rgb(" + myVarVal + ")", '#ffdd99','rgba(5, 195, 251, 0.8)',],
//   })
// }
/* Earnings Report Chart */
// WORLD MAP MARKER
$('#world-map-markers1').vectorMap({
  map: 'world_mill_en',
  scaleColors: ['#0d9c1e', '#e82646', '#007F6E'],

  normalizeFunction: 'polynomial',

  hoverOpacity: 0.7,

  hoverColor: false,

  regionStyle: {

      initial: {

          fill: '#edf0f5'
      }
  },
  markerStyle: {
      initial: {
          r: 6,
          'fill': '#0d9c1e',
          'fill-opacity': 0.9,
          'stroke': '#fff',
          'stroke-width': 9,
          'stroke-opacity': 0.2
      },

      hover: {
          'stroke': '#fff',
          'fill-opacity': 1,
          'stroke-width': 1.5
      }
  },
  backgroundColor: 'transparent',

});







var options = {
  series: [{
  name : 'Online Sale',  
  data: [100,155, 175, 160, 200, 200, 250, 130, 145, 250, 150,250 ]
},{
  name : 'Marketing Sale',  
  data: [45, 75 , 85, 45, 145, 90, 45, 110, 65, 35, 105, 105]
}], 
  colors:['var(--primary-bg-color)' ,'#FFAE1A'],
  chart: {
    type: 'bar',
    height: 320, 
    toolbar: {
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false, 
        reset: false,
        pan: false,
        download: false,
      },
    }, 
  },
  fill: {
    gradient:{
        opacityFrom: 0.2,
        opacityTo: 0,
        shadeIntensity: 0.2,
    },
  },
  markers: {
    discrete: [{
      seriesIndex: 0,
      dataPointIndex: 1,
      fillColor: '#fff',
      strokeColor: 'var(--primary-bg-color)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 2,
      fillColor: '#fff',
      strokeColor: 'var(--primary-bg-color)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0, 
      dataPointIndex: 3,
      fillColor: '#fff',
      strokeColor: 'var(--primary-bg-color)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 4,
      fillColor: '#fff',
      strokeColor: 'var(--primary-bg-color)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 5,
      fillColor: '#fff',
      strokeColor: 'var(--primary-bg-color)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 6,
      fillColor: '#fff',
      strokeColor: 'var(--primary-bg-color)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 7,
      fillColor: '#fff',
      strokeColor: 'var(--primary-bg-color)',
      size: 3,
      shape: "circle" 
    },
    {
      seriesIndex: 0,
      dataPointIndex: 8,
      fillColor: '#fff',
      strokeColor: 'var(--primary-bg-color)',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 9, 
      fillColor: '#fff',
      strokeColor: 'var(--primary-bg-color)',
      size: 3, 
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 10,
      fillColor: '#fff',
      strokeColor: 'var(--primary-bg-color)',
      size: 3, 
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 1,
      fillColor: '#fff',
      strokeColor: '#FFAE1A',
      size: 3, 
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 2,
      fillColor: '#fff',
      strokeColor: '#FFAE1A',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 3,
      fillColor: '#fff',
      strokeColor: '#FFAE1A',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 4,
      fillColor: '#fff',
      strokeColor: '#FFAE1A',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 5,
      fillColor: '#fff',
      strokeColor: '#FFAE1A',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 6,
      fillColor: '#fff',
      strokeColor: '#FFAE1A',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 7,
      fillColor: '#fff',
      strokeColor: '#FFAE1A',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 8,
      fillColor: '#fff',
      strokeColor: '#FFAE1A',
      size: 3,
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 9,
      fillColor: '#fff',
      strokeColor: '#FFAE1A',
      size: 3, 
      shape: "circle"
    },
    {
      seriesIndex: 1,
      dataPointIndex: 10,
      fillColor: '#fff',
      strokeColor: '#FFAE1A',
      size: 3, 
      shape: "circle"
    },
    ],
  },
  legend:{
    show :false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  }, 
  dataLabels: {
    enabled: false,
  },
  grid :{
    show: true,
    strokeDashArray: 3,
    borderColor: ['var(--chart-border)'],
    xaxis: { 
      lines: { 
        show: true,
      }
    },
    yaxis: {
      lines: {
        show: true,
      }
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov" ,"Dec"],
        labels: {
            style: { 
                colors: ['var(--body-font-color)','var(--body-font-color)','var(--body-font-color)','var(--body-font-color)','var(--body-font-color)','var(--body-font-color)','var(--body-font-color)','var(--body-font-color)','var(--body-font-color)','var(--body-font-color)','var(--body-font-color)','var(--body-font-color)' ],
            } 
        }, 
        axisTicks: {
          show: false
        },
        axisBorder: {  
            show: false
        }, 
    },
    yaxis: {
      labels: {
          style: {
              colors: ['var(--body-font-color)'],
          },
          formatter: (value) => {
            return `${value}$`;
          },
      },

    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex,}) {
        return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Marketing Sale' + '<h3>' + '$'+ series[seriesIndex][dataPointIndex] + '<h3/>'  + '</span>' + '</div>';
      },
    },
    responsive: [{
      breakpoint: 425,
      options: { 
        series: [{
          name : 'Online Sale', 
          data: [100,155, 175, 160, 200, 200, 250 ]
        },{ 
          name : 'Marketing Sale',
          data: [45, 75 , 85, 45, 145, 90, 45]
        }],
      }
    }
  ],
};
var revenuegrowth = new ApexCharts(document.querySelector("#revenuegrowth"), options);
revenuegrowth.render();

var Option = {
  series: [
      {
          name: 'series1',
          data: [4.6, 3.6, 2, 3, 4, 2.4, 2.8, 4.3, 2, 1.6],
      },
      {
          name: 'series2',
          data: [1.5, 2, 3.8, 3.5, 2.2, 3.5, 4, 3, 1.5, 3.8],
      },
  ],
  chart: {
      height: 290,
      type: 'area',
      offsetY: 12,
      offsetX: -15,
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  colors: ['var(--primary-bg-color)','#09ad95', ],

  stroke: {
      curve: 'smooth',
      width: 2,
  },
  grid: {
      show: true,
      strokeDashArray: 5,
      position: 'back',
      xaxis: {
          lines: {
              show: false
          }
      },
  },
  fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [5, 100, 100, 100]
      },
  },
  annotations: {
      xaxis: [{
          x: 312,
          strokeDashArray: 5,
          borderWidth: 3,
          borderColor:'#09ad95',
      },
      ],
      points: [{
          x: 312,
          y: 4.5,
          marker: {
              size: 8,
              fillColor:'var(--primary-bg-color)',
              strokeColor: "#ffffff",
              strokeWidth: 4,
              radius: 5,
          },
          label: {
              borderWidth: 1,
              offsetY: 0,
              text: '7h a week on average in Apr',
              style: {
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'Outfit, sans-serif',
              }
          }
      }],
  },
  yaxis: {
      labels: {
          show: true,
          style: {
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              colors: '#3D434A',
          },

          formatter: (value) => {
              return `${value}h`;
          },
      },
  },
  xaxis: {
      type: 'category',
      categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
      ],
      tickAmount: 12,
      labels: {
          minHeight: undefined,
          maxHeight: 28,
          offsetX: 10,
          offsetY: 0,
          style: {
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              colors: '#8D8D8D',
          },
          tooltip: {
              enabled: false,
          },
      },
      axisBorder: {
          show: false
      },
  },
  tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return `<div class="apex-tooltip"> 
                <span>
                     <span class="bg-secondary"> </span>
                      Selling : ${series[0][dataPointIndex]} K
                </span> 
                <span class="mt-2">
                     <span class="bg-primary"> </span>
                      Selling : ${series[1][dataPointIndex]} K
                </span> 
              </div>`;
      },
  },
  legend: {
      show: false,
  },
  responsive: [
      {
          breakpoint: 1657,
          options: {
              chart: {
                  height: 190,
              },
          },
      },
  ],
};

var ChartEl = new ApexCharts(document.querySelector('#sales-analytics-chart'), Option);
ChartEl.render();
