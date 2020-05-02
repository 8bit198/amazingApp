import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['../../../styles/create-company.scss'],
})
export class PasswordComponent implements OnInit {
  public isVisible1 = false;
  public isVisible2 = false;

  constructor() { }

  ngOnInit() {
  }

}
