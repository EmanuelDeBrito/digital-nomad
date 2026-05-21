import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";

export const useCity = (cityId: string) => {
  const { city } = useRepositoryContext();

  return useAppQuery(() => city.getCityById(cityId));
};
