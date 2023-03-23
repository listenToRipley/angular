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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {

  }
}
