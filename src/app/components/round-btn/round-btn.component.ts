import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-round-btn',
  templateUrl: './round-btn.component.html',
  styleUrls: ['./round-btn.component.css']
})
export class RoundBtnComponent implements OnInit {

  @Input() text : string = "Button";
  @Input() onClick;
  constructor() { }

  ngOnInit(): void {
    console.log(this.text);
  }

}
