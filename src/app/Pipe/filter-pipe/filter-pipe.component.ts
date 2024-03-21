import { Component, OnInit } from '@angular/core';
import { FilterPipeServiceService } from 'src/app/services/filter-pipe-service.service';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {
   users!: any;
   namesearch: string = '';

   
  constructor(private _filterPipeService: FilterPipeServiceService ) {}

  ngOnInit(): void {

    this._filterPipeService.getUsers().subscribe(res =>{
      console.log('users',res);
      this.users = res;
    })

  }


  
}
