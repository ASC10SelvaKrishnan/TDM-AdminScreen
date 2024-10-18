import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';  // Import the pagination module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { ReportsComponent } from './reports/reports.component';
import { NgChartsModule } from 'ng2-charts';
import { UserControlComponent } from './user-control/user-control.component';
import { DataReservationComponent } from './data-reservation/data-reservation.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AdminSettingComponent,
    ReportsComponent,
    UserControlComponent,
    DataReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
