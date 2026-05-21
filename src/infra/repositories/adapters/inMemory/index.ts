import { Repositories } from "@/src/domain/repositories";
import { InMemoryCityRepository } from "./InMemoryCityRepository";
import { InMemoryAuthUserRepository } from "./inMemoryAuthUserRepository";
import { InMemoryCategoryRepository } from "./inMemoryCategoryRepository";

export const InMemoryRepository: Repositories = {
  auth: new InMemoryAuthUserRepository(),
  city: new InMemoryCityRepository(),
  category: new InMemoryCategoryRepository(),
};
