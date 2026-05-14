import { supabaseService } from "../supabase/supabaseService";
import { useFetchData } from "./useFetchData";

export const useCategories = () => {
  return useFetchData(() => supabaseService.getAllCategories());
};
