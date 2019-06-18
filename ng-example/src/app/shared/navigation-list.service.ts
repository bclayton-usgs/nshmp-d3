import { Injectable } from '@angular/core';

import { Navigation } from '@nshmp/nshmp-ng-template';

@Injectable({ providedIn: 'root' })
export class NavigationListService {

  private navigationList: Navigation[] = [
    {
      display: 'Dashboard',
      routerLink: ''
    }, {
      display: 'Basic Plot',
      routerLink: 'basic-plot'
    }, {
      display: 'Custom Plot',
      routerLink: 'custom-plot'
    }, {
      display: 'Basic Map Plot',
      routerLink: 'basic-map-plot'
    }
  ];

  getNavList() {
    return this.navigationList.slice();
  }

}
