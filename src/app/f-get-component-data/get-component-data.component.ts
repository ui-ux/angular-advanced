import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-component-data',
  templateUrl: './get-component-data.component.html',
  styleUrls: ['./get-component-data.component.scss']
})
export class GetComponentDataComponent implements OnInit {

  items = [{name: 'name_1', sName: 'sName_1'}, {name: 'name_2', sName: 'sName_2'}];

  constructor() { }

  ngOnInit() {

  }

  updateUserList(user: {name: string, sName: string}) {
    this.items.push(user);
  }
}
