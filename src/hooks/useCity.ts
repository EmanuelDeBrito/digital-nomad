import { supabaseService } from "../supabase/supabaseService";
import { useFetchData } from "./useFetchData";

export const useCity = (cityId: string) => {
  return useFetchData(() => supabaseService.getCityById(cityId));
};
