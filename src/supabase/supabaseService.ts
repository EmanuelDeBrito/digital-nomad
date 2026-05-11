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
    const { data: cities } = await supabase
      .from("cities")
      .select("*")
      .ilike("name", `%${cityName}%`);

    if (!cities) {
      throw new Error("Cities not available, try again later");
    }

    return cities.map((city) => ({
      id: city.id,
      name: city.name,
      country: city.country,
      coverImage: `${storageUrl}/${city.cover_image}`,
    }));
  } catch (error) {
    throw error;
  }
};

export const supabaseService = {
  getAllCities,
};
