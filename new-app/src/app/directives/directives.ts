import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.html'
})
export class Directives {
  // Task 1 - Show/Hide
  showParagraph = false;

  // Task 2 & 3 - Dynamic List
  fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
  emptyList: string[] = [];

  // Task 4 - Conditional Styling
  marks = 45;

  // Task 5 - Inline Styling
  fontSize = 16;

  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    if (this.fontSize > 10) this.fontSize -= 2;
  }
}
