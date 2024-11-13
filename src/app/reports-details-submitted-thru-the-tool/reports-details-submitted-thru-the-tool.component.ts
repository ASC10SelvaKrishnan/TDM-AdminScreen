import { Component, OnInit } from '@angular/core';

// Interface to represent the structure of the table data
interface TableData {
  id: string;
  projectName: string;
  releaseDate: Date;
  requestName: string;
  region: string;
  requestDate: Date;
  requestor: string;
}

@Component({
  selector: 'app-reports-details-submitted-thru-the-tool',
  templateUrl: './reports-details-submitted-thru-the-tool.component.html',
  styleUrls: ['./reports-details-submitted-thru-the-tool.component.scss']
})
export class ReportsDetailsSubmittedThruTheToolComponent implements OnInit {
  
  // Table data with updated fields and more dummy data
  tableData: TableData[] = [
    { id: '1234', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-21'), requestor: 'John' },
    { id: '1235', projectName: 'Group - Create New', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-21'), requestor: 'Dominic' },
    { id: '1236', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-20'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-20'), requestor: 'John' },
    { id: '1237', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1238', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1239', projectName: 'Member - Create New', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-19'), requestor: 'John' },
    { id: '1240', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-17'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-17'), requestor: 'Cassey' },
    { id: '1241', projectName: 'Member - Create New', releaseDate: new Date('2024-12-14'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-14'), requestor: 'John' },
    { id: '1234', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-21'), requestor: 'John' },
    { id: '1235', projectName: 'Group - Create New', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-21'), requestor: 'Dominic' },
    { id: '1236', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-20'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-20'), requestor: 'John' },
    { id: '1237', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1238', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1239', projectName: 'Member - Create New', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-19'), requestor: 'John' },
    { id: '1240', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-17'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-17'), requestor: 'Cassey' },
    { id: '1241', projectName: 'Member - Create New', releaseDate: new Date('2024-12-14'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-14'), requestor: 'John' },
    { id: '1234', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-21'), requestor: 'John' },
    { id: '1235', projectName: 'Group - Create New', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-21'), requestor: 'Dominic' },
    { id: '1236', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-20'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-20'), requestor: 'John' },
    { id: '1237', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1238', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1239', projectName: 'Member - Create New', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-19'), requestor: 'John' },
    { id: '1240', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-17'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-17'), requestor: 'Cassey' },
    { id: '1241', projectName: 'Member - Create New', releaseDate: new Date('2024-12-14'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-14'), requestor: 'John' },
    { id: '1234', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-21'), requestor: 'John' },
    { id: '1235', projectName: 'Group - Create New', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-21'), requestor: 'Dominic' },
    { id: '1236', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-20'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-20'), requestor: 'John' },
    { id: '1237', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1238', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1239', projectName: 'Member - Create New', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-19'), requestor: 'John' },
    { id: '1240', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-17'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-17'), requestor: 'Cassey' },
    { id: '1241', projectName: 'Member - Create New', releaseDate: new Date('2024-12-14'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-14'), requestor: 'John' },
    { id: '1234', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-21'), requestor: 'John' },
    { id: '1235', projectName: 'Group - Create New', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-21'), requestor: 'Dominic' },
    { id: '1236', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-20'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-20'), requestor: 'John' },
    { id: '1237', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1238', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1239', projectName: 'Member - Create New', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-19'), requestor: 'John' },
    { id: '1240', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-17'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-17'), requestor: 'Cassey' },
    { id: '1241', projectName: 'Member - Create New', releaseDate: new Date('2024-12-14'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-14'), requestor: 'John' },
    { id: '1234', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-21'), requestor: 'John' },
    { id: '1235', projectName: 'Group - Create New', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-21'), requestor: 'Dominic' },
    { id: '1236', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-20'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-20'), requestor: 'John' },
    { id: '1237', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1238', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1239', projectName: 'Member - Create New', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-19'), requestor: 'John' },
    { id: '1240', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-17'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-17'), requestor: 'Cassey' },
    { id: '1241', projectName: 'Member - Create New', releaseDate: new Date('2024-12-14'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-14'), requestor: 'John' },
    { id: '1234', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-21'), requestor: 'John' },
    { id: '1235', projectName: 'Group - Create New', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-21'), requestor: 'Dominic' },
    { id: '1236', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-20'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-20'), requestor: 'John' },
    { id: '1237', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1238', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1239', projectName: 'Member - Create New', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-19'), requestor: 'John' },
    { id: '1240', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-17'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-17'), requestor: 'Cassey' },
    { id: '1241', projectName: 'Member - Create New', releaseDate: new Date('2024-12-14'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-14'), requestor: 'John' },
    { id: '1234', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-21'), requestor: 'John' },
    { id: '1235', projectName: 'Group - Create New', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-21'), requestor: 'Dominic' },
    { id: '1236', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-20'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-20'), requestor: 'John' },
    { id: '1237', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1238', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1239', projectName: 'Member - Create New', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-19'), requestor: 'John' },
    { id: '1240', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-17'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-17'), requestor: 'Cassey' },
    { id: '1241', projectName: 'Member - Create New', releaseDate: new Date('2024-12-14'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-14'), requestor: 'John' },
    { id: '1234', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-21'), requestor: 'John' },
    { id: '1235', projectName: 'Group - Create New', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-21'), requestor: 'Dominic' },
    { id: '1236', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-20'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-20'), requestor: 'John' },
    { id: '1237', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1238', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1239', projectName: 'Member - Create New', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-19'), requestor: 'John' },
    { id: '1240', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-17'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-17'), requestor: 'Cassey' },
    { id: '1241', projectName: 'Member - Create New', releaseDate: new Date('2024-12-14'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-14'), requestor: 'John' },
    { id: '1234', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-21'), requestor: 'John' },
    { id: '1235', projectName: 'Group - Create New', releaseDate: new Date('2024-08-21'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-21'), requestor: 'Dominic' },
    { id: '1236', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-20'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-20'), requestor: 'John' },
    { id: '1237', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1238', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-19'), requestor: 'Dominic' },
    { id: '1239', projectName: 'Member - Create New', releaseDate: new Date('2024-08-19'), requestName: 'Lorem Ipsum', region: 'TENVB', requestDate: new Date('2024-08-19'), requestor: 'John' },
    { id: '1240', projectName: 'Group - Reinstate', releaseDate: new Date('2024-08-17'), requestName: 'Lorem Ipsum', region: 'TENV7', requestDate: new Date('2024-08-17'), requestor: 'Cassey' },
    { id: '1241', projectName: 'Member - Create New', releaseDate: new Date('2024-12-14'), requestName: 'Lorem Ipsum', region: 'TENV3', requestDate: new Date('2024-08-14'), requestor: 'John' },
    
  ];
      // State management for dropdowns
  isOpen: { timeRange: boolean; project: boolean } = { timeRange: false, project: false };

  newData: TableData = {
    id: '',
    projectName: '',
    releaseDate: new Date(),
    requestName: '',
    region: '',
    requestDate: new Date(),
    requestor: ''
  };

  showForm: boolean = false;
value: any;
formattedValue: any;

  openAddform() {
    this.showForm = true;
  }

  onSubmit() {
    this.tableData.push({...this.newData});

    this.newData = {
      id: '',
      projectName: '',
      releaseDate: new Date(),
      requestName: '',
      region: '',
      requestDate: new Date(),
      requestor: ''
    };

    this.showForm = false;
  }

  cancelAdd() {
    this.showForm = false;

    this.newData = {
      id: '',
      projectName: '',
      releaseDate: new Date(),
      requestName: '',
      region: '',
      requestDate: new Date(),
      requestor: ''
    };
  }

  // Pagination variables
  pageSize = 10;  // Number of items to display per page
  page = 1;      // Current page number
  totalPages = 20;  // Total number of pages (this should be dynamically calculated based on your data)

// Calculate the visible page numbers for the 3 boxes
  get visiblePages(): number[] {
    let pages = [];
    const start = Math.max(1, this.page - 1); // Ensure the starting page is at least 1
    const end = Math.min(this.totalPages, start + 2); // Show a maximum of 3 pages

    // Generate the 3 visible page numbers
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Navigate to a specific page
  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.page = pageNumber;
    }
  }

  constructor() {}

  ngOnInit(): void {}
  
  
  // Toggle function for dropdown carets with specific type for the `type` parameter
  toggleCaret(type: 'timeRange' | 'project'): void {
    this.isOpen[type] = !this.isOpen[type];
  }

}