var options = {
    series: [
        { name: "Income", data: [31, 40, 28, 51, 31, 40, 28, 51, 31, 40, 28, 51] },
        { name: "Expenses", data: [0, 30, 10, 40, 30, 60, 50, 80, 70, 100, 90, 130] },
    ],
    chart: {
        height: 250,
        type: "area",
        toolbar: { show: false },
        dropShadow: {
            enabled: true,
            top: 12,
            left: 0,
            bottom: 0,
            right: 0,
            blur: 2,
            color: "#fff",
            opacity: 0.35
        }
    },
    annotations: {
        xaxis: [{
            x: 312,
            strokeDashArray: 4,
            borderWidth: 1,
            borderColor: "var(--bs-secondary)"
        }],
        points: [{
            x: 312,
            y: 52,
            marker: {
                size: 6,
                fillColor: "var(--primary-bg-color)",
                strokeColor: "var(--bs-card-bg)",
                strokeWidth: 4,
                radius: 5
            },
            label: {
                borderWidth: 1,
                offsetY: -110,
                text: "50k",
                style: {
                    background: "var(--primary-bg-color)",
                    fontSize: "14px",
                    fontWeight: "600"
                }
            }
        }]
    },
    colors: ["var(--primary-bg-color)", "#007F6E"],
    dataLabels: { enabled: false },
    stroke: {
        show: true,
        curve: "smooth",
        width: [3, 3],
        dashArray: [0, 0],
        lineCap: "round"
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    yaxis: {
        labels: {
            offsetX: -12,
            offsetY: 0,
            formatter: function (e) {
                return "$" + e;
            }
        }
    },
    grid: {
        strokeDashArray: 3,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: false } }
    },
    legend: { show: false },
    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.05,
            opacityTo: 0.05,
            stops: [45, 100]
        }
    }
};

var chart = new ApexCharts(document.querySelector("#audience_overview"), options);
chart.render();




// Now initialize the map after chart1 is defined
const map_2 = new jsVectorMap({
  map: "world",
  selector: "#map_2",
  mapBgColor: "#F7F8F9",
  zoomOnScroll: false,
  zoomButtons: false,
  markers: [
    { name: "Greenland", coords: [72, -42] },
    { name: "Canada", coords: [56.1304, -106.3468] },
    { name: "Brazil", coords: [-14.235, -51.9253] },
    { name: "Egypt", coords: [26.8206, 30.8025] },
    { name: "Russia", coords: [61, 105] },
    { name: "China", coords: [35.8617, 104.1954] },
    { name: "United States", coords: [37.0902, -95.7129] },
    { name: "Norway", coords: [60.472024, 8.468946] },
    { name: "Ukraine", coords: [48.379433, 31.16558] },
  ],
  lines: [
    { from: "Canada", to: "Egypt" },
    { from: "Russia", to: "Egypt" },
    { from: "Greenland", to: "Egypt" },
    { from: "Brazil", to: "Egypt" },
    { from: "United States", to: "Egypt" },
    { from: "China", to: "Egypt" },
    { from: "Norway", to: "Egypt" },
    { from: "Ukraine", to: "Egypt" },
  ],
  labels: { markers: { render: (e) => e.name } },
  lineStyle: { animation: true, strokeDasharray: "6 3 6" },
  regionStyle: { initial: { fill: "rgba(169,183,197, 0.3)", fillOpacity: 1 } },
  markerStyle: {
    initial: {
      r: 5,
      fill: "#22c55e",
      fillOpacity: 1,
      stroke: "#FFF",
      strokeWidth: 1,
      strokeOpacity: 0.65,
    },
    hover: { stroke: "black", cursor: "pointer", strokeWidth: 2 },
    selected: { fill: "blue" },
    selectedHover: { fill: "red" },
  },
});




