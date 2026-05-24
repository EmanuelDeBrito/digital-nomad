import { Repositories } from "@/src/domain/repositories";
import { SupabaseAuthRepository } from "./supabaseAuthRepository";
import { SupabaseCategoryRepository } from "./supabaseCategoryRepository";
import { SupabaseCityRepository } from "./supabaseCityRepository";

export const SupabaseRepository: Repositories = {
  auth: SupabaseAuthRepository,
  city: SupabaseCityRepository,
  category: SupabaseCategoryRepository,
};
