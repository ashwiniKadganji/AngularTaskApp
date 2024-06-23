import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  constructor(private el: ElementRef) {

    el.nativeElement.style.backgroundColor = 'yellow';
   }

}
