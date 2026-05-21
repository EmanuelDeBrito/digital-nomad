import { City, CityPreview } from "@/src/domain/city/city";
import {
  CityRepository,
  GetAllCitiesType,
} from "@/src/domain/city/cityRepository";
import { supabase } from "./supabase";
import { supabaseAdapter } from "./supabaseAdapter";

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

    return cities.map(supabaseAdapter.toCityPreview);
  } catch (error) {
    throw error;
  }
};

const getRelatedCities = async (cityId: string): Promise<CityPreview[]> => {
  try {
    const { data } = await supabase
      .from("related_cities")
      .select("*")
      .eq("source_city_id", cityId)
      .throwOnError();

    return data.map(supabaseAdapter.toCityPreview);
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

export const SupabaseCityRepository: CityRepository = {
  getAllCities,
  getRelatedCities,
  getCityById,
};
