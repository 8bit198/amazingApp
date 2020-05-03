import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterCompanyComponent } from './create-company/register-company/register-company.component';
import { PasswordComponent } from './create-company/password/password.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard/company-dashboard.component';
import { HallLayoutComponent } from './company-dashboard/hall-layout/hall-layout.component';
import { CompanyNotoficationsComponent } from './company-dashboard/company-notofications/company-notofications.component';
import { StaffComponent } from './company-dashboard/staff/staff.component';

const dashboardChildren: Routes = [
  { path: 'layout', component: HallLayoutComponent },
  { path: 'notifications', component: CompanyNotoficationsComponent },
  { path: 'staff', component: StaffComponent },
]

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'createcompany', component: RegisterCompanyComponent },
  { path: 'password', component: PasswordComponent },
  {
    path: 'companydashboard',
    component: CompanyDashboardComponent,
    children: dashboardChildren },
  { path: '**', component: LandingPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
