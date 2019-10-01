import { Injectable } from '@angular/core';
import { LogService } from "./log.service";

@Injectable ({
  providedIn: 'root'
})
export class DataService {

  constructor(private logService: LogService) { }

  private data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];

  getData(): string[] {
    this.logService.write("операция получения данных");
    return this.data;
  }

  addData(name: string){
    this.data.push(name);
    this.logService.write("операция добавления данных");
  }
}
