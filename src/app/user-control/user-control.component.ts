import { Component, OnInit } from '@angular/core';

// Interface to represent the structure of the table data
interface TableData {
  id: string;
  name: string;
  designation: string;
  access: string;
  isEditing: boolean;
}

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {
deleteRule(_t34: any) {
throw new Error('Method not implemented.');
}
editRule(_t34: any) {
throw new Error('Method not implemented.');
}

  // Table data with dummy content
  tableData: TableData[] = [
    { id: 'Title 1', name: 'Group - Create New', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group - Create New', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group - Terminate', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group - Reinstate', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
    { id: 'Title 1', name: 'Group 1', designation: 'Lorem Ipsum', access: '123456789', isEditing: false },
  ];

  newData: TableData = {
    id: '',
    name: '',
    designation: '',
    access: '',
    isEditing: false
  };

  showForm: boolean = false;

  openAddform() {
    this.showForm = true;
  }

  onSubmit() {
    this.tableData.push({...this.newData});

    this.newData = {
      id: '',
      name: '',
      designation: '',
      access: '',
      isEditing: false
    };

    this.showForm = false;

  }

  cancelAdd() {
    this.showForm = false;

    this.newData = {
      id: '',
      name: '',
      designation: '',
      access: '',
      isEditing: false
    };

  }

  // Pagination variables
  pageSize = 5;  // Number of items to display per page
  page = 1;      // Current page number

  constructor() {}

  ngOnInit(): void {
  }
}