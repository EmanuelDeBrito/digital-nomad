import { UserAuthRepository } from "./auth/userAuthRepository";
import { CategoryRepository } from "./category/categoryRepository";
import { CityRepository } from "./city/cityRepository";

export type Repositories = {
  auth: UserAuthRepository;
  city: CityRepository;
  category: CategoryRepository;
};
