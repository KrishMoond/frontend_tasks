import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html'
})
export class Child {
  @Input() counter = 0;
  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.counterChange.emit(this.counter + 1);
  }

  decrement() {
    this.counterChange.emit(this.counter - 1);
  }
}
