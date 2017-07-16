import { Pipe, PipeTransform } from '@angular/core';

import {DateFormattingType} from '../models/date-formatting-type.model'

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: DateFormattingType[], args: string[]): any {
   console.log('transform');
    if(!value || !args)
      return value;
    let filter = args[0].toLocaleLowerCase();

    return filter ? value.filter(item => item.name.toLocaleLowerCase().indexOf(filter) != -1): value;
    
  }

}
