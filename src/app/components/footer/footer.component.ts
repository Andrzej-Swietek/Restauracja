import { Component, OnInit } from '@angular/core';
import { faMobile, faMailBulk } from "@fortawesome/free-solid-svg-icons/";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faMobile = faMobile;
  faMail = faMailBulk
  constructor() { }

  ngOnInit(): void {
  }

}
