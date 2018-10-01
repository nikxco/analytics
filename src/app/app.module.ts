import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnalyticsLibModule } from 'projects/analytics-lib/src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnalyticsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
