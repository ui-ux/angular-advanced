import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs-compat";
import "rxjs-compat/add/observable/of";
import "rxjs-compat/add/operator/delay";


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public pi:number = Math.PI;
  public testNumber:number = 3;
  searchPipe: string = '';
  cars = [
    {name: 'Ford', color: "red"},
    {name: 'Audi', color: "blue"},
    {name: 'MBW', color: "brown"},
    {name: 'FIAT', color: "green"},
    {name: 'Mazda', color: "red"}
    ];

  // title = '';
  asyncTitle = Observable.of('Async title 3 seconds')
    .delay(3000);
    //.subscribe(str => this.title = str);



  public lower = "LoWer";
  public aperr = "aPeR fsdfdsf ds fsdf ";
  public arr =[{id: 1, name: "jone"}, {id: 2, name: "mari"},{id: 3, name: "rydi"}];
  public date = new Date;
  public dateString = new Date().toDateString();

  constructor() { }

  ngOnInit() {
  }

}
