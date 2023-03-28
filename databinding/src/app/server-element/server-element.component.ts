import { Component, Input } from '@angular/core';

import { ServerElement } from '../shared/serverElement.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input("srvElement") element: ServerElement; // now fully exposed
}
