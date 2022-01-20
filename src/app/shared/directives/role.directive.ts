import {Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective  {

  @Input('role') public role = '';
  constructor(private el: ElementRef) {
  }
  ngOnInit(){
    console.log(this.role)
    switch( this.role ){
      case 'admin':
        this.el.nativeElement.style.backgroundColor ="gold"
        break;
      case 'client':
        break;
      case 'manager':
        this.el.nativeElement.style.backgroundColor ="orange"
        break;
    }
  }
}
