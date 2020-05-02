import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCompanyModule } from './create-company/create-company.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CompanyDashboardModule } from './company-dashboard/company-dashboard.module';

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
