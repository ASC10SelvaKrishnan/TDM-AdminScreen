import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { ReportsComponent } from './reports/reports.component';
import { UserControlComponent } from './user-control/user-control.component';
import { DataReservationComponent } from './data-reservation/data-reservation.component'

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'admin-setting', component:AdminSettingComponent},
  {path:'reports', component:ReportsComponent},
  {path:'user-control', component:UserControlComponent},
  {path:'data-reservation', component:DataReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
