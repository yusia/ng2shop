import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy', pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(messArray: any[], value?): any {
 // get the first element

    let orderByValue = value;
    let byVal = 1;

 // check if exclamation point

    if (orderByValue.charAt(0) === '!') {

   byVal = -1;
   orderByValue = orderByValue.substring(1);
 }

    messArray.sort((a: any, b: any) => {
   if (a[orderByValue] < b[orderByValue]) {
     return -1 * byVal;
   } else if (a[orderByValue] > b[orderByValue]) {
     return 1 * byVal;
   } else {
     return 0;
   }
 });
    return messArray;
  }

}
