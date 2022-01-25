import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-alert',
  templateUrl: './login-alert.component.html',
  styleUrls: ['./login-alert.component.css']
})
export class LoginAlertComponent implements OnInit {

  @Input() success: 'success'|'failure'|'nottaken';
  @Output() close : EventEmitter<any> = new EventEmitter();
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  goToMenu(){
    this.router.navigate(["/menu"]);
  }

  closeAlert() {
    this.close.emit();
  }

}
