import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";
import { GetAllCitiesType } from "../cityRepository";

export const useCities = (filters: GetAllCitiesType) => {
  const { city } = useRepositoryContext();

  return useAppQuery(
    () => city.getAllCities(filters),
    [filters.cityName, filters.categoryId],
  );
};
