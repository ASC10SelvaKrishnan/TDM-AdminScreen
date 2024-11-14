import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

interface Alert {
  title: string;
  message: string;
  timestamp: string;
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alerts: any[] = [];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.fetchAlerts(); // Fetch alerts on initialization
}


  
fetchAlerts(): void {
  this.commonService.getalerts().subscribe(
    (data: any) => {
      this.alerts = data; // Assign the fetched data to the alerts array
    },
  );
  }
}
   
    
    
    // import { Component, OnInit } from '@angular/core';
// import { CommonService } from '../service/common.service';

// interface Alert {
//   title: string;
//   message: string;
//   timestamp: string;
// }

// @Component({
//   selector: 'app-alerts',
//   templateUrl: './alerts.component.html',
//   styleUrls: ['./alerts.component.scss'] 
// })
// export class AlertsComponent implements OnInit {
//   alerts: Alert[] = []; // Update to use Alert interface

//   constructor(private commonService: CommonService) {}

//   ngOnInit(): void {
//     this.fetchAlerts(); // Fetch alerts on initialization
//   }

//   fetchAlerts(): void {
//     this.commonService.get().subscribe((data: any) => {
//       if (data.alerts) {
//         this.alerts = data.alerts; // Assign fetched alerts to alerts array
//       }
//     });
//   }
// }

