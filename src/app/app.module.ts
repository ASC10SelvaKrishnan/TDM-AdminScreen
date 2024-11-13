import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { ReportsComponent } from './reports/reports.component';
import { UserControlComponent } from './user-control/user-control.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DataReservationComponent } from './data-reservation/data-reservation.component';
import { EditDataReservationComponent } from './edit-data-reservation/edit-data-reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AdminSettingComponent,
    ReportsComponent,
    UserControlComponent,
    AddUserComponent,
    DataReservationComponent,
    EditDataReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
