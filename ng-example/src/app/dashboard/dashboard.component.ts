import { Component, OnInit } from '@angular/core';

import { Navigation } from '@nshmp/nshmp-ng-template';
import { NavigationListService } from '../shared/navigation-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  navigationList: Navigation[];

  constructor(private navListService: NavigationListService) { }

  ngOnInit() {
    this.navigationList = this.navListService.getNavList()
        .filter(nav => nav.display !== 'Dashboard');
  }

}
