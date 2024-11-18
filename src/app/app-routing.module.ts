import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { ReportsComponent } from './reports/reports.component';
import { UserControlComponent } from './user-control/user-control.component';
import { DataReservationComponent } from './data-reservation/data-reservation.component'
import { AddUserComponent } from './add-user/add-user.component';
import { EditDataReservationComponent } from './edit-data-reservation/edit-data-reservation.component';
import { ReportsDetailsSubmittedThruTheToolComponent } from './reports-details-submitted-thru-the-tool/reports-details-submitted-thru-the-tool.component';
import { AlertsComponent } from './alerts/alerts.component'; 
import { DataRequestsSubmittedComponent } from './data-requests-submitted/data-requests-submitted.component';
import { DataRequestsSubmittedPerDomainComponent } from './data-requests-submitted-per-domain/data-requests-submitted-per-domain.component';
import { ProjectsPerReleaseComponent } from './projects-per-release/projects-per-release.component';
import { ReportToMeasureSuccessComponent } from './report-to-measure-success/report-to-measure-success.component';
import { ReportsOnProjectLevelComponent } from './reports-on-project-level/reports-on-project-level.component';
import { AverageTimePerAutomationComponent } from './average-time-per-automation/average-time-per-automation.component';
import { FailedAutomationComponent } from './failed-automation/failed-automation.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'admin-setting', component:AdminSettingComponent},
  {path:'reports', component:ReportsComponent},
  {path:'user-control', component:UserControlComponent},
  {path:'data-reservation', component:DataReservationComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'add-user/:id', component:AddUserComponent},  // Edit mode
  {path:'edit-data-reservation/:id/:customParam', component:EditDataReservationComponent},
  {path:'reports-details',component: ReportsDetailsSubmittedThruTheToolComponent},
  { path: 'alerts', component: AlertsComponent },
  {path: 'data-requests-submitted', component:DataRequestsSubmittedComponent},
  {path: 'data-requests-submitted-per-domain', component:DataRequestsSubmittedPerDomainComponent},
  {path: 'projects-per-release', component:ProjectsPerReleaseComponent},
  {path: 'report-to-measure-success', component:ReportToMeasureSuccessComponent},
  {path: 'reports-on-project-level', component:ReportsOnProjectLevelComponent},
  {path: 'average-time-per-automation', component:AverageTimePerAutomationComponent},
  {path: 'failed-automation', component:FailedAutomationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
