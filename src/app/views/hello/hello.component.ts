import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faTrash } from "@fortawesome/free-solid-svg-icons/";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  faPhone: IconDefinition = faPhone
  faEmail: IconDefinition = faEnvelope
  constructor() { }

  ngOnInit(): void {
  }

}
