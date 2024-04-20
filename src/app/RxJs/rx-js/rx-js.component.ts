import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime, filter, forkJoin, from, interval, map, of, take, takeLast } from 'rxjs';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})
export class RxJsComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    name: new FormControl()
  }) 
  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {

    // const myobs = new Observable<number>(observer =>{
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    // });

    // const doubleValues = myobs.pipe(
    //   map((value: number) => value * 2)
    // )
    //   doubleValues.subscribe(res =>{
    //     console.log('from rxjs component',res);
        
    //   })

    // we can create observable by using 'of' operator:

    const myCustomObs = of(1,2,3,4,5,6);

    // i want to filter even number so i will use the 'filter' operator:
   
    // const newObs = myCustomObs.pipe(
      
    //    filter(num => num % 2 === 0),
    //    map(num => num * 2)
    // )
   
    //   newObs.subscribe(res =>{
    //     console.log(res);
    //   })
   
   //take operator and interval operator: using take operator only take specified values.

  // const numbers = interval(1000);

  // const take10 = numbers.pipe(
  //     take(10)
  //   )    

  //  take10.subscribe(res =>{

  //   console.log('from interval',res);

  //   });


  //takelast operator : used to only the last n values emitted by the observable before it completes.

// const courses = ['ANgular','java','sql','js','html'];

// const myObs = from(courses);

//  myObs.pipe(
     
//    takeLast(2)
//   ). subscribe (res =>{
//     console.log('takelast 2',res); // js, html
// });

    this.myForm.valueChanges.pipe(debounceTime(5000))
    .subscribe(res =>{
      console.log(res);
      
    })


    // use forkjoin for avoiding nested subscription so access methods from demoservice

    const reqPosts : Observable<any> = this._demoService.getPosts();

    const reqUsers : Observable<any> = this._demoService.getUsers();

    const combineData = forkJoin([reqPosts,reqUsers]);

    combineData.subscribe(data =>{
      console.log('forkJoin',data);
      
    })

    }

}
