import { Category } from "./category";

export interface CategoryRepository {
  getAllCategories(): Promise<Category[]>;
}
