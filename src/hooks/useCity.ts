import { useEffect, useState } from "react";
import { supabaseService } from "../supabase/supabaseService";
import { City } from "../types/city";

type UseCityReturn = {
  city?: City;
  loading: boolean;
  error: unknown;
};

export const useCity = (cityId: string): UseCityReturn => {
  const [city, setCity] = useState<City>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const searchedCity = await supabaseService.getCityById(cityId);
      setCity(searchedCity);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    city: city,
    loading: isLoading,
    error: error,
  };
};
