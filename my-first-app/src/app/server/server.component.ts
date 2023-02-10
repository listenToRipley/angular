//you may hear this file referred to as the selector.
import { Component } from "@angular/core";

@Component({
  // this is metadata that is stored in the background and tell what to do with this component.
  selector: 'app-server',//html tag; how to access this component later on
  templateUrl: './server.component.html'//this is the relative path for the associated html template.
})//Decorator tell us that this is a normal typescript class and a component

export class ServerComponent {



};
