import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  counter = 0;
  onIncrement() {
    this.counter = this.counter + 1;
  }
}
