import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFormatter'
})
export class AgeFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
