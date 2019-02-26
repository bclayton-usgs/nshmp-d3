import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { NshmpTemplateModule } from '@nshmp/nshmp-ng-template';

import { AppComponent } from './app.component';
import { BasicPlotComponent } from './basic-plot/basic-plot.component';
import { CustomPlotComponent } from './custom-plot/custom-plot.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }, {
    path: 'basic-plot',
    component: BasicPlotComponent
  }, {
    path: 'custom-plot',
    component: CustomPlotComponent
  }, {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicPlotComponent,
    DashboardComponent,
    CustomPlotComponent
  ],
  imports: [
    BrowserModule,
    NshmpTemplateModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
