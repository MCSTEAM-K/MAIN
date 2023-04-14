var barChartOptions = {
    series: [{
    data: [125, 95, 74, 148]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: false
    },
  },
  colors: [
    "#ffbf00"
  ],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "60%",

    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["January", "February", "March", "April"],
  },
};

  var barChart = new ApexCharts(document.querySelector("#barChart2"), barChartOptions);
  barChart.render();