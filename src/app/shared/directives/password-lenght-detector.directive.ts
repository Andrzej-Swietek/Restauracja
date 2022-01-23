import {
  Directive,
  ElementRef,
  OnChanges,
  HostListener
} from "@angular/core";

@Directive({
  selector: '[appPasswordLengthDetector]'
})
export class PasswordLengthDetectorDirective implements OnChanges{

  constructor(private el: ElementRef) { }

  // Listen for keyup event and change background color
  @HostListener("window:keyup") ngOnChanges(event) {
    let count = this.el.nativeElement.value.length
    console.log(this.el.nativeElement.value.length);
    if(count < 5) {
      this.el.nativeElement.style.backgroundColor = '#dc35455d'
    } else if(count >= 8 && count <= 15) {
      this.el.nativeElement.style.backgroundColor = '#1987545d'
    } else if(count > 15) {
      this.el.nativeElement.style.backgroundColor = 'rgba(124, 58, 237,.5)'
    }
  }

}
