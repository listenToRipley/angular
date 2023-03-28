import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //event that can be admitted
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onServerAdded() {
    this.serverCreated.emit({
      serverName: this.newServerContent,
      serverContent: this.newServerContent,

    }); //provides the object
  }

  onBlueprintAdded() {
    this.bluePrintCreated.emit({
      serverName: this.newServerContent,
      serverContent: this.newServerContent,
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
