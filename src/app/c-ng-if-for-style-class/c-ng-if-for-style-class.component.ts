import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-c-ng-if-for-style-class',
  templateUrl: './c-ng-if-for-style-class.component.html',
  styleUrls: ['./c-ng-if-for-style-class.component.scss']
  //encapsulation: ViewEncapsulation.None
})

export class CNgIfForStyleClassComponent implements OnInit {
  count: number = 5;

  isHideToggle:boolean = true;
  isLinkHide:boolean = true;
  isHideThen:boolean = true;

  show: boolean = true;
  newList:string = '';
  current:string = '';

  public redClass= "red";
  public titleStyle = {
    color: 'red',
    fontSize: '36px'
  };

  public isDisabled = true;
  public messageClass = {
    "blue" : this.isDisabled,
    "font-24" : this.isDisabled,
    "italic" : this.isDisabled,
  };

  abc = ['uno', 'dos', 'tress', 'uno', 'dos', 'tress'];
  items = [{name: 'name1', id: 22},{name: 'name2', id: 33},];
  cars = ['Ford', 'Audi', 'MBW', 'FIAT', 'Mazda'];

  constructor() { }

  ngOnInit() {
  }

  toggleHide() {
    this.isHideToggle = !this.isHideToggle;
  }

  toggleLinkHide() {
    this.isLinkHide = !this.isLinkHide;
  }

  toggleThen() {
    this.isHideThen = !this.isHideThen;
  }

  pushArr(){
    this.abc.push(this.newList);
    this.newList = '';
  }

  setCar(car:string){
    return car.length > 4;
    //return car.length > 4 ? true: false;
  }

  onClickSwitch(string: string) {
    this.current = string;
  }

}
