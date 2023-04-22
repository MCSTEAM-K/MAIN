var barChartOptions = {
    series: [
    {name: "Ob Cured",
     data: [256, 384, 297, 436]},
    {name: "Amount Collected",
     data: [384, 297, 436, 256]}
  ],
    chart: {
    type: 'bar',
    height: 450,
    width: '100%',
    height: '95%',
    colors: "ffbf00",
    toolbar: {
        show: false
    },
  },
  colors: [
    "#ffbf00", '#E91E63'
  ],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "80%",
    }
  },
  tooltip:{
    enabled: true,
    theme: "dark"
  },
  fill: {
    type: 'gradient',
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: true,
  },
  yaxis: {
    labels:{
      style:{
        colors: "#fff"
      },
    },
  },
  xaxis: {
    labels:{
      style:{
        colors: "#fff"
      },
    },
    categories: ["January", "February", "March", "April"],
  },
};

  var barChart = new ApexCharts(document.querySelector("#barChart"), barChartOptions);
  barChart.render();