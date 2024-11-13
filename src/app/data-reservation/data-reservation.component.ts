import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

// Interface to represent the structure of the table data for reserved data sets
interface TableData {
  title: string;
  createddate: string;
  group: string;
  status: string;
  id: string;
}

// Interface to represent the structure of the table data for unreserve data sets
interface TableData1 {
  id: string;
  title: string;
  createddate: string;
  group: string;
  status: string;
}

// Define a type for the allowed column keys
type ColumnKey = 'title' | 'id' | 'group' | 'status';

@Component({
  selector: 'app-data-reservation',
  templateUrl: './data-reservation.component.html',
  styleUrls: ['./data-reservation.component.scss']
})
export class DataReservationComponent implements OnInit {

  activeControl: string = 'reserved-data-sets';
  
  filtersForReservedData: Record<ColumnKey, string> = {
    title: '',
    id: '',
    group: '',
    status: ''
  };

  showFilterForReservedData: Record<ColumnKey, boolean> = {
    title: false,
    id: false,
    group: false,
    status: false
  };

  filtersForUnreservedData: Record<ColumnKey, string> ={
    title: '',
    id: '',
    group: '',
    status: ''
  };

  showFilterForUnreservedData: Record<ColumnKey, boolean> = {
    title: false,
    id: false,
    group: false,
    status: false
  };

  groupOptions: string[] = ['Group A','Group B','Group C'];
  statusOptions: string[] = ['Completed','In progress','Pending'];

  // Pagination variables
  pageSize = 5;  // Number of items to display per page
  pageForReservedData = 1;      // Current page number
  pageForUnreservedData = 1;

  applyFilterForReservedData() {
    this.pageForReservedData = 1;
    this.filteredReservedData = this.reservedData.filter(rule => 
      (Object.keys(this.filtersForReservedData) as ColumnKey[]).every(column => 
        (rule[column] as string)?.toString().toLowerCase().includes(this.filtersForReservedData[column].toLowerCase())
      )
    );
    this.updateDisplayedReservedData();
  }

  // Reset filters
  resetFiltersForReservedData() {
    this.filtersForReservedData = { id: '', title: '', group: '', status: '' };
    this.applyFilterForReservedData();
  }

  toggleFilterForReservedData(column: ColumnKey) {
    this.showFilterForReservedData[column] = !this.showFilterForReservedData[column];
  }

  applyFilterForUnreservedData() {
    this.filteredUnreservedData = this.unreservedData.filter(rule => 
      (Object.keys(this.filtersForUnreservedData) as ColumnKey[]).every(column => 
        (rule[column] as string)?.toString().toLowerCase().includes(this.filtersForUnreservedData[column].toLowerCase())
      )
    );
    this.updateDisplayedUnreservedData();
  }

  toggleFilterForUnreservedData(column: ColumnKey) {
    this.showFilterForUnreservedData[column] = !this.showFilterForUnreservedData[column];
  }
      
  constructor( private commonService:CommonService,private router: Router) {}

  reservedData: TableData[] = [] ;
  filteredReservedData : TableData[] = [];
  displayedReservedData : TableData[] = [];

  unreservedData: TableData1[] = [] ;
  filteredUnreservedData: TableData1[] = [];
  displayedUnreservedData: TableData1[] = [];

  // Derived pagination properties for Reserved Data
  get totalReservedRecords(): number {
    return this.filteredReservedData.length;
  }
  get totalReservedPages(): number {
    return Math.ceil(this.totalReservedRecords / this.pageSize);
  }
  get startReservedRecord(): number {
    return (this.pageForReservedData - 1) * this.pageSize + 1;
  }
  get endReservedRecord(): number {
    return Math.min(this.pageForReservedData * this.pageSize, this.totalReservedRecords);
  }

  

  // Derived pagination properties for Unreserved Data
  get totalUnreservedRecords(): number {
    return this.filteredUnreservedData.length;
  }
  get totalUnreservedPages(): number {
    return Math.ceil(this.totalUnreservedRecords / this.pageSize);
  }
  get startUnreservedRecord(): number {
    return (this.pageForUnreservedData - 1) * this.pageSize + 1;
  }
  get endUnreservedRecord(): number {
    return Math.min(this.pageForUnreservedData * this.pageSize,this.totalUnreservedRecords);
  }

  get visiblePagesReserved(): number[] {
    const pagesReserved = [];
    const startReserved = Math.max(1, Math.min(this.pageForReservedData - 1, this.totalReservedPages - 2));
    const endReserved = Math.min(this.totalReservedPages, startReserved + 2);

    for(let i = startReserved; i <= endReserved; i++) {
      pagesReserved.push(i);
    }
    return pagesReserved;
  }

