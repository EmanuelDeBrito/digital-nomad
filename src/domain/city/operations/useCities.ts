import { useFetchData } from "@/src/hooks/useFetchData";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";
import { GetAllCitiesType } from "../cityRepository";

export const useCities = (filters: GetAllCitiesType) => {
  const { city } = useRepositoryContext();

  return useFetchData(
    () => city.getAllCities(filters),
    [filters.cityName, filters.categoryId],
  );
};
