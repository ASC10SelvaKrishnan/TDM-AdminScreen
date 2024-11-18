import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  constructor(
    private router: Router,
    private commonService: CommonService,
    private route: ActivatedRoute
  ) {}

  tableData =  {
    name: '',
    designation: '',
    access: '',
  };
  isEditMode: boolean = false;
  id: any;

  ngOnInit(): void {
    // check whether id is present in parameter to determine edit mode
    this.id = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.id;

    if(this.isEditMode) {
      // load existing data
      this.commonService.getDataById(this.id).subscribe((data) =>{
        this.tableData = data;
      })
    }
  }

  createNewUser() {
    if (this.isEditMode) {
      // update existing user
      this.commonService.saveData({...this.tableData, id:this.id}).subscribe(
        () => {
          console.log('data updated successfully');
          this.navigateToUserControl();
        },
        (error) => console.error('error updating data: ', error)
      );
    } else {
      // create new user
      this.commonService.saveData(this.tableData).subscribe(
        () => {
          console.log('new data created successfully');
          this.navigateToUserControl();
        },
        (error) => console.error('error creating data: ', error)
      );
    }
  }

  navigateToUserControl() {
    this.router.navigate(['/user-control']);
  }

}
