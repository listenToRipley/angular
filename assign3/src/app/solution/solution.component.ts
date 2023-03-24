import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styles: [`
    .fives {
      color: white;
    }
  `]
})
export class SolutionComponent implements OnInit {

  text: string = "Cauliflower cheese chalk and cheese say cheese. Stilton manchego edam fondue danish fontina croque monsieur emmental st. agur blue cheese. When the cheese comes out everybody's happy monterey jack the big cheese say cheese say cheese fondue taleggio who moved my cheese. Queso feta."
  displayText: boolean = false;
  clickLog:string[] = [];
  background: string = "transparent";

  constructor() { }

  ngOnInit(): void {
  }

  onDisplay() {
    let time = `${new Date().getTime()}`

    this.displayText = !this.displayText;

    this.clickLog.push(time);

  };

  addBackgroundColor() {
    return this.background = this.clickLog.length < 5 ? 'transparent': 'blue';
  }

}
