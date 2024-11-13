import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

// Interface to represent the structure of the table data
interface TableData {
  id: string;
  name: string;
  designation: string;
  access: string;
}

// Define a type for the allowed column keys
type ColumnKey = 'id' | 'name' | 'designation' | 'access';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})

export class UserControlComponent implements OnInit {
  constructor(private router: Router, private commonService: CommonService) {}

  // Filters and showFilter settings
  filters: Record<ColumnKey, string> = {
    id: '',
    name: '',
    designation: '',
    access: ''
  };
  showFilter: Record<ColumnKey, boolean> = {
    id: false,
    name: false,
    designation: false,
    access: false
  };

  // Dropdown options
  designationOptions: string[] = ['manager', 'teamlead'];
  accessOptions: string[] = ['granted', 'denied'];

  // Pagination variables
  pageSize = 5;  // Number of items per page
  page = 1;      // Current page number

  tableData: TableData[] = [];      // Original data from API
  filteredData: TableData[] = [];   // Filtered data before pagination
  displayedData: TableData[] = [];  // Paginated data displayed on the page

  // Derived pagination properties
  get totalRecords(): number {
    return this.filteredData.length;
  }
  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }
  get startRecord(): number {
    return (this.page - 1) * this.pageSize + 1;
  }
  get endRecord(): number {
    return Math.min(this.page * this.pageSize, this.totalRecords);
  }

  ngOnInit(): void {
    this.commonService.getAllForUserControl().subscribe((data: TableData[]) => {
      this.tableData = data;
      this.filteredData = [...this.tableData];
      this.applyFilter(); // Initialize display on load
    });
  }

  navigateToAddUser() {
    this.router.navigate(['/add-user']);
  }

  // Toggle filter visibility for a column
  toggleFilter(column: ColumnKey) {
    this.showFilter[column] = !this.showFilter[column];
  }

  // Apply filters to data
  applyFilter() {
    this.page = 1;  // Reset to the first page when filters are applied
    this.filteredData = this.tableData.filter(row =>
      (Object.keys(this.filters) as ColumnKey[]).every(column =>
        row[column].toString().toLowerCase().includes(this.filters[column].toLowerCase())
      )
    );
    this.updateDisplayedData();
  }

  // Reset filters
  resetFilters() {
    this.filters = { id: '', name: '', designation: '', access: '' };
    this.applyFilter();
  }

  // Delete item by ID and update data
  deleteRule(id: string) {
    this.commonService.delete(id).subscribe({
      next: () => {
        this.tableData = this.tableData.filter(rule => rule.id !== id);
        this.applyFilter();  // Reapply filters and update pagination
      },
      error: (error) => {
        console.error('Error deleting item', error);
      }
    });
  }

  // Update displayed data for current page
  updateDisplayedData() {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedData = this.filteredData.slice(startIndex, endIndex);
  }

  // Get visible page numbers for the pagination buttons
  get visiblePages(): number[] {
    const pages = [];
    const start = Math.max(1, Math.min(this.page - 1, this.totalPages - 2));
    const end = Math.min(this.totalPages, start + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Navigate to a specific page
  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.page = pageNumber;
      this.updateDisplayedData();
    }
  }

  // Pagination control functions
  goToFirst() {
    this.goToPage(1);
  }

  goToPrev() {
    this.goToPage(this.page - 1);
  }

  goToNext() {
    this.goToPage(this.page + 1);
  }

  goToLast() {
    this.goToPage(this.totalPages);
  }

  // Update data and pagination on page size change
  onPageSizeChange() {
    this.page = 1; // Reset to the first page when pageSize changes
    this.updateDisplayedData();
  }
}