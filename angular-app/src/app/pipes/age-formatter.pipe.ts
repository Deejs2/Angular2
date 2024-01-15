import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFormatter'
})
export class AgeFormatterPipe implements PipeTransform {

  transform(value: number): string {
    return value+" years";
  }

}
