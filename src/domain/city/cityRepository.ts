import { City, CityPreview } from "./city";

export type GetAllCitiesType = {
  cityName?: string;
  categoryId?: string | null;
};

export interface CityRepository {
  getAllCities({
    cityName,
    categoryId,
  }: GetAllCitiesType): Promise<CityPreview[]>;
  getRelatedCities(cityId: string): Promise<CityPreview[]>;
  getCityById(cityId: string): Promise<City>;
}
