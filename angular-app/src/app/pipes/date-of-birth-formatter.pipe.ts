import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOfBirthFormatter'
})
export class DateOfBirthFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
