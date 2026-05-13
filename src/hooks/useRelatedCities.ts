import { supabaseService } from "../supabase/supabaseService";
import { useFetchData } from "./useFetchData";

export const useRelatedCities = (cityId: string) => {
  return useFetchData(() => supabaseService.getRelatedCities(cityId));
};
