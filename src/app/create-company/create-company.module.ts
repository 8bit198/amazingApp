import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { PasswordComponent } from './password/password.component';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [
    RegisterCompanyComponent,
    PasswordComponent,
    EmailComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RegisterCompanyComponent,
    PasswordComponent,
    EmailComponent,
  ],
})
export class CreateCompanyModule { }
