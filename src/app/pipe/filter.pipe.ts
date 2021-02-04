import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../shared/product.service';
import {Observable} from "rxjs";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], args?: any[]): any[] {
    debugger
    if (!args[0] || !args[1]) {
      return list;
    }
    var result = list.filter(itme=> itme[args[0]].indexOf(args[1]) > 0);
    return result;
  }

}
