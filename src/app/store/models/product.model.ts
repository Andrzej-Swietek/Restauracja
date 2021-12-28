import {CategoryType, CuisineType} from "../../shared/types";

export interface ProductModel {
  id: number,
  name: string,
  price: number,
  quantity: number,
  gallery: string[],
  category: CategoryType[],
  cuisine: CuisineType,
  description: string,
  ingredients: string[],
  grade: number,
  numberOfGrades: number,
  comments: string[],
}
