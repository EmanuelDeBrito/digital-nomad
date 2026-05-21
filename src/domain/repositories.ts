import { CategoryRepository } from "./category/categoryRepository";
import { CityRepository } from "./city/cityRepository";

export type Repositories = {
  city: CityRepository;
  category: CategoryRepository;
};
