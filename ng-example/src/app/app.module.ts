import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NshmpTemplateModule } from '@nshmp/nshmp-ng-template';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NshmpTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
