import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-edit-data-reservation',
  templateUrl: './edit-data-reservation.component.html',
  styleUrls: ['./edit-data-reservation.component.scss']
})
export class EditDataReservationComponent {

  id = this.route.snapshot.paramMap.get('id');
  customParam = this.route.snapshot.paramMap.get('customParam');

  selectedReservedData = {
    title: '',
    createddate: '',
    group: '',
    status: ''
  };

  selectedUnreservedData = {
    title: '',
    createddate: '',
    group: '',
    status: ''
  };

  currentGroup: string = '';
  currentStatus: string = '';

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.customParam === 'Edit Reserved Data Set') {
      this.commonService.getReservedDataById(this.id).subscribe((data: { title: string; createddate: string; group: string; status: string; }) => {
        this.selectedReservedData = data;
        this.currentGroup = this.selectedReservedData.group;
        this.currentStatus = this.selectedReservedData.status;
      });
    } else if (this.customParam === 'Edit Unreserved Data Set') {
      this.commonService.getUnreservedDataById(this.id).subscribe((data: { title: string; createddate: string; group: string; status: string; }) => {
        this.selectedUnreservedData = data;
        this.currentGroup = this.selectedUnreservedData.group;
        this.currentStatus = this.selectedUnreservedData.status;
      });
    }
  }

  onGroupChange(newGroup: string) {
    if (this.customParam === 'Edit Reserved Data Set') {
      this.selectedReservedData.group = newGroup;
    } else if (this.customParam === 'Edit Unreserved Data Set') {
      this.selectedUnreservedData.group = newGroup;
    }
  }

  onStatusChange(newStatus: string) {
    if (this.customParam === 'Edit Reserved Data Set') {
      this.selectedReservedData.status = newStatus;
    } else if (this.customParam === 'Edit Unreserved Data Set') {
      this.selectedUnreservedData.status = newStatus;
    }
  }

  navigateToDataReservation() {
    this.router.navigate(['/data-reservation']);
  }

  update() {
    if (this.customParam === 'Edit Reserved Data Set') {
      this.commonService.saveReservedData({...this.selectedReservedData, id: this.id}).subscribe(
        () => {
          this.navigateToDataReservation();
        }
      );
    } else if (this.customParam === 'Edit Unreserved Data Set') {
      this.commonService.saveUnreservedData({...this.selectedUnreservedData, id: this.id}).subscribe(
        () => {
          this.navigateToDataReservation();
        }
      );
    }
  }
}
