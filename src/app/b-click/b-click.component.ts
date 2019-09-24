import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-click',
  templateUrl: './b-click.component.html',
  styleUrls: ['./b-click.component.scss']
})
export class BClickComponent implements OnInit {
  addString:string = 'default string';
  addCount:number = 1;
  addValueInput:string;
  addValueInputLink:string;
  addValueInputEnter:string;
  twoWayBinding:string;

  constructor() { }

  ngOnInit() {
  }

  addVar()  {
    this.addString = 'click add string';
    this.addCount += 1;
  }

  onInput(event: Event) {
    console.log(event);
    this.addValueInput = (<HTMLInputElement>event.target).value;
  }

  onInputLink(value) {
    this.addValueInputLink = value;
  }

  onInputEnter(event) {
    this.addValueInputEnter = event.target.value;
  }

}
