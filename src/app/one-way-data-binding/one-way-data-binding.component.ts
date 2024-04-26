import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  templateUrl: './one-way-data-binding.component.html',
  styleUrls: ['./one-way-data-binding.component.css']
})
export class OneWayDataBindingComponent implements OnInit {

  userName: string = 'Angular';
  cityName: string = 'Pune';
  Name: string = 'Ashwini';

  constructor() { }

  ngOnInit(): void {

  }
  UserName(res : any) {
        this.userName = res.target.value;
    }

    OnCity(name: any) {
      this.cityName = name;
      }

    onDisplay(event: any) {
      this.Name = event.target.value;
    }
}
