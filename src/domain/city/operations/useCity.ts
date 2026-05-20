import { useFetchData } from "@/src/hooks/useFetchData";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";

export const useCity = (cityId: string) => {
  const { city } = useRepositoryContext();

  return useFetchData(() => city.getCityById(cityId));
};
