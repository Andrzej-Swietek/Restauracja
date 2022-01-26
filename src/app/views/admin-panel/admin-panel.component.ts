import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../../services/product-service.service";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  addProductForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private productService: ProductServiceService, private store: Store){ }

  showGeneral: boolean = true;
  showGallery: boolean = false;
  showDescription: boolean = false;
  showCategories: boolean = false;
  showCuisines: boolean = false;

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(24),
        Validators.pattern('[a-zA-Z0-9_._ ]*')
      ]],
      price: ['0.00', [
        Validators.required,
        Validators.maxLength(24),
        Validators.pattern('[0-9_.]*')
      ]],
      quantity: ['0.00', [
        Validators.required,
        Validators.maxLength(24),
        Validators.pattern('[0-9_.]*')
      ]],
      photo1: ['', [
        Validators.required,
      ]],
      photo2: ['', [
        Validators.required,
      ]],
      photo3: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]],
      ingredients:['', [
        Validators.required,
      ]]
    })
  }

  save = ():void => {
    alert( 'Product Saved' );
    let maxId: number;
    this.store.select( state => state.products.products).subscribe( data => {
      data.forEach( item => { if ( maxId < item.id )  maxId = item.id; })
    });

    this.productService.addProduct({
      id: maxId+1,
      name: this.addProductForm.get("name").value,
      price: parseInt( this.addProductForm.get("price").value ),
      quantity: parseInt( this.addProductForm.get("quantity").value ),
      gallery: [ this.addProductForm.get("photo1").value, this.addProductForm.get("photo2").value, this.addProductForm.get("photo3").value ],
      description: this.addProductForm.get("description").value,
      ingredients: this.addProductForm.get("ingredients").value.split(',')
    }).subscribe( d=> console.log(d) );
  }

  toggleCategory = ():void => {
    this.showCategories=!this.showCategories
  }

  toggleCuisines = ():void => {
    this.showCuisines=!this.showCuisines
  }

  toggleGeneral() { this.showGeneral = !this.showGeneral; this.showDescription = false; this.showGallery = false; }
  toggleGallery(){ this.showGallery = !this.showGallery; this.showDescription = false; this.showGeneral = false; }
  toggleDescription(){ this.showDescription = !this.showDescription; this.showGallery = false; this.showGeneral = false; }
}
