import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";

export const useRelatedCities = (cityId: string) => {
  const { city } = useRepositoryContext();

  return useAppQuery(() => city.getRelatedCities(cityId));
};
