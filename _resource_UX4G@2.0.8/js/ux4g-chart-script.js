/*!
 * UX4G v2.0.8 (https://doc.ux4g.gov.in)
 * Copyright 2025 The UX4G Authors
 * Copyright 2025 NeGD, MeitY.
 * Licensed under MIT.
 */
//  bar chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar', // Type of chart: 'bar', 'bubble', 'line', 'pie', 'doughnut', etc.
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Labels for your data
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3], // Your data
        backgroundColor: [
          'rgb(97,58,245,0.2)',
          'rgb(236,208,255,0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgb(97,58,245,1)',
          'rgb(236,208,255,1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Dataset 2', // Second dataset label
        data: [50, 25, 22, 44, 30, 17], // Data for the second chart
        backgroundColor: [
          'rgb(54, 162, 235, 0.2)',
          'rgb(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgb(54, 162, 235, 1)',
          'rgb(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// line chart
const lineCTX = document.getElementById('myLineChart').getContext('2d');

const myLineChart = new Chart(lineCTX, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// pie chart

const Piectx = document.getElementById('myPieChart').getContext('2d');

const myPieChart = new Chart(Piectx, {
  type: 'pie',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Color Distribution',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Distribution of Colors',
      },
    },
  },
});

// My Polar Area Chart

const PolarAreaChart = document.getElementById('myPolarAreaChart').getContext('2d');

const myPolarAreaChart = new Chart(PolarAreaChart, {
  type: 'polarArea', // Specify the chart type as 'polarArea'
  data: {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'], // Labels for each section
    datasets: [
      {
        label: 'My Dataset',
        data: [11, 16, 7, 3, 14], // Data values for each section
        backgroundColor: [
          // Colors for each section
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          // Border color for each section
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1, // Border width for each section
      },
    ],
  },
  options: {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: 'Polar Area Chart Example', // Title of the chart
      },
    },
    scale: {
      ticks: {
        beginAtZero: true, // Ensure the scale starts at 0
      },
    },
  },
});

// Radar chart

const radarChart = document.getElementById('myRadarChart').getContext('2d');

const myRadarChart = new Chart(radarChart, {
  type: 'radar',
  data: {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling', 'Hiking'],
    datasets: [
      {
        label: 'Activity Level',
        data: [3, 2, 1, 5, 4],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Radar Chart Example',
      },
    },
  },
});

//

const ScatterCTX = document.getElementById('myScatterChart').getContext('2d');

const myScatterChart = new Chart(ScatterCTX, {
  type: 'scatter', // Specify the chart type as 'scatter'
  data: {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: [
          // Data points with x and y coordinates
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 12, y: -5 },
          { x: 15, y: 15 },
          { x: -7, y: 8 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.8)', // Color of the points
        borderColor: 'rgba(255, 99, 132, 1)', // Border color of the points
        pointRadius: 5, // Size of the points
      },
    ],
  },
  options: {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: {
        display: true, // Hide the legend if not needed
      },
      title: {
        display: true,
        text: 'Scatter Chart Example', // Title of the chart
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom', // Position the x-axis at the bottom
        beginAtZero: true, // Start x-axis at zero
      },
      y: {
        beginAtZero: true, // Start y-axis at zero
      },
    },
  },
});

// Multi type Chart

const Multictx = document.getElementById('myMultitypeChart').getContext('2d');

const myMultitypeChart = new Chart(Multictx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Bar Dataset',
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Line Dataset',
        data: [30, 25, 35, 20, 55, 45, 65],
        type: 'line',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Multitype Chart Example',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Event chart

const EventChartCTX = document.getElementById('myEventsChart').getContext('2d');

const myEventsChart = new Chart(EventChartCTX, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Project Progress',
        data: [30, 50, 70, 60, 80, 90, 100],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Events Chart Example',
      },
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x',
            value: 'March',
            borderColor: 'red',
            borderWidth: 2,
            label: {
              content: 'Milestone 1',
              enabled: true,
              position: 'top',
              backgroundColor: 'red',
            },
          },
          {
            type: 'line',
            mode: 'vertical',
            scaleID: 'x',
            value: 'June',
            borderColor: 'blue',
            borderWidth: 2,
            label: {
              content: 'Milestone 2',
              enabled: true,
              position: 'top',
              backgroundColor: 'blue',
            },
          },
        ],
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Bubble chart

const BubbleCTX = document.getElementById('myBubbleChart').getContext('2d');

const myBubbleChart = new Chart(BubbleCTX, {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: 'First Dataset',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 20, y: 10, r: 20 },
          { x: 30, y: 30, r: 10 },
          { x: 40, y: 40, r: 25 },
          { x: 50, y: 50, r: 30 }, // Additional bubble
          { x: 60, y: 20, r: 10 }, // Additional bubble
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Second Dataset',
        data: [
          { x: 15, y: 25, r: 10 },
          { x: 25, y: 15, r: 15 },
          { x: 35, y: 35, r: 20 },
          { x: 45, y: 45, r: 30 },
          { x: 55, y: 25, r: 25 }, // Additional bubble
          { x: 65, y: 30, r: 20 }, // Additional bubble
        ],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bubble Chart Example',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'X Axis',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Y Axis',
        },
      },
    },
  },
});
