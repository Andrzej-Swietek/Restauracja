import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "./services/product-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'restauracja';

  constructor(private productService: ProductServiceService) {}
  ngOnInit(): void {
    this.productService.getProducts()
  }

}
