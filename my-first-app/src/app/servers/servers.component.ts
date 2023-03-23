import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//use as a html tag
  // selector: '[app-servers]', //use as a attribute
  //selector: '.app-servers', //use as a class; id and pseudo selectors won't work with angular.
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`, //allows you to reference html within our ts file.
  //Inline code, backticks allow for js multiline formatting.
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus:string = 'No server was created.';
  serverName:string = 'test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {

  }

  onCreateServer() { //using "on" is best practice to show the action associated with the function
    this.serverCreationStatus = "Server was created. Server name is " + this.serverName;
  }

  // no longer need this if you are using two way data binding.
  onUpdateServerName(event: any) {
    // console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value //provide specific typing for typescript
  };
}
