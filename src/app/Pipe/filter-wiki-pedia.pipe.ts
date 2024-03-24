import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterWikiPedia'
})
export class FilterWikiPediaPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    // it checks if either items or searchText is falsy, in which case it returns the original array.
    // if (!items || !searchText) {
    //   return items;
    // }
    
    // //It converts the searchText to lowercase for case-insensitive matching
    // searchText = searchText.toLowerCase();

    // //
    // return items.filter(item => {
    //   return item.title.toLowerCase().includes(searchText);

      
    return items.filter(function(search: any){
      return search.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1

     });
  }

}
