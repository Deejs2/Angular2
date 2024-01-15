import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: string, fname: string, lname: string): string {
    const fullname = fname+" "+lname;
    return fullname;
  }

}
