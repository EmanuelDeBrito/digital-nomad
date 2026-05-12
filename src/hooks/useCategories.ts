import { useEffect, useState } from "react";
import { supabaseService } from "../supabase/supabaseService";
import { Category } from "../types/category";

type UseCategoriesReturn = {
  categories: Category[];
  loading: boolean;
  error: unknown;
};

export const useCategories = (): UseCategoriesReturn => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const categoriesList = await supabaseService.getAllCategories();
      setCategories(categoriesList);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    categories: categories,
    loading: isLoading,
    error: error,
  };
};
