import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basePipe'
})
export class BasePipePipe implements PipeTransform {

  transform(value: number, powNumber: number = 1, varString: string = ''): any {

    return varString + Math.pow(value, powNumber);
  }

}
