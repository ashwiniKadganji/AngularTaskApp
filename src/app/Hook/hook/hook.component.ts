import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostlistServiceService } from 'src/app/services/postlist-service.service';


@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnChanges,
 OnInit,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy{
  
 @Input() formChild : any;
 @Input() fromParentColor : any ;
 @ContentChild('child', { static : false })
  contentChild!: ElementRef;
 @ViewChild('childhook', { static: false })
  viewChild!: ElementRef;
 counter : any;
 num : number = 1;
 subscription!: Subscription;


  constructor(private _PostlistServiceService: PostlistServiceService) { 
    console.log('HookComponent called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');

    clearInterval(this.counter);
    
    this.subscription.unsubscribe();
  }

  ngAfterViewChecked(): void {
    console.log(' ngAfterViewChecked called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color: ${this.fromParentColor}`);
  }

  ngAfterViewInit(): void {
    console.log(' ngAfterViewInit called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color: ${this.fromParentColor}`);
    
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called', this.contentChild);
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.fromParentColor}`);
  }

  ngAfterContentInit(): void {
    
    console.log('ngAfterContentInit called', this.contentChild);

    // this.contentChild.nativeElement.setAttribute('style','color: green');
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.fromParentColor}`);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
    
  }
  ngOnInit(): void {
    console.log('ngOnInit called',this.contentChild);

         this.subscription =  this._PostlistServiceService.getPost().subscribe(res =>{
          console.log(res);
          
        })


     this.counter = setInterval(() =>{
      this.num = this.num + 1;
       console.log(this.num);
       
     },1000)
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges called',this.formChild);
    
  }

 

}
