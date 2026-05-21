import { Repositories } from "@/src/domain/repositories";
import { InMemoryCityRepository } from "./InMemoryCityRepository";
import { InMemoryCategoryRepository } from "./inMemoryCategoryRepository";

export const InMemoryRepository: Repositories = {
  city: new InMemoryCityRepository(),
  category: new InMemoryCategoryRepository(),
};
