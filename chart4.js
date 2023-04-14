var options = {
    series: [24, 11, 47, 17, 15],
    chart: {
    width: 400,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
  },
  legend: {
    show: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#pieChart2"), options);
  chart.render();