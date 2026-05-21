import { City, CityPreview } from "@/src/domain/city/city";
import {
  CityRepository,
  GetAllCitiesType,
} from "@/src/domain/city/cityRepository";
import { cities } from "./data/cities";

export class InMemoryCityRepository implements CityRepository {
  async getAllCities({
    cityName,
    categoryId,
  }: GetAllCitiesType): Promise<CityPreview[]> {
    let cityPreviewList = [...cities];

    if (cityName) {
      cityPreviewList = cityPreviewList.filter((city) => {
        return city.name.toLowerCase().includes(cityName.toLowerCase());
      });
    }

    if (categoryId) {
      cityPreviewList = cityPreviewList.filter((city) => {
        return city.categories.some((category) => category.id === categoryId);
      });
    }

    return cityPreviewList;
  }

  async getRelatedCities(cityId: string): Promise<CityPreview[]> {
    const city = cities.find((city) => city.id === cityId);

    const relatedCities = cities.filter((item) =>
      city?.relatedCitiesIds.includes(item.id),
    );

    return relatedCities;
  }

  async getCityById(cityId: string): Promise<City> {
    const city = cities.find((city) => city.id === cityId);

    if (!city) {
      throw new Error("City not found");
    }

    return city;
  }
}
