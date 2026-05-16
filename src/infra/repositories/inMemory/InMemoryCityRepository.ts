import { cities } from "@/src/data/cities";
import { City, CityPreview } from "@/src/domain/city/city";
import {
  CityRepository,
  GetAllCitiesType,
} from "@/src/domain/city/cityRepository";

export class InMemoryCityRepository implements CityRepository {
  async getAllCities({
    cityName,
    categoryId,
  }: GetAllCitiesType): Promise<CityPreview[]> {
    return cities;
  }

  getRelatedCities(cityId: string): Promise<CityPreview[]> {
    throw new Error("Not found");
  }

  getCityById(cityId: string): Promise<City> {
    throw new Error("Not found");
  }
}
