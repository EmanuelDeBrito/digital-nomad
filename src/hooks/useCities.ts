import { cityPreviewList } from "../data/cities";

export const useCities = (cityName: string, categoryId: string | null) => {
  console.log({ cityName, categoryId });

  return { cityPreviewList };
};
