import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { HallLayoutComponent } from './hall-layout/hall-layout.component';
import { CompanyNotoficationsComponent } from './company-notofications/company-notofications.component';
import { StaffComponent } from './staff/staff.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CompanyDashboardComponent,
    HallLayoutComponent,
    CompanyNotoficationsComponent,
    StaffComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    CompanyDashboardComponent,
    HallLayoutComponent,
    CompanyNotoficationsComponent,
    StaffComponent,
  ]
})
export class CompanyDashboardModule { }
