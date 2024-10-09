import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss']
})
export class AdminSettingComponent {
  activeControl: string = 'regionControl';

  constructor(){}
  
  ngOnInit(){}

  changeControl(Control: string) {
    this.activeControl = Control;
  }
}