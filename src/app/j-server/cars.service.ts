import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getCars() {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    return this.http.get('http://localhost:3000/cars', {
      headers: headers
    })
      .catch((error: Response) => {
        return Observable.throwError('Сервер недоступен. Попробуйте позже.');
      });
  }

  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue'
    };
    return this.http.post('http://localhost:3000/cars', data);
/*      .map((response: Response) => response.json());*/
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`);
  }
}
