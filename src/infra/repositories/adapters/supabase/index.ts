import { Repositories } from "@/src/domain/repositories";
import { SupabaseCategoryRepository } from "./supabaseCategoryRepository";
import { SupabaseCityRepository } from "./supabaseCityRepository";

export const SupabeseRepository: Repositories = {
  city: SupabaseCityRepository,
  category: SupabaseCategoryRepository,
};
