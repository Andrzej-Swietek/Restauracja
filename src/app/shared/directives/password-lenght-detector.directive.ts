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
      this.el.nativeElement.style.backgroundColor = 'red'
    } else if(count >= 5 && count <= 10) {
      this.el.nativeElement.style.backgroundColor = 'green'
    } else if(count > 10) {
      this.el.nativeElement.style.backgroundColor = 'purple'
    }
  }

}
