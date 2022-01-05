import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {CategoryType, CuisineType} from "../../shared/types";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { };
  showCategories = false;
  showCuisines = false;

  @Output() filter : EventEmitter<{name:string, category: CategoryType[], cuisine:CuisineType[] ,price:number}> =
    new EventEmitter<{name:string, category:CategoryType[], cuisine: CuisineType[], price:number}>();

  filteredCategories: CategoryType[] = [];
  filteredPrice: string = "150";
  filteredName: string = "";
  filteredCuisines: CuisineType[] = [];

  onCategoryChange(category:CategoryType):void{
    if(this.filteredCategories.includes(category))
      this.filteredCategories = this.filteredCategories.filter(c=>c!=category)
    else
      this.filteredCategories.push(category);

    this.emitFilter();
  }
  onCuisineChange(cuisine:CuisineType):void{
    if(this.filteredCuisines.includes(cuisine))
      this.filteredCuisines = this.filteredCuisines.filter(c=>c!=cuisine)
    else
      this.filteredCuisines.push(cuisine);

    this.emitFilter();
  }
  onPriceChange(e){
    this.filteredPrice = e.target.value;

    this.emitFilter();
  }
  onNameChange(e){
    this.filteredName = e.target.value;
    this.emitFilter();
  }
  emitFilter(){
    let f= { name: this.filteredName, category: this.filteredCategories , cuisine: this.filteredCuisines, price: parseInt(this.filteredPrice) }
    this.filter.emit(f);
  }

  ngOnInit(): void {
    this.filter.emit({name:"", category:[], cuisine:[], price:150});
  }

}
