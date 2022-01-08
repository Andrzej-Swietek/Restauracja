import {Pipe, PipeTransform} from "@angular/core";
import {ProductModel} from "../../store/models/product.model";
import {CategoryType, CuisineType} from "../types";

@Pipe({
  name:'itemFilter'
})
export class itemFilterPipe implements PipeTransform{
  categoryFilter(filterCategory:CategoryType[], itemCategory:CategoryType[]):boolean{
    let result = false;
    filterCategory.forEach((v)=> {
      if(itemCategory.includes(v))
        result = true;
    })
    return result;
  }

  transform(items: ProductModel[], filter:{name:string, price:number, cuisine:CuisineType[], category:CategoryType[]}): ProductModel[] {
    return items.filter(item =>
      ((item.name.includes(filter.name)) && (this.categoryFilter(filter.category, item.category) || filter.category.length == 0)

      && (filter.cuisine.includes(item.cuisine) || filter.cuisine.length==0) && filter.price >= item.price ))
  }
}
