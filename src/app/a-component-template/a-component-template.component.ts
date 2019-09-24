import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-component-template',
  templateUrl: './a-component-template.component.html',
  styleUrls: ['./a-component-template.component.scss']
})
export class AComponentTemplateComponent implements OnInit {
  name: string = 'user name';
  age: number = 23;
  isValid: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isValid = true;
    }, 4000);
  }

  ngOnInit() {
  }

  getName() {
    return this.name;
    //console.log(this.name);
  }

}
