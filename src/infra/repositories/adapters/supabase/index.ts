import { Repositories } from "@/src/domain/repositories";
import { InMemoryAuthUserRepository } from "../inMemory/inMemoryAuthUserRepository";
import { SupabaseCategoryRepository } from "./supabaseCategoryRepository";
import { SupabaseCityRepository } from "./supabaseCityRepository";

export const SupabeseRepository: Repositories = {
  auth: new InMemoryAuthUserRepository(), // Replace with SUPABASE AUTH implementation
  city: SupabaseCityRepository,
  category: SupabaseCategoryRepository,
};
