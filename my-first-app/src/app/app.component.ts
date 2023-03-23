import { Component } from '@angular/core';
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'] //alternatively
  styles: [`
    h3 {
      color: teal;
      font-family: ser;
    }
  `]
})
export class AppComponent {
  name = 'Natalie';
}
