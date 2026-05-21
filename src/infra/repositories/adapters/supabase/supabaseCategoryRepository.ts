import { Category, CategoryCode } from "@/src/domain/category/category";
import { CategoryRepository } from "@/src/domain/category/categoryRepository";
import { supabase } from "./supabase";

const getAllCategories = async (): Promise<Category[]> => {
  try {
    const { data, error } = await supabase.from("categories").select("*");

    if (error) {
      throw new Error("Error trying list categories");
    }

    return data.map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      code: category.code as CategoryCode,
    }));
  } catch (error) {
    throw error;
  }
};

export const SupabaseCategoryRepository: CategoryRepository = {
  getAllCategories,
};
