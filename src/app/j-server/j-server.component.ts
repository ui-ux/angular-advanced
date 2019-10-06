import { Component } from '@angular/core';
import {CarsService} from "./cars.service";

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-j-server',
  templateUrl: './j-server.component.html',
  styleUrls: ['./j-server.component.scss']
})
export class JServerComponent {
  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'grey'
  ];
  //cars: Cars[] = [];
  cars: any;
  carName: string = '';

  constructor(private carsService: CarsService) { }

/*  loadCars() {
    this.carsService.getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
        console.log(cars);
      },
        (error) => {
          alert(error);
        });
  }*/

  loadCars() {
    this.cars = this.carsService.getCars();
    console.log(this.cars);
  }

  addCar() {
    this.carsService
      .addCar(this.carName)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteCar(car: Cars) {
    this.carsService.deleteCar(car)
      .subscribe((data) => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }

}
