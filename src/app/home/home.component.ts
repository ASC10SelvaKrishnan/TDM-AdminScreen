// import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { CommonService } from '../service/common.service';
// import { Chart, registerables, ChartConfiguration, TooltipItem } from 'chart.js';

// interface Request {
//   RequestId: string;
//   RequestType: string;
//   RequestTitle: string;
//   ProjectID: number;
//   Region: string;
//   RequestedDate: string;
//   RequestedBy: string;
//   Status: string;
// }

// interface DashboardMetrics {
//   totalRequests: number;
//   todayRequests: number;
//   averageWorkflowTime: string;
//   domainRequests: number;
// }

// interface StatusCategory {
//   name: string;
//   percentage: number;
//   class: string;
// }

// interface Status {
//   title: string;
//   total: number;
//   categories: StatusCategory[];
// }

// type ColumnKey = 'RequestId' | 'RequestType' | 'RequestTitle' | 'ProjectID' | 'Region' | 'Status';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit, AfterViewInit {
//   requests: Request[] = [];
//   filteredRequests: Request[] = [];
//   filteredRequestsData: Request[] = [];
//   metrics: DashboardMetrics = {
//     totalRequests: 0,
//     todayRequests: 0,
//     averageWorkflowTime: '0 min',
//     domainRequests: 0
//   };
//   selectedTimeRange: string = 'This Week';
//   selectedProject: number = 0;
//   pieChart: Chart<'doughnut'> | null = null;
//   statusData: Status = {
//     title: 'Status',
//     total: 0,
//     categories: [
//       { name: 'Completed', percentage: 0, class: 'completed' },
//       { name: 'Submitted', percentage: 0, class: 'submitted' },
//       { name: 'In Progress', percentage: 0, class: 'in-progress' },
//       { name: 'Failed', percentage: 0, class: 'failed' }
//     ]
//   };
//   projectToIdMapping: { [key: string]: number } = {
//     'Project A': 1,
//     'Project B': 2,
//     'Project C': 3
//   };

//   filters: Record<ColumnKey, string> = {
//     RequestId: '',
//     RequestType: '',
//     RequestTitle: '',
//     ProjectID: '',
//     Region: '',
//     Status: ''
//   };
//   showFilter: Record<ColumnKey, boolean> = {
//     RequestId: false,
//     RequestType: false,
//     RequestTitle: false,
//     ProjectID: false,
//     Region: false,
//     Status: false
//   };
//   StatusOptions: string[] = ['Completed', 'Submitted', 'In Progress', 'Failed'];

//   pageSize = 5;
//   page = 1;
//   totalPages = 1;
//   pageSizes = [5, 10, 15, 20];

//   constructor(private commonService: CommonService) {}

//   ngOnInit(): void {
//     this.fetchRequests();
//     this.commonService.get().subscribe((data: any) => {
//       this.requests = data;
//       this.filteredRequestsData = [...this.requests];
//       this.applyFilters();
//     });
//   }

//   ngAfterViewInit(): void {
//     this.initializePieChart();
//   }

//   fetchRequests(): void {
//     this.commonService.get().subscribe((data: any) => {
//       this.requests = data;
//       this.applyFilters();
//     });
//   }

//   fetchStatusData(): void {
//     this.commonService.getStatusData().subscribe((data: any) => {
//       this.statusData = data.status;
//       this.updatePieChart();
//     });
//   }

//   applyFilterForRequests(): void {
//     this.filteredRequests = this.requests.filter(request => {
//       return Object.keys(this.filters).every(key => {
//         const columnKey = key as ColumnKey;
//         const filterValue = this.filters[columnKey].toLowerCase();
//         const requestValue = (request[columnKey] as string).toLowerCase();
//         return requestValue.includes(filterValue);
//       });
//     });
//     this.applyFilters();
//   }

//   toggleFilter(columnKey: ColumnKey): void {
//     this.showFilter[columnKey] = !this.showFilter[columnKey];
//     if (!this.showFilter[columnKey]) {
//       this.filters[columnKey] = '';
//       this.applyFilterForRequests();
//     }
//   }


//   applyFilters(): void {
//     this.filteredRequests = this.filterRequestsByDateRange();
//     const selectedProjectId = this.projectToIdMapping[this.selectedProject];

//     this.filteredRequests = this.requests.filter(request => {
//       const projectMatch = !this.selectedProject || request.ProjectID === selectedProjectId;
//       const { start, end } = this.getDateRange();
//       const requestDate = this.parseDate(request.RequestedDate);
//       const dateMatch = requestDate >= start && requestDate <= end;
//       return projectMatch && dateMatch;
//     });
//     this.updateMetrics();
//     this.updateStatusData();
//     this.updatePagination();
//   }

