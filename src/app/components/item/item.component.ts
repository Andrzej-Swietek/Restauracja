import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../store/models/product.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: ProductModel;
  constructor() { }

  ngOnInit(): void {
  }

}
