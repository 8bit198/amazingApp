import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCompanyModule } from './create-company/create-company.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CompanyDashboardModule } from './company-dashboard/company-dashboard.module';
import { HallLayoutComponent } from './company-dashboard/hall-layout/hall-layout.component';
import { CompanyNotoficationsComponent } from './company-dashboard/company-notofications/company-notofications.component';
import { StaffComponent } from './company-dashboard/staff/staff.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateCompanyModule,
    CompanyDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
