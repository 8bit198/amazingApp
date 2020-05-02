import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['../../../styles/dashboard.scss'],
})
export class CompanyDashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onTabClicked(tab) {
    switch (tab) {
      case 'layout':
        this.router.navigate(['/companydashboard/layout'])
        break;
      case 'notifications':
        this.router.navigate(['/companydashboard/notifications'])
        break;
      case 'staff':
        this.router.navigate(['/companydashboard/staff'])
        break;
      default:
        break;
    }
  }

}
