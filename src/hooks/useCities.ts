import { cities } from "../data/cities";
import { CityPreview } from "../types/city";

type UseCitiesProps = {
  cityName?: string;
  categoryId?: string | null;
};

export const useCities = ({
  cityName,
  categoryId,
}: UseCitiesProps): { cityPreviewList: CityPreview[] } => {
  //console.log({ cityName, categoryId });

  let cityPreviewList = [...cities];

  if (cityName) {
    cityPreviewList = cityPreviewList.filter((city) => {
      return city.name.toLowerCase().includes(cityName.toLowerCase());
    });
  }

  if (categoryId) {
    cityPreviewList = cityPreviewList.filter((city) => {
      return city.categories.some((categories) => categories.id === categoryId);
    });
  }

  return { cityPreviewList };
};
