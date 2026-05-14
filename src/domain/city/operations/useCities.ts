import { useFetchData } from "@/src/hooks/useFetchData";
import { CityRepository, GetAllCitiesType } from "../cityRepository";

export const useCities = (
  repository: CityRepository,
  filters: GetAllCitiesType,
) => {
  return useFetchData(
    () => repository.getAllCities(filters),
    [filters.cityName, filters.categoryId],
  );
};
