import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../003_services/data.service";

@Component({
  selector: 'app-h-services-base',
  templateUrl: './h-services-base.component.html',
  styleUrls: ['./h-services-base.component.scss']
})
export class HServicesBaseComponent implements OnInit {
  cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
  ];

  items: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getData();
  }

  addItem(name: string){
    this.dataService.addData(name);
  }



  addCarToList(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
  }

}
