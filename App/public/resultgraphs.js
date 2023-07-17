document.addEventListener("DOMContentLoaded", function() {
  const barGraphData = [
    {
      name: 'Area',
      data: [500, 700, 600, 800, 600] // Replace with actual area data
    },
    {
      name: 'Age of Plants',
      data: [316, 42, 65, 36, 84] // Replace with actual age of plants data
    },
    {
      name: 'Fruit Bearing Plants',
      data: [65, 156, 175, 417, 619] // Replace with actual fruit bearing plants data
    },
    {
      name: 'Fertility of Soil',
      data: [25, 147, 666, 78, 66] // Replace with actual fertility of soil data
    }
  ];

  const barGraphOptions = {
    chart: {
      type: 'bar',
      height: 400,
    },
    series: barGraphData,
    xaxis: {
      categories: ['MG Road', 'Indiranagar', 'Koramangala', 'Whitefield', 'Jayanagar'], // Replace with actual place names
    },
    yaxis: {
      title: {
        text: 'Value',
      },
    },
    colors: ['#2980B9', '#FF9F00', '#4CAF50', '#FF6384'], // Assign different colors to each bar
    title: {
      text: 'Internal Analysis in Bengaluru',
      align: 'center',
    },
  };

  const barGraph = new ApexCharts(document.querySelector("#bar-graph"), barGraphOptions);
  barGraph.render();
  
  const lineGraphData = [
    {
      name: 'Species of Plants',
      data: [80, 50, 72, 62, 91] // Replace with actual data for species of plants
    }
    // Add more data for other lines if needed
  ];

  const lineGraphOptions = {
    chart: {
      type: 'line',
      height: 400,
    },
    series: lineGraphData,
    xaxis: {
      categories: ['MG Road', 'Indiranagar', 'Koramangala', 'Whitefield', 'Jayanagar'], // Replace with actual place names
    },
    yaxis: {
      title: {
        text: 'Number of Species',
      },
    },
    colors: ['#FF6384'], // Customize the color as needed
    title: {
      text: 'Species',
      align: 'center',
    },
  };

  const lineGraph = new ApexCharts(document.querySelector("#line-graph"), lineGraphOptions);
  lineGraph.render();

  const pieGraphData = [35, 20, 10, 15, 20]; // Replace with actual data for pie graph

  const pieGraphOptions = {
    chart: {
      type: 'pie',
      height: 400,
    },
    series: pieGraphData,
    labels: ['Banyan', 'Peepal', 'Teak', 'Neem', 'Jamun'], // Replace with actual species names
    colors: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F00', '#4CAF50'], // Assign different colors to each slice
    title: {
      text: 'Species Distribution',
      align: 'center',
    },
  };

  const pieGraph = new ApexCharts(document.querySelector("#pie-graph"), pieGraphOptions);
  pieGraph.render();
});
