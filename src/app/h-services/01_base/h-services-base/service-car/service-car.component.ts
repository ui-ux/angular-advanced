import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-car',
  templateUrl: './service-car.component.html',
  styleUrls: ['./service-car.component.scss']
})
export class ServiceCarComponent implements OnInit {
  @Input() car;

  constructor() { }

  ngOnInit() {
  }

  getClass() {
    return {
      'success': !this.car.isSold,
      'danger': this.car.isSold,
      'item': true
    }
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy';

    //this.car.isSold = type === 'buy' ? true : false;
  }

}
