import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-transfer-component',
  templateUrl: './data-transfer-component.component.html',
  styleUrls: ['./data-transfer-component.component.scss']
})
export class DataTransferComponentComponent implements OnInit {
  nameUser: string = 'Billy';
  sNameUser: string = 'Bons';


  items = [{name: 'name_1', sName: 'sName_1'}, {name: 'name_2', sName: 'sName_2'}];

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.items.push({
      name: this.nameUser,
      sName: this.sNameUser
    });

    this.nameUser = '';
    this.sNameUser = '';
  }
}
