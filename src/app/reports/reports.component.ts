import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the plugin
Chart.register(ChartDataLabels);
interface AutomationItem {
  title: string;
  time: string;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

export class ReportsComponent implements OnInit {

  months: string[] = [
    'Month','January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  selectedMonth: string = this.months[0]; // Default to first month

// Data Requests Line Chart
dataRequestsLineChart: ChartConfiguration['data'] = {
  datasets: [
    {
      data: this.generateSineWaveData(20), // Decrease points for even fewer dots in the sine wave
      backgroundColor: 'rgba(0, 200, 140, 0.2)',
      borderColor: 'rgb(0, 200, 140)', // Color for sine wave
      pointBackgroundColor: 'rgb(0, 200, 140)',
      pointRadius: 0, // Make points invisible
      fill: false, // Fill under the sine wave
    },
    {
      data: this.generateStraightLineData(20, 20), // Update straight line data points to match sine wave data points
      borderColor: 'rgb(0, 200, 140)', // Updated color to match the sine wave
      borderWidth: 2, // Width of the straight line
      fill: false, // Do not fill under the line
      pointRadius: 0, // Make points invisible
    }
  ],
  labels: Array.from({ length: 20 }, (_, i) => (i * 2 + 1).toString()), // Generate odd numbers starting from 1 for 20 points
};

// Function to generate smoother sine wave data
generateSineWaveData(points: number): number[] {
  const sineWaveData: number[] = [];
  const amplitude = 10; // Amplitude for sine wave
  const frequency = 1; // Frequency of the sine wave
  const phase = 0; // Phase shift
  const tiltOffset = 5; // Value to tilt the sine wave
  const xMax = 2 * Math.PI; // Max x value (2π for one full sine wave)

  for (let i = 0; i < points; i++) {
    const x = (xMax / (points - 1)) * i; // Calculate x value
    const y = amplitude * Math.sin(frequency * x + phase); // Calculate sine value
    sineWaveData.push(y + 20 + tiltOffset); // Offset sine wave and apply tilt
  }
  return sineWaveData;
}

// Function to generate straight line data
generateStraightLineData(points: number, constantValue: number): number[] {
  const lineData: number[] = [];
  for (let i = 0; i < points; i++) {
    lineData.push(constantValue); // Push the constant y value
  }
  return lineData;
}

// Add method to handle month change
onMonthChange(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  this.selectedMonth = selectElement.value;
  // You can add logic here to update the chart data based on the selected month
}

lineChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false // Hide x-axis grid lines
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false // Hide y-axis grid lines
      },
      ticks: {
        stepSize: 10, // Increase y-axis by 10
      }
    }
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    title: {
      display: false, // Hide title
    },
    datalabels: {
      display: false, // Hide data labels
    }
  }
};

// Domain Requests Bar Chart
domainRequestsBarChart: ChartConfiguration['data'] = {
  labels: ['Domain 1', 'Domain 2', 'Domain 3', 'Domain 4', 'Domain 5', 'Domain 6'],
  datasets: [{
    data: [1, 5, 3, 10, 5, 10],
    label: 'Requests per Domain',
    backgroundColor: ['#FFA500', '#FF7F7F', '#87CEFA', '#66CDAA', '#6495ED', '#FFA07A'],
    barThickness: 70, // Control the breadth of each bar
    borderRadius: 10 // Add curves to the bars
  }]
};

barChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false // Hide x-axis grid
      },
      ticks: {
        display: true // Show x-axis labels (Domain labels)
      },
      border: {
        display: false // Hide x-axis border
      }
    },
    y: {
      beginAtZero: true,
      max: 13,
      ticks: {
        stepSize: 1,
        display: false // Hide y-axis labels
      },
      grid: {
        display: false // Hide y-axis grid
      },
      border: {
        display: false // Hide y-axis border
      }
    }
  },
  plugins: {
    legend: {
      display: false // Hide legend
    },
    datalabels: { // Add dataLabels plugin to show number of requests on top of each bar
      anchor: 'end',
      align: 'end',
      color: '#000', // You can change the color if needed
      font: {
        weight: 'bold'
      }
    }
  }
};

