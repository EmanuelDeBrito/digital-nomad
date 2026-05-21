import { Category } from "@/src/domain/category/category";
import { CategoryRepository } from "@/src/domain/category/categoryRepository";
import { categories } from "./data/categories";

export class InMemoryCategoryRepository implements CategoryRepository {
  async getAllCategories(): Promise<Category[]> {
    return categories;
  }
}
