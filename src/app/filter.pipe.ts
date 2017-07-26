import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, term: any): any {
    // do nothing if no value added
    if (term === undefined) {
      return items;
    }
    return items.filter(function(item){
      return item.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
