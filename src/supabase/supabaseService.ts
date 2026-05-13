import { Category, CategoryCode } from "../types/category";
import { City, CityPreview } from "../types/city";
import { supabase } from "./supabase";
import { storageUrl, supabaseAdapter } from "./supabaseAdapter";

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

const getCityById = async (cityId: string): Promise<City> => {
  try {
    const { data, error } = await supabase
      .from("cities_with_full_info")
      .select("*")
      .eq("id", cityId)
      .single();

    if (error) {
      throw new Error("City not found");
    }

    return supabaseAdapter.toCity(data);
  } catch (error) {
    throw error;
  }
};

export const supabaseService = {
  getAllCities,
  getAllCategories,
  getCityById,
};