// Donut Charts
serviceNowDonutChart: ChartConfiguration<'doughnut'>['data'] = {
  labels: ['Service now', 'Test data requests submitted thru the tool'],
  datasets: [{
    data: [40, 60],
    backgroundColor: ['#E57373','#3F51B5']
  }]
};

projectDataDonutChart: ChartConfiguration<'doughnut'>['data'] = {
  labels: ['Project level reserved', 'Available data per domain'],
  datasets: [{
    data: [40, 60],
    backgroundColor: ['#E57373','#3F51B5']
  }]
};

// Chart Options (modify for reducing radius)
donutChartOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  plugins: {
    legend: {
    display: true,
    position: 'bottom',
    align: 'start',  // Align the legend items to the left
    labels: {
        padding: 20,  // Space between the labels and their indicators
        boxWidth: 10,  // Adjust size of the legend box
        usePointStyle: true,
        boxHeight: 10,
        font: {
            size: 14,
            weight: 'bold',
            family: 'Arial'
        },
        // Custom label callback to include percentages
        generateLabels: (chart) => {
            const data = chart.data.datasets[0].data as number[];  // Cast data to number[]
            const total = data.reduce((acc: number, val: number) => acc + val, 0);  // Safely sum the values
            const labels = chart.data.labels as string[];  // Cast labels to string[]

            // Ensure labels are not undefined
            if (!labels) {
                return [];
            }

            const backgroundColors = chart.data.datasets[0].backgroundColor as string[];  // Cast backgroundColor to string[]

            // Define a maximum label length for consistent padding
            const maxLabelLength = Math.max(...labels.map(label => label.length));  // Find the longest label

            return labels.map((label, index) => {
                const value = data[index];
                const percentage = ((value / total) * 100).toFixed(0);  // Calculate percentage

                // Calculate padding to right-align the percentage
                const basePaddingSpaces = ' '.repeat(maxLabelLength - label.length + 12);  // Base padding for space between label and percentage
                let additionalPadding = '';

                // Increase padding if the percentage is '40%'
                if (percentage === '40') {
                    additionalPadding = ' '.repeat(20);  // Adjust this value for more or less space specifically for 40%
                }

                // Return the padded label with percentage aligned to the right
                return {
                    text: `${label}${basePaddingSpaces}${additionalPadding}${percentage}%`,  // Append the label with padded spaces and percentage
                    fillStyle: backgroundColors[index],  // Use the background color at this index
                    strokeStyle: '#fff',  // Optional: White border around the color box
                    lineWidth: 2,  // Optional: Width of the border
                    hidden: false,  // Whether the legend item is hidden
                    index: index  // Dataset index
                };
            });
        }
    }
},

  
    
    datalabels: {
      anchor: 'end',       // Position data labels at the end of the segments
      align: 'end',        // Align the labels to the end
      formatter: (value, context) => {
        // Check if labels are defined before accessing
        const labels = context.chart.data.labels;
        if (labels && (labels[context.dataIndex] === 'Service now' || 
            labels[context.dataIndex] === 'Test data requests submitted thru the tool')) {
          return value; // Show the value
        }
        return ''; // Hide the value for other segments
      },
      color: '#FFFFFF',    // Change label color for better visibility
      font: {
        size: 14,           // Set font size for the labels
        weight: 'bold',      // Add font weight for better readability
        family: 'Arial'
      }
    }
  },
  cutout: '80%', // You can change this percentage to adjust the inner radius (thickness)
  layout: {
    padding: 1  // Optional padding inside the chart
  }
};

automationItems: AutomationItem[] = [
  { title: 'Outing Schedule For Every Departement', time: '5 Minutes Ago' },
  { title: 'Meeting HR Department', time: 'Yesterday, 12:30 PM' },
  { title: 'IT Department Need Two More Talents For UX/UI Designer Position', time: 'Yesterday, 09:15 AM' },
  { title: 'IT Department Need Two More Talents For UX/UI Designer Position', time: 'Yesterday, 09:15 AM' },
  { title: 'IT Department Need Two More Talents For UX/UI Designer Position', time: 'Yesterday, 09:15 AM' },
];

  constructor() {}

  ngOnInit(): void {}
}