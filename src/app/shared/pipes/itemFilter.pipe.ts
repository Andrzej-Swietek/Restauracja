import {Pipe, PipeTransform} from "@angular/core";
import {ProductModel} from "../../store/models/product.model";
import {CategoryType, CuisineType} from "../types";

@Pipe({
  name:'itemFilter'
})
export class itemFilterPipe implements PipeTransform{
  categoryFilter(filterCategory:CategoryType[], itemCategory:CategoryType[]):boolean{
    let result = false;
    filterCategory.forEach((v)=> itemCategory.includes(v) && (result=true))
    return result;
  }

  transform(items: ProductModel[], name:string,
              category:CategoryType[], cuisine:CuisineType[], price:number): ProductModel[] {
    return items.filter(item =>
      ((item.name.includes(name)) && (this.categoryFilter(category, item.category) || category.length == 0)

      && (cuisine.includes(item.cuisine) || cuisine.length==0) && price >= item.price ))
  }
}
