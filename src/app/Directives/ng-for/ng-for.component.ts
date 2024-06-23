import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  movie : Movie[] =[
    {title: 'Kantara', director  : 'Karan', cast :  'Rhishi', releaseDate: '12/2024'},
    {title: 'Kantara', director  : 'Karan', cast :  'Rhishi', releaseDate: '12/2024'},
    {title: 'Kantara', director  : 'Karan', cast :  'Rhishi', releaseDate: '12/2024'},
    {title: 'Kantara', director  : 'Karan', cast :  'Rhishi', releaseDate: '12/2024'},
    {title: 'Kantara', director  : 'Karan', cast :  'Rhishi', releaseDate: '12/2024'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
