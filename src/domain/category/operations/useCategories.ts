import { useAppQuery } from "@/src/infra/operations/useAppQuery";
import { useRepositoryContext } from "@/src/infra/repositories/repository-provider";

export const useCategories = () => {
  const { category } = useRepositoryContext();

  return useAppQuery(() => category.getAllCategories());
};
