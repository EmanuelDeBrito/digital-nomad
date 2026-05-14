import { GetAllCitiesType, supabaseService } from "../supabase/supabaseService";
import { useFetchData } from "./useFetchData";

export const useCities = ({ cityName, categoryId }: GetAllCitiesType) => {
  return useFetchData(
    () => supabaseService.getAllCities({ cityName, categoryId }),
    [cityName, categoryId],
  );
};
