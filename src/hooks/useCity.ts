import { cities } from "../data/cities";

export const useCity = (id: string) => {
  let city = cities.find((item) => item.id === id);

  return city;
};
