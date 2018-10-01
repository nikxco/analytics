import { NgModule } from '@angular/core';
import { AnalyticsLibComponent } from './analytics-lib.component';
import { LoggerDirective } from './logger/log.directive';
import { LoggerModule } from './logger/logger.module';

@NgModule({
  imports: [
    LoggerModule
  ],
  declarations: [
    AnalyticsLibComponent
  ],
  exports: [
    LoggerModule
  ]
})
export class AnalyticsLibModule { }