//   onPageSizeChange(): void {
//     this.page = 1;
//     this.updatePagination();
//   }

//   updatePagination(): void {
//     this.totalPages = Math.ceil(this.filteredRequests.length / this.pageSize);
//     this.setPageData();
//   }

//   setPageData(): void {
//     const startIndex = (this.page - 1) * this.pageSize;
//     const endIndex = startIndex + this.pageSize;
//     this.filteredRequestsData = this.filteredRequests.slice(startIndex, endIndex);
//   }

//   goToPage(pageNumber: number): void {
//     if (pageNumber >= 1 && pageNumber <= this.totalPages) {
//       this.page = pageNumber;
//       this.setPageData();
//     }
//   }

//   get visiblePages(): number[] {
//     const pages = [];
//     const maxVisiblePages = 3;
//     const startPage = Math.max(1, this.page - 1);
//     const endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

//     for (let i = startPage; i <= endPage; i++) {
//       pages.push(i);
//     }
//     return pages;
//   }

//   filterRequestsByDateRange(): Request[] {
//     const { start, end } = this.getDateRange();
//     return this.requests.filter(request => {
//       const requestDate = this.parseDate(request.RequestedDate);
//       return requestDate >= start && requestDate <= end;
//     });
//   }

//   getDateRange(): { start: Date; end: Date } {
//     const now = new Date();
//     let start = new Date(now);
//     let end = new Date(now);

//     switch (this.selectedTimeRange) {
//       case 'This Week':
//         start.setDate(now.getDate() - now.getDay());
//         break;
//       case 'This Month':
//         start = new Date(now.getFullYear(), now.getMonth(), 1);
//         end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
//         break;
//       case 'This Year':
//         start = new Date(now.getFullYear(), 0, 1);
//         end = new Date(now.getFullYear() + 1, 0, 0);
//         break;
//     }

//     start.setHours(0, 0, 0, 0);
//     end.setHours(23, 59, 59, 999);
//     return { start, end };
//   }

//   onTimeRangeChange(event: Event): void {
//     this.selectedTimeRange = (event.target as HTMLSelectElement).value; // Type assertion
//     // Update the selected time range
//     this.applyFilters(); // Reapply filters based on the new time range
//   }

//   parseDate(dateString: string): Date {
//     const [day, month, year] = dateString.split('.');
//     return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
//   }

//   updateMetrics(): void {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const todayRequests = this.filteredRequests.filter(request =>
//       this.parseDate(request.RequestedDate).getTime() === today.getTime()
//     ).length;

//     const avgTime = Math.floor(Math.random() * 30) + 15;

//     this.metrics = {
//       totalRequests: this.filteredRequests.length,
//       todayRequests,
//       averageWorkflowTime: `${avgTime} min`,
//       domainRequests: new Set(this.filteredRequests.map(r => r.Region)).size
//     };
//   }

//   updateStatusData(): void {
//     const total = this.filteredRequests.length;
//     const completed = this.filteredRequests.filter(r => r.Status === 'Completed').length;
//     const submitted = this.filteredRequests.filter(r => r.Status === 'Submitted').length;
//     const inProgress = this.filteredRequests.filter(r => r.Status === 'In Progress').length;
//     const failed = this.filteredRequests.filter(r => r.Status === 'Failed').length;

//     this.statusData.total = total;
//     this.statusData.categories = [
//       { name: 'Completed', percentage: (completed / total) * 100 || 0, class: 'completed' },
//       { name: 'Submitted', percentage: (submitted / total) * 100 || 0, class: 'submitted' },
//       { name: 'In Progress', percentage: (inProgress / total) * 100 || 0, class: 'in-progress' },
//       { name: 'Failed', percentage: (failed / total) * 100 || 0, class: 'failed' }
//     ];
//     this.updatePieChart();
//   }

//   initializePieChart(): void {
//     Chart.register(...registerables);
//     const chartConfig: ChartConfiguration<'doughnut'> = {
//       type: 'doughnut',
//       data: {
//         labels: this.statusData.categories.map(category => category.name),
//         datasets: [{
//           data: this.statusData.categories.map(category => Math.round(category.percentage)),
//           backgroundColor: ['#FF69B4', '#4146dc', '#F1C40F', '#dc2f2f']
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           tooltip: {
//             callbacks: {
//               label: (tooltipItem: TooltipItem<'doughnut'>) => {
//                 const percentage = Number(tooltipItem.raw).toFixed(2);
//                 return `${tooltipItem.label}: ${percentage}%`;
//               }
//             }
//           }
//         }
//       }
//     };

//     const canvas = document.getElementById('pieChart') as HTMLCanvasElement;
//     if (canvas) {
//       this.pieChart = new Chart(canvas, chartConfig);
//     }
//   }

//   updatePieChart(): void {
//     if (this.pieChart) {
//       this.pieChart.data.datasets[0].data = this.statusData.categories.map(category => Math.round(category.percentage));
//       this.pieChart.update();
//     }
//   }
// }




import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Chart, registerables, ChartConfiguration, ChartOptions, TooltipItem } from 'chart.js';



