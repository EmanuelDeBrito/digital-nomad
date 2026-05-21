// Este arquivo tem como função transformar os dados que vêm da API para os types do nosso projeto

import { Category, CategoryCode } from "@/src/domain/category/category";
import { City, CityPreview, TouristAttraction } from "@/src/domain/city/city";
import { Database } from "./types";

export const storageUrl = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL;

type CitiesWithFullInfoRow =
  Database["public"]["Views"]["cities_with_full_info"]["Row"];

type CategoryRow = Database["public"]["Tables"]["categories"]["Row"];

type TouristAttractionRow =
  Database["public"]["Tables"]["tourist_attractions"]["Row"];

type CityPreviewRow = {
  id: string | null;
  name: string | null;
  country: string | null;
  cover_image: string | null;
};

const toCity = (data: CitiesWithFullInfoRow): City => {
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

const toCityPreview = (row: CityPreviewRow): CityPreview => {
  return {
    id: row.id,
    name: row.name,
    country: row.country,
    coverImage: `${storageUrl}/${row.cover_image}`,
  } as CityPreview;
};

const toCategory = (row: CategoryRow): Category => {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    code: row.code as CategoryCode,
  };
};

const toTouristAttraction = (row: TouristAttractionRow): TouristAttraction => {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    cityId: row.city_id as string,
  };
};

export const supabaseAdapter = {
  toCity,
  toCityPreview,
};
