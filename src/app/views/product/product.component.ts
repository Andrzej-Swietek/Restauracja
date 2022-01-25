import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngxs/store";
import {ProductModel} from "../../store/models/product.model";
import {Observable} from "rxjs";
import {faUser,  faStar, faChevronLeft, faChevronRight, faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private store: Store) { }
  public id: number;
  public product$: ProductModel;
  faUser = faUser;
  faStar = faStar;
  faArrow = faArrowAltCircleLeft;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  public imageId: number = 0;



  ngOnInit(): void {
    this.route.params.subscribe( (params:any) => {
      this.id = parseInt( params["id"] );
      this.store.select( state => state.products.products).subscribe( data => {
        this.product$ = data.filter( e => e.id == this.id )[0]
      })
    })
  }
  changeImage(direction: 'left'|'right') {
    if (direction=='left') {
      this.imageId--;
      if ( this.imageId < 0 ) this.imageId = this.product$.gallery.length-1;
    } else {
      this.imageId++;
      if ( this.imageId > this.product$.gallery.length-1 ) this.imageId = 0;
    }
  }
  goBack(){
    this.router.navigate(['/menu'])
  }
}
