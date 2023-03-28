import { Component } from '@angular/core';

import { ServerElement } from './shared/serverElement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  serverElements: ServerElement[] = [{type: "server", name:"Test Server", content:"Just a test!"}];

  onServerAdded(serverName: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverName.serverName,
      content: serverName.serverContent
    });
  }

  onBluePrintAdded(bluePrintName: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintName.serverName,
      content: bluePrintName.serverContent
     });
  }

}
