import { cities } from "../data/cities";
import { CityPreview } from "../types/city";

export const useRelatedCities = (relatedCitiesIds: string[]): CityPreview[] => {
  const relatedCities = cities.filter((city) =>
    relatedCitiesIds.includes(city.id),
  );

  return relatedCities;
};
