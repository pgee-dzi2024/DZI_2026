

var options1 = {
  series: [
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ],
  chart: {
    type: "line",
    width: 120,
    height: 35,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 4,
      left: 0,
      bottom: 0,
      right: 0,
      blur: 2,
      color: "rgba(132, 145, 183, 0.3)",
      opacity: 0.35,
    },
  },
  colors: ["var(--primary-bg-color)"],
  stroke: {
    show: true,
    curve: "smooth",
    width: [3],
    lineCap: "round",
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

// ✅ Avoid variable name conflicts
var miniLineChart = new ApexCharts(document.querySelector("#line-1"), options1);
miniLineChart.render();

// Define new options2 cleanly
const options2 = {
  series: [
    {
      data: [15, 34, 28, 67, 42, 21, 39, 18, 27, 5, 49], // ✅ new data
    },
  ],
  chart: {
    type: "line",
    width: 120,
    height: 35,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 4,
      left: 0,
      bottom: 0,
      right: 0,
      blur: 2,
      color: "rgba(132, 145, 183, 0.3)",
      opacity: 0.35,
    },
  },
  colors: ["#95a0c5"],
  stroke: {
    show: true,
    curve: "smooth",
    width: [3],
    lineCap: "round",
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function () {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

// Create and render chart2
const chart2 = new ApexCharts(document.querySelector("#line-2"), options2);
chart2.render();


// Define colors array
const colors = ["#007F6E", "#007F6E", "#007F6E", "#22c55e", "#007F6E", "#007F6E", "#007F6E", "var(--primary-bg-color)   ", "#007F6E", "#007F6E", "#007F6E", "#007F6E"];

const monthlyIncomeChartOptions = {
    chart: {
        height: 295,
        type: "bar",
        toolbar: { show: false },
        dropShadow: {
            enabled: true,
            top: 0,
            left: 5,
            bottom: 5,
            right: 0,
            blur: 5,
            color: "#45404a2e",
            opacity: 0.35
        }
    },
    colors: colors,
    plotOptions: {
        bar: {
            borderRadius: 6,
            dataLabels: { position: "top" },
            columnWidth: "20",
            distributed: true
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: "12px",
            colors: colors
        }
    },
    series: [{
        name: "Inflation",
        data: [2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 13, 1.4, 0.8, 5, 11]
    }],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: {
            fill: {
                type: "gradient",
                gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5
                }
            }
        },
        tooltip: { enabled: true }
    },
    yaxis: {
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
            show: true,
            formatter: function (val) {
                return "$" + val + "k";
            }
        }
    },
    grid: {
        row: {
            colors: ["transparent", "transparent"],
            opacity: 0.2
        },
        strokeDashArray: 2.5
    },
    legend: { show: false }
};

// Render the chart
const monthlyIncomeChart = new ApexCharts(document.querySelector("#monthly_income"), monthlyIncomeChartOptions);
monthlyIncomeChart.render();
