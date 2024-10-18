import { Component, OnInit } from '@angular/core';

// Interface to represent the structure of the table data for reserved data sets
interface TableData {
  title: string;
  projectid: string;
  createddate: string;
  group: string;
  status: string;
  isEditing: boolean;
}

// Interface to represent the structure of the table data for unreserve data sets
interface TableData1 {
  title: string;
  projectid: string;
  createddate: string;
  group: string;
  status: string;
  isEditing: boolean;
}

@Component({
  selector: 'app-data-reservation',
  templateUrl: './data-reservation.component.html',
  styleUrls: ['./data-reservation.component.scss']
})
export class DataReservationComponent implements OnInit {
  activeControl: string = 'reserved-data-sets';

    deleteRule(_t34: any) {
    throw new Error('Method not implemented.');
    }
    editRule(_t34: any) {
    throw new Error('Method not implemented.');
    }
    
      // Table data with dummy content
      tableData: TableData[] = [
        { title: 'Title 1', projectid: 'Group - Create New', createddate: '21/08/2024', group: 'Lorem Ipsum', status:'In Progress', isEditing: false },
        { title: 'Title 1', projectid: 'Group - Create New', createddate: '21/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group - Terminate', createddate: '20/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group - Reinstate', createddate: '20/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '19/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '19/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '18/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '18/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '17/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '17/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '16/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '16/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '15/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '15/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '14/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '14/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '13/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '13/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '12/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '12/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
      ];

      tableData1: TableData1[] = [
        { title: 'Title 1', projectid: 'Group - Create New', createddate: '21/08/2024', group: 'Lorem Ipsum', status:'In Progress', isEditing: false },
        { title: 'Title 1', projectid: 'Group - Create New', createddate: '21/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group - Terminate', createddate: '20/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group - Reinstate', createddate: '20/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '19/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '19/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '18/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '18/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '17/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '17/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '16/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '16/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '15/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '15/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '14/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '14/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '13/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '13/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '12/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
        { title: 'Title 1', projectid: 'Group 1', createddate: '12/08/2024', group: 'Lorem Ipsum', status: 'Submitted', isEditing: false },
      ];
    
      // Pagination variables
      pageSize = 5;  // Number of items to display per page
      page = 1;      // Current page number
    
      

  constructor(){}
  
  ngOnInit(): void{}

  changeControl(Control: string) {
    this.activeControl = Control;
  }

}
