import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
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
  selector: 'app-data-requests-submitted',
  standalone: true,
  imports: [CommonModule, RouterModule,NgxPaginationModule,FormsModule], // Add RouterModule here
  templateUrl: './data-requests-submitted.component.html',
  styleUrl: './data-requests-submitted.component.scss'
})
export class DataRequestsSubmittedComponent implements OnInit{
  
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
isDropdownVisible: any;

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
pageSize = 10; // Number of items to display per page
page = 1; // Current page number
totalItems = 80; // Total number of items, assuming it’s dynamically fetched
totalPages = Math.ceil(this.totalItems / this.pageSize); // Dynamically calculate total pages

// Setter to update `totalPages` whenever `pageSize` changes
setPageSize(newPageSize: number): void {
  this.pageSize = newPageSize;
  this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  this.page = 1; // Reset to the first page when page size changes
}

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

 // Tracks open/close states for caret rotation and dropdown visibility
 isOpen: { timeRange: boolean; project: boolean; pageSize: boolean } = { timeRange: false, project: false, pageSize: false };
selectedOptions: { timeRange: string; project: string; pageSize: string } = { timeRange: 'Select Time Range', project: 'Select Project', pageSize: '' };
  
  constructor() {}

  ngOnInit(): void {}

  toggleDropdown(type: 'timeRange' | 'project' | 'pageSize', event: Event): void {
    event.stopPropagation(); // Prevent the click from bubbling up
    this.isOpen[type] = !this.isOpen[type];
  }

  selectOption(option: string, type: 'timeRange' | 'project' | 'pageSize'): void {
    if (type === 'pageSize') {
      this.selectedOptions.pageSize = option;
    } else {
      this.selectedOptions[type] = option;
    }
    this.isOpen[type] = false; // Close dropdown after selecting an option
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click')
  closeDropdowns(): void {
    this.isOpen = { timeRange: false, project: false, pageSize: false };
  }
  
}