  get visiblePagesUnreserved(): number[] {
    const pagesUnreserved = [];
    const startUnreserved = Math.max(1, Math.min(this.pageForUnreservedData - 1, this.totalUnreservedPages - 2));
    const endUnreserved = Math.min(this.totalUnreservedPages, startUnreserved + 2);

    for(let i = startUnreserved; i <= endUnreserved; i++) {
      pagesUnreserved.push(i);
    }
    return pagesUnreserved;
  }

  
  ngOnInit(): void{
    this.commonService.getAllReservedDataSets().subscribe((reserved:any) =>{
      this.reservedData = reserved;
      this.filteredReservedData = [...this.reservedData];
      this.applyFilterForReservedData();
    });

    this.commonService.getAllUnreservedDataSets().subscribe((unreserved:any) =>{
      this.unreservedData = unreserved;
      this.filteredUnreservedData = [...this.unreservedData];
      this.applyFilterForUnreservedData();
    });
  }

  changeControl(Control: string) {
    this.activeControl = Control;
  }

  deleteRuleForReservedData(id: any) {
    this.commonService.deleteReservedData(id).subscribe({
      next: () => {
        this.reservedData = this.reservedData.filter(x => x.id !== id);
        this.applyFilterForReservedData();
      }
    });
  }

  deleteRuleForUnreservedData(id: any) {
    this.commonService.deleteUnreservedData(id).subscribe({
      next: () => {
        this.unreservedData = this.unreservedData.filter(y => y.id !== id);
        this.applyFilterForUnreservedData();
      }
    });
  }

  updateDisplayedReservedData() {
    const startIndexForReserved = (this.pageForReservedData -1) * this.pageSize;
    const endIndexForReserved = startIndexForReserved + this.pageSize;
    this.displayedReservedData = this.filteredReservedData.slice(startIndexForReserved, endIndexForReserved);
  }

  goTOFirstReserved() {
    this.pageForReservedData = 1;
    this.updateDisplayedReservedData();
  }

  goToPrevReserved() {
    if (this.pageForReservedData > 1) {
      this.pageForReservedData--;
      this.updateDisplayedReservedData();
    }
  }

  goToNextReserved() {
    if (this.pageForReservedData < this.totalReservedPages) {
      this.pageForReservedData++;
      this.updateDisplayedReservedData();
    }
  }
  
  goToLastReserved() {
    this.pageForReservedData = this.totalReservedPages;
    this.updateDisplayedReservedData();
  }

  updateDisplayedUnreservedData() {
    const startIndexForUnreserved = (this.pageForUnreservedData -1) * this.pageSize;
    const endIndexForUnreserved = startIndexForUnreserved + this.pageSize;
    this.displayedUnreservedData = this.filteredUnreservedData.slice(startIndexForUnreserved, endIndexForUnreserved);
  }

  goTOFirstUnreserved() {
    this.pageForUnreservedData = 1;
    this.updateDisplayedUnreservedData();
  }

  goToPrevUnreserved() {
    if (this.pageForUnreservedData > 1) {
      this.pageForUnreservedData--;
      this.updateDisplayedUnreservedData();
    }
  }

  goToNextUnreserved() {
    if (this.pageForUnreservedData < this.totalUnreservedPages) {
      this.pageForUnreservedData++;
      this.updateDisplayedUnreservedData();
    }
  }

  goToLastUnreserved() {
    this.pageForUnreservedData = this.totalUnreservedPages;
    this.updateDisplayedUnreservedData();
  }




  onPageSizeChangeForReserved() {
    this.pageForReservedData = 1;
    this.updateDisplayedReservedData();
  }

  goToPageReservedData(pageNumberReserved: number): void {
    if (pageNumberReserved >=1 && pageNumberReserved <= this.totalReservedPages) {
      this.pageForReservedData = pageNumberReserved;
      this.updateDisplayedReservedData();
    }
  }

  onPageSizeChangeForUnreserved() {
    this.pageForUnreservedData = 1;
    this.updateDisplayedUnreservedData();
  }

  goToPageUnreservedData(pageNumberUnreserved: number): void {
    if (pageNumberUnreserved >=1 && pageNumberUnreserved <= this.totalUnreservedPages) {
      this.pageForUnreservedData = pageNumberUnreserved;
      this.updateDisplayedUnreservedData();
    }
  }

}
