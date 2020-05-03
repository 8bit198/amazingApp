import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalHelper } from 'src/app/helpers/global-helper';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['../../../styles/dashboard.scss'],
})
export class CompanyDashboardComponent extends GlobalHelper implements OnInit {
  public currentTab: string;

  constructor(
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
    this.currentTab = this.router.url.split('/')[2];
  }

  onTabClicked(tab) {
    switch (tab) {
      case 'layout':
        this.router.navigate(['/companydashboard/layout']);
        this.currentTab = 'layout';
        break;
      case 'notifications':
        this.router.navigate(['/companydashboard/notifications']);
        this.currentTab = 'notifications';
        break;
      case 'staff':
        this.router.navigate(['/companydashboard/staff']);
        this.currentTab = 'staff';
        break;
      default:
        break;
    }
    console.log('currentTab: ', this.currentTab)
  }

}
