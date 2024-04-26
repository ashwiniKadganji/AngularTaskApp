import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

    firstname : string = 'Ashwini';
    lastName : string = 'Kadganji';

    data: any =
      {
        name: 'renu',
         id:1
      }
     
 isSubmitted = false;
 imageUrl = 'https://tse2.mm.bing.net/th?id=OIP.N2Pvy1PLEMrUWVZ6JDdLYAHaEo&pid=Api&P=0&h=180';


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('show event binding data');
    
    }

}
