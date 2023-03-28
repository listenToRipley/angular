import { Component, OnInit, Input, NgModule } from '@angular/core';

import { ServerElement } from '../shared/serverElement.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() element: ServerElement // now exposed to the world

  constructor() { }

  ngOnInit(): void {
  }

}
