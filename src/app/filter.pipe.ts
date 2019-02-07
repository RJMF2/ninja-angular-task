import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(x: any, term: any): any {
    if(term === undefined) return x;

    return x.filter(function(ninja){
      return ninja.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
