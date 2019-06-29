import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FiltroPipe implements PipeTransform {

  transform(items: any, arg: any): any {
    if (arg === '' || arg.length < 3) return items;

    const resultProd = [];

    for (const prod of items) {
      if (prod.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultProd.push(prod);
      }
    }

    return resultProd;
  }

}