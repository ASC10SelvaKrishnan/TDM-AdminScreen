import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ScriptableContext } from 'chart.js';


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
onMonthChange // Add dataLabels plugin to show number of requests on top of each bar
($event: Event) {
throw new Error('Method not implemented.');
}
  isOpen = false; // Toggle state for caret

  constructor(private router: Router) {}
 
  OnNavigate() {
    this.router.navigate(['/reports-details']); // Updated navigation path
  }
  NavigateTo(){
    this.router.navigate(['/data-requests-submitted']);
  }
  NavigatePerDomain(){
    this.router.navigate(['/data-requests-submitted-per-domain']);
  }
  NavigateProjects(){
    this.router.navigate(['/projects-per-release']);
  }
  NavigateSuccess(){
    this.router.navigate(['/report-to-measure-success']);
  }
  NavigateProjectLevel(){
    this.router.navigate(['/reports-on-project-level']);
  }
  NavigateAverageTime(){
    this.router.navigate(['/average-time-per-automation']);
  }
  NavigateFailedAutomation(){
    this.router.navigate(['/failed-automation']);
  }
  months: string[] = [
    'Month','January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  selectedMonth: string = this.months[0]; // Default to first month

  // Add toggle method for caret
  toggleCaret() {
    this.isOpen = !this.isOpen;
  }
// Data Requests Line Chart with Enhanced Aesthetics
dataRequestsLineChart: ChartConfiguration<'line'>['data'] = {
  datasets: [
    {
      data: this.generateSineWaveData(20),
      backgroundColor: (ctx: ScriptableContext<'line'>) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
        gradient.addColorStop(0, 'rgba(102, 102, 204, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 204, 204, 0.2)');
        return gradient;
      },
      borderColor: 'rgb(102, 102, 204)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(102, 102, 204)',
      pointRadius: 3,
      pointHoverRadius: 5,
      fill: true,
      tension: 0.4,
    },
    {
      data: this.generateStraightLineData(20, 20),
      borderColor: 'rgba(204, 102, 102, 0.8)',
      borderWidth: 2,
      fill: false,
      pointRadius: 3,
      pointHoverRadius: 5,
    }
  ],
  labels: Array.from({ length: 20 }, (_, i) => (i * 2 + 1).toString()),
};

// Function to generate smoother sine wave data
generateSineWaveData(points: number): number[] {
  const sineWaveData: number[] = [];
  const amplitude = 8;
  const frequency = 1;
  const phase = 0;
  const tiltOffset = 3;
  const xMax = 2 * Math.PI;

  for (let i = 0; i < points; i++) {
    const x = (xMax / (points - 1)) * i;
    const y = amplitude * Math.sin(frequency * x + phase);
    sineWaveData.push(y + 15 + tiltOffset);
  }
  return sineWaveData;
}

// Function to generate straight line data
generateStraightLineData(points: number, constantValue: number): number[] {
  return Array(points).fill(constantValue);
}

// Line Chart Options with Aesthetic Enhancements
lineChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      }
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(204, 204, 204, 0.2)',
      },
      ticks: {
        stepSize: 5,
        callback: (value) => `${value}`, // Remove "units" label from y-axis
      }
    }
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (context) => `Data Point: ${context.raw}`,
      },
      backgroundColor: 'rgba(0,0,0,0.7)',
      titleColor: '#fff',
    },
    title: {
      display: true,
      //text: 'Innovative Data Requests Line Chart',
      color: 'rgb(102, 102, 204)',
      font: {
        size: 16,
        weight: 'bold'
      },
    },
    datalabels: {
      display: false,
    }
  },
  animation: {
    duration: 1500,
    easing: 'easeInOutQuad',
  }
};


// Domain Requests Bar Chart
domainRequestsBarChart: ChartConfiguration['data'] = {
  labels: ['Domain 1', 'Domain 2', 'Domain 3', 'Domain 4', 'Domain 5', 'Domain 6'],
  datasets: [{
    data: [1, 5, 3, 10, 5, 10],
    label: 'Requests per Domain',
    backgroundColor: ['#FFB3C1', '#80C9F3', '#FFE29A', '#A3E5E5', '#C5A6FF', '#FFC58E'],
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
        family:'Avenir-Book, Helvetica, Arial, sans-serif',
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
    backgroundColor: ['#3498DB','#9B59B6']
  }]
};

projectDataDonutChart: ChartConfiguration<'doughnut'>['data'] = {
  labels: ['Project level reserved', 'Available data per domain'],
  datasets: [{
    data: [40, 60],
    backgroundColor: ['#3498DB','#9B59B6']
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
        padding: 7,  // Space between the labels and their indicators
        boxWidth: 10,  // Adjust size of the legend box
        usePointStyle: true,
        boxHeight: 10,
        font: {
            size: 9,
            weight: 'bold',
            family: 'Avenir-Book, Helvetica, Arial, sans-serif'
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
        family: 'Avenir-Book, Helvetica, Arial, sans-serif'
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

 // constructor() {}

  ngOnInit(): void {}
}