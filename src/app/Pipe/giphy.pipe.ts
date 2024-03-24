import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'giphy'
})
export class GiphyPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    
    return items.filter(function(search : any){
      return search.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });
  }

}
