import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';



@NgModule({
  declarations: [
    CompanyDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompanyDashboardComponent,
  ]
})
export class CompanyDashboardModule { }