interface Request {
  RequestId: string;
  RequestType: string;
  RequestTitle: string;
  ProjectID: number;
  Region: string;
  RequestedDate: string;  // String format in JSON
  RequestedBy: string;
  Status: string;
}

interface DashboardMetrics {
  totalRequests: number;
  todayRequests: number;
  averageWorkflowTime: string;
  domainRequests: number;
}

interface StatusCategory {
  name: string;
  percentage: number;
  class: string;
}

interface Status {
  title: string;
  total: number;
  categories: StatusCategory[];
}
type ColumnKey = 'RequestId' | 'RequestType' | 'RequestTitle' | 'ProjectID' |'Region'| 'Status';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit, AfterViewInit {
  requests: Request[] = [];
  filteredRequests: Request[] = [];
  filteredRequestsData : Request[] = [];
  metrics: DashboardMetrics = {
    totalRequests: 0,
    todayRequests: 0,
    averageWorkflowTime: '0 min',
    domainRequests: 0
  };
  selectedTimeRange: string = 'This Week';
  selectedProject: number = 0;
  pieChart: Chart<'doughnut'> | null = null; // To hold the chart instance
  statusData: Status = {
    title: 'Status',
    total: 0,
    categories: [
      { name: 'Completed', percentage: 0, class: 'completed' },
      { name: 'Submitted', percentage: 0, class: 'submitted' },
      { name: 'In Progress', percentage: 0, class: 'in-progress' },
      { name: 'Failed', percentage: 0, class: 'failed' }
    ]
  };

  projectToIdMapping: { [key: string]: number } = {
    'Project A': 1,
    'Project B': 2,
    'Project C': 3
  };


  filters: Record<ColumnKey, string> = {
    RequestId: '',
    RequestType: '',
    RequestTitle: '',
    ProjectID: '',
    Region: '',
    Status:'',
  };
  showFilter: Record<ColumnKey, boolean> = {
    RequestId: false,
    RequestType: false,
    RequestTitle: false,
    ProjectID: false,
    Region: false,
    Status: false
  }; 
  
  StatusOptions:string[] = ['Completed','Submitted','In Progress','Failed']; 


pageSize = 5;
page = 1;
totalPages = 1;


pageSizes = [5, 10, 15, 20];
constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.fetchRequests();   //filters down
    this.commonService.get().subscribe((data:any) =>{
      this.requests = data;
      this.filteredRequestsData = [...this.requests];
      this.applyFilters
    });

   
  }

  ngAfterViewInit(): void {
    this.initializePieChart(); // Initialize the pie chart
  }

  fetchRequests(): void {
    this.commonService.get().subscribe((data: any) => {
      this.requests = data;
      this.applyFilters();
    });
  }

  fetchStatusData(): void {
    this.commonService.getStatusData().subscribe((data: any) => {
      this.statusData = data.status;
      this.updatePieChart(); // Update chart when data is fetched
    });
  }

  applyFilters(): void {
    this.filteredRequests = this.filterRequestsByDateRange();
    const selectedProjectId = this.projectToIdMapping[this.selectedProject];

    this.filteredRequests = this.requests.filter(request => {
      // Filter by project ID if a specific project is selected
      const projectMatch = !this.selectedProject || request.ProjectID === selectedProjectId;

      // Filter by date range
      const { start, end } = this.getDateRange();
      const requestDate = this.parseDate(request.RequestedDate);
      const dateMatch = requestDate >= start && requestDate <= end;
      return projectMatch && dateMatch;
    });
    this.updateMetrics();
    this.updateStatusData();
    this.updatePagination();
   }
    

onPageSizeChange(): void {
  this.page = 1;
  this.updatePagination();
}

updatePagination(): void {
  this.totalPages = Math.ceil(this.filteredRequests.length / this.pageSize);
  this.setPageData();
}

