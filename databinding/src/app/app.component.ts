import { Component, NgModule } from '@angular/core';

import { ServerElement } from './shared/serverElement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [{type: "Server1", name:"Test Server", content:"Just a test!"}];
  newServerName = '';
  newServerContent = '';
}
