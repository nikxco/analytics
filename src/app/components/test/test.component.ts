import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bd-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  counter = 0;
  @Output() count: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }


  triggerCount() {
    this.counter++;
    this.count.emit(this.counter);
  }


}
