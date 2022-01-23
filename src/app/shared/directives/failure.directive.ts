import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFailure]'
})
export class FailureDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'var(--danger)'
  }

}
