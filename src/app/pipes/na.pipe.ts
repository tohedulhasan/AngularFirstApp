import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (value !== null && value !== undefined && value !== '') {
      return value;
    } else {
      return 'N/A';
    }

  }

}
