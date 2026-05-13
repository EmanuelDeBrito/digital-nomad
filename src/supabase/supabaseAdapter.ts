// Este arquivo tem como função transformar os dados que vêm da API para os types do nosso projeto

import { Category, CategoryCode } from "../types/category";
import { City, TouristAttraction } from "../types/city";
import { Database } from "./types";

export const storageUrl = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL;

type CitiesWithFullInfoRow =
  Database["public"]["Views"]["cities_with_full_info"]["Row"];

type CategoryRow = Database["public"]["Tables"]["categories"]["Row"];

type TouristAttractionRow =
  Database["public"]["Tables"]["tourist_attractions"]["Row"];

export const toCity = (data: CitiesWithFullInfoRow): City => {
  const touristAttractions = data.tourist_attractions as TouristAttractionRow[];
  const categories = data.categories as CategoryRow[];

  return {
    id: data.id as string,
    name: data.name as string,
    country: data.country as string,
    coverImage: `${storageUrl}/${data.cover_image}`,
    description: data.description as string,
    location: {
      latitude: data.latitude as number,
      longitude: data.longitude as number,
    },
    touristAttractions: touristAttractions.map(toTouristAttraction),
    categories: categories.map(toCategory),
  };
};

export const toCategory = (row: CategoryRow): Category => {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    code: row.code as CategoryCode,
  };
};

export const toTouristAttraction = (
  row: TouristAttractionRow,
): TouristAttraction => {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    cityId: row.city_id as string,
  };
};

export const supabaseAdapter = {
  toCity,
};
