import { useEffect, useState } from "react";
import { supabaseService } from "../supabase/supabaseService";
import { CityPreview } from "../types/city";

type UseCitiesProps = {
  cityName?: string;
  categoryId?: string | null;
};

type UseCitiesReturn = {
  cityPreviewList: CityPreview[];
  loading: boolean;
  error: unknown;
};

export const useCities = ({
  cityName,
  categoryId,
}: UseCitiesProps): UseCitiesReturn => {
  const [cities, setCities] = useState<CityPreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const cities = await supabaseService.getAllCities();
      setCities(cities);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    cityPreviewList: cities,
    loading: isLoading,
    error: error,
  };
};

// let cityPreviewList = [...cities];

// if (cityName) {
//   cityPreviewList = cityPreviewList.filter((city) => {
//     return city.name.toLowerCase().includes(cityName.toLowerCase());
//   });
// }

// if (categoryId) {
//   cityPreviewList = cityPreviewList.filter((city) => {
//     return city.categories.some((categories) => categories.id === categoryId);
//   });
// }
