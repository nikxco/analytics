import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerDirective } from './log.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoggerDirective
  ],
  exports: [
    LoggerDirective
  ]
})
export class LoggerModule { }
