import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `, //allows you to reference html within our ts file.
  //Inline code, backticks allow for js multiline formatting.
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
