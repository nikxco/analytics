import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bd';
  test(data) {
    console.log(data);
  }
}
