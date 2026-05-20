import { useFetchData } from "@/src/hooks/useFetchData";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";

export const useRelatedCities = (cityId: string) => {
  const { city } = useRepositoryContext();

  return useFetchData(() => city.getRelatedCities(cityId));
};
