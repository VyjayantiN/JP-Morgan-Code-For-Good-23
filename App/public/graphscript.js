document.addEventListener("DOMContentLoaded", function() {
  // Sample data for the graphs
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const dashboardData = [500, 800, 1200, 900, 1500, 1100];
  const upcomingEventsData = [
    { type: 'Conference', value: 5 },
    { type: 'Workshop', value: 3 },
    { type: 'Webinar', value: 2 }
  ];
  const newGraphData = [5, 8, 10, 6, 12, 9];
  const treesTaggedData = [30, 50, 25, 40, 60, 45];
  
  // Dashboard
  const dashboardOptions = {
    chart: {
      type: 'line',
      height: 300,
    },
    series: [{
      name: 'Dashboard',
      data: dashboardData
    }],
    xaxis: {
      categories: months
    },
    yaxis: {
      title: {
        text: 'Value'
      }
    },
    colors: ['#4299E1'],
    title: {
      text: 'Overall Performance',
      align: 'center',
      style: {
        fontSize: '20px'
      }
    }
  };
  
  const dashboard = new ApexCharts(document.querySelector("#dashboard"), dashboardOptions);
  dashboard.render();
  
  // Upcoming Events
  const upcomingEventsOptions = {
    chart: {
      type: 'bar',
      height: 300,
    },
    series: [{
      name: 'Upcoming Events',
      data: upcomingEventsData.map(data => data.value)
    }],
    xaxis: {
      categories: upcomingEventsData.map(data => data.type)
    },
    yaxis: {
      title: {
        text: 'Number of Events'
      }
    },
    colors: ['#48BB78'],
    title: {
      text: 'Upcoming Registered Events',
      align: 'center',
      style: {
        fontSize: '20px'
      }
    }
  };
  
  const upcomingEvents = new ApexCharts(document.querySelector("#upcoming-events"), upcomingEventsOptions);
  upcomingEvents.render();
  
  // New Graph
  const newGraphOptions = {
    chart: {
      type: 'bar',
      height: 300,
    },
    series: [{
      name: 'New Graph',
      data: newGraphData
    }],
    xaxis: {
      categories: months
    },
    yaxis: {
      title: {
        text: 'Number of Events'
      }
    },
    colors: ['#FF5F6D'],
    title: {
      text: 'New Graph',
      align: 'center',
      style: {
        fontSize: '20px'
      }
    }
  };
  
  const newGraph = new ApexCharts(document.querySelector("#new-graph"), newGraphOptions);
  newGraph.render();
  
  // Trees Tagged
  const treesTaggedOptions = {
    chart: {
      type: 'area',
      height: 300,
    },
    series: [{
      name: 'Trees Tagged',
      data: treesTaggedData
    }],
    xaxis: {
      categories: months
    },
    yaxis: {
      title: {
        text: 'Number of Trees'
      }
    },
    colors: ['#FFC371'],
    title: {
      text: 'Trees Tagged',
      align: 'center',
      style: {
        fontSize: '20px'
      }
    }
  };
  
  const treesTagged = new ApexCharts(document.querySelector("#trees-tagged"), treesTaggedOptions);
  treesTagged.render();
  
  // Competence Pie Chart
  const competenceData = [70, 30]; // User's competence vs. City mates' competence
  const competenceOptions = {
    chart: {
      type: 'pie',
      height: 300,
    },
    series: competenceData,
    labels: ['No. Of Events Organised ', "No. of Events Registered"],
    colors: ['#FF9F00', '#2980B9'],
    title: {
      text: 'Ratio Analysis',
      align: 'center',
      style: {
        fontSize: '20px'
      }
    },
    legend: {
      position: 'bottom'
    }
  };
  
  const competenceChart = new ApexCharts(document.querySelector("#competence-chart"), competenceOptions);
  competenceChart.render();
});
