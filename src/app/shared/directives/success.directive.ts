import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appSuccess]'
})
export class SuccessDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'var(--success)'
  }

}
