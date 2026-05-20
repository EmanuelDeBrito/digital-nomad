import { Repositories } from "@/src/domain/repositories";
import { InMemoryCityRepository } from "./InMemoryCityRepository";

export const InMemoryRepository: Repositories = {
  city: new InMemoryCityRepository(),
};