setPageData(): void {
  const startIndex = (this.page - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  this.filteredRequestsData = this.filteredRequests.slice(startIndex, endIndex);
}

goToPage(pageNumber: number): void {
  if (pageNumber >= 1 && pageNumber <= this.totalPages) {
    this.page = pageNumber;
    this.setPageData();
  }
}

get visiblePages(): number[] {
  const pages = [];
  const maxVisiblePages = 3; // Show only 3 page numbers at a time
  const startPage = Math.max(1, this.page - 1);
  const endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
}


  filterRequestsByDateRange(): Request[] {
    const { start, end } = this.getDateRange();
    return this.requests.filter(request => {
      const requestDate = this.parseDate(request.RequestedDate);
      return requestDate >= start && requestDate <= end;
    });
  }

  getDateRange(): { start: Date; end: Date } {
    const now = new Date();
    let start = new Date(now);
    let end = new Date(now);

    switch (this.selectedTimeRange) {
      case 'This Week':
        start.setDate(now.getDate() - now.getDay());
        break;
        case 'This Month':
          start = new Date(now.getFullYear(), now.getMonth(), 1); // Start of the month
          end = new Date(now.getFullYear(), now.getMonth() + 1, 0); // End of the month
          break;
        case 'This Year':
          start = new Date(now.getFullYear(), 0, 1); // Start of the year
          end = new Date(now.getFullYear() + 1, 0, 0); // End of the year
          break;

    }

    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    return { start, end };
  }

  onTimeRangeChange(event: Event): void {
    this.selectedTimeRange = (event.target as HTMLSelectElement).value; // Type assertion
    // Update the selected time range
    this.applyFilters(); // Reapply filters based on the new time range
  }


  parseDate(dateString: string): Date {
    // Parse the date from "dd.MM.yyyy" format
    const [day, month, year] = dateString.split('.');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }

  updateMetrics(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayRequests = this.filteredRequests.filter(request =>
      this.parseDate(request.RequestedDate).getTime() === today.getTime()
    ).length;

    const avgTime = Math.floor(Math.random() * 30) + 15; // Replace with real calculation

    this.metrics = {
      totalRequests: this.filteredRequests.length,
      todayRequests,
      averageWorkflowTime: `${avgTime} min`,
      domainRequests: new Set(this.filteredRequests.map(r => r.Region)).size
    };

    // Update status data for the pie chart
   
  }

  updateStatusData(): void {
    const total = this.filteredRequests.length;
    const completed = this.filteredRequests.filter(r => r.Status === 'Completed').length;
    const submitted = this.filteredRequests.filter(r => r.Status === 'Submitted').length;
    const inProgress = this.filteredRequests.filter(r => r.Status === 'In Progress').length;
    const failed = this.filteredRequests.filter(r => r.Status === 'Failed').length;

    this.statusData.total = total;
    this.statusData.categories = [
      { name: 'Completed', percentage: (completed / total) * 100 || 0, class: 'completed' },
      { name: 'Submitted', percentage: (submitted / total) * 100 || 0, class: 'submitted' },
      { name: 'In Progress', percentage: (inProgress / total) * 100 || 0, class: 'in-progress' },
      { name: 'Failed', percentage: (failed / total) * 100 || 0, class: 'failed' }
    ];
    this.updatePieChart();
  }


  initializePieChart(): void {
    Chart.register(...registerables);
    const chartConfig: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        labels: this.statusData.categories.map(category => category.name),
        datasets: [{
          data: this.statusData.categories.map(category => Math.round(category.percentage)),
          backgroundColor: ['#FF69B4', '#4146dc', '#F1C40F', '#dc2f2f'],
        }],
      },
      options:{
        responsive: true,
        plugins: {
          datalabels:{
            display:false
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem: TooltipItem<'doughnut'>) => {
                const percentage = Number(tooltipItem.raw).toFixed(2);
                return `${tooltipItem.label}: ${percentage}%`; // Display integer percentage
            },
            },
          },
          legend: {
            display: false,
            position: 'bottom',
            labels: {
              boxWidth: 10,
            }
          },
        },
        cutout: '70%', // Adjust for donut chart appearance
      },
    };
    this.pieChart = new Chart('myDonutChart', chartConfig);
  }

  updatePieChart(): void {
    if (this.pieChart) {
      this.pieChart.data.labels = this.statusData.categories.map(category => category.name);
      this.pieChart.data.datasets[0].data = this.statusData.categories.map(category => category.percentage);
      this.pieChart.update(); // Update the chart to reflect new data
    }
  }


  toggleFilter(column: ColumnKey) { // Change parameter type to ColumnKey
    this.showFilter[column] = !this.showFilter[column];
  }

  applyFilterForRequests() {
    this.filteredRequestsData = this.requests.filter(rule =>
      (Object.keys(this.filters) as ColumnKey[]).every(column =>
        (rule[column] as string)?.toString().toLowerCase().includes(this.filters[column].toLowerCase())
      )
    );
  }
}

  
 
 



