import { Category, CategoryCode } from "../types/category";
import { CityPreview } from "../types/city";
import { supabase } from "./supabase";

const storageUrl = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL;

export type GetAllCitiesType = {
  cityName?: string;
  categoryId?: string | null;
};

const getAllCities = async ({
  cityName,
  categoryId,
}: GetAllCitiesType): Promise<CityPreview[]> => {
  try {
    const fields = "id, name, country, cover_image";
    let cities;

    if (categoryId) {
      const { data } = await supabase
        .from("cities_with_categories")
        .select(fields)
        .eq("category_id", categoryId)
        .ilike("name", `%${cityName}%`);

      cities = data;
    } else {
      const { data } = await supabase
        .from("cities")
        .select(fields)
        .ilike("name", `%${cityName}%`);

      cities = data;
    }

    if (!cities) {
      throw new Error("Cities not available, try again later");
    }

    return cities.map(
      (city) =>
        ({
          id: city.id,
          name: city.name,
          country: city.country,
          coverImage: `${storageUrl}/${city.cover_image}`,
        }) as CityPreview,
    );
  } catch (error) {
    throw error;
  }
};

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

export const supabaseService = {
  getAllCities,
  getAllCategories,
};
