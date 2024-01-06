import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nepaliNumberFormatter'
})
export class NepaliNumberFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
