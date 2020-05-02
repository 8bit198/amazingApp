import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterCompanyComponent } from './create-company/register-company/register-company.component';
import { PasswordComponent } from './create-company/password/password.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard/company-dashboard.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'createcompany', component: RegisterCompanyComponent },
  { path: 'password', component: PasswordComponent },
  {
    path: 'companydashboard',
    component: CompanyDashboardComponent, 
    children: [] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
