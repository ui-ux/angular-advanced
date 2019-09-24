import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public pi:number = Math.PI;
  public testNumber:number = 3;

  public lower = "LoWer";
  public aperr = "aPeR fsdfdsf ds fsdf ";
  public arr =[{id: 1, name: "jone"}, {id: 2, name: "mari"},{id: 3, name: "rydi"}];
  public date = new Date;
  public dateString = new Date().toDateString();

  constructor() { }

  ngOnInit() {
  }

}
