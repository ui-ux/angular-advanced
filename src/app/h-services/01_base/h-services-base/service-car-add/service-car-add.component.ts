import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-service-car-add',
  templateUrl: './service-car-add.component.html',
  styleUrls: ['./service-car-add.component.scss']
})
export class ServiceCarAddComponent implements OnInit {
  @Output() onCarAdd = new EventEmitter<String>();
  carName = '';

  constructor() { }

  ngOnInit() {
  }

  addCar() {
    this.onCarAdd.emit(this.carName);
    this.carName = '';
  }

}
