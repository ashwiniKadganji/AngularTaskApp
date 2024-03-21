import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchTerm: any): any{
    console.log('Filter pipe',value);
    console.log('Search name',searchTerm);
  
    const filteredUser = value.filter(function(search: any){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });
  
   // Return "Data not found" message if no items match the search criteria
// Return a single item with the message if no items match the search criteria
   if (filteredUser.length === 0) {
    return [ {name: 'DATA NOT FOUND'}, { message: 'Data not found' }];
     }

      return filteredUser;
  }   

  
}
