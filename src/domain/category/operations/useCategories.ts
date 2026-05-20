import { useFetchData } from "@/src/hooks/useFetchData";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";

export const useCategories = () => {
  const { category } = useRepositoryContext();

  return useFetchData(() => category.getAllCategories());
};
