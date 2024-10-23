import { Component, OnInit } from '@angular/core';

interface Request{
  RequestId: string;
  requestType: string;
  requestTitle: string;
  projectID: number;
  region: string;
  requestedDate: Date;
  requestedBy: string;
  status: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  requests: Request[] = [
    {
      RequestId: 'Title1',
      requestType: 'Group - Create New',
      requestTitle: 'Lorem Ipsum',
      projectID: 123456789,
      region: 'Tenv7',
      requestedDate: new Date('2024-05-21'),
      requestedBy: 'Saravanan',
      status: 'In Progress'
    },

    {
      RequestId: 'Title2',
      requestType: 'Group - Create New',
      requestTitle: 'Lorem Ipsum',
      projectID: 123456789,
      region:'Tenv7',
      requestedDate:  new Date('2024-05-21'),
      requestedBy: 'Venkat',
      status: 'Submitted'
   },

   {
    RequestId: 'Title3',
      requestType: 'Group - Terminate',
      requestTitle: 'Lorem Ipsum',
      projectID: 123456789,
      region:'Tenvb',
      requestedDate:  new Date('2024-05-21'),
      requestedBy: 'Aarthi',
      status: 'Submitted'
 },

 {
  RequestId: 'Title4',
      requestType: 'Group -Reinstate',
      requestTitle: 'Lorem Ipsum',
      projectID: 123456789,
      region:'Tenvb',
      requestedDate:  new Date('2024-05-21'),
      requestedBy: 'Aswin',
      status: 'Submitted'
 },

 {
  RequestId: 'Title5',
      requestType: 'Group 1',
      requestTitle: 'Lorem Ipsum',
      projectID: 123456789,
      region:'Tenv7',
      requestedDate: new Date('2024-05-21'),
      requestedBy: 'Aswin',
      status: 'Completed'
 },

 {
  RequestId: 'Title6',
      requestType: 'Group 1',
      requestTitle: 'Lorem Ipsum',
      projectID: 123456789,
      region:'Tenv7',
      requestedDate: new Date('2024-05-21'),
      requestedBy: 'Saravanan',
      status: 'Completed'
 },

 {
  RequestId: 'Title7',
  requestType: 'Group 1',
  requestTitle: 'Lorem Ipsum',
  projectID: 123456789,
  region:'Tenvb',
  requestedDate: new Date('2024-05-21'),
  requestedBy: 'Aswin',
  status: 'Completed'

 },

 { RequestId: 'Title8',
  requestType: 'Group 1',
  requestTitle: 'Lorem Ipsum',
  projectID: 123456789,
  region:'Tenv7',
  requestedDate:  new Date('2024-05-21'),
  requestedBy: 'Saravanan',
  status: 'Completed'
},


{
  RequestId: 'Title9',
  requestType: 'Group 1',
  requestTitle: 'Lorem Ipsum',
  projectID: 123456789,
  region:'Tenv7',
  requestedDate:  new Date('2024-05-21'),
  requestedBy: 'Aarthi',
  status: 'Completed'

},
{
  RequestId: 'Title10',
  requestType: 'Group 1',
  requestTitle: 'Lorem Ipsum',
  projectID: 123456789,
  region:'Tenv7',
  requestedDate:  new Date('2024-05-21'),
  requestedBy: 'Venkat',
  status: 'Completed'
}
  ];

  // Add a property to track current filter
selectedTimeRange: string = 'This Month';

// Function to filter requests based on time range
filterRequests(): Request[] {
  const today = new Date();
  const filtered = this.requests.filter(request => {
    const requestDate = new Date(request.requestedDate);
    
    switch (this.selectedTimeRange) {
      case 'This Week': {
        // Get the start of the current week (Sunday)
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        return requestDate >= startOfWeek;
      }
      
      case 'This Month': {
        // Get the start of the current month
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        return requestDate >= startOfMonth;
      }
      
      case 'This Year': {
        // Get the start of the current year
        const startOfYear = new Date(today.getFullYear(), 0, 1);
        return requestDate >= startOfYear;
      }
      
      default:
        return true; // Show all if no filter selected
    }
  });
  
  return filtered;
}

// Handle dropdown change
onTimeRangeChange(event: any): void {
  this.selectedTimeRange = event.target.value;
}

}
