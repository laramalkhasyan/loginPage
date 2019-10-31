import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardNumberDirective {
  el = this.elementRef.nativeElement;
  counter =0
  constructor(private elementRef: ElementRef) { }

  @HostListener('keyup', ['$event.target.value'])
  onKey(value) {    
    if(value) {
      this.counter++      
      if(this.counter%4==0){
        this.el.value +=" "
        this.counter=0
      }      
    }
  }
}



