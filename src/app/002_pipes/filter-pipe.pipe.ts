import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(carList, searchPipe, fieldName): any {

    if (carList.length === 0 || searchPipe === ''){
      return carList;
    }

    //return carList.filter(c => c.name === searchPipe);
    //return carList.filter(c => c.name.toLowerCase().indexOf(searchPipe.toLowerCase()) !== -1);
    return carList.filter(c => c[fieldName].toLowerCase().indexOf(searchPipe.toLowerCase()) !== -1);
  }
}
