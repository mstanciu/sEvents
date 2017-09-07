import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[passLength]'
})
export class PassLengthDirective {

  constructor(private element: ElementRef) { }

  counter = 0;
  @Input() passLength: boolean;
  
  @HostListener('keydown', ['$event']) onkeydown(event) {
    let e = <KeyboardEvent>event;
    if (this.passLength) {
      this.counter +=1;
      if(this.counter < 6) {
        console.log('aici');  
        return false;
      }
    }
  }
}
