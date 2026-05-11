import { Category } from "./category";

export type TouristAttraction = {
  id: string;
  name: string;
  description: string;
  cityId: string;
};

export type City = {
  id: string;
  name: string;
  country: string;
  coverImage: number | string;
  description: string;
  categories: Category[];
  touristAttractions: TouristAttraction[];
  relatedCitiesIds: string[];
  location: {
    latitude: number;
    longitude: number;
  };
};

export type CityPreview = Pick<City, "id" | "name" | "country" | "coverImage">;